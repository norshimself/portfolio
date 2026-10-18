import { ImageResponse } from 'next/og';
import { siteConfig } from '@/data/site';

export const alt = siteConfig.name + ' — Backend & Data Engineering, Afterglow Portfolio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Server-generated social image using the same sunset palette as the site. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          padding: '74px 78px',
          color: '#f9f0eb',
          background: 'linear-gradient(120deg, #0b0d16 0%, #211727 58%, #30203e 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: -155,
            top: 25,
            width: 680,
            height: 680,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,166,106,.22) 0%, rgba(220,81,103,.08) 50%, transparent 74%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 88,
            top: 138,
            width: 290,
            height: 290,
            borderRadius: '50%',
            background: 'linear-gradient(180deg, #ffd3a4 0%, #ffad71 52%, #ef6b4b 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 57,
            top: 341,
            width: 355,
            height: 7,
            background: '#392137',
            opacity: .88,
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 389,
            width: 520,
            height: 12,
            background: '#281b31',
            opacity: .9,
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 62,
            top: 424,
            width: 515,
            height: 2,
            background: '#ffad71',
            opacity: .65,
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1, width: 880 }}>
          <div style={{ display: 'flex', color: '#ffad71', fontSize: 22, letterSpacing: 5, fontWeight: 700, marginBottom: 28 }}>
            BACKEND · DATA · INTEGRATIONS
          </div>
          <div style={{ display: 'flex', fontSize: 80, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, maxWidth: 930 }}>
            {siteConfig.name}
          </div>
          <div style={{ display: 'flex', fontSize: 43, fontWeight: 700, color: '#ffd3a4', marginTop: 18 }}>
            {siteConfig.jobTitle}
          </div>
          <div style={{ display: 'flex', fontSize: 26, color: '#e3d5d2', marginTop: 42 }}>
            Reliable systems for complex engineering challenges.
          </div>
          <div style={{ display: 'flex', marginTop: 40, width: 190, height: 3, background: '#ef6b4b' }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
