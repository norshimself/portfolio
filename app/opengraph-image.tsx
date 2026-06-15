import { ImageResponse } from 'next/og';
import { siteConfig } from '@/data/site';

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1208 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#F34F11',
            marginBottom: 24,
          }}
        >
          {`${siteConfig.location.city}, ${siteConfig.location.country}`}
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.1, display: 'flex' }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 48, fontWeight: 600, color: '#F34F11', marginTop: 8, display: 'flex' }}>
          {siteConfig.jobTitle}
        </div>
        <div style={{ fontSize: 32, color: '#a1a1aa', marginTop: 32, maxWidth: 900, display: 'flex' }}>
          Backend architecture · Data engineering · Full-stack development
        </div>
      </div>
    ),
    { ...size }
  );
}
