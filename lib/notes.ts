import fs from 'fs';
import path from 'path';

export interface NoteMeta {
  title: string;
  description: string;
  date?: string;
}

export interface Note {
  slug: string;
  meta: NoteMeta;
  content: string;
}

const NOTES_DIR = path.join(process.cwd(), 'public', 'notes');

/**
 * Parse frontmatter from markdown content
 */
function parseFrontmatter(content: string): {
  meta: NoteMeta;
  content: string;
} {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return {
      meta: { title: 'Untitled', description: '' },
      content,
    };
  }

  const [, frontmatterStr, markdown] = match;
  const meta: NoteMeta = { title: 'Untitled', description: '' };

  // Parse YAML-like frontmatter
  frontmatterStr.split('\n').forEach((line) => {
    const [key, ...valueParts] = line.split(':');
    const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');

    if (key.trim() === 'title') {
      meta.title = value;
    } else if (key.trim() === 'description') {
      meta.description = value;
    } else if (key.trim() === 'date') {
      meta.date = value;
    }
  });

  return { meta, content: markdown.trim() };
}

/**
 * Get all notes
 */
export async function getAllNotes(): Promise<Note[]> {
  if (!fs.existsSync(NOTES_DIR)) {
    return [];
  }

  const files = fs.readdirSync(NOTES_DIR);
  const markdownFiles = files.filter((file) => file.endsWith('.md'));

  const notes = markdownFiles.map((file) => {
    const filePath = path.join(NOTES_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { meta, content: markdown } = parseFrontmatter(content);
    const slug = file.replace(/\.md$/, '');

    return { slug, meta, content: markdown };
  });

  return notes.sort((a, b) => {
    const dateA = new Date(a.meta.date || 0).getTime();
    const dateB = new Date(b.meta.date || 0).getTime();
    return dateB - dateA;
  });
}

/**
 * Get a single note by slug
 */
export async function getNoteBySlug(slug: string): Promise<Note | null> {
  const filePath = path.join(NOTES_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const { meta, content: markdown } = parseFrontmatter(content);

  return { slug, meta, content: markdown };
}

/**
 * Convert markdown to HTML (basic implementation)
 */
export function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*?)$/gm, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>');
  html = html.replace(/^## (.*?)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>');
  html = html.replace(/^# (.*?)$/gm, '<h1 class="text-3xl font-bold mt-0 mb-6">$1</h1>');

  // Code blocks
  html = html.replace(
    /```(\w+)?\n([\s\S]*?)```/g,
    '<pre class="bg-muted p-4 rounded-md overflow-x-auto mb-4"><code class="text-sm font-mono">$2</code></pre>'
  );

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="bg-muted px-2 py-1 rounded font-mono text-sm">$1</code>');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>');
  html = html.replace(/__(.+?)__/g, '<strong class="font-bold">$1</strong>');

  // Italic
  html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
  html = html.replace(/_(.+?)_/g, '<em class="italic">$1</em>');

  // Lists
  html = html.replace(/^\* (.*?)$/gm, '<li class="ml-4">$1</li>');
  html = html.replace(/(<li>[\s\S]*?<\/li>)/, '<ul class="list-disc mb-4">$1</ul>');

  // Numbered lists
  html = html.replace(/^\d+\. (.*?)$/gm, '<li class="ml-4">$1</li>');

  // Blockquotes
  html = html.replace(/^> (.*?)$/gm, '<blockquote class="border-l-4 border-accent pl-4 italic mb-4">$1</blockquote>');

  // Line breaks
  html = html.replace(/\n\n/g, '</p><p class="mb-4">');
  html = `<p class="mb-4">${html}</p>`;

  // Clean up multiple tags
  html = html.replace(/<p><\/p>/g, '');
  html = html.replace(/<p>(<h[1-6])/g, '$1');
  html = html.replace(/(<\/h[1-6]>)<\/p>/g, '$1');

  return html;
}
