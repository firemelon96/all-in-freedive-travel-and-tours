import { getServiceBySlug } from '@/lib/helper';
import { ImageCarousel } from '../../components/image-carousel';
import { Book } from '../../components/book';
import { redirect } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { servicesData } from '@/app/data/services';
import { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

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
      url: `https://allintravelandfreedivingtourservices.com/courses-and-certifications/${service.slug}`,
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
  const service = getServiceBySlug(slug);

  if (!service) redirect('/');

  return (
    <section className='container mx-auto'>
      <div className='flex flex-col-reverse md:flex-row mt-5'>
        <div className=' w-full p-4 space-y-4'>
          <div className='space-y-4'>
            <h1 className='text-4xl text-sky-700 font-bold uppercase'>
              {service?.title}
            </h1>
            <Book
              location={service?.location}
              duration={service.duration}
              price={service.price}
              certification={service.certificate}
            />
            <div className='p-2'>
              <h4 className='text-2xl text-sky-800 font-semibold '>Overview</h4>
              {service?.description.map((desc, i) => (
                <p className='text-xl text-justify my-5' key={i}>
                  {desc}
                </p>
              ))}
            </div>
            {service.poolReqs && service.openWaterReqs && (
              <div className='p-2 space-y-4'>
                <span className='text-2xl font-semibold text-sky-800'>
                  Performance Requirements
                </span>

                <div className='space-y-4'>
                  <div className='text-xl space-y-3'>
                    <span className='font-semibold text-stone-700'>
                      Pool Reequirements
                    </span>
                    <ul className='text-stone-600'>
                      {service.poolReqs.map((pool) => (
                        <li key={pool}>- {pool}</li>
                      ))}
                    </ul>
                  </div>
                  <div className='text-xl space-y-3'>
                    <span className='font-semibold text-stone-700'>
                      Open Water Reequirements
                    </span>
                    <ul className='text-stone-600'>
                      {service.openWaterReqs.map((water) => (
                        <li key={water}>- {water}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            <div className='space-y-2'>
              {service.philosopies?.map((philo, i) => (
                <Card
                  key={philo.label}
                  className='bg-sky-700 text-white flex items-start justify-center h-full p-4 gap-4'
                >
                  <span className='text-5xl px-5 py-2 bg-blue-500 rounded-full font-semibold'>
                    {i + 1}
                  </span>
                  <div className='flex flex-col gap-1.5'>
                    <p className='text-2xl font-semibold'>{philo.label}</p>
                    <span className='text-justify'>{philo.text}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className='w-full bg-sky-50 p-2 rounded-sm'>
            <h3 className='text-sky-800 font-semibold text-2xl'>
              Package Inclusion
            </h3>
            {service?.paxInclusion.map((inclusion, i) => (
              <p className='text-xl text-slate-600' key={`inclusion-${i}`}>
                - {inclusion}
              </p>
            ))}
          </div>

          {/* exclusions */}
          {service.paxExclusion && (
            <div className='w-full bg-sky-50 p-2 rounded-sm'>
              <h3 className='text-sky-800 font-semibold text-2xl'>
                Package Exclusions
              </h3>
              {service?.paxExclusion.map((exclu, i) => (
                <p className='text-xl text-slate-600' key={`exclu-${i}`}>
                  - {exclu}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className='p-2 w-full'>
          <div className='mx-14'>
            <ImageCarousel images={service?.images} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlugPage;
