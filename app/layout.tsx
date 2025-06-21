import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nemetrix Technologies - Advanced AI Solutions',
  description: 'Leading AI startup providing cutting-edge machine learning solutions, data annotation, transcription services, and custom AI development.',
  keywords: 'AI, artificial intelligence, machine learning, data annotation, transcription, AI development',
  authors: [{ name: 'Nemetrix Technologies' }],
  openGraph: {
    title: 'Nemetrix Technologies - Advanced AI Solutions',
    description: 'Leading AI startup providing cutting-edge machine learning solutions, data annotation, transcription services, and custom AI development.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-neutral-gray via-light-blue to-white">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

