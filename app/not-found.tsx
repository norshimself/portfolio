import Link from 'next/link';
import PortfolioShell from '@/components/PortfolioShell';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <PortfolioShell>
      <main id="main-content" tabIndex={-1} className="main-content editorial-page">
        <section className="section-card editorial-not-found" aria-labelledby="not-found-heading">
          <span className="editorial-error-code">404</span>
          <span className="section-label">Page not found</span>
          <h1 id="not-found-heading">Nothing here yet.</h1>
          <p>
            This page may have moved, or the project or article is still a draft.
            You can find the published work and writing in their respective sections.
          </p>
          <div className="editorial-hero-actions">
            <Link href="/" className="editorial-outlined-link">Back to home ↗</Link>
            <Link href="/projects" className="editorial-text-link">Projects</Link>
            <Link href="/blog" className="editorial-text-link">Writing</Link>
          </div>
        </section>
        <Footer />
      </main>
    </PortfolioShell>
  );
}
