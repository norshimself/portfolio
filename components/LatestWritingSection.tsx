import Link from 'next/link';
import EditorialCard from '@/components/EditorialCard';
import { getPublishedEntries } from '@/lib/content';

/** Appears on the homepage only after at least one article is published. */
export default function LatestWritingSection() {
  const recent = getPublishedEntries('blog').slice(0, 2);
  if (!recent.length) return null;

  return (
    <section className="section-card editorial-home-writing" id="writing" aria-labelledby="writing-heading">
      <div className="section-label">From the journal</div>
      <div className="editorial-section-head">
        <div>
          <h2 id="writing-heading">Latest writing</h2>
          <p>Ideas, lessons, and notes on building reliable systems.</p>
        </div>
        <Link href="/blog" className="editorial-text-link">All articles ↗</Link>
      </div>
      <div className="editorial-grid">
        {recent.map(entry => <EditorialCard key={entry.slug} entry={entry}/>)}
      </div>
    </section>
  );
}
