import Image from 'next/image';
import Link from 'next/link';
import PortfolioShell from '@/components/PortfolioShell';
import MarkdownContent, { getTableOfContents } from '@/components/MarkdownContent';
import EditorialCard from '@/components/EditorialCard';
import Footer from '@/components/Footer';
import type { ContentEntry } from '@/lib/content';
import { formatDate, isSafeExternalUrl } from '@/lib/content-format';

export default function EntryPage({
  entry,
  related,
}: {
  entry: ContentEntry;
  related: ContentEntry[];
}) {
  const isProject = entry.kind === 'projects';
  const homeLabel = isProject ? 'Projects' : 'Writing';
  const toc = getTableOfContents(entry.body);
  const date = formatDate(entry.date);

  return (
    <PortfolioShell>
      <main id="main-content" tabIndex={-1} className="main-content editorial-page">
        <div className="editorial-page-content">
          <nav className="editorial-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href={'/' + entry.kind}>{homeLabel}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{entry.title}</span>
          </nav>

          <article className="editorial-article">
            <header className="editorial-article-header">
              <div className="editorial-kicker">{isProject ? 'ENGINEERING CASE STUDY' : 'ENGINEERING NOTES'}</div>
              {!entry.published && (
                <p className="editorial-draft-banner" role="status">
                  Local draft preview — this page is hidden on production deployments.
                </p>
              )}
              <h1>{entry.title}</h1>
              <p className="editorial-lede">{entry.description}</p>
              <div className="editorial-byline">
                {date && <time dateTime={entry.date}>{date}</time>}
                {isProject ? (
                  entry.role && <span>{entry.role}</span>
                ) : (
                  <span>{entry.readingMinutes} min read</span>
                )}
              </div>
              <ul className="editorial-tags" aria-label="Topics">
                {entry.tags.map(tag => <li key={tag}>{tag}</li>)}
              </ul>
            </header>

            {entry.cover && (
              <figure className="editorial-hero-image">
                <Image src={entry.cover} alt={'Cover artwork for ' + entry.title}
                  width={1200} height={675}
                  sizes="(max-width: 768px) calc(100vw - 44px), (max-width: 1400px) 70vw, 900px"
                  priority />
              </figure>
            )}

            <div className="editorial-body-layout">
              <MarkdownContent body={entry.body} />

              <aside className="editorial-article-aside" aria-label="Article details">
                {isProject && (entry.role || entry.period || entry.stack.length > 0) && (
                  <div className="editorial-detail-box">
                    <h2>At a glance</h2>
                    {entry.role && <p><strong>Role</strong><span>{entry.role}</span></p>}
                    {entry.period && <p><strong>Timeline</strong><span>{entry.period}</span></p>}
                    {entry.stack.length > 0 && (
                      <div>
                        <strong>Stack</strong>
                        <ul className="editorial-small-tags">
                          {entry.stack.map(tech => <li key={tech}>{tech}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
                {toc.length > 0 && (
                  <nav className="editorial-toc" aria-label="On this page">
                    <h2>On this page</h2>
                    <ol>
                      {toc.map(item => (
                        <li key={item.id} className={item.level === 3 ? 'is-nested' : ''}>
                          <a href={'#' + item.id}>{item.label}</a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                )}
                {isProject && (isSafeExternalUrl(entry.repository) || isSafeExternalUrl(entry.demo)) && (
                  <div className="editorial-resource-links">
                    {isSafeExternalUrl(entry.repository) && <a href={entry.repository} target="_blank" rel="noopener noreferrer">View source ↗</a>}
                    {isSafeExternalUrl(entry.demo) && <a href={entry.demo} target="_blank" rel="noopener noreferrer">Live demo ↗</a>}
                  </div>
                )}
              </aside>
            </div>
          </article>

          <div className="editorial-endnote">
            <Link href={'/' + entry.kind}>← All {homeLabel.toLowerCase()}</Link>
            <Link href="/#contact">Discuss an engineering challenge ↗</Link>
          </div>

          {related.length > 0 && (
            <section className="editorial-related" aria-labelledby="related-heading">
              <div className="editorial-section-head">
                <h2 id="related-heading">{isProject ? 'More projects' : 'Continue reading'}</h2>
              </div>
              <div className="editorial-grid">
                {related.map(item => <EditorialCard key={item.slug} entry={item}/>)}
              </div>
            </section>
          )}
        </div>
        <Footer />
      </main>
    </PortfolioShell>
  );
}
