import Image from 'next/image';
import { ImageDialog } from './image-dialog';

type Props = {
  images?: string[];
};

export const ImageBanner = ({ images }: Props) => {
  return (
    <div>
      <div className='rounded-md overflow-hidden'>
        <div className='relative grid h-96 grid-cols-3 grid-rows-2 gap-1'>
          {images?.slice(0, 3).map((image) => (
            <div
              key={image}
              className='bg-rose-200 relative w-full first:col-span-3 even:col-span-2 md:even:col-span-1 first:row-span-2 md:first:col-span-2 md:first:row-span-2 first:h-full h-48 overflow-hidden'
            >
              <Image src={image} fill alt='image' className='object-cover' />
            </div>
          ))}
          <ImageDialog images={images} />
        </div>
      </div>
    </div>
  );
};
