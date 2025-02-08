import { getServiceBySlug, getServiceBySlugAndType } from '@/lib/helper';
import { Dot } from 'lucide-react';
import PortraitVideoCard from '../../components/video';
import { Book } from '../../components/book';
import { notFound } from 'next/navigation';
import { servicesData } from '@/app/data/services';
import { Metadata } from 'next';
import FadeInWrapper from '../../components/fade-in-wrapper';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Not Found' };
  return {
    title: service.title,
    description: service.description[0],
    openGraph: {
      title: service.title,
      description: service.description[0],
      url: `https://allintravelandfreedivingtourservices.com/freediving-tour-services/${service.slug}`,
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
  const service = getServiceBySlugAndType(slug, 'retreat');

  if (!service) {
    notFound();
  }
  return (
    <section className='container mx-auto'>
      <div className='flex flex-col-reverse md:flex-row mt-5'>
        <div className=' w-full p-4'>
          <div className='space-y-4'>
            <FadeInWrapper direction='left'>
              <h1 className='md:text-4xl text-2xl text-sky-700 text-center md:text-start font-bold uppercase'>
                {service?.title}
              </h1>
            </FadeInWrapper>
            <FadeInWrapper direction='left' delay={200}>
              <Book
                location={service?.location}
                duration={service.duration}
                price={service.price}
              />
            </FadeInWrapper>
            <FadeInWrapper delay={400} direction='left' className='p-2'>
              <h4 className='text-2xl text-sky-800 font-semibold '>Overview</h4>
              {service?.description.map((desc, i) => (
                <p className='text-xl text-justify my-5' key={i}>
                  {desc}
                </p>
              ))}
            </FadeInWrapper>
            {service?.highlights && service.highlights.length > 0 && (
              <FadeInWrapper
                direction='left'
                delay={600}
                className='p-2 bg-sky-50 space-y-4 rounded-sm'
              >
                <h5 className='text-2xl text-sky-800 font-semibold'>
                  Trip Highlights :
                </h5>
                <ul className='space-y-2'>
                  {service.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className='flex items-start justify-center text-xl'
                    >
                      <Dot className='size-9' />
                      <span className='flex-1'>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </FadeInWrapper>
            )}
          </div>
        </div>
        <FadeInWrapper direction='right' className='p-2 w-full'>
          <div className='mx-14'>
            <PortraitVideoCard videoUrl={service.video || ''} />
          </div>
        </FadeInWrapper>
      </div>
    </section>
  );
};

export default SlugPage;
