'use client';

import { useEffect, useRef } from 'react';
import { processSteps } from '@/data/portfolio';
import { Layout, Code, ShieldCheck, Ship } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ICONS = [Layout, Code, ShieldCheck, Ship];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate line drawing
      gsap.to(lineRef.current, {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.process-timeline',
          start: 'top 80%',
          end: 'bottom 80%',
          scrub: true,
        }
      });

      // Animate step activation
      const steps = gsap.utils.toArray('.process-step-item');
      steps.forEach((step: any) => {
        ScrollTrigger.create({
          trigger: step,
          start: 'top 80%',
          end: 'bottom 80%',
          onEnter: () => step.classList.add('active'),
          onLeaveBack: () => step.classList.remove('active'),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="section-card" ref={containerRef}>
      <div className="section-label">My Process</div>
      <div className="process-timeline">
        <div className="process-line-draw" ref={lineRef} />
        {processSteps.map((step, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <div key={i} className="process-step-item">
              <div className="process-milestone">
                <Icon size={24} />
              </div>
              <div className="process-content">
                <span className="process-step-tag">Step {i + 1}</span>
                <h3 className="process-title">{step.title.replace('\n', ' ')}</h3>
                <p className="process-desc">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
