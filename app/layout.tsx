import type { Metadata, Viewport } from 'next';
import { Geist, Rajdhani } from 'next/font/google';
import './globals.css';
import './ux.css';
import './sunset.css';
import './sidebar.css';
import StructuredData from '@/components/StructuredData';
import { siteConfig } from '@/data/site';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Self-hosted by Next.js at build time; no runtime Google Fonts stylesheet.
const geist = Geist({ subsets: ['latin'], display: 'swap', variable: '--font-geist' });

const rajdhani = Rajdhani({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rajdhani',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'technology',
  applicationName: siteConfig.title,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    url: siteConfig.url,
    siteName: siteConfig.title,
    type: 'website',
    locale: siteConfig.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0b0d16',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className={`${geist.variable} ${rajdhani.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <StructuredData />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
