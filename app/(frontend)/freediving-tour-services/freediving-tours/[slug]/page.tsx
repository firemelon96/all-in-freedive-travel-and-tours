import { PackageTab } from '@/app/(frontend)/components/package-tab';
import { servicesData } from '@/app/data/services';
import { BannerImage } from '@/components/banner-image';
import { getServiceBySlug } from '@/lib/helper';
import { redirect } from 'next/navigation';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const slug = (await params).slug;
  const service = getServiceBySlug(slug);
  return {
    title: service?.title,
    description: service?.description,
    openGraph: {
      images: [{ url: service?.images[0] }],
    },
  };
}

const SlugPage = async ({ params }: Props) => {
  const slug = (await params).slug;
  const service = getServiceBySlug(slug);

  if (!service) redirect('/');

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
              <div className='p-2'>
                {service.description.map((desc, i) => (
                  <p
                    className='text-2xl text-center max-w-5xl mx-auto my-3'
                    key={i}
                  >
                    {desc}
                  </p>
                ))}
              </div>

              <div className='mx-4'>
                <PackageTab packages={service?.packages || []} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SlugPage;
