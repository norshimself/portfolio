'use client';

import { useEffect, useRef } from 'react';
import { techStack } from '@/data/portfolio';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TechStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tech-section-title', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: '.tech-section-title',
          start: 'top 95%',
        }
      });

      gsap.from('.tech-marquee-row', {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: '.tech-marquee-container',
          start: 'top 90%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Split tech stack into two rows for the marquee
  const midPoint = Math.ceil(techStack.length / 2);
  const row1 = techStack.slice(0, midPoint);
  const row2 = techStack.slice(midPoint);

  return (
    <section id="tech" className="section-card tech-stack-section" ref={containerRef}>
      <div className="tech-section-title">Technical Arsenal</div>

      <div className="tech-marquee-container">
        {/* Row 1: Left to Right */}
        <div className="tech-marquee-row marquee-ltr">
          <div className="marquee-content">
            {[...row1, ...row1, ...row1].map((tech, i) => (
              <div key={i} className="tech-card glass-card">
                <img src={tech.image} alt={tech.name} className="tech-card-logo" />
                <div className="tech-card-info">
                  <div className="tech-card-name">{tech.name}</div>
                  <div className="tech-card-desc">{tech.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="tech-marquee-row marquee-rtl">
          <div className="marquee-content">
            {[...row2, ...row2, ...row2].map((tech, i) => (
              <div key={i} className="tech-card glass-card">
                <img src={tech.image} alt={tech.name} className="tech-card-logo" />
                <div className="tech-card-info">
                  <div className="tech-card-name">{tech.name}</div>
                  <div className="tech-card-desc">{tech.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
