import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Valley View University ? Modern Redesign',
    template: '%s ? Valley View University'
  },
  description:
    'An inspiring, modern redesign of Valley View University with vibrant UI, clear navigation, and an engaging experience for students and visitors.',
  metadataBase: new URL('https://agentic-1b8ea564.vercel.app'),
  openGraph: {
    title: 'Valley View University ? Modern Redesign',
    description:
      'An inspiring, modern redesign of Valley View University with vibrant UI, clear navigation, and an engaging experience for students and visitors.',
    type: 'website',
    url: 'https://agentic-1b8ea564.vercel.app'
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
