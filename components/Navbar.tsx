'use client';

import { useState, useEffect } from 'react';
import { navLinks } from '@/data/portfolio';

// Derive id from href e.g. '#home' → 'home'
const links = navLinks.map(n => ({ ...n, id: n.href.replace('#', '') }));

export default function Navbar({ open, onClose }: { open: boolean; onClose: () => void }) {

  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = links.map(n => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive((e.target as HTMLElement).id); }),
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);



  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Sliding navigation panel */}
      <nav id="portfolio-menu" inert={!open} aria-hidden={!open} className={`tf-sidebar-menu${open ? ' open' : ''}`} aria-label="Main navigation">
        <div className="canvas-heading" style={{ justifyContent: 'flex-end' }}>
          <button className="close-canvas" aria-label="Close menu" onClick={() => onClose()}>✕</button>
        </div>
        <ul className="sidebar-nav">
          {links.map(link => (
            <li key={link.id}>
              <a
                href={link.href}
                className={active === link.id ? 'active' : ''}
                onClick={() => { setActive(link.id); setOpen(false); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay */}
      <div
        className={`overlay${open ? ' visible' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
