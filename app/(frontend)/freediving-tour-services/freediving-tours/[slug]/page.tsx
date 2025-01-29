import { PackageTab } from '@/app/(frontend)/components/package-tab';
import { BannerImage } from '@/components/banner-image';
import { getServiceBySlug } from '@/lib/helper';
import { redirect } from 'next/navigation';

const SlugPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
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
