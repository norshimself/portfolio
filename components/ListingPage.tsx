import Link from 'next/link';
import PortfolioShell from '@/components/PortfolioShell';
import EditorialCard from '@/components/EditorialCard';
import ProjectBrowser from '@/components/ProjectBrowser';
import Footer from '@/components/Footer';
import { getVisibleEntries } from '@/lib/content';
import type { Collection } from '@/lib/content';

export default function ListingPage({ kind }: { kind: Collection }) {
  const isProject = kind === 'projects';
  const items = getVisibleEntries(kind);
  const drafts = items.filter(item => !item.published).length;

  return (
    <PortfolioShell>
      <main id="main-content" tabIndex={-1} className="main-content editorial-page">
        <div className="editorial-page-content">
          <header className="editorial-listing-hero section-card">
            <nav className="editorial-breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{isProject ? 'Projects' : 'Writing'}</span>
            </nav>
            <span className="section-label">{isProject ? 'Selected engineering work' : 'From the journal'}</span>
            <h1>{isProject ? 'Projects & case studies.' : 'Engineering notes.'}</h1>
            <p className="editorial-lede">
              {isProject
                ? 'A closer look at the systems I build: the problems, architecture, decisions, and lessons behind the work.'
                : 'Ideas, practical lessons, and thoughtful explorations of backend development, APIs, and data engineering.'}
            </p>
            <div className="editorial-hero-actions">
              <Link href={isProject ? '/blog' : '/projects'} className="editorial-outlined-link">
                {isProject ? 'Explore my writing ↗' : 'Explore my projects ↗'}
              </Link>
              <Link href="/#contact" className="editorial-text-link">Get in touch ↗</Link>
              {!isProject && <a href="/rss.xml" className="editorial-text-link" type="application/rss+xml">RSS feed ↗</a>}
            </div>
          </header>

          <section className="editorial-listing" aria-label={isProject ? 'Project case studies' : 'Technical articles'}>
            <div className="editorial-section-head">
              <div>
                <h2>{isProject ? 'All projects' : 'All articles'}</h2>
                <p>{items.length
                  ? (isProject ? 'Projects with the details that matter.' : 'Notes worth sharing.')
                  : (isProject ? 'Detailed case studies will appear here.' : 'New writing will appear here.')}</p>
              </div>
              {items.length > 0 && <span className="editorial-count">{items.length} {items.length === 1 ? 'entry' : 'entries'}</span>}
            </div>
            {drafts > 0 && (
              <p className="editorial-draft-note" role="status">
                Local preview: {drafts} unpublished {drafts === 1 ? 'draft' : 'drafts'} visible. Production shows only published content.
              </p>
            )}
            {items.length > 0 ? (
              isProject ? (
                <ProjectBrowser projects={items.map(entry => ({
                  kind: entry.kind,
                  slug: entry.slug,
                  title: entry.title,
                  description: entry.description,
                  cover: entry.cover,
                  published: entry.published,
                  featured: entry.featured,
                  date: entry.date,
                  readingMinutes: entry.readingMinutes,
                  tags: entry.tags,
                  stack: entry.stack,
                }))} />
              ) : (
                <div className="editorial-grid">
                  {items.map(entry => <EditorialCard key={entry.slug} entry={entry}/>)}
                </div>
              )
            ) : (
              <div className="editorial-empty">
                <span className="editorial-empty-icon" aria-hidden="true">{isProject ? '⌘' : '✎'}</span>
                <h3>{isProject ? 'Case studies in progress' : 'Notes in progress'}</h3>
                <p>
                  {isProject
                    ? 'I’m preparing detailed write-ups about architecture, implementation, and engineering trade-offs.'
                    : 'I’m working on technical articles that explore what I’ve learned through building software.'}
                </p>
                <Link href={isProject ? '/#works' : '/projects'}>
                  {isProject ? 'See featured work ↗' : 'Explore projects ↗'}
                </Link>
              </div>
            )}
          </section>
        </div>
        <Footer />
      </main>
    </PortfolioShell>
  );
}
