import React from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
// import { Layout } from '@components/Layout';
const inter = Inter({ subsets: ['latin'] });

import '@styles/globals.css';
import Layout from "../components/Layout";

//Note: Generate default data by this way
export const metadata: Metadata = {
  title: 'Home | My Stories & Memoirs',
  description: 'My Stories & Memoirs',
  applicationName: 'dn-app',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Daniel',
    'my stories',
    'my memories',
    'create stories',
    'create memories',
    'my stories & memoirs'
  ],
  creator: 'Daniel Nguyen',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  themeColor: '#ffffff',
  robots: 'max-image-preview:large',
  icons: {
    shortcut: {
      url: '/favicon/favicon.ico',
      type: 'image/x-icon'
    },
    icon: [
      {
        type: 'image/x-icon',
        rel: 'icon',
        url: '/favicon/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon/icon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/favicon/favicon-192x192.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/favicon/favicon-512x512.png'
      },
    ],
    apple: [
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        url: '/favicon/apple-touch-icon.png'
      }
    ],
  },
  openGraph: {
    locale: 'en_US',
    type: 'website',
    url: '/logo/logo.png',
    title: 'My Website',
    description: 'DN – My Stories & Memoirs',
    siteName: "DN",
    images: [
      {
        url: '/logo/logo.png',
        height: 630,
        width: 1200,
      }
    ],
  },
  twitter: {
    card: 'summary',
    title: 'DN – My Stories & Memoirs',
    description: 'DN – My Stories & Memoirs',
    site: "http://nguyenthangdev.com/",
    images: '/logo/logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
