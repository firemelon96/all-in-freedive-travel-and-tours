import Image from 'next/image';
import FadeInWrapper from './fade-in-wrapper';

export const ImageGallery = ({ images }: { images: string[] }) => {
  return (
    <div className='space-y-3 bg-sky-50 p-2'>
      <h2 className='text-xl text-sky-800 font-semibold'>Image Gallery</h2>
      <div className='grid grid-cols-3 gap-2 aspect-square'>
        {images.map((img, i) => (
          <FadeInWrapper delay={i * 300} key={img} className='relative'>
            <Image src={img} fill className='object-cover' alt={img} />
          </FadeInWrapper>
        ))}
      </div>
    </div>
  );
};
