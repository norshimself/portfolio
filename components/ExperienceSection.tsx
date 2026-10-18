'use client';

import { useEffect, useRef } from 'react';
import { experiences } from '@/data/portfolio';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from('.exp-section-top', {
        opacity: 0,
        y: 30,
        duration: 1,
        immediateRender: false,
        scrollTrigger: {
          trigger: '.exp-section-top',
          start: 'top 90%',
        }
      });

      // staggered list items
      gsap.from('.exp-item', {
        opacity: 0,
        x: -30,
        stagger: 0.2,
        duration: 0.8,
        immediateRender: false,
        scrollTrigger: {
          trigger: '.exp-list',
          start: 'top 85%',
        }
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="section-card" ref={containerRef}>
      {/* Header: label on left, big quote on right */}
      <div className="exp-section-top">
        <div className="section-label" style={{ marginBottom: 0 }}>Professional experience</div>
        <h2 className="exp-section-quote">
          The systems I&apos;ve worked on,
          <span> the problems I&apos;ve solved, and the impact I&apos;ve made.</span>
        </h2>
      </div>

      <p className="content-draft-note">Sample entries for now — replace company names, dates, and achievements in <code>data/portfolio.ts</code>.</p>
      {/* Experience list */}
      <div className="exp-list" role="list">
        {experiences.map((exp, i) => (
          <div key={i} className="exp-item" role="listitem">
            <div className="exp-item-header">
              <div className="exp-company-info">
                <h3 className="exp-role-title">{exp.role}</h3>
                <div className="exp-company-meta">
                  <span className="exp-company-name">{exp.company}</span>
                  {exp.website && (
                    <a href={`https://${exp.website}`} target="_blank" rel="noopener noreferrer" className="exp-website">
                      {exp.website} ↗
                    </a>
                  )}
                </div>
              </div>
              <div className="exp-time-location">
                <span className="exp-period-badge">{exp.period}</span>
                {exp.location && <span className="exp-location-text">{exp.location}</span>}
              </div>
            </div>
            
            {exp.responsibilities && (
              <ul className="exp-responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="exp-resp-item">{resp}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
