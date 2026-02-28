'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { works } from '@/data/portfolio';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function SelectedWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const slides = works.map(w => ({ src: w.image }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from('.works-header-card', {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        immediateRender: false,
        scrollTrigger: {
          trigger: '.works-header-card',
          start: 'top 95%',
        }
      });

      // Staggered work items
      gsap.from('.work-item-card', {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 1,
        ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: '.work-item-card',
          start: 'top 90%',
        }
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* "Selected Work" banner card */}
      <div className="works-header-card" id="works">
        <span className="works-header-dot" aria-hidden="true" />
        <h2 className="works-header-title">Selected Work</h2>
        <span className="works-header-dot" aria-hidden="true" />
      </div>

      {/* Grid container for work items */}
      <div className="works-grid">
        {works.map((work, i) => (
          <article
            key={i}
            className="work-item-card"
            onClick={() => { setIdx(i); setOpen(true); }}
            role="button"
            tabIndex={0}
            aria-label={`View ${work.title}`}
            onKeyDown={e => e.key === 'Enter' && (setIdx(i), setOpen(true))}
          >
            {/* Browser Mockup Frame */}
            <div className="browser-mockup">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-url">{work.href.replace('https://www.', '').replace('https://', '')}</div>
              </div>
              <div className="browser-content">
                <Image
                  src={work.image}
                  alt={work.title}
                  width={1200}
                  height={800}
                  className="work-item-img"
                  unoptimized
                />
              </div>
            </div>

            {/* Bottom overlay with metadata */}
            <div className="work-item-overlay">
              <div>
                <div className="work-meta-cat">{work.category}</div>
                <div className="work-meta-title">{work.title}</div>
                <div className="work-meta-date">{work.date}</div>
              </div>
              <a
                href={work.href}
                className="work-link-btn"
                aria-label={`Open ${work.title}`}
                onClick={e => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowIcon />
              </a>
            </div>
          </article>
        ))}
      </div>

      <Lightbox open={open} close={() => setOpen(false)} index={idx} slides={slides} />
    </div>
  );
}
