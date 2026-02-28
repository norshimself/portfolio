import type { Metadata } from 'next';
import { Rajdhani } from 'next/font/google';
import './globals.css';

const rajdhani = Rajdhani({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rajdhani',
});

export const metadata: Metadata = {
  title: 'Nasroallah Elidrissi – Software Engineer',
  description:
    'Personal portfolio of Nasroallah Elidrissi, a Software Engineer. Specialized in Backend Architecture, Data Engineering, and Full-Stack Development.',
  keywords: ['portfolio', 'software engineer', 'backend', 'data integration', 'nestjs', 'react'],
  authors: [{ name: 'Nasroallah Elidrissi' }],
  openGraph: {
    title: 'Nasroallah Elidrissi – Software Engineer',
    description: 'Results-driven Software Engineer with expertise in full-stack development, backend architecture, and data integration.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nasroallah Elidrissi – Software Engineer',
    description: 'Results-driven Software Engineer with expertise in full-stack development, backend architecture, and data integration.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className={rajdhani.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
