type Props = {
  title: string;
};

export const BannerImage = ({ title }: Props) => {
  return (
    <div
      className='relative w-full h-40 bg-sky-50 flex justify-center items-center overflow-hidden'
      //   style={{ backgroundImage: `url(/res/tours/balabac/4d3n/c00.avif)` }}
    >
      <h1 className='text-5xl font-bold text-sky-800 z-10'>{title}</h1>
      {/* <Image
        src='/res/tours/balabac/4d3n/c00.avif'
        fill
        alt='image-bg'
        className='object-cover'
      /> */}
    </div>
  );
};
