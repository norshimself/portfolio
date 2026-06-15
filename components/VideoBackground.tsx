'use client';

import { useEffect, useState } from 'react';

export default function VideoBackground() {
  // Defer the heavy background video until the page has finished its initial
  // load so it never competes with FCP/LCP-critical resources. The dark
  // EtherealBackground sits behind everything meanwhile, so there's no flash.
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const start = () => {
      const idle =
        (window as Window & {
          requestIdleCallback?: (cb: () => void) => number;
        }).requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1));
      idle(() => setReady(true));
    };

    if (document.readyState === 'complete') {
      start();
    } else {
      window.addEventListener('load', start, { once: true });
      return () => window.removeEventListener('load', start);
    }
  }, []);

  if (!ready) return null;

  return (
    <video
      className="body-overlay"
      muted
      autoPlay
      loop
      playsInline
      preload="none"
      aria-hidden="true"
    >
      <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
    </video>
  );
}
