import { menuItems } from '@/lib/routes';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className='bg-blue-950'>
      <section className='container mx-auto py-10'>
        <div className='flex flex-col mx-4 md:flex-row text-center items-center md:text-start md:items-start gap-4'>
          <div className='md:w-1/2 w-full '>
            <div className='flex items-center justify-center md:items-start md:justify-start'>
              <Image src='/logo.png' width={150} height={60} alt='logo' />
            </div>
            <p className='text-white md:text-justify text-center'>
              At All In Freediving and Tour Services, we specialize in crafting
              unforgettable, premium travel experiences across the Philippines.
              Whether you&apos;re seeking the thrill of freediving in
              crystal-clear waters, exploring stunning islands on a luxurious
              island-hopping tour, or embarking on scenic land adventures, we
              offer the best of both land and sea. Our bespoke tours are
              designed to bring you closer to the unparalleled beauty and
              culture of this tropical paradise.
            </p>
          </div>
          <div className='md:w-1/4 flex flex-col md:items-start items-center'>
            <h4 className='text-2xl text-sky-600'>Important Links</h4>
            <ul className='text-white space-y-3'>
              {menuItems.map((route) => (
                <li key={route.href}>{route.name}</li>
              ))}
            </ul>
          </div>
          <div className='md:w-1/4 flex flex-col md:items-start items-center'>
            <h4 className='text-2xl text-sky-600'>Useful Links</h4>
            <ul className='text-white space-y-3'>
              <li>Terms and Agreement</li>
              <li>Policy and Privacy</li>
              <li>Legalities</li>
            </ul>
          </div>
          <div className='md:w-1/4 flex flex-col md:items-start items-center'>
            <h4 className='text-2xl text-sky-600'>Open Hours</h4>
            <ul className='text-white'>
              <li>7:00 AM to 10:00 Pm</li>
              <li>Coron, Palawan - Region IV-B (MIMAROPA)</li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};
