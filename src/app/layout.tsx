import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tourrecap.com'),
  title: {
    default: 'TourRecap',
    template: '%s | TourRecap',
  },
  description: 'Nightly guest + tour recaps for tour operators.',
  openGraph: {
    title: 'TourRecap',
    description: 'Nightly guest + tour recaps for tour operators.',
    siteName: 'TourRecap',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'TourRecap' }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TourRecap',
    description: 'Nightly guest + tour recaps for tour operators.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'TourRecap' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
