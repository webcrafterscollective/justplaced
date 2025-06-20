// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Head from 'next/head'; // Import Head
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Just Placed Solutions - Expert Manpower Consultancy',
  description: 'Just Placed Solutions is a dynamic manpower consultancy dedicated to bridging the gap between skilled candidates and leading companies across all industries',
  // We can still keep the icons object for other purposes, but the direct link below will be more forceful for the main favicon
  icons: {
    icon: '/images/logo-circular.png',
    apple: '/images/logo-circular.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        {/* Directly linking the favicon */}
        <link rel="icon" href="/images/logo-circular.png" type="image/png" sizes="any" />
      </Head>
      <body className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}