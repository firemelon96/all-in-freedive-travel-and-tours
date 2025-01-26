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

const locations = [
  { value: 'all', label: 'All Location' },
  { value: 'coron', label: 'Coron' },
  { value: 'el-nido', label: 'El Nido' },
  { value: 'balabac', label: 'Balabac' },
  { value: 'puerto-princesa', label: 'Puerto Princesa' },
  { value: 'siargao', label: 'Siargao' },
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
          type: currentType || 'package',
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [selectedLocation, currentType, pathname, router]);

  return (
    <div className='w-72'>
      <div>
        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
          <SelectTrigger id='category'>
            <SelectValue placeholder='Select a category' />
          </SelectTrigger>
          <SelectContent>
            {locations.map((location) => (
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
