'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const netRef = useRef<HTMLSpanElement>(null);
  const rateRef = useRef<HTMLSpanElement>(null);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Casablanca',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      // Text and tags reveal
      tl.from('.hero-location', { opacity: 0, y: 20, duration: 0.8, immediateRender: false })
        .from('.hero-intro-label', { opacity: 0, scale: 0.9, immediateRender: false }, '-=0.6')
        .from('.hero-title', { opacity: 0, y: 30, stagger: 0.2, immediateRender: false }, '-=0.6')
        .from('.hero-desc', { opacity: 0, y: 20, immediateRender: false }, '-=0.6')
        .from('.hero-tags li', { opacity: 0, x: -10, stagger: 0.1, immediateRender: false }, '-=0.6')
        .from('.hero-counter', { opacity: 0, y: 20, stagger: 0.2, immediateRender: false }, '-=0.4');

      // Counter animation
      const animateCounter = (ref: any, target: number) => {
        gsap.to({ val: 0 }, {
          val: target,
          duration: 2,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 95%',
            once: true,
          },
          onUpdate: function() {
            if (ref.current) ref.current.textContent = Math.floor(this.targets()[0].val).toString();
          }
        });
      };

      animateCounter(netRef, 20);
      animateCounter(rateRef, 98);

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="section-card section-hero" ref={containerRef}>
      <div className="hero-location">Casablanca, Morocco · {time}</div>

      <div className="section-label hero-intro-label">Introduction</div>

      <h1 className="hero-title">
        Building Scalable and<br/>Secure Systems
      </h1>

      <p className="hero-desc">
        Results-driven Software Engineer with expertise in full-stack development, backend architecture, and data integration.
      </p>

      <ul className="hero-tags" aria-label="Specializations">
        {['Backend Architecture', 'Data Integration', 'RESTful APIs', 'Cloud DevOps'].map(tag => (
          <li key={tag}><a href="#services">{tag}</a></li>
        ))}
      </ul>

      <div className="hero-counters">
        <div className="hero-counter">
          <div className="hero-counter-label">Complex Integrations</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
            <span ref={netRef} className="hero-counter-num">0</span>
            <span className="hero-counter-suffix">+</span>
          </div>
        </div>
        <div className="hero-counter">
          <div className="hero-counter-label">Success Rate</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
            <span ref={rateRef} className="hero-counter-num">0</span>
            <span className="hero-counter-suffix">%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
