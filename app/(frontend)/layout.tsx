import type { Metadata, Viewport } from 'next';
// import localFont from 'next/font/local';
import '../globals.css';
import { Navbar } from './components/nav-bar';
// import { Navbar } from '@/components/nav-bar';
import { Footer } from './components/footer';
import { Roboto } from 'next/font/google';

// const geistSans = localFont({
//   src: '../fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: '../fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'All in travel and freediving tours',
  description:
    'At All In Freediving and Tour Services, we specialize in crafting unforgettable, premium travel experiences across the Philippines.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${roboto.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
