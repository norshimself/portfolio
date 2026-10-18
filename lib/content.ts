import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

export type Collection = 'blog' | 'projects';

export interface ContentEntry {
  kind: Collection;
  slug: string;
  title: string;
  description: string;
  date?: string;
  tags: string[];
  published: boolean;
  featured: boolean;
  /** Curated order for the Projects directory; unrelated to publication date. */
  order?: number;
  cover?: string;
  role?: string;
  period?: string;
  stack: string[];
  repository?: string;
  demo?: string;
  body: string;
  readingMinutes: number;
}

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const ROOT = join(process.cwd(), 'content');

function parseValue(value: string): unknown {
  const trimmed = value.trim();
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  if (trimmed.startsWith('[') || trimmed.startsWith('"')) {
    try { return JSON.parse(trimmed); }
    catch { throw new Error('Invalid JSON-style frontmatter value: ' + trimmed); }
  }
  if (trimmed.startsWith("'") && trimmed.endsWith("'")) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseFrontmatter(source: string, location: string): {
  fields: Record<string, unknown>;
  body: string;
} {
  const matched = source.replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!matched) throw new Error('Missing --- frontmatter in ' + location);
  const fields: Record<string, unknown> = {};

  for (const line of matched[1].split('\n')) {
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const colon = line.indexOf(':');
    if (colon < 1) throw new Error('Invalid frontmatter line in ' + location + ': ' + line);
    const key = line.slice(0, colon).trim();
    if (!/^[a-zA-Z][a-zA-Z0-9]*$/.test(key) || key in fields) {
      throw new Error('Invalid or repeated key in ' + location + ': ' + key);
    }
    fields[key] = parseValue(line.slice(colon + 1));
  }
  return { fields, body: matched[2].trim() };
}

function requiredString(fields: Record<string, unknown>, field: string, location: string): string {
  const value = fields[field];
  if (typeof value !== 'string' || !value.trim()) {
    throw new Error('Missing ' + field + ' in ' + location);
  }
  return value.trim();
}

function optionalString(fields: Record<string, unknown>, field: string): string | undefined {
  const value = fields[field];
  return typeof value === 'string' && value.trim() ? value.trim() : undefined;
}

function stringList(fields: Record<string, unknown>, field: string, location: string): string[] {
  const value = fields[field] ?? [];
  if (!Array.isArray(value) || !value.every(item => typeof item === 'string')) {
    throw new Error(field + ' must be a JSON-style string array in ' + location);
  }
  return value.map(item => item.trim()).filter(Boolean);
}

function load(kind: Collection, slug: string): ContentEntry | null {
  if (!SLUG.test(slug)) return null;
  const filepath = join(ROOT, kind, slug + '.md');
  if (!existsSync(filepath)) return null;

  const { fields, body } = parseFrontmatter(readFileSync(filepath, 'utf8'), filepath);
  const published = fields.published === true;
  const date = optionalString(fields, 'date');
  if (date && (!DATE.test(date) || Number.isNaN(Date.parse(date + 'T00:00:00Z')))) {
    throw new Error('Invalid date (expected YYYY-MM-DD) in ' + filepath);
  }
  if (published && !date) {
    throw new Error('Published content requires a verified date in ' + filepath);
  }

  const orderValue = optionalString(fields, 'order');
  const order = orderValue ? Number(orderValue) : undefined;
  if (order !== undefined && (!Number.isSafeInteger(order) || order <= 0)) {
    throw new Error('Order must be a positive integer in ' + filepath);
  }

  const cover = optionalString(fields, 'cover');
  if (cover && !/^\/assets\/[a-zA-Z0-9_./-]+$/.test(cover)) {
    throw new Error('Cover must reference an existing /assets/ file in ' + filepath);
  }
  return {
    kind,
    slug,
    title: requiredString(fields, 'title', filepath),
    description: requiredString(fields, 'description', filepath),
    date,
    tags: stringList(fields, 'tags', filepath),
    published,
    featured: fields.featured === true,
    order,
    cover,
    role: optionalString(fields, 'role'),
    period: optionalString(fields, 'period'),
    stack: stringList(fields, 'stack', filepath),
    repository: optionalString(fields, 'repository'),
    demo: optionalString(fields, 'demo'),
    body,
    readingMinutes: Math.max(1, Math.ceil(body.split(/\s+/).filter(Boolean).length / 220)),
  };
}

export function getAllEntries(kind: Collection): ContentEntry[] {
  const dir = join(ROOT, kind);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter(file => file.endsWith('.md') && SLUG.test(file.slice(0, -3)))
    .map(file => load(kind, file.slice(0, -3)))
    .filter((entry): entry is ContentEntry => entry !== null)
    .sort((a, b) => kind === 'projects'
      ? (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER) || a.title.localeCompare(b.title)
      : (b.date ?? '').localeCompare(a.date ?? '') || a.title.localeCompare(b.title));
}

/** Production only serves published content. Local development can preview drafts. */
export function getVisibleEntries(kind: Collection): ContentEntry[] {
  const showDrafts = process.env.NODE_ENV === 'development';
  return getAllEntries(kind).filter(entry => entry.published || showDrafts);
}

export function getPublishedEntries(kind: Collection): ContentEntry[] {
  return getAllEntries(kind).filter(entry => entry.published);
}

export function getEntry(kind: Collection, slug: string): ContentEntry | null {
  const entry = load(kind, slug);
  if (!entry) return null;
  return entry.published || process.env.NODE_ENV === 'development' ? entry : null;
}
