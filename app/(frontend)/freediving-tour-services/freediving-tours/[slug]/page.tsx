import FadeInWrapper from '@/app/(frontend)/components/fade-in-wrapper';
import { PackageTab } from '@/app/(frontend)/components/package-tab';
import { TourCard } from '@/app/(frontend)/components/tour-card';
import { CollapsibleBox } from '@/components/collapsible-box';
import { ImageBanner } from '@/app/(frontend)/travel-and-tour-services/_components/image-banner';
import { servicesData } from '@/app/data/services';
import { BannerImage } from '@/components/banner-image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getServiceBySlug, getServiceBySlugAndType } from '@/lib/helper';
import { Banknote, Luggage } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Book } from '@/components/book';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const slug = (await params).slug;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Not Found' };
  return {
    title: service.title,
    description: service.description[0],
    openGraph: {
      title: service.title,
      description: service.description[0],
      url: `https://allintravelandfreedivingtourservices.com/freediving-tour-services/freediving-tours/${service.slug}`,
      siteName: 'All In Freediving and Tour Services',
      images: [{ url: service.images[0] }],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.description[0],
      images: [service.images[0]], // Twitter Card Image
    },
  };
}

const SlugPage = async ({ params }: Props) => {
  const slug = (await params).slug;
  const service = getServiceBySlugAndType(slug, 'freedive-tour');

  if (!service) {
    notFound();
  }

  return (
    <section className='container mx-auto space-y-2'>
      <div className='h-96 bg-sky-50 m-2'>
        <ImageBanner images={service.images} />
      </div>
      <div className='flex flex-col-reverse md:flex-row gap-4 m-2'>
        <div className='flex-1 mb-10'>
          <FadeInWrapper
            direction='left'
            delay={400}
            className='text-2xl font-semibold items-center gap-2 flex-col hidden md:flex md:items-start'
          >
            <p>{service.title}</p> <Badge>{service.price}</Badge>
          </FadeInWrapper>
          <FadeInWrapper
            direction='left'
            delay={600}
            className='p-2 text-justify'
          >
            <p>{service?.description}</p>
          </FadeInWrapper>

          <FadeInWrapper delay={600} className='p-2 bg-stone-50'>
            <CollapsibleBox destinations={service.destination} />
            <CollapsibleBox highlights={service.highlights} />
            <CollapsibleBox videoUrl={service.videoUrl} />
            {/* <CollapsibleBox exclusions={service.exclusions} />
            <CollapsibleBox expectations={service.expectations} />
            <CollapsibleBox thingsToBring={service.things_to_bring} />
            <CollapsibleBox termsAndConditions={service.terms_and_conditions} /> */}
          </FadeInWrapper>
        </div>
        <FadeInWrapper
          delay={400}
          direction='right'
          className='md:w-[420px] w-full'
        >
          <Book title={service.title} price={service.price} />
        </FadeInWrapper>
      </div>
    </section>
  );
};

export default SlugPage;
