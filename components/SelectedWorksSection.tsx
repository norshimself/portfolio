'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
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
        <h2 className="works-header-title">Projects I Worked On</h2>
        <span className="works-header-dot" aria-hidden="true" />
      </div>

      {/* Grid container for work items */}
      <div className="works-grid">
        {works.map((work, i) => (
          <a
            key={i}
            href={work.href}
            target="_blank"
            rel="noopener noreferrer"
            className="work-item-card"
            aria-label={`Open ${work.title}`}
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
                  fill
                  className="work-item-img"
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 50vw"
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
              <div className="work-link-btn">
                <ArrowIcon />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
