'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import SunsetHeroArt from '@/components/SunsetHeroArt';
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
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

      tl.from('.sunset-hero-art', { opacity: 0, duration: 1.8 })
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
      <SunsetHeroArt />
      
      <div className="hero-content-wrap">
        <div className="hero-location">Casablanca, Morocco · {time}</div>

        <div className="section-label hero-intro-label">Hi, I&apos;m Nasroallah — Backend &amp; Data Engineer</div>

        <h1 className="hero-title">
          <span>I build backends that</span><br/>
          <span className="text-gradient">hold up under pressure.</span>
        </h1>

        <p className="hero-desc">
          I like the unglamorous parts — turning messy, third-party data into
          <strong> clean APIs and pipelines</strong> that keep working when the
          traffic, rate limits, and edge cases all show up at once.
        </p>

        <ul className="hero-tags" aria-label="Specializations">
          {['Backend APIs', 'Data Pipelines', 'Integrations', 'Cloud & Deploys'].map(tag => (
            <li key={tag}><a href="#services">{tag}</a></li>
          ))}
        </ul>
        <div className="hero-actions">
          <a href="#works" className="hero-primary-link">Explore my work <span aria-hidden="true">↗</span></a>
          <a href="#contact" className="hero-secondary-link">Get in touch</a>
        </div>
      </div>

      {/* Scroll Discovery */}
      <a href="#works" className="scroll-discovery" aria-label="Scroll to featured projects">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>See featured projects</span>
      </a>
    </section>
  );
}
