'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Nonessential decorative video: only load it on desktop, after the page
 * finishes loading, and never on reduced-motion or data-saving connections.
 */
export default function VideoBackground() {
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;

    if (
      !window.matchMedia('(min-width: 1025px)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      connection?.saveData ||
      connection?.effectiveType === 'slow-2g' ||
      connection?.effectiveType === '2g'
    ) {
      return;
    }

    let idleId: number | undefined;
    let timeoutId: number | undefined;
    const schedule = () => {
      if (typeof window.requestIdleCallback === 'function') {
        idleId = window.requestIdleCallback(() => setReady(true), { timeout: 2000 });
      } else {
        timeoutId = window.setTimeout(() => setReady(true), 600);
      }
    };

    if (document.readyState === 'complete') {
      schedule();
    } else {
      window.addEventListener('load', schedule, { once: true });
    }

    return () => {
      window.removeEventListener('load', schedule);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !ready) return;

    const handleVisibility = () => {
      if (document.hidden) {
        video.pause();
      } else {
        void video.play().catch(() => {
          // Autoplay is decorative, so an autoplay block should not affect UX.
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    handleVisibility();
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [ready]);

  if (!ready) return null;

  return (
    <video
      ref={videoRef}
      className="body-overlay"
      muted
      autoPlay
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
    </video>
  );
}
