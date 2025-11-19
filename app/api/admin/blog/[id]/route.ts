import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import BlogPost from "@/lib/models/BlogPost";
import { BlogPostLean } from "@/lib/types";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const id = params.id; // ✅ Correct way
    const body = await req.json();

    const slug = body.slug
      ? body.slug.toLowerCase().replace(/[^a-z0-9]+/g, "-")
      : body.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    // Check slug conflict except own ID
    const exists = await BlogPost.findOne({ slug, _id: { $ne: id } });
    if (exists)
      return NextResponse.json(
        { error: "Slug already exists" },
        { status: 409 }
      );

    const updatedPost = await BlogPost.findByIdAndUpdate(
      id,
      {
        ...body,
        slug,
        published_at: body.published_at
          ? new Date(body.published_at)
          : new Date(),
        scheduled_at: body.scheduled_at
          ? new Date(body.scheduled_at)
          : null,
        updated_at: new Date(),
      },
      { new: true, runValidators: true }
    ).lean<BlogPostLean>();

    if (!updatedPost)
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 }
      );

    return NextResponse.json({
      message: "Post updated successfully",
      post: {
        ...updatedPost,
        id: updatedPost._id.toString(),
        _id: undefined,
      },
    });
  } catch (err) {
    console.error("Admin Blog API PUT error:", err);
    return NextResponse.json(
      { error: "Failed to update blog post" },
      { status: 500 }
    );
  }
}

/* =============== DELETE /api/admin/blog/:id =============== */
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const id = params.id; // ✅ Correct way

    const deletedPost = await BlogPost.findByIdAndDelete(id);

    if (!deletedPost) {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Post deleted successfully",
    });
  } catch (err) {
    console.error("Admin Blog API DELETE error:", err);
    return NextResponse.json(
      { error: "Failed to delete blog post" },
      { status: 500 }
    );
  }
}
