// app/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import connectDB from "@/lib/mongodb";
import BlogPost from "@/lib/models/BlogPost";
import { BlogPostLean } from "@/lib/types";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

/* ---------------------------- SEO Metadata ---------------------------- */
export async function generateMetadata({ params }: any): Promise<Metadata> {
  await connectDB();

  const post = await BlogPost.findOne({ slug: params.slug, status: "published" })
    .lean<BlogPostLean>();

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt,
  };
}

/* ------------------------ CONTENT FORMAT HELPERS ------------------------ */

// Convert plain text → paragraphs
function formatContent(html: string) {
  return html
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br/>");
}

// Inject ID into headings for TOC linking
function injectHeadingIDs(html: string, toc: any[]) {
  let updated = html;

  toc?.forEach((item) => {
    const safeText = item.text.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");

    const regex = new RegExp(
      `<h${item.level}[^>]*>${safeText}<\\/h${item.level}>`
    );

    updated = updated.replace(
      regex,
      `<h${item.level} id="${item.id}">${item.text}</h${item.level}>`
    );
  });

  return updated;
}

/* ----------------------------- PAGE RENDER ----------------------------- */

export default async function BlogDetailPage({ params }: any) {
  await connectDB();

  const post = await BlogPost.findOne({ slug: params.slug, status: "published" })
    .lean<BlogPostLean>();

  if (!post) return notFound();

  // Prepare final HTML
  const formatted = formatContent(post.content);
  const finalHtml = post.toc?.length
    ? injectHeadingIDs(formatted, post.toc)
    : formatted;

  // Normalize author (string or ObjectId)
  const authorName =
    typeof post.author === "string"
      ? post.author
      : post.author?.toString();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-10">
      <br />
      <br />
      <br />
        {/* ---------------------------- BREADCRUMBS ---------------------------- */}
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link> /{" "}
          <Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link> / {post.title}
        </nav>

        {/* --------------------------- FEATURED IMAGE --------------------------- */}
        {post.image_url && (
          <img
            src={post.image_url}
            alt={post.title}
            className="w-full rounded-xl shadow-lg mb-10"
          />
        )}

        {/* ------------------------------- TITLE ------------------------------- */}
        <h1 className="text-4xl font-bold leading-snug mb-3 text-white">
          {post.title}
        </h1>

        {/* ----------------------------- META INFO ----------------------------- */}
        <div className="flex gap-4 text-gray-400 mb-5">
          <span>
            {post.published_at
              ? new Date(post.published_at).toLocaleDateString()
              : "Not published"}
          </span>
          <span>•</span>
          <span>{authorName}</span>
          <span>•</span>
          <span>{post.reading_time} min read</span>
        </div>

        {/* ------------------------------- TAGS -------------------------------- */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* -------------------------- TABLE OF CONTENTS -------------------------- */}
        {post.toc && post.toc.length > 0 && (
          <div className="mb-10 p-6 rounded-xl border border-gray-700 bg-gray-800">
            <h2 className="font-semibold mb-4 text-xl text-white">Table of Contents</h2>
            <ul className="space-y-2 text-gray-400 text-sm">
              {post.toc.map((item) => (
                <li key={item.id} className={`ml-${(item.level - 2) * 4}`}>
                  <a href={`#${item.id}`} className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ------------------------------- CONTENT ------------------------------ */}
        <article
          className="
            prose
            prose-lg
            max-w-none

            prose-headings:font-bold
            prose-headings:text-white
            prose-h2:text-3xl
            prose-h3:text-2xl

            prose-p:text-gray-300
            prose-p:leading-8

            prose-ul:my-6
            prose-ol:my-6
            prose-li:my-1

            prose-img:rounded-xl
            prose-img:shadow-lg
            prose-img:mx-auto
            prose-img:my-6

            prose-a:text-blue-400
            hover:prose-a:text-blue-300

            prose-strong:text-white

            prose-blockquote:border-l-4
            prose-blockquote:border-blue-500
            prose-blockquote:bg-gray-800
            prose-blockquote:p-4
            prose-blockquote:rounded-lg
            prose-blockquote:border-gray-700
          "
          dangerouslySetInnerHTML={{ __html: finalHtml }}
        />

        {/* ----------------------------- AUTHOR BOX ----------------------------- */}
        <div className="mt-16 p-6 border border-gray-700 rounded-xl bg-gray-800">
          <h3 className="font-semibold mb-2 text-white">Written by {authorName}</h3>
          <p className="text-gray-400 text-sm">
            This is the blog author information. You can update this section
            to include author details, profile picture, and social links.
          </p>
        </div>

        {/* --------------------------- RELATED POSTS --------------------------- */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Related Posts</h2>
          <p className="text-gray-400">Coming soon…</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}