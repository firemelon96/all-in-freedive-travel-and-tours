import Image from 'next/image';

type Props = {
  title: string;
  imageUrl: string;
};

export const BannerImage = ({ title, imageUrl }: Props) => {
  return (
    <div
      className='relative w-full h-40 bg-sky-50 flex justify-center items-center overflow-hidden'
      //   style={{ backgroundImage: `url(/res/tours/balabac/4d3n/c00.avif)` }}
    >
      <h1 className='text-5xl font-bold text-sky-100 z-10'>{title}</h1>
      <Image src={imageUrl} fill alt='image-bg' className='object-cover' />
      <div className='absolute w-full h-full bg-sky-800/50' />
    </div>
  );
};
