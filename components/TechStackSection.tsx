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
    // Initial entrance animation
    const ctx = gsap.context(() => {
      // Title and Tabs entrance
      gsap.from('.tech-section-top', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.tech-section-top',
          start: 'top 90%',
          once: true,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Removed fade-in animation for cards as requested to make them appear instantly

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
