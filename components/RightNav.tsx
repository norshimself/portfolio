'use client';

import { rightNavLinks } from '@/data/portfolio';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// SVG icons matching the reference right nav
const NavIcons: Record<string, React.ReactElement> = {
  home: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>,
  experience: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>,
  works: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  services: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>,
  education: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 2.7 2.5 6 2.5s6-1 6-2.5v-5"/><line x1="22" y1="10" x2="22" y2="15"/></svg>,
  about: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  blog: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4.5A2.5 2.5 0 016.5 2H20v19H6.5A2.5 2.5 0 014 18.5V4.5z"/><path d="M4 18.5A2.5 2.5 0 016.5 16H20M8 7h8M8 11h6"/></svg>,
  contact: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  faqs: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
};

// Short labels for the compact mobile bottom dock
const dockLabels: Record<string, string> = {
  home: 'Home',
  experience: 'Career',
  education: 'Studies',
  services: 'Skills',
  works: 'Work',
  faqs: 'FAQs',
  contact: 'Contact',
};

const innerPages = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/projects', label: 'Projects', icon: 'works' },
  { href: '/blog', label: 'Writing', icon: 'blog' },
  { href: '/#experience', label: 'Experience', icon: 'experience' },
  { href: '/#contact', label: 'Contact', icon: 'contact' },
];

export default function RightNav({ active }: { active: string }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const links = isHome ? rightNavLinks : innerPages;

  return (
    <nav className="right-nav-wrapper" aria-label="Quick section navigation">
      <ul className="right-nav">
        {links.map(link => {
          const id = link.href.startsWith('#') ? link.href.slice(1) : link.icon;
          const selected = isHome
            ? active === id
            : (link.href === '/projects' && pathname.startsWith('/projects')) ||
              (link.href === '/blog' && pathname.startsWith('/blog'));
          return (
            <li key={link.href}>
              <Link href={link.href} className={selected ? 'active' : ''}
                aria-label={link.label}
                aria-current={selected ? (isHome ? 'location' : 'page') : undefined}>
                {NavIcons[link.icon] ?? NavIcons.home}
                <span className="nav-tooltip" aria-hidden="true">{link.label}</span>
                <span className="nav-dock-label" aria-hidden="true">
                  {dockLabels[id] ?? link.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
