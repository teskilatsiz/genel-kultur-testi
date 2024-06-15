import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Anasayfa from './anasayfa';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Genel Kültür Testi',
  description: 'Next.js, TypeScript ve Tailwind CSS ile geliştirildi.',
  icons: {
    icon: '/favicon.png', // Favicon dosyasının yolu
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Anasayfa />
      </body>
    </html>
  );
}