'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { WorkItem } from '@/types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { works } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SelectedWorksSection({ featuredProjects = [] }: { featuredProjects?: WorkItem[] }) {
  const containerRef = useRef<HTMLElement>(null);
  const projects = featuredProjects.length ? featuredProjects : works;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.from('.works-header-card', {
        opacity: 0, y: 16, duration: 0.6, immediateRender: false,
        scrollTrigger: { trigger: '.works-header-card', start: 'top 95%' },
      });
      gsap.from('.work-item-card', {
        opacity: 0, y: 20, stagger: 0.1, duration: 0.65, immediateRender: false,
        scrollTrigger: { trigger: '.works-grid', start: 'top 90%' },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="featured-work" id="works" ref={containerRef}>
      <div className="works-header-card">
        <span className="works-header-dot" aria-hidden="true" />
        <h2 className="works-header-title">Featured Work</h2>
        <span className="works-header-dot" aria-hidden="true" />
      </div>
      <p className="work-section-intro">
        Project case studies in progress. Replace the sample entries in <code>data/portfolio.ts</code>.
      </p>
      <div className="editorial-works-toolbar">
        <Link href="/projects" className="editorial-outlined-link">Browse all projects <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="works-grid">
        {projects.map((work, index) => (
          <article
            key={work.title + index}
            className="work-item-card"
            data-draft={!work.href}
          >
            <div className="browser-mockup">
              <div className="browser-header" aria-hidden="true">
                <div className="browser-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span className="browser-url">{work.href ?? 'Case study preview'}</span>
              </div>
              <div className="browser-content">
                <Image
                  src={work.image}
                  alt={work.href ? work.title + ' project preview' : 'Draft project cover: replace with a real screenshot'}
                  fill
                  className="work-item-img"
                  sizes="(max-width: 480px) calc(100vw - 20px), (max-width: 1024px) calc(100vw - 28px), (max-width: 1400px) calc(100vw - 440px), 48vw"
                />
              </div>
            </div>

            <div className="work-item-overlay">
              <div className="work-card-head">
                <span className="work-meta-cat">
                  {work.category}{work.role ? ' · ' + work.role : ''}
                </span>
                <span className="work-card-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
              </div>
              <h3 className="work-meta-title">{work.title}</h3>
              {work.description && <p className="work-meta-desc">{work.description}</p>}
              {work.stack && work.stack.length > 0 && (
                <ul className="work-meta-stack" aria-label="Technology stack">
                  {work.stack.map((tech) => <li key={tech}>{tech}</li>)}
                </ul>
              )}
              <div className="work-card-footer">
                <span className="work-meta-date">{work.date}</span>
                {work.href ? (
                  work.href.startsWith('/') ? (
                    <Link href={work.href} className="work-visit-link"
                      aria-label={'Read case study for ' + work.title}>
                      Read case study <ArrowIcon />
                    </Link>
                  ) : (
                    <a href={work.href} className="work-visit-link"
                      target="_blank" rel="noopener noreferrer"
                      aria-label={'View ' + work.title + ' in a new tab'}>
                      View project <ArrowIcon />
                    </a>
                  )
                ) : (
                  <span className="work-draft-label">Draft · Replace content</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
