import type { Metadata, Viewport } from 'next';
// import localFont from 'next/font/local';
import '../globals.css';
import { Navbar } from './components/nav-bar';
// import { Navbar } from '@/components/nav-bar';
import { Footer } from './components/footer';
import { Roboto } from 'next/font/google';
import { Toaster } from 'sonner';

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
  title: {
    default: 'All In Freediving and Tour Services',
    template: '%s | All In Freediving and Tour Services',
  },
  description:
    'At All In Freediving and Tour Services, we specialize in crafting unforgettable, premium travel experiences across the Philippines.  Whether youre seeking the thrill of freediving in crystal-clear waters, exploring stunning islands on a luxurious island-hopping tour, or embarking on scenic land adventures, we offer the best of both land and sea. Our bespoke tours are designed to bring you closer to the unparalleled beauty and culture of this tropical paradise.',
  alternates: {
    canonical: 'https://www.allinfreedivingandtourservices.com/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${roboto.className} antialiased`}>
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
