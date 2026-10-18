import Image from 'next/image';
import Link from 'next/link';
import type { ContentEntry } from '@/lib/content';

export type EditorialCardData = Pick<ContentEntry,
  'kind' | 'slug' | 'title' | 'description' | 'cover' | 'published' |
  'date' | 'readingMinutes' | 'tags' | 'featured'
>;
import { formatDate } from '@/lib/content-format';

export default function EditorialCard({ entry }: { entry: EditorialCardData }) {
  const url = '/' + entry.kind + '/' + entry.slug;
  const date = formatDate(entry.date);
  return (
    <article className="editorial-card">
      <Link href={url} className="editorial-card-link" aria-label={'Read ' + entry.title}>
        <div className={'editorial-card-cover' + (!entry.cover ? ' is-abstract' : '')}>
          {entry.cover ? (
            <Image src={entry.cover} alt="" fill
              sizes="(max-width: 720px) calc(100vw - 48px), (max-width: 1200px) 55vw, 450px" />
          ) : (
            <svg viewBox="0 0 360 190" fill="none" aria-hidden="true" focusable="false">
              <rect width="360" height="190" rx="16" fill="#191920"/>
              <circle cx="283" cy="49" r="108" fill="#e55e2d" fillOpacity=".11"/>
              <path d="M30 140H330M30 160H210" stroke="#e76d44" strokeOpacity=".43" strokeWidth="1"/>
              <path d="M44 66L92 37L145 68L206 31L288 83" stroke="#d29b84" strokeWidth="2" strokeDasharray="5 9"/>
              <circle cx="44" cy="66" r="6" fill="#ee885f"/>
              <circle cx="145" cy="68" r="6" fill="#ee885f"/>
              <circle cx="288" cy="83" r="6" fill="#ee885f"/>
              <path d="M44 110H192M44 123H147" stroke="#8f807d" strokeWidth="5" strokeLinecap="round"/>
            </svg>
          )}
          {!entry.published && <span className="editorial-cover-draft">LOCAL DRAFT</span>}
          <span className="editorial-card-type">{entry.kind === 'projects' ? 'CASE STUDY' : 'ENGINEERING NOTES'}</span>
        </div>
        <div className="editorial-card-copy">
          <div className="editorial-card-meta">
            {entry.kind === 'projects'
              ? <span>{entry.tags[0] ?? 'Project'}</span>
              : date ? <time dateTime={entry.date}>{date}</time> : <span>Work in progress</span>}
            {entry.kind === 'blog' ? <span>{entry.readingMinutes} min read</span> :
              entry.featured ? <span>Featured project</span> : null}
          </div>
          <h2>{entry.title}</h2>
          <p>{entry.description}</p>
          <ul className="editorial-tags" aria-label="Topics">
            {entry.tags.map(tag => <li key={tag}>{tag}</li>)}
          </ul>
          <span className="editorial-card-action">
            {entry.kind === 'projects' ? 'View case study' : 'Read article'}
            <span aria-hidden="true">↗</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
