import FadeInWrapper from '@/app/(frontend)/components/fade-in-wrapper';
import { PackageTab } from '@/app/(frontend)/components/package-tab';
import { servicesData } from '@/app/data/services';
import { BannerImage } from '@/components/banner-image';
import { getServiceBySlug, getServiceBySlugAndType } from '@/lib/helper';
import { notFound } from 'next/navigation';

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
    <div>
      <BannerImage
        title='Fun Dive with Us'
        imageUrl='https://res.cloudinary.com/dutkzg9la/image/upload/v1738146514/DJI_20240323164452_0115_D_ckpjkr.avif'
      />
      <section className='container mx-auto'>
        <div className='flex '>
          <div className=' w-full space-y-4'>
            <div className='space-y-4'>
              <FadeInWrapper className='p-2'>
                {service.description.map((desc, i) => (
                  <p
                    className='md:text-2xl text-xl text-center max-w-5xl mx-auto my-3'
                    key={i}
                  >
                    {desc}
                  </p>
                ))}
              </FadeInWrapper>

              <FadeInWrapper delay={300} className='mx-4'>
                {service.packages && (
                  <PackageTab packages={service?.packages || []} />
                )}
              </FadeInWrapper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SlugPage;
