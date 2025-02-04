import Image, { StaticImageData } from 'next/image';

type Props = {
  url: string | StaticImageData;
};

export const ImageCard = ({ url }: Props) => {
  const isString = typeof url === 'string';
  return (
    <div className='p-0 h-full overflow-hidden rounded-md relative'>
      {isString && (
        <Image src={url} fill alt='Diver' className='object-cover' />
      )}
      {!isString && (
        <Image
          src={url}
          placeholder='blur'
          fill
          alt='Diver'
          className='object-cover object-top'
        />
      )}
    </div>
  );
};
