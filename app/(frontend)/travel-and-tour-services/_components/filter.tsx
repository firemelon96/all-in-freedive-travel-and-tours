'use client';

import qs from 'query-string';
import { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { tours } from '@/app/data/tours';

const mappedUniqueAddress = [
  { value: 'all', label: 'All Locations' },
  ...Array.from(new Set(tours.map((tour) => tour.address))).map((address) => ({
    value: address,
    label: address,
  })),
];

export function Filter() {
  const [selectedLocation, setSelectedLocation] = useState('all');

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentType = searchParams.get('type');

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          location: selectedLocation,
          type: currentType,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [selectedLocation, currentType, pathname, router]);

  return (
    <div className='md:w-72 w-full'>
      <div>
        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
          <SelectTrigger id='category'>
            <SelectValue placeholder='Select a category' />
          </SelectTrigger>
          <SelectContent>
            {mappedUniqueAddress.map((location) => (
              <SelectItem key={location.value} value={location.value}>
                {location.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
