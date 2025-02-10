import Image from 'next/image';
import { FooterNav } from './footer-nav';

export const Footer = () => {
  return (
    <footer className='bg-blue-950'>
      <section className='container mx-auto py-10'>
        <div className='flex flex-col mx-4 md:flex-row text-center items-center md:text-start md:items-start gap-4'>
          <div className='md:w-1/2 w-full space-y-4'>
            <div className='flex items-center justify-center md:items-start md:justify-start'>
              <Image src='/logo.png' width={150} height={60} alt='logo' />
            </div>
            <p className='text-white md:text-justify text-center'>
              We specialize in crafting unforgettable, premium travel
              experiences across the Philippines. Whether you&apos;re seeking
              the thrill of freediving in crystal-clear waters, exploring
              stunning islands on a luxurious island-hopping tour, or embarking
              on scenic land adventures, we offer the best of both land and sea.
              Our bespoke tours are designed to bring you closer to the
              unparalleled beauty and culture of this tropical paradise.
            </p>
          </div>
          <div className='md:w-1/4 flex flex-col md:items-start items-center'>
            <h4 className='text-2xl text-sky-600'>Important Links</h4>
            <FooterNav />
          </div>

          <div className='md:w-1/4 space-y-4 flex flex-col md:items-start items-center'>
            <h4 className='text-2xl text-sky-600'>Open Hours</h4>
            <ul className='text-white'>
              <li>7:00 AM to 10:00 PM</li>
              <li>Coron, Palawan - Region IV-B (MIMAROPA)</li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};
