'use client';

import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft, Save, Eye } from 'lucide-react';
import { toast } from 'sonner';
import type { BlogPostLean } from '@/lib/types';

type BlogPost = BlogPostLean;

interface Props {
  post: BlogPost | null;
  onSave: (post: BlogPost) => void;
  onCancel: () => void;
}

export function BlogEditor({ post, onSave, onCancel }: Props) {
  const [title, setTitle] = useState(post?.title || '');
  const [excerpt, setExcerpt] = useState(post?.excerpt || '');
  const [content, setContent] = useState(post?.content || '');
  const [category, setCategory] = useState(post?.category || '');
  const [tags, setTags] = useState(post?.tags?.join(', ') || '');
  const [imageUrl, setImageUrl] = useState(post?.image_url || '');
  const [status, setStatus] = useState<'published' | 'draft' | 'scheduled' | 'archived'>(post?.status || 'draft');

  const [scheduledAt, setScheduledAt] = useState<string | undefined>(
    post?.scheduled_at ? new Date(post.scheduled_at as any).toISOString().slice(0, 16) : undefined
  );

  const [featured, setFeatured] = useState<boolean>(!!post?.featured);
  const [pinned, setPinned] = useState<boolean>(!!post?.pinned);

  // ------- SEO -------
  const [metaTitle, setMetaTitle] = useState(post?.meta_title || '');
  const [metaDescription, setMetaDescription] = useState(post?.meta_description || '');
  const [canonicalUrl, setCanonicalUrl] = useState((post as any)?.canonical_url || '');
  const [ogTitle, setOgTitle] = useState((post as any)?.og_title || '');
  const [ogDescription, setOgDescription] = useState((post as any)?.og_description || '');
  const [ogImage, setOgImage] = useState((post as any)?.og_image || '');
  const [twitterCard, setTwitterCard] = useState((post as any)?.twitter_card || 'summary');
  const [structuredData, setStructuredData] = useState(
    post?.structured_data ? JSON.stringify(post.structured_data, null, 2) : ''
  );

  // Quill toolbar
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['blockquote', 'code-block'],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const makeSlug = (t: string) =>
    t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const handleSave = async () => {
    if (!title || !content) {
      toast.error('Title & content are required');
      return;
    }

    try {
      const payload = {
        title,
        excerpt,
        content,
        author: 'Admin',
        slug: makeSlug(title),
        category,
        tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
        image_url: imageUrl,
        status,
        published_at:
          status === 'published'
            ? new Date().toISOString()
            : null,
        scheduled_at: scheduledAt ? new Date(scheduledAt).toISOString() : null,
        featured,
        pinned,

        // SEO
        meta_title: metaTitle,
        meta_description: metaDescription,
        canonical_url: canonicalUrl,
        og_title: ogTitle,
        og_description: ogDescription,
        og_image: ogImage,
        twitter_card: twitterCard,
        structured_data: structuredData ? JSON.parse(structuredData) : undefined,
      };

      const url = post ? `/api/admin/blog/${post.id}` : `/api/admin/blog`;
      const method = post ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        toast.error('Failed to save post');
        return;
      }

      const data = await res.json();
      onSave({
        ...(data.post || data),
        id: (data.post?._id || data.post?.id || data._id)?.toString(),
      });

      toast.success(post ? 'Post updated' : 'Post created');
    } catch (err) {
      console.error(err);
      toast.error('Error saving post');
    }
  };

  const handlePreview = () => {
    if (post?.slug) {
      window.open(`/blog/${post.slug}`, '_blank');
    } else {
      const win = window.open('', '_blank', 'width=900,height=800');
      win!.document.write(`
        <html>
          <head>
            <title>${title}</title>
            <style>body{font-family:system-ui;padding:24px;max-width:800px;margin:auto}</style>
          </head>
          <body>
            <h1>${title}</h1>
            <p>${excerpt}</p>
            ${content}
          </body>
        </html>
      `);
      win!.document.close();
    }
  };

  return (
    <div className="space-y-6">
      {/* HEADER BAR */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={onCancel}>
            <ArrowLeft className="h-4 w-4 mr-1" /> Back
          </Button>
          <h2 className="text-2xl font-bold">{post ? 'Edit Post' : 'Create New Post'}</h2>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handlePreview}>
            <Eye className="h-4 w-4 mr-2" /> Preview
          </Button>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" /> Save
          </Button>
        </div>
      </div>

      {/* MAIN FORM */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">

              {/* Title */}
              <div>
                <Label>Title</Label>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} required />
              </div>

              {/* Excerpt */}
              <div>
                <Label>Excerpt</Label>
                <Textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={3} />
              </div>

              {/* ReactQuill */}
              <div>
                <Label>Body</Label>
                <ReactQuill
                  value={content}
                  onChange={setContent}
                  modules={quillModules}
                  className="bg-white"
                />
              </div>

            </CardContent>
          </Card>

          {/* SEO */}
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Label>Meta Title</Label>
                <Input value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />
              </div>

              <div>
                <Label>Meta Description</Label>
                <Textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} rows={3} />
              </div>

              <div>
                <Label>Canonical URL</Label>
                <Input value={canonicalUrl} onChange={(e) => setCanonicalUrl(e.target.value)} />
              </div>

              <div>
                <Label>OG Title</Label>
                <Input value={ogTitle} onChange={(e) => setOgTitle(e.target.value)} />
              </div>

              <div>
                <Label>OG Description</Label>
                <Textarea value={ogDescription} onChange={(e) => setOgDescription(e.target.value)} rows={3} />
              </div>

              <div>
                <Label>OG Image URL</Label>
                <Input value={ogImage} onChange={(e) => setOgImage(e.target.value)} />
              </div>

              <div>
                <Label>Twitter Card Type</Label>
                <Select value={twitterCard} onValueChange={setTwitterCard}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="summary">summary</SelectItem>
                    <SelectItem value="summary_large_image">summary_large_image</SelectItem>
                    <SelectItem value="app">app</SelectItem>
                    <SelectItem value="player">player</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* JSON-LD */}
              <div>
                <Label>Structured Data (JSON-LD)</Label>
                <Textarea
                  value={structuredData}
                  onChange={(e) => setStructuredData(e.target.value)}
                  rows={6}
                  placeholder='{"@context":"https://schema.org"}'
                />
              </div>

            </CardContent>
          </Card>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* Publish */}
          <Card>
            <CardHeader>
              <CardTitle>Publish Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">

              <div className="flex items-center justify-between">
                <Label>Published</Label>
                <Switch
                  checked={status === 'published'}
                  onCheckedChange={(v) => setStatus(v ? 'published' : 'draft')}
                />
              </div>

              <div>
                <Label>Schedule Publish</Label>
                <Input
                  type="datetime-local"
                  value={scheduledAt || ''}
                  onChange={(e) => setScheduledAt(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2">
                <Switch checked={featured} onCheckedChange={setFeatured} />
                <Label>Featured</Label>
              </div>

              <div className="flex items-center gap-2">
                <Switch checked={pinned} onCheckedChange={setPinned} />
                <Label>Pinned</Label>
              </div>

            </CardContent>
          </Card>

          {/* More settings */}
          <Card>
            <CardHeader>
              <CardTitle>Post Settings</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">

              <div>
                <Label>Category</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="mobile-development">Mobile Development</SelectItem>
                    <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                    <SelectItem value="seo-marketing">SEO & Marketing</SelectItem>
                    <SelectItem value="tutorials">Tutorials</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Tags (comma-separated)</Label>
                <Input
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="react, javascript"
                />
              </div>

              <div>
                <Label>Featured Image URL</Label>
                <Input
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
