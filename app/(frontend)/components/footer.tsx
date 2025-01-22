import { menuItems } from '@/lib/routes';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className='bg-blue-950'>
      <section className='container mx-auto py-10'>
        <div className='flex flex-col md:flex-row text-center items-center md:text-start md:items-start'>
          <div className='flex-1'>
            <div className='flex items-center justify-center md:items-start md:justify-start'>
              <Image src='/logo.png' width={150} height={60} alt='logo' />
            </div>
            <p className='text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              officia, deserunt autem accusamus obcaecati tenetur. Tenetur,
              culpa. Porro quod vero molestiae, itaque at nesciunt? Fugit
              quibusdam quod illo in autem?
            </p>
          </div>
          <div className='w-1/4 flex flex-col items-center'>
            <h4 className='text-2xl text-sky-600'>Important links</h4>
            <ul className='text-white'>
              {menuItems.map((route) => (
                <li key={route.href}>{route.name}</li>
              ))}
            </ul>
          </div>
          <div className='w-1/4 flex flex-col items-center'>
            <h4 className='text-2xl text-sky-600'>Useful links</h4>
            <ul className='text-white'>
              <li>Terms and Aggreement</li>
              <li>Policy and Privacy</li>
              <li>Legalities</li>
            </ul>
          </div>
          <div className='w-1/4 flex flex-col items-center'>
            <h4 className='text-2xl text-sky-600'>Open hours</h4>
            <ul className='text-white'>
              <li>5:00 Am to 5:00 Pm</li>
              <li></li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};
