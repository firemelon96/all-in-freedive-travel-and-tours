import { getServiceBySlug } from '@/lib/helper';
import { Dot } from 'lucide-react';
import PortraitVideoCard from '../../components/video';
import { Book } from '../../components/book';
import { redirect } from 'next/navigation';
// import { servicesData } from '@/app/data/services';
// import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

// export async function generateStaticParams() {
//   return servicesData.map((service) => ({ slug: service.slug }));
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const slug = (await params).slug;
//   const service = getServiceBySlug(slug);
//   if (!service) return { title: 'Not Found' };
//   return {
//     title: service?.title,
//     description: service?.description[0],
//     openGraph: {
//       title: service.title,
//       description: service.description[0],
//       url: `https://allintravelandfreedivingtourservices.com/freediving-tour-services/${service.slug}`,
//       siteName: 'All In Freediving and Tour Services',
//       images: [{ url: service.images[0] }],
//     },
//   };
// }

const SlugPage = async ({ params }: Props) => {
  const slug = (await params).slug;
  const service = getServiceBySlug(slug);

  if (!service) redirect('/');

  return (
    <section className='container mx-auto'>
      <div className='flex flex-col-reverse md:flex-row mt-5'>
        <div className=' w-full p-4'>
          <div className='space-y-4'>
            <h1 className='text-4xl text-sky-700 text-center md:text-start font-bold uppercase'>
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
            {service?.highlights && service.highlights.length > 0 && (
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
            <PortraitVideoCard videoUrl={service.video || ''} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlugPage;
