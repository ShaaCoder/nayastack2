import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import BlogPost from "@/lib/models/BlogPost";
import { BlogPostLean } from "@/lib/types";

export const dynamic = "force-dynamic";

/* ─────────────── GET  /api/blog  ─────────────── */
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";

    const query: any = { status: "published" };

    if (search) query.$text = { $search: search };
    if (category && category !== "all") query.category = category;

    const skip = (page - 1) * limit;

    const posts = await BlogPost.find(query)
      .sort({ published_at: -1 })
      .skip(skip)
      .limit(limit)
      .lean<BlogPostLean[]>();

    const totalPosts = await BlogPost.countDocuments(query);
    const totalPages = Math.ceil(totalPosts / limit);

    return NextResponse.json({
      posts: posts.map((post) => ({
        ...post,
        id: post._id.toString(),
        published_at: post.published_at instanceof Date
          ? post.published_at.toISOString()
          : post.published_at,
        created_at: post.created_at instanceof Date
          ? post.created_at.toISOString()
          : post.created_at,
        updated_at: post.updated_at instanceof Date
          ? post.updated_at.toISOString()
          : post.updated_at,
        _id: undefined,
      })),
      pagination: {
        currentPage: page,
        totalPages,
        totalPosts,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    });
  } catch (err) {
    console.error("Blog API GET error:", err);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}

/* ─────────────── POST  /api/blog  ─────────────── */
export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();

    const {
      title,
      excerpt,
      content,
      author,
      category,
      slug,
      status,
      published_at,
      scheduled_at,
      tags = [],
      image_url,

      // NEW SEO + WP FIELDS
      meta_title,
      meta_description,
      canonical_url,
      og_title,
      og_description,
      og_image,
      twitter_card,
      structured_data,
      featured,
      pinned,
    } = body;

    /* REQUIRED FIELDS VALIDATION */
    if (!title || !excerpt || !content || !author || !category || !status) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Auto-generate slug if missing
    const finalSlug =
      slug?.trim().length > 0
        ? slug.toLowerCase().replace(/[^a-z0-9]+/g, "-")
        : title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    // Prevent duplicate slugs
    if (await BlogPost.findOne({ slug: finalSlug })) {
      return NextResponse.json(
        { error: "Slug already exists" },
        { status: 409 }
      );
    }

    const newPost = await BlogPost.create({
      title,
      excerpt,
      content,
      author,
      category,
      slug: finalSlug,
      status,

      published_at: published_at ? new Date(published_at) : new Date(),
      scheduled_at: scheduled_at ? new Date(scheduled_at) : null,

      tags,
      image_url,

      // SEO
      meta_title,
      meta_description,
      canonical_url,
      og_title,
      og_description,
      og_image,
      twitter_card,
      structured_data,

      // WP enhancements
      featured: featured || false,
      pinned: pinned || false,
    });

    return NextResponse.json(
      {
        message: "Post created successfully",
        post: {
          ...newPost.toObject(),
          id: newPost._id.toString(),
          _id: undefined,
          created_at: newPost.created_at.toISOString(),
          updated_at: newPost.updated_at.toISOString(),
          published_at: newPost.published_at.toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Blog API POST error:", err);
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 }
    );
  }
}
