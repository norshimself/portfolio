'use client';

import { useEffect, useRef } from 'react';

export default function EtherealBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    // Simple custom fluid animation loop for the glowing orbs
    const orbs = document.querySelectorAll('.ethereal-orb');
    let time = 0;

    const animate = () => {
      time += 0.005;
      orbs.forEach((orb, i) => {
        const speed = 1 + i * 0.2;
        const xOffset = Math.sin(time * speed) * 15;
        const yOffset = Math.cos(time * speed * 1.5) * 15;
        const scale = 1 + Math.sin(time * speed * 0.8) * 0.1;
        
        (orb as HTMLElement).style.transform = `translate(${xOffset}vw, ${yOffset}vh) scale(${scale})`;
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: -1,
        background: '#000000',
        width: '100vw',
        height: '100vh',
      }}
    >
      {/* Noise overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 10,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
      
      {/* Ethereal glowing orbs */}
      <div 
        style={{ 
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          overflow: 'hidden',
          filter: 'blur(100px)',
          opacity: 0.8,
          mixBlendMode: 'screen',
        }}
      >
        <div 
          className="ethereal-orb"
          style={{ 
            position: 'absolute',
            top: '-10%',
            left: '-10%',
            width: '50vw',
            height: '50vh',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(243,79,17,0.8) 0%, rgba(243,79,17,0) 70%)' 
          }}
        />
        <div 
          className="ethereal-orb"
          style={{ 
            position: 'absolute',
            top: '40%',
            right: '-10%',
            width: '60vw',
            height: '60vh',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(243,79,17,0.5) 0%, rgba(37,99,235,0.4) 40%, rgba(0,0,0,0) 70%)' 
          }}
        />
        <div 
          className="ethereal-orb"
          style={{ 
            position: 'absolute',
            bottom: '-20%',
            left: '20%',
            width: '50vw',
            height: '70vh',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(243,79,17,0.6) 0%, rgba(243,79,17,0) 80%)' 
          }}
        />
      </div>
      
      {/* Overlay to darken slightly and blend */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          zIndex: 0,
        }} 
      />
    </div>
  );
}
