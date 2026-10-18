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
 * Tiny, decorative Canvas 2D particle field.
 * Runs at ~30 fps only on non-data-saving desktop/tablet connections.
 * No React state updates in the animation loop.
 */
export default function AmbientEmbers() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const wideScreen = window.matchMedia('(min-width: 769px)');
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;

    if (
      reduceMotion.matches ||
      !wideScreen.matches ||
      connection?.saveData ||
      connection?.effectiveType === 'slow-2g' ||
      connection?.effectiveType === '2g'
    ) return;

    const context = canvas.getContext('2d', { alpha: true });
    if (!context) return;

    const shades = ['255,178,118', '253,117,85', '255,210,174', '187,152,202'];
    let width = 0;
    let height = 0;
    let sparks: Ember[] = [];
    let animationFrame: number | null = null;
    let lastDraw = 0;

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

      const count = width < 769 ? 0 : Math.min(28, Math.max(18, Math.round(width / 34)));
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

    const draw = (timestamp: number) => {
      animationFrame = null;

      if (document.hidden) return;
      if (timestamp - lastDraw < 32) {
        animationFrame = window.requestAnimationFrame(draw);
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

      animationFrame = window.requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      if (document.hidden) {
        if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
        animationFrame = null;
      } else if (animationFrame === null) {
        lastDraw = 0;
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);
    animationFrame = window.requestAnimationFrame(draw);

    return () => {
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="ambient-embers" aria-hidden="true" />;
}
