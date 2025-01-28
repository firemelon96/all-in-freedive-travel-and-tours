import { getTourBySlug } from '@/lib/helper';
import { CollapsibleBox } from '../_components/collapsible-box';
import { Badge } from '@/components/ui/badge';
import { ImageBanner } from '../_components/image-banner';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

const SinglePage = async ({ params }: Props) => {
  const slug = (await params).slug;
  const tour = getTourBySlug(slug);

  if (!tour) redirect('/');
  return (
    <section className='container mx-auto space-y-2'>
      <div className='h-96 bg-sky-50 m-2'>
        <ImageBanner images={tour?.images} />
      </div>
      <div className='flex flex-col-reverse md:flex-row gap-4 m-2'>
        <div className='flex-1'>
          <div className='text-2xl font-semibold flex items-center gap-2 flex-col sm:flex-row'>
            <p>{tour?.title}</p> <Badge>{tour?.price}</Badge>
          </div>
          <div className='p-2'>
            <p>{tour?.description}</p>
          </div>
          <div className='p-2 border'>
            <span className='text-2xl font-semibold'>Itinerary</span>
            <CollapsibleBox itineraries={tour?.itineraries} />
          </div>
          <div className='p-2 bg-stone-50'>
            <CollapsibleBox inclusions={tour.inclusions} />
            <CollapsibleBox exclusions={tour.exclusions} />
            <CollapsibleBox expectations={tour.expectations} />
            <CollapsibleBox thingsToBring={tour.things_to_bring} />
            <CollapsibleBox termsAndConditions={tour.terms_and_conditions} />
          </div>
        </div>
        <div className='md:w-96 w-full'>
          <Card className='bg-sky-100 shadow-none border-none text-center md:text-start'>
            <CardHeader className='text-xl font-semibold'>
              {tour?.title}
            </CardHeader>
            <CardContent>
              <p>{tour?.price}</p>
            </CardContent>
            <CardFooter>
              <Button className='w-full font-bold uppercase' variant='primary'>
                Book Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SinglePage;
