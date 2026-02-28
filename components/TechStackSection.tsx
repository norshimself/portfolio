'use client';

import { useEffect, useRef, useState } from 'react';
import type Swiper from 'swiper';
import 'swiper/css';
import { techStack } from '@/data/portfolio';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TechStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);
  const swRef = useRef<Swiper | null>(null);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tech-card', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        immediateRender: false,
        scrollTrigger: {
          trigger: swiperRef.current,
          start: 'top 95%',
        }
      });
      ScrollTrigger.refresh();
    }, containerRef);

    let sw: Swiper | null = null;
    (async () => {
      const { default: SwiperLib } = await import('swiper');
      const { Autoplay } = await import('swiper/modules');
      if (!swiperRef.current) return;
      sw = new SwiperLib(swiperRef.current, {
        modules: [Autoplay],
        slidesPerView: 2,
        spaceBetween: 8,
        loop: true,
        autoplay: { delay: 0, disableOnInteraction: false },
        speed: 3000,
        breakpoints: { 640: { slidesPerView: 3 }, 900: { slidesPerView: 4 } },
      });
      swRef.current = sw;
      forceUpdate(n => n + 1);
    })();

    return () => {
      sw?.destroy(true, true);
      ctx.revert();
    };
  }, []);

  return (
    <section id="tech" className="section-card" ref={containerRef}>
      <div className="tech-section-title">Tech Stack</div>

      <div className="swiper" ref={swiperRef}>
        <div className="swiper-wrapper">
          {[...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="swiper-slide">
              <div className="tech-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="tech-card-logo"
                  onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="tech-card-name">{tech.name}</div>
                <div className="tech-card-desc">{tech.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
