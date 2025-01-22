import { Card } from '@/components/ui/card';
import Image from 'next/image';

export const ServicesCard = () => {
  return (
    <Card className='p-0 overflow-hidden w-72'>
      <Image
        src='/dive-up.jpg'
        height={300}
        width={300}
        alt='dive up'
        className='object-cover h-80'
      />
      <div className='flex flex-col p-2 text-center gap-2 py-4'>
        <h2 className='text-3xl font-semibold'>Name of service</h2>
        <p className=''>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
    </Card>
  );
};
