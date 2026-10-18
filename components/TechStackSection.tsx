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
  const [showAll, setShowAll] = useState(false);

  const categories = ['All', ...new Set(techStack.map((tech) => tech.category))];
  const levelRank = { core: 0, proficient: 1, familiar: 2 } as const;
  const levelLabel = { core: 'Core', proficient: 'Proficient', familiar: 'Familiar' } as const;
  const filteredTech = (activeCategory === 'All' ? techStack : techStack.filter(t => t.category === activeCategory))
    .slice()
    .sort((a, b) => levelRank[a.level] - levelRank[b.level]);

  const visibleTech = activeCategory === 'All' && !showAll ? filteredTech.slice(0, 12) : filteredTech;

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
        <h2 className="tech-section-title">What I build with</h2>
        <div className="tech-legend" aria-hidden="true">
          <span className="tech-legend-item"><span className="tech-dot level-core" /> Core</span>
          <span className="tech-legend-item"><span className="tech-dot level-proficient" /> Proficient</span>
          <span className="tech-legend-item"><span className="tech-dot level-familiar" /> Familiar</span>
        </div>
        <div className="tech-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`tech-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => { setActiveCategory(cat); setShowAll(false); }} aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="tech-grid">
        {visibleTech.map((tech) => (
          <div key={`${activeCategory}-${tech.name}`} className={`tech-card glass-card level-${tech.level}`}>
            <span className={`tech-card-level level-${tech.level}`} title={levelLabel[tech.level]}>
              <span className={`tech-dot level-${tech.level}`} aria-hidden="true" />
              {levelLabel[tech.level]}
            </span>
            {tech.image ? (
              <Image
                src={tech.image}
                alt=""
                width={44}
                height={44}
                sizes="44px"
                loading="lazy"
                className="tech-card-logo"
              />
            ) : (
              <span className="tech-card-fallback" aria-hidden="true">
                {tech.name.includes(' ')
                  ? tech.name.split(' ').map(part => part.charAt(0)).join('').slice(0, 2).toUpperCase()
                  : tech.name.slice(0, 2).toUpperCase()}
              </span>
            )}
            <div className="tech-card-info">
              <div className="tech-card-name">{tech.name}</div>
              <div className="tech-card-desc">{tech.description}</div>
            </div>
          </div>
        ))}
      </div>
      {activeCategory === 'All' && filteredTech.length > 12 && (
        <button type="button" className="tech-show-more" onClick={() => setShowAll(!showAll)} aria-expanded={showAll}>
          {showAll ? 'Show featured technologies' : 'View all ' + filteredTech.length + ' technologies'}
        </button>
      )}
    </section>
  );
}
