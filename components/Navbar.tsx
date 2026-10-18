'use client';

import { useEffect, useRef } from 'react';
import { navLinks } from '@/data/portfolio';

const links = navLinks.map((link) => ({ ...link, id: link.href.slice(1) }));

type Props = {
  open: boolean;
  onClose: () => void;
  active: string;
};

export default function Navbar({ open, onClose, active }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const navigatedRef = useRef(false);

  useEffect(() => {
    if (!open) return;

    navigatedRef.current = false;
    returnFocusRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const elements = panelRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href]:not([tabindex="-1"])'
      );
      if (!elements?.length) return;
      const first = elements[0];
      const last = elements[elements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
      if (!navigatedRef.current) returnFocusRef.current?.focus();
    };
  }, [open, onClose]);

  const goToSection = (id: string) => {
    navigatedRef.current = true;
    onClose();
    const target = document.getElementById(id);
    if (target) {
      target.tabIndex = -1;
      window.requestAnimationFrame(() => target.focus({ preventScroll: true }));
    }
  };

  return (
    <>
      <div
        id="portfolio-menu"
        ref={panelRef}
        className={open ? 'tf-sidebar-menu open' : 'tf-sidebar-menu'}
        role="dialog"
        aria-modal={open ? true : undefined}
        aria-labelledby="portfolio-menu-title"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="canvas-heading">
          <div>
            <p className="menu-eyebrow">EXPLORE</p>
            <h2 id="portfolio-menu-title" className="menu-title">Navigation</h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="close-canvas"
            aria-label="Close navigation menu"
            onClick={onClose}
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <nav aria-label="All portfolio sections">
          <ul className="sidebar-nav">
            {links.map((link, index) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={active === link.id ? 'active' : ''}
                  aria-current={active === link.id ? 'location' : undefined}
                  onClick={() => goToSection(link.id)}
                >
                  <span className="menu-link-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {link.label}
                  <span className="menu-link-arrow" aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="menu-contact">
          <span>Have something in mind?</span>
          <a href="mailto:nasroallah.elidrissi@gmail.com">Email me directly ↗</a>
        </div>
      </div>
      <div
        className={open ? 'overlay visible' : 'overlay'}
        onClick={onClose}
        aria-hidden="true"
      />
    </>
  );
}
