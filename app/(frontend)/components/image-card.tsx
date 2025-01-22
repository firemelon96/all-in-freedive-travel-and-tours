import Image from 'next/image';

type Props = {
  url: string;
};

export const ImageCard = ({ url }: Props) => {
  return (
    <div className='p-0 h-full overflow-hidden rounded-md relative'>
      <Image src={url} fill alt='Diver' className='object-cover' />
    </div>
  );
};
