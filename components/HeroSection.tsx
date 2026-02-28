'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Casablanca',
        hour: '2-digit', minute: '2-digit', hour12: true
      }).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

      tl.from('.hero-grid-bg', { opacity: 0, duration: 2 })
        .from('.hero-location', { opacity: 0, y: 20 }, '-=1.5')
        .from('.hero-intro-label', { opacity: 0, x: -20 }, '-=1.2')
        .from('.hero-title span', { opacity: 0, y: 40, stagger: 0.2 }, '-=1')
        .from('.hero-desc', { opacity: 0, y: 20 }, '-=0.8')
        .from('.hero-tags li', { opacity: 0, scale: 0.9, stagger: 0.1 }, '-=0.8')
        .from('.scroll-discovery', { opacity: 0, y: -10, repeat: -1, yoyo: true, duration: 1.5 }, '-=0.4');

      ScrollTrigger.refresh();
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="section-card section-hero" ref={containerRef}>
      {/* Technical Grid Background */}
      <div className="hero-grid-bg" aria-hidden="true" />
      
      <div className="hero-content-wrap">
        <div className="hero-location">Casablanca, Morocco · {time}</div>

        <div className="section-label hero-intro-label">Introduction</div>

        <h1 className="hero-title">
          <span>Building Scalable</span><br/>
          <span className="text-gradient">Secure Systems</span>
        </h1>

        <p className="hero-desc">
          High-performance Software Engineer specializing in <strong>Backend Architecture</strong>, 
          distributed systems, and complex data orchestration.
        </p>

        <ul className="hero-tags" aria-label="Specializations">
          {['Cloud Infrastructure', 'Data Pipelines', 'API Design', 'System Security'].map(tag => (
            <li key={tag}><a href="#services">{tag}</a></li>
          ))}
        </ul>
      </div>

      {/* Scroll Discovery */}
      <a href="#experience" className="scroll-discovery" aria-label="Scroll to experience">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Explore Experience</span>
      </a>
    </section>
  );
}
