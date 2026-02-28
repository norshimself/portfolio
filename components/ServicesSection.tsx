'use client';

import { useEffect, useRef, useState } from 'react';
import { services } from '@/data/portfolio';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FullStackIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

const BackendIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>
);

const DataIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12H3M3 12L8 17M3 12L8 7M21 12L16 17M21 12L16 7"/>
  </svg>
);

const DevOpsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const SERVICE_ICONS = [
  { bg: 'linear-gradient(135deg,#f8a060,#e03800)', Icon: FullStackIcon },
  { bg: 'linear-gradient(135deg,#a080f8,#4800e0)', Icon: BackendIcon },
  { bg: 'linear-gradient(135deg,#60d8f8,#0060e0)', Icon: DataIcon },
  { bg: 'linear-gradient(135deg,#80f880,#00a030)', Icon: DevOpsIcon },
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.accordion-item', {
        opacity: 0,
        x: -20,
        stagger: 0.15,
        duration: 0.8,
        immediateRender: false,
        scrollTrigger: {
          trigger: '#services',
          start: 'top 90%',
        }
      });

      gsap.from('.services-footer', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.5,
        immediateRender: false,
        scrollTrigger: {
          trigger: '.services-footer',
          start: 'top 98%',
        }
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="section-card" ref={containerRef}>
      <div className="section-label">My Services</div>

      <div>
        {services.map((svc, i) => (
          <div
            key={svc.id}
            className={`accordion-item${active === svc.id ? ' active' : ''}`}
            onClick={() => setActive(active === svc.id ? 0 : svc.id)}
          >
            <div className="accordion-head">
              <div
                className="accordion-icon-wrap"
                style={{ background: SERVICE_ICONS[i % SERVICE_ICONS.length].bg }}
                aria-hidden="true"
              >
                {(() => {
                  const IconComponent = SERVICE_ICONS[i % SERVICE_ICONS.length].Icon;
                  return <IconComponent />;
                })()}
              </div>
              <div className="accordion-title">{svc.title}</div>
              <sup className="accordion-num">({String(svc.id).padStart(2,'0')})</sup>
              <div className="accordion-toggle">+</div>
            </div>
            <div className="accordion-body">
              <div className="accordion-list">
                {svc.items.map((item, j) => (
                  <div key={j} className="accordion-list-item">{item}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="services-footer">
        <div className="worldwide-tag">
          Available to <strong>Worldwide</strong>
        </div>
        <a href="#contact" className="contact-link">
          Contact me
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
