'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { techStack } from '@/data/portfolio';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TechStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(techStack.map((tech) => tech.category))];
  const filteredTech = activeCategory === 'All' ? techStack : techStack.filter(t => t.category === activeCategory);

  useEffect(() => {
    // Initial scroll animation for the top section (Title & Tabs)
    const ctx = gsap.context(() => {
      gsap.from('.tech-section-top', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: '.tech-section-top',
          start: 'top 95%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Re-animate cards when category changes (using fromTo to prevent opacity bugs)
    const ctx = gsap.context(() => {
      gsap.fromTo('.tech-card', 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.05, 
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.tech-grid',
            start: 'top 95%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section id="tech" className="section-card tech-stack-section" ref={containerRef}>
      <div className="tech-section-top">
        <div className="tech-section-title">Technical Arsenal</div>
        <div className="tech-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`tech-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="tech-grid">
        {filteredTech.map((tech, i) => (
          <div key={`${activeCategory}-${tech.name}`} className="tech-card glass-card">
            <Image src={tech.image} alt={tech.name} width={48} height={48} className="tech-card-logo" />
            <div className="tech-card-info">
              <div className="tech-card-name">{tech.name}</div>
              <div className="tech-card-desc">{tech.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
