import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Book } from './book';
import PortraitVideoCard from './video';
import { CheckCircle, Map, X } from 'lucide-react';
import { ListBox } from './list-box';
import { ImageGallery } from './image-gallery';

type Props = {
  packages: {
    id: string;
    name: string;
    destination: string[];
    paxInclusions: string[];
    paxExclusions: string[];
    images: string[];
    videoUrl: string;
    location: string;
    price: string;
    duration: string;
  }[];
};

export function PackageTab({ packages }: Props) {
  const pax = packages.map((pax) => ({ id: pax.id }));

  return (
    <Tabs defaultValue={pax[0].id} className='w-full'>
      <TabsList className='grid w-full grid-cols-3'>
        {packages.map((pax) => (
          <TabsTrigger key={pax.id} value={pax.id}>
            {pax.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {packages.map((pax) => (
        <TabsContent key={pax.id} value={pax.id}>
          <Card className='bg-stone-50 shadow-none border-none'>
            <CardHeader>
              <CardTitle className='text-2xl text-sky-700'>
                {pax.name}
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-2'>
              <div className='flex'>
                <div className='w-1/2'>
                  <div className='space-y-4'>
                    <Book
                      location={pax.location}
                      duration={pax.duration}
                      price={pax.price}
                    />
                    <ListBox
                      icon={Map}
                      items={pax.destination}
                      label='Destinations'
                    />
                    <ListBox
                      icon={CheckCircle}
                      items={pax.paxInclusions}
                      label='Inclusions'
                    />
                    <ListBox
                      icon={X}
                      items={pax.paxExclusions}
                      label='Exclusions'
                    />
                    <ImageGallery images={pax.images} />
                  </div>
                </div>
                <div className='w-1/2 mx-16'>
                  <PortraitVideoCard videoUrl={pax.videoUrl || ''} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}
