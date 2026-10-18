'use client';

import { useEffect, useRef } from 'react';

type Ember = {
  x: number;
  y: number;
  radius: number;
  velocity: number;
  drift: number;
  phase: number;
  alpha: number;
  color: string;
};

/**
 * Tiny Canvas 2D ember field. No React state updates per frame.
 * Pauses off-screen, in background tabs, on small screens, and whenever
 * reduced motion is enabled; respects Save-Data / slow connections.
 */
export default function AmbientEmbers() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;

    if (
      connection?.saveData ||
      connection?.effectiveType === 'slow-2g' ||
      connection?.effectiveType === '2g'
    ) return;

    const context = canvas.getContext('2d', { alpha: true });
    if (!context) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const wideScreen = window.matchMedia('(min-width: 769px)');
    const shades = ['255,178,118', '253,117,85', '255,210,174', '187,152,202'];

    let width = 0;
    let height = 0;
    let sparks: Ember[] = [];
    let frameId: number | null = null;
    let lastDraw = 0;
    let onScreen = true;

    const resize = () => {
      const bounds = canvas.parentElement?.getBoundingClientRect();
      width = Math.ceil(bounds?.width || window.innerWidth);
      height = Math.ceil(bounds?.height || window.innerHeight);

      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const count = Math.min(28, Math.max(18, Math.round(width / 34)));
      sparks = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.7 + Math.random() * 1.25,
        velocity: 0.11 + Math.random() * 0.21,
        drift: (Math.random() - 0.5) * 0.17,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.15 + Math.random() * 0.27,
        color: shades[index % shades.length],
      }));
    };

    const shouldAnimate = () =>
      !document.hidden && onScreen && !reduceMotion.matches && wideScreen.matches;

    const draw = (timestamp: number) => {
      frameId = null;
      if (!shouldAnimate()) return;

      if (timestamp - lastDraw < 32) {
        frameId = window.requestAnimationFrame(draw);
        return;
      }

      const steps = lastDraw ? Math.min((timestamp - lastDraw) / 33, 2) : 1;
      lastDraw = timestamp;
      context.clearRect(0, 0, width, height);

      for (const ember of sparks) {
        ember.y -= ember.velocity * steps;
        ember.x += ember.drift * steps;

        if (ember.y < -6) {
          ember.y = height + 6;
          ember.x = Math.random() * width;
        }
        if (ember.x < -6) ember.x = width + 6;
        if (ember.x > width + 6) ember.x = -6;

        const shimmer = 0.8 + Math.sin(timestamp * 0.0012 + ember.phase) * 0.2;
        context.fillStyle = 'rgba(' + ember.color + ',' + (ember.alpha * shimmer).toFixed(3) + ')';
        context.beginPath();
        context.arc(ember.x, ember.y, ember.radius, 0, Math.PI * 2);
        context.fill();
      }

      frameId = window.requestAnimationFrame(draw);
    };

    const synchronize = () => {
      if (shouldAnimate() && frameId === null) {
        lastDraw = 0;
        frameId = window.requestAnimationFrame(draw);
      } else if (!shouldAnimate() && frameId !== null) {
        window.cancelAnimationFrame(frameId);
        frameId = null;
        context.clearRect(0, 0, width, height);
      }
    };

    const onResize = () => {
      resize();
      synchronize();
    };

    resize();
    window.addEventListener('resize', onResize, { passive: true });
    document.addEventListener('visibilitychange', synchronize);
    reduceMotion.addEventListener('change', synchronize);
    wideScreen.addEventListener('change', synchronize);

    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver((entries) => {
          onScreen = entries[0]?.isIntersecting ?? true;
          synchronize();
        }, { rootMargin: '80px' })
      : null;

    if (observer) observer.observe(canvas.parentElement || canvas);
    synchronize();

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      observer?.disconnect();
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', synchronize);
      reduceMotion.removeEventListener('change', synchronize);
      wideScreen.removeEventListener('change', synchronize);
    };
  }, []);

  return <canvas ref={canvasRef} className="ambient-embers" aria-hidden="true" />;
}
