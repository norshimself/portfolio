'use client';

import { useEffect, useRef, useState } from 'react';
import { services } from '@/data/portfolio';
import EngineeringGlyph from '@/components/EngineeringGlyph';
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
  { bg: 'linear-gradient(135deg,#ffbd83,#d35356)', Icon: FullStackIcon },
  { bg: 'linear-gradient(135deg,#f69d74,#b9415d)', Icon: BackendIcon },
  { bg: 'linear-gradient(135deg,#c77b9c,#624375)', Icon: DataIcon },
  { bg: 'linear-gradient(135deg,#f0a86f,#915578)', Icon: DevOpsIcon },
];

const order = [2, 3, 1, 4];
const DIAGRAMS: Record<number, { kind: 'backend' | 'data' | 'fullstack' | 'cloud'; caption: string }> = {
  1: { kind: 'fullstack', caption: 'FRONTEND TO BACKEND' },
  2: { kind: 'backend', caption: 'SYSTEMS & API DESIGN' },
  3: { kind: 'data', caption: 'INGEST · TRANSFORM · DELIVER' },
  4: { kind: 'cloud', caption: 'DEPLOY · MONITOR · IMPROVE' },
};
const orderedServices = [...services].sort((a, b) => (
  order.indexOf(a.id) === -1 ? 99 : order.indexOf(a.id)
) - (
  order.indexOf(b.id) === -1 ? 99 : order.indexOf(b.id)
));

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(2);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.from('.accordion-item', {
        opacity: 0,
        x: -16,
        stagger: 0.12,
        duration: 0.55,
        immediateRender: false,
        scrollTrigger: { trigger: '#services', start: 'top 90%' },
      });
      ScrollTrigger.refresh();
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="section-card expertise-section" ref={containerRef}>
      <div className="section-label">What I bring to a team</div>
      <h2 className="expertise-heading">Engineering expertise</h2>
      <p className="expertise-intro">
        A closer look at the systems, integrations, and development challenges I enjoy solving.
      </p>

      <div className="expertise-accordions">
        {orderedServices.map((svc) => {
          const expanded = active === svc.id;
          const Icon = SERVICE_ICONS[(svc.id - 1) % SERVICE_ICONS.length].Icon;
          const panelId = 'service-panel-' + svc.id;
          const controlId = 'service-toggle-' + svc.id;

          return (
            <div key={svc.id} className={expanded ? 'accordion-item active' : 'accordion-item'}>
              <h3 className="accordion-heading">
                <button
                  id={controlId}
                  type="button"
                  className="accordion-head"
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => setActive(expanded ? null : svc.id)}
                >
                  <span
                    className="accordion-icon-wrap"
                    style={{ background: SERVICE_ICONS[(svc.id - 1) % SERVICE_ICONS.length].bg }}
                    aria-hidden="true"
                  >
                    <Icon />
                  </span>
                  <span className="accordion-title">{svc.title}</span>
                  <span className="accordion-num" aria-hidden="true">
                    {String(svc.id).padStart(2, '0')}
                  </span>
                  <span className="accordion-toggle" aria-hidden="true">+</span>
                </button>
              </h3>
              <div
                id={panelId}
                className="accordion-body"
                role="region"
                aria-labelledby={controlId}
                hidden={!expanded}
              >
                <div className="expertise-detail-layout">
                  <div className="expertise-visual" aria-hidden="true">
                    <EngineeringGlyph kind={DIAGRAMS[svc.id]?.kind ?? 'backend'} />
                    <span className="expertise-visual-caption">
                      {DIAGRAMS[svc.id]?.caption ?? 'ENGINEERING'}
                    </span>
                  </div>
                  <ul className="accordion-list">
                  {svc.items.map((item) => (
                    <li key={item} className="accordion-list-item">{item}</li>
                  ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="services-footer">
        <div className="worldwide-tag">Open to teams <strong>anywhere</strong></div>
        <a href="#contact" className="contact-link">
          Have a role in mind?
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
