// /api/admin/blog/route.ts
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import BlogPost from "@/lib/models/BlogPost";
import { BlogPostLean } from "@/lib/types";

// ================= GET =================
export async function GET() {
  try {
    await connectDB();

    const posts = await BlogPost.find({})
      .sort({ created_at: -1 })
      .lean<BlogPostLean[]>();

    return NextResponse.json({
      posts: posts.map((post) => ({
        ...post,
        id: post._id.toString(),
        _id: undefined,
      })),
      total: posts.length,
    });
  } catch (error) {
    console.error("Admin blog API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}

// ================= POST =================
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    const slug = body.slug
      ? body.slug.toLowerCase().replace(/[^a-z0-9]+/g, "-")
      : body.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    const newPost = await BlogPost.create({
      ...body,
      slug,
      published_at: body.published_at ? new Date(body.published_at) : new Date(),
      scheduled_at: body.scheduled_at ? new Date(body.scheduled_at) : null,
    });

    return NextResponse.json(
      {
        ...newPost.toObject(),
        id: newPost._id.toString(),
        _id: undefined,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create post error:", error);
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 }
    );
  }
}
