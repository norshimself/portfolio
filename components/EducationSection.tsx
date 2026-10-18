'use client';

import { useEffect, useRef } from 'react';
import { education } from '@/data/portfolio';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function EducationSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from('.edu-section-top', {
        opacity: 0,
        y: 30,
        duration: 1,
        immediateRender: false,
        scrollTrigger: {
          trigger: '.edu-section-top',
          start: 'top 90%',
        }
      });

      // staggered list items
      gsap.from('.edu-item', {
        opacity: 0,
        x: -30,
        stagger: 0.2,
        duration: 0.8,
        immediateRender: false,
        scrollTrigger: {
          trigger: '.edu-list',
          start: 'top 85%',
        }
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="section-card" ref={containerRef}>
      <div className="about-intro">
        <div className="section-label">About me</div>
        <h2 className="about-intro-title">I like building reliable systems.</h2>
        <p>My interests sit where backend engineering, data pipelines and practical problem-solving meet. This is a draft paragraph ready for more of my story.</p>
      </div>
      {/* Header: label on left, big quote on right */}
      <div className="exp-section-top edu-section-top">
        <div className="section-label" style={{ marginBottom: 0 }}>Education &amp; background</div>
        <h2 className="exp-section-quote">
          Project-based learning and collaboration
          <span> shaped how I approach engineering.</span>
        </h2>
      </div>

      {/* Education list */}
      <div className="exp-list edu-list" role="list">
        {education.map((edu, i) => (
          <div key={i} className="exp-item edu-item" role="listitem">
            <div className="exp-item-header">
              <div className="exp-company-info">
                <h3 className="exp-role-title">{edu.program}</h3>
                <div className="exp-company-meta">
                  <span className="exp-company-name">{edu.school}</span>
                  {edu.website && (
                    <a href={`https://${edu.website}`} target="_blank" rel="noopener noreferrer" className="exp-website">
                      {edu.website} ↗
                    </a>
                  )}
                </div>
              </div>
              <div className="exp-time-location">
                <span className="exp-period-badge">{edu.period}</span>
                {edu.location && <span className="exp-location-text">{edu.location}</span>}
              </div>
            </div>

            {edu.details && (
              <ul className="exp-responsibilities">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="exp-resp-item">{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
