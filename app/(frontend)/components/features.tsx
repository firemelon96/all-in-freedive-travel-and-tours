import Image from 'next/image';

export const Features = () => {
  return (
    <section className='container mx-auto bg-sky-300 h-screen'>
      <div className='grid grid-cols-4 grid-rows-2 gap-4'>
        <div className='row-span-2 col-span-2 w-full h-full bg-green-400 overflow-hidden rounded-md'>
          <Image
            src='/diver.jpg'
            height={1500}
            width={1000}
            alt='image'
            className='object-fill'
          />
        </div>
        <div className='row-span-2 w-full h-full bg-blue-400'></div>
        <div className='row-span-2 w-full h-full bg-blue-400'></div>
        <div className='row-span-2 w-full h-full bg-blue-400'></div>
      </div>
    </section>
  );
};
