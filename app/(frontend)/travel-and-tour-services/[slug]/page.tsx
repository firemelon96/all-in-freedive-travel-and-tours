import { getTourBySlug } from '@/lib/helper';
import { CollapsibleBox } from '../_components/collapsible-box';
import { Badge } from '@/components/ui/badge';
import { ImageBanner } from '../_components/image-banner';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';
import { tours } from '@/app/data/tours';
import { Metadata } from 'next';
import FadeInWrapper from '../../components/fade-in-wrapper';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const tour = getTourBySlug(slug);
  if (!tour) return { title: 'Not Found' };
  return {
    title: tour?.title,
    description: tour?.description,
    openGraph: {
      title: tour.title,
      description: tour.description,
      url: `https://allintravelandfreedivingtourservices.com/travel-and-tour-services/${tour.slug}`,
      siteName: 'All In Freediving and Tour Services',
      images: [{ url: tour.images[0] }],
    },
    twitter: {
      card: 'summary_large_image',
      title: tour.title,
      description: tour.description,
      images: [tour.images[0]], // Twitter Card Image
    },
  };
}

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
        <div className='flex-1 mb-10'>
          <FadeInWrapper
            direction='left'
            delay={400}
            className='text-2xl font-semibold flex items-center gap-2 flex-col sm:flex-row'
          >
            <p>{tour?.title}</p> <Badge>{tour?.price}</Badge>
          </FadeInWrapper>
          <FadeInWrapper
            direction='left'
            delay={600}
            className='p-2 text-justify'
          >
            <p>{tour?.description}</p>
          </FadeInWrapper>
          <FadeInWrapper delay={500} className='p-2 border'>
            <span className='text-2xl font-semibold'>Itinerary</span>
            <CollapsibleBox itineraries={tour?.itineraries} />
          </FadeInWrapper>
          <FadeInWrapper delay={600} className='p-2 bg-stone-50'>
            <CollapsibleBox inclusions={tour.inclusions} />
            <CollapsibleBox exclusions={tour.exclusions} />
            <CollapsibleBox expectations={tour.expectations} />
            <CollapsibleBox thingsToBring={tour.things_to_bring} />
            <CollapsibleBox termsAndConditions={tour.terms_and_conditions} />
          </FadeInWrapper>
        </div>
        <FadeInWrapper delay={400} direction='right' className='md:w-96 w-full'>
          <div className='bg-sky-100 space-y-2 p-4  rounded-md shadow-none border-none text-center md:text-start'>
            <h2 className='text-xl font-semibold'>{tour.title}</h2>
            <p>{tour?.price}</p>
            <Button className='w-full font-bold uppercase' variant='primary'>
              Book Now
            </Button>
          </div>
        </FadeInWrapper>
      </div>
    </section>
  );
};

export default SinglePage;
