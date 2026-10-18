'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { works } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function SelectedWorksSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.from('.works-header-card', {
        opacity: 0, y: 20, duration: 0.65, immediateRender: false,
        scrollTrigger: { trigger: '.works-header-card', start: 'top 95%' },
      });
      gsap.from('.work-item-card', {
        opacity: 0, y: 25, stagger: 0.12, duration: 0.7, immediateRender: false,
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
      <p className="work-section-intro">Draft case studies — edit <code>data/portfolio.ts</code> to add your real projects.</p>
      <div className="works-grid">
        {works.map((work, index) => {
          const content = (
            <>
              <div className="browser-mockup">
                <div className="browser-header" aria-hidden="true">
                  <div className="browser-dots"><span className="dot red" /><span className="dot yellow" /><span className="dot green" /></div>
                  <div className="browser-url">{work.href ?? 'Project preview — temporary image'}</div>
                </div>
                <div className="browser-content">
                  <Image
                    src={work.image}
                    alt={work.href ? work.title + ' project preview' : 'Draft project artwork, replace with a real screenshot'}
                    fill
                    className="work-item-img"
                    sizes="(max-width: 480px) calc(100vw - 20px), (max-width: 1024px) calc(100vw - 28px), (max-width: 1200px) calc(100vw - 372px), calc(100vw - 432px)"
                  />
                </div>
              </div>
              <div className="work-item-overlay">
                <div className="work-item-details">
                  <div className="work-meta-cat">{work.category}{work.role ? ' · ' + work.role : ''}</div>
                  <h3 className="work-meta-title">{work.title}</h3>
                  {work.description && <p className="work-meta-desc">{work.description}</p>}
                  {work.stack && work.stack.length > 0 && (
                    <ul className="work-meta-stack" aria-label="Technology stack">
                      {work.stack.map((tech) => <li key={tech}>{tech}</li>)}
                    </ul>
                  )}
                  <div className="work-meta-date">{work.date}</div>
                  {!work.href && <span className="work-draft-label">Content draft · Not published</span>}
                </div>
                {work.href && <div className="work-link-btn"><ArrowIcon /></div>}
              </div>
            </>
          );
          return work.href ? (
            <a key={work.title + index} href={work.href} target="_blank" rel="noopener noreferrer" className="work-item-card" aria-label={'View ' + work.title}>{content}</a>
          ) : (
            <article key={work.title + index} className="work-item-card" data-draft="true">{content}</article>
          );
        })}
      </div>
    </section>
  );
}
