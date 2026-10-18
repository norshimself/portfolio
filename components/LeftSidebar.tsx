'use client';

import Image from 'next/image';
import { siteConfig } from '@/data/site';
import { socialLinks } from '@/data/portfolio';

type LeftSidebarProps = {
  menuOpen: boolean;
  onMenuOpen: () => void;
};

function OrbitMark() {
  return (
    <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <circle cx="21" cy="21" r="8" fill="#EF6B4B" fillOpacity=".18" stroke="#FFAD71" strokeWidth="1.5" />
      <ellipse cx="21" cy="21" rx="19" ry="8" transform="rotate(-27 21 21)" stroke="#FFD3A4" strokeWidth="1.35" />
      <circle cx="37" cy="13" r="2.2" fill="#FFD3A4" />
      <path d="M21 10V6M21 36V32" stroke="#FFAD71" strokeOpacity=".65" strokeLinecap="round" />
    </svg>
  );
}

function ProfileOrbit() {
  return (
    <svg viewBox="0 0 300 255" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="profile-orbit-stroke" x1="22" y1="25" x2="270" y2="214" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD3A4" stopOpacity=".45" />
          <stop offset=".55" stopColor="#EF6B4B" stopOpacity=".28" />
          <stop offset="1" stopColor="#7A4A79" stopOpacity=".16" />
        </linearGradient>
      </defs>
      <ellipse cx="149" cy="127" rx="128" ry="58" transform="rotate(-25 149 127)" stroke="url(#profile-orbit-stroke)" strokeWidth="1.25" />
      <ellipse cx="149" cy="127" rx="109" ry="103" stroke="#F7C9AB" strokeOpacity=".15" strokeDasharray="3 9" />
      <circle cx="260" cy="76" r="5" fill="#FFD3A4" />
      <circle cx="260" cy="76" r="13" stroke="#FFD3A4" strokeOpacity=".22" />
      <circle cx="29" cy="178" r="3" fill="#ECA3A9" />
      <path d="M30 32V49M22 40H39M267 206V224M258 215H276" stroke="#FFD3A4" strokeOpacity=".38" strokeLinecap="round" />
      <path d="M29 235H96M201 26H261" stroke="#FFAD71" strokeOpacity=".18" />
    </svg>
  );
}

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M3 15L15 3M15 3H6M15 3V12" />
    </svg>
  ) : (
    <svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M3 9H15M10 4L15 9L10 14" />
    </svg>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name === 'LinkedIn') {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8 19H5V9h3v10zM6.5 7.6a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM20 19h-3v-5.4c0-3.1-4-3.3-4 0V19h-3V9h3v1.6c1.2-2.2 7-2.3 7 2.7V19z" />
      </svg>
    );
  }
  if (name === 'GitHub') {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M12 .5A11.5 11.5 0 008.36 23c.58.1.79-.25.79-.56v-2.04c-3.22.7-3.9-1.36-3.9-1.36-.53-1.34-1.3-1.69-1.3-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.37.96.1-.74.4-1.25.74-1.54-2.58-.29-5.29-1.29-5.29-5.73 0-1.27.45-2.3 1.2-3.11-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.19 1.19a11.1 11.1 0 015.81 0c2.22-1.5 3.19-1.19 3.19-1.19.63 1.6.23 2.78.11 3.07.75.81 1.2 1.84 1.2 3.11 0 4.45-2.72 5.43-5.31 5.72.42.36.8 1.06.8 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0012 .5z" />
      </svg>
    );
  }
  if (name === 'Email') {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M3 7L12 13.5L21 7" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12H21M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
    </svg>
  );
}

export default function LeftSidebar({ menuOpen, onMenuOpen }: LeftSidebarProps) {
  return (
    <aside className="left-sidebar" aria-label="Profile and contact">
      <div className="sidebar-card sidebar-profile">
        <div className="sidebar-top">
          <div className="sidebar-brand" aria-label="Afterglow portfolio">
            <span className="sidebar-brand-symbol"><OrbitMark /></span>
            <span className="sidebar-brand-copy">
              <strong>AFTERGLOW</strong>
              <small>PERSONAL PORTFOLIO</small>
            </span>
          </div>
          <button
            className="tf-btn-menu sidebar-menu-control"
            type="button"
            onClick={onMenuOpen}
            aria-label="Open navigation menu"
            aria-controls="portfolio-menu"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
          >
            <svg width="19" height="19" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" focusable="false">
              <path d="M3 5H17M6 10H17M3 15H17" />
            </svg>
          </button>
        </div>

        <div className="sidebar-portrait-stage">
          <span className="sidebar-portrait-glow" aria-hidden="true" />
          <span className="sidebar-orbit-field" aria-hidden="true"><ProfileOrbit /></span>
          <div className="sidebar-avatar">
            <Image
              src="/assets/images/about/profile.webp"
              alt={'Portrait of ' + siteConfig.name}
              width={190}
              height={238}
              sizes="(max-width: 480px) 40px, (max-width: 1024px) 44px, 190px"
              priority
              className="sidebar-profile-image"
            />
          </div>
          <span className="sidebar-portrait-status" aria-hidden="true" />
          <span className="sidebar-photo-note" aria-hidden="true">CASABLANCA · MA</span>
        </div>

        <div className="sidebar-identity">
          <span className="sidebar-identity-kicker">BACKEND / DATA / APIs</span>
          <h2 className="sidebar-signature">{siteConfig.name}</h2>
          <p className="sidebar-role">{siteConfig.jobTitle}</p>
        </div>

        <p className="sidebar-intro">
          Building dependable APIs, data integrations, and the systems behind them.
        </p>

        <div className="sidebar-availability">
          <span className="sidebar-availability-dot" aria-hidden="true" />
          <span>Open to <strong>full-time roles</strong></span>
        </div>

        <ul className="sidebar-specialties" aria-label="Engineering focus areas">
          <li>Backend systems</li>
          <li>Data integration</li>
          <li>API architecture</li>
        </ul>

        <div className="sidebar-footer">
          <div className="sidebar-actions">
            <a className="sidebar-cta sidebar-primary-action" href="#contact" aria-label="Go to contact section">
              <span>Let&apos;s connect</span>
              <span className="cta-arrow"><ArrowIcon diagonal /></span>
            </a>
            <a className="sidebar-secondary-action" href="#works">
              <span>Explore selected work</span>
              <ArrowIcon />
            </a>
          </div>

          <div className="sidebar-social-wrap">
            <div className="sidebar-social-heading">
              <span>ELSEWHERE</span>
              <span className="sidebar-social-rule" aria-hidden="true" />
            </div>
            <ul className="sidebar-social" aria-label="Social and contact links">
              {socialLinks.map((social) => {
                const external = social.href.startsWith('https://');
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      aria-label={external ? 'Visit ' + social.label + ' in a new tab' : 'Send an email'}
                      title={social.label}
                    >
                      <SocialIcon name={social.label} />
                      <span>{social.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="sidebar-footer-note">
            <span className="sidebar-footer-indicator" aria-hidden="true" />
            {siteConfig.location.city}, {siteConfig.location.country} · Remote-friendly
          </div>
        </div>
      </div>
    </aside>
  );
}
