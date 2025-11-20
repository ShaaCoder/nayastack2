import mongoose, { Document, Schema } from 'mongoose';
import slugify from 'slugify';

export interface IHeading {
  level: number;
  text: string;
  id: string;
}

export interface IBlogPost extends Document {
  title: string;
  excerpt: string;
  content: string;
author: { type: String, required: true }

  published_at: Date | null;
  scheduled_at?: Date | null;
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
  headings?: string[];                // simple headings array
  toc?: IHeading[];                   // table of contents with level/text/id
  reading_time?: number;              // minutes
  word_count?: number;
  featured?: boolean;
  pinned?: boolean;
  views?: number;
  likes?: number;
  created_at: Date;
  updated_at: Date;
}

const BlogPostSchema = new Schema<IBlogPost>({
  title: { type: String, required: true, trim: true, index: true },
  excerpt: { type: String, required: true, trim: true },
  content: { type: String, required: true },

  // author stored as ObjectId (recommended). Keep string if you prefer name.
author: { 
  type: String, 
  required: true, 
  trim: true, 
  index: true 
},


  published_at: { type: Date, default: null, index: true },
  scheduled_at: { type: Date, default: null },

  category: {
    type: String,
    required: true,
    enum: ['web-development', 'mobile-development', 'ui-ux-design', 'seo-marketing', 'tutorials', 'business', 'case-study', 'opinion'],
    index: true,
  },

  tags: [{ type: String, trim: true, index: true }],
  image_url: { type: String, trim: true },

  slug: { type: String, required: true, unique: true, trim: true, index: true },

  status: {
    type: String,
    enum: ['published', 'draft', 'scheduled', 'archived'],
    default: 'draft',
    index: true,
  },

  // SEO fields
  meta_title: { type: String, trim: true },
  meta_description: { type: String, trim: true },
  canonical_url: { type: String, trim: true },

  // OG / Twitter
  og_title: { type: String, trim: true },
  og_description: { type: String, trim: true },
  og_image: { type: String, trim: true },
  twitter_card: { type: String, enum: ['summary', 'summary_large_image', 'app', 'player'] },

  // structured JSON-LD
  structured_data: { type: Schema.Types.Mixed },

  // WP-like fields
  headings: [{ type: String, trim: true }], // array of heading text
  toc: [
    {
      level: { type: Number },
      text: { type: String },
      id: { type: String },
    },
  ],

  reading_time: { type: Number, default: 0 },
  word_count: { type: Number, default: 0 },

  featured: { type: Boolean, default: false, index: true },
  pinned: { type: Boolean, default: false, index: true },

  views: { type: Number, default: 0, index: true },
  likes: { type: Number, default: 0 },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

// Text index for search
BlogPostSchema.index({ title: 'text', excerpt: 'text', content: 'text', tags: 'text' }, { name: 'BlogPostTextIndex' });

// Pre-validate hook: slug, word count, reading time, meta fallback, headings & toc extraction
BlogPostSchema.pre<IBlogPost>('validate', function (next) {
  // 1) Slug auto-generation (if missing)
  if ((!this.slug || this.slug.trim() === '') && this.title) {
    const base = slugify(this.title, { lower: true, strict: true });
    // append short random suffix to reduce collisions (you can replace with unique-check)
    this.slug = `${base}-${Math.random().toString(36).substring(2, 8)}`;
  }

  // 2) Plain text from content (strip HTML)
  const plain = (this.content || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  // 3) Word count
  const words = plain ? plain.split(/\s+/).filter(Boolean).length : 0;
  this.word_count = words;

  // 4) Reading time (200 wpm)
  this.reading_time = Math.max(1, Math.round(words / 200));

  // 5) Meta fallbacks
  if (!this.meta_title && this.title) {
    this.meta_title = this.title.length > 60 ? `${this.title.substring(0, 57)}...` : this.title;
  }
  if (!this.meta_description) {
    const desc = this.excerpt || (plain.substring(0, 155));
    this.meta_description = desc.length > 155 ? `${desc.substring(0, 152)}...` : desc;
  }

  // 6) OG fallbacks
  if (!this.og_title) this.og_title = this.meta_title;
  if (!this.og_description) this.og_description = this.meta_description;
  if (!this.og_image && this.image_url) this.og_image = this.image_url;

  // 7) Extract headings (H2 - H4) and build TOC
  if (this.content) {
    const headingRegex = /<h([2-4])[^>]*>([\s\S]*?)<\/h\1>/gi;
    const headingsArr: string[] = [];
    const tocArr: { level: number; text: string; id: string }[] = [];
    let match: RegExpExecArray | null;
    while ((match = headingRegex.exec(this.content)) !== null) {
      const level = parseInt(match[1], 10);
      const rawText = match[2].replace(/<[^>]+>/g, '').trim();
      if (!rawText) continue;
      const id = slugify(rawText, { lower: true, strict: true });
      headingsArr.push(rawText);
      tocArr.push({ level, text: rawText, id });
    }
    this.headings = headingsArr;
    this.toc = tocArr;
  } else {
    this.headings = [];
    this.toc = [];
  }

  next();
});

// Virtual URL
BlogPostSchema.virtual('url').get(function (this: IBlogPost) {
  return `/blog/${this.slug}`;
});

// Instance helper to produce public-safe object
BlogPostSchema.method('toPublicJSON', function () {
  const obj = this.toObject({ virtuals: true });
  delete (obj as any).__v;
  return obj;
});

export default mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', BlogPostSchema);
