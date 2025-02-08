import { getServiceBySlug, getServiceBySlugAndType } from '@/lib/helper';
import { ImageCarousel } from '../../components/image-carousel';
import { Book } from '../../components/book';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { servicesData } from '@/app/data/services';
import { Metadata } from 'next';
import FadeInWrapper from '../../components/fade-in-wrapper';

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
  const service = getServiceBySlugAndType(slug, 'course');

  if (!service) {
    notFound();
  }

  return (
    <section className='container mx-auto'>
      <div className='flex flex-col-reverse md:flex-row mt-5'>
        <div className=' w-full p-4 space-y-4'>
          <div className='space-y-4'>
            <FadeInWrapper direction='left' delay={300}>
              <h1 className='md:text-4xl text-center md:text-start text-2xl text-sky-700 font-bold uppercase'>
                {service?.title}
              </h1>
            </FadeInWrapper>
            <FadeInWrapper direction='left' delay={500}>
              <Book
                location={service?.location}
                duration={service.duration}
                price={service.price}
                certification={service.certificate}
                icon={service.icon}
              />
            </FadeInWrapper>
            <FadeInWrapper direction='left' delay={700} className='p-2'>
              <h4 className='text-2xl p-2 bg-sky-50 text-center md:text-start text-sky-800 font-semibold '>
                Overview
              </h4>
              {service?.description.map((desc, i) => (
                <p className='text-xl text-justify my-5' key={i}>
                  {desc}
                </p>
              ))}
            </FadeInWrapper>
            {service.poolReqs && service.openWaterReqs && (
              <FadeInWrapper
                direction='left'
                delay={800}
                className='p-2 space-y-4'
              >
                <h5 className='text-2xl text-center md:text-start p-2 bg-sky-50  font-semibold text-sky-800'>
                  Performance Requirements
                </h5>

                <div className='space-y-4'>
                  <div className='text-xl space-y-3'>
                    <p className='font-semibold text-center md:text-start text-stone-700'>
                      Pool Requirements
                    </p>
                    <ul className='text-stone-600'>
                      {service.poolReqs.map((pool) => (
                        <li key={pool}>- {pool}</li>
                      ))}
                    </ul>
                  </div>
                  <div className='text-xl space-y-3'>
                    <p className='font-semibold text-center md:text-start text-stone-700'>
                      Open Water Requirements
                    </p>
                    <ul className='text-stone-600'>
                      {service.openWaterReqs.map((water) => (
                        <li key={water}>- {water}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInWrapper>
            )}
            <FadeInWrapper direction='left' delay={900} className='space-y-2'>
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
            </FadeInWrapper>
          </div>
          {service.paxInclusion.length > 0 && (
            <FadeInWrapper
              direction='left'
              delay={800}
              className='w-full p-2 rounded-sm space-y-4'
            >
              <h3 className='text-sky-800 text-center md:text-start bg-sky-50 p-2 font-semibold text-2xl'>
                Package Inclusions
              </h3>
              <div>
                {service?.paxInclusion.map((inclusion, i) => (
                  <p className='text-xl text-slate-600' key={`inclusion-${i}`}>
                    - {inclusion}
                  </p>
                ))}
              </div>
            </FadeInWrapper>
          )}

          {/* exclusions */}
          {service.paxExclusion && (
            <FadeInWrapper
              direction='left'
              delay={900}
              className='w-full  p-2 space-y-4 rounded-sm'
            >
              <h3 className='text-sky-800 text-center bg-sky-50 p-2 md:text-start font-semibold text-2xl'>
                Package Exclusions
              </h3>
              <div>
                {service?.paxExclusion.map((exclu, i) => (
                  <p className='text-xl text-slate-600' key={`exclu-${i}`}>
                    - {exclu}
                  </p>
                ))}
              </div>
            </FadeInWrapper>
          )}
        </div>
        <FadeInWrapper direction='right' delay={400} className='p-2 w-full'>
          <div className='mx-14'>
            <ImageCarousel images={service?.images} />
          </div>
        </FadeInWrapper>
      </div>
    </section>
  );
};

export default SlugPage;
