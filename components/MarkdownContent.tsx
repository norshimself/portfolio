import type { ReactNode } from 'react';
import Image from 'next/image';
import CodeSnippet from '@/components/CodeSnippet';

type Heading = { id: string; label: string; level: 2 | 3 };

export function headingId(title: string, index: number): string {
  const normalized = title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
  return (normalized || 'section') + '-' + index;
}

export function getTableOfContents(body: string): Heading[] {
  let inFence = false;
  const headings: Heading[] = [];
  for (const line of body.replace(/\r\n/g, '\n').split('\n')) {
    if (/^```/.test(line)) { inFence = !inFence; continue; }
    if (inFence) continue;
    const matched = line.match(/^(##|###)\s+(.+)$/);
    if (!matched) continue;
    const label = matched[2].trim();
    headings.push({
      label,
      level: matched[1].length as 2 | 3,
      id: headingId(label, headings.length + 1),
    });
  }
  return headings;
}

const INLINE = /(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;

function inline(text: string, keyPrefix: string): ReactNode[] {
  return text.split(INLINE).map((piece, index) => {
    const key = keyPrefix + '-' + index;
    if (piece.startsWith('**') && piece.endsWith('**')) {
      return <strong key={key}>{piece.slice(2, -2)}</strong>;
    }
    if (piece.startsWith('`') && piece.endsWith('`')) {
      return <code key={key}>{piece.slice(1, -1)}</code>;
    }
    if (piece.startsWith('*') && piece.endsWith('*')) {
      return <em key={key}>{piece.slice(1, -1)}</em>;
    }
    const link = piece.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const href = link[2].trim();
      const safe = /^https?:\/\//i.test(href) || /^mailto:/i.test(href) ||
        (href.startsWith('/') && !href.startsWith('//')) || href.startsWith('#');
      if (!safe) return <span key={key}>{link[1]}</span>;
      const external = /^https?:\/\//i.test(href);
      return (
        <a key={key} href={href} target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}>
          {link[1]}
        </a>
      );
    }
    return piece;
  });
}

function startsBlock(line: string): boolean {
  return /^(?:#{2,3}\s|```|>\s?|[-*]\s|\d+\.\s|---\s*$|!\[[^\]]*\]\([^)]+\)\s*$)/.test(line);
}

/**
 * Safe, focused Markdown subset: headings, paragraphs, lists, quotes,
 * code fences, local images, emphasis, inline code and links.
 * Source text is always escaped by React (no raw HTML or unsafe MDX).
 */
export default function MarkdownContent({ body }: { body: string }) {
  const lines = body.replace(/\r\n/g, '\n').split('\n');
  const blocks: ReactNode[] = [];
  let index = 0;
  let headingCount = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    const blockKey = 'block-' + index;
    if (!line) { index++; continue; }

    if (line.startsWith('```')) {
      const language = line.slice(3).trim().replace(/[^a-zA-Z0-9+#-]/g, '');
      const codeLines: string[] = [];
      index++;
      while (index < lines.length && !lines[index].trim().startsWith('```')) {
        codeLines.push(lines[index]);
        index++;
      }
      if (index < lines.length) index++;
      blocks.push(<CodeSnippet key={blockKey} code={codeLines.join('\n')} language={language} />);
      continue;
    }

    const heading = line.match(/^(##|###)\s+(.+)$/);
    if (heading) {
      headingCount++;
      const label = heading[2].trim();
      const id = headingId(label, headingCount);
      blocks.push(heading[1] === '##'
        ? <h2 id={id} key={blockKey}>{inline(label, blockKey)}</h2>
        : <h3 id={id} key={blockKey}>{inline(label, blockKey)}</h3>);
      index++;
      continue;
    }

    if (/^---\s*$/.test(line)) {
      blocks.push(<hr key={blockKey} />);
      index++;
      continue;
    }

    const image = line.match(/^!\[([^\]]+)\]\((\/assets\/[a-zA-Z0-9_./-]+)\)$/);
    if (image) {
      blocks.push(
        <figure key={blockKey} className="editorial-figure">
          <Image src={image[2]} alt={image[1]} width={1200} height={675}
            sizes="(max-width: 768px) calc(100vw - 56px), (max-width: 1300px) 70vw, 780px"/>
          <figcaption>{image[1]}</figcaption>
        </figure>
      );
      index++;
      continue;
    }

    if (line.startsWith('>')) {
      const quoted: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith('>')) {
        quoted.push(lines[index].trim().replace(/^>\s?/, ''));
        index++;
      }
      blocks.push(<blockquote key={blockKey}>{inline(quoted.join(' '), blockKey)}</blockquote>);
      continue;
    }

    const unordered = /^[-*]\s/.test(line);
    const ordered = /^\d+\.\s/.test(line);
    if (unordered || ordered) {
      const items: ReactNode[] = [];
      const expression = unordered ? /^[-*]\s+(.+)$/ : /^\d+\.\s+(.+)$/;
      while (index < lines.length) {
        const matched = lines[index].trim().match(expression);
        if (!matched) break;
        items.push(<li key={index}>{inline(matched[1], 'li-' + index)}</li>);
        index++;
      }
      blocks.push(unordered ? <ul key={blockKey}>{items}</ul> : <ol key={blockKey}>{items}</ol>);
      continue;
    }

    const paragraph = [line];
    index++;
    while (index < lines.length && lines[index].trim() && !startsBlock(lines[index].trim())) {
      paragraph.push(lines[index].trim());
      index++;
    }
    blocks.push(<p key={blockKey}>{inline(paragraph.join(' '), blockKey)}</p>);
  }

  return <div className="editorial-prose">{blocks}</div>;
}
