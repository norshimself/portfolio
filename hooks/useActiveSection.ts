'use client';

import { useEffect, useState } from 'react';
import { navLinks } from '@/data/portfolio';

/** A shared, scroll-based current-section indicator for the drawer and dock. */
export default function useActiveSection(): string {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);
    if (!sections.length) return;

    let frame: number | null = null;
    const measure = () => {
      const readingLine = Math.min(window.innerHeight * 0.38, 340);
      let current = sections[0].id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= readingLine) current = section.id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 3) {
        current = sections[sections.length - 1].id;
      }
      setActive((previous) => previous === current ? previous : current);
    };
    const schedule = () => {
      if (frame === null) {
        frame = window.requestAnimationFrame(() => {
          frame = null;
          measure();
        });
      }
    };

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('hashchange', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('hashchange', schedule);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return active;
}
