'use client';

import qs from 'query-string';
import { Button } from '@/components/ui/button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Props = {
  name: string;
};

export const TypeItem = ({ name }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentTourType = searchParams.get('type');
  const currentLocation = searchParams.get('location');

  const isSelected = currentTourType === name;

  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          location: currentLocation,
          type: isSelected ? null : name,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  };

  return (
    <Button
      onClick={onClick}
      variant={isSelected ? 'primary' : 'outline'}
      className='uppercase md:w-auto w-full'
    >
      {name}
    </Button>
  );
};
