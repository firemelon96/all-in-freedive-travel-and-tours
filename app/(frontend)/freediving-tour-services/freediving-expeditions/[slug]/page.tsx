import { Book } from '@/app/(frontend)/components/book';
import PortraitVideoCard from '@/app/(frontend)/components/video';
import { servicesData } from '@/app/data/services';
import { getServiceBySlug, getServiceBySlugAndType } from '@/lib/helper';
import { Dot } from 'lucide-react';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const slug = (await params).slug;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Not Found' };
  return {
    title: service?.title,
    description: service?.description[0],
    openGraph: {
      title: service.title,
      description: service.description[0],
      url: `https://allintravelandfreedivingtourservices.com/freediving-tour-services/freediving-expeditions/${service.slug}`,
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

const SinglePage = async ({ params }: Props) => {
  const slug = (await params).slug;
  const service = getServiceBySlugAndType(slug, 'expedition');

  if (!service) {
    notFound();
  }

  return (
    <section className='container mx-auto'>
      <div className='flex flex-col-reverse md:flex-row mt-5'>
        <div className=' w-full p-4'>
          <div className='space-y-4'>
            <h1 className='md:text-4xl text-2xl text-sky-700 font-bold uppercase'>
              {service?.title}
            </h1>
            <Book
              location={service?.location}
              duration={service.duration}
              price={service.price}
            />
            <div className='p-2'>
              <h4 className='text-2xl text-sky-800 font-semibold '>Overview</h4>
              {service?.description.map((desc, i) => (
                <p className='text-xl text-justify my-5' key={i}>
                  {desc}
                </p>
              ))}
            </div>
            {service?.highlights && (
              <div className='p-2 bg-sky-50 space-y-4 rounded-sm'>
                <h5 className='text-2xl text-sky-800 font-semibold'>
                  Highlights
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
              </div>
            )}
          </div>
        </div>
        <div className='p-2 w-full'>
          <div className='mx-14'>
            <PortraitVideoCard videoUrl={service.videoUrl || ''} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePage;
