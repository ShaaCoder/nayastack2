import { Types } from 'mongoose';
import { IQuery } from '@/lib/models/Query';
export type HeadingTOC = {
  level: number;
  text: string;
  id: string;
};

export type BlogPostLean = {
  _id: Types.ObjectId | string;
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string | Types.ObjectId;
  published_at: Date | string | null;
  scheduled_at?: Date | string | null;
  category: string;
  tags: string[];
  image_url?: string;
  slug: string;
  status: 'published' | 'draft' | 'scheduled' | 'archived';
  meta_title?: string;
  meta_description?: string;
  canonical_url?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  twitter_card?: 'summary' | 'summary_large_image' | 'app' | 'player';
  structured_data?: Record<string, any>;
  headings?: string[];
  toc?: HeadingTOC[];
  reading_time?: number;
  word_count?: number;
  featured?: boolean;
  pinned?: boolean;
  views?: number;
  likes?: number;
  created_at: Date | string;
  updated_at: Date | string;
  url?: string;
};

export type BlogPostCreateDTO = {
  title: string;
  excerpt?: string;
  content: string;
  author: string;
  published_at?: string | null;
  scheduled_at?: string | null;
  category: string;
  tags?: string[];
  image_url?: string;
  slug?: string;
  status?: 'published' | 'draft' | 'scheduled' | 'archived';
  meta_title?: string;
  meta_description?: string;
  canonical_url?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  twitter_card?: 'summary' | 'summary_large_image' | 'app' | 'player';
  structured_data?: Record<string, any>;
  featured?: boolean;
  pinned?: boolean;
};

export type BlogPostUpdateDTO = Partial<BlogPostCreateDTO> & { id: string };

export type BlogQuery = {
  q?: string;
  category?: string;
  tags?: string[];
  status?: 'published' | 'draft' | 'scheduled' | 'archived';
  author?: string;
  sort?: string;
  page?: number;
  perPage?: number;
};

/* ---- FIXED: Add QueryLean ---- */
export type QueryLean = Omit<IQuery, keyof Document> & { _id: Types.ObjectId; };