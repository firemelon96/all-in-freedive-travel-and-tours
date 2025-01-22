import { PackageTab } from '@/app/(frontend)/components/package-tab';
import { getServiceBySlug } from '@/lib/helper';

const SlugPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const service = getServiceBySlug(slug);
  return (
    <div>
      <div className='h-36 bg-sky-100 flex items-center justify-center'>
        <h1 className='text-4xl text-sky-700 font-bold uppercase'>
          {service?.title}
        </h1>
      </div>
      <section className='container mx-auto'>
        <div className='flex '>
          <div className=' w-full space-y-4'>
            <div className='space-y-4'>
              <div className='p-2'>
                {service?.description.map((desc, i) => (
                  <p
                    className='text-2xl text-center max-w-5xl mx-auto my-3'
                    key={i}
                  >
                    {desc}
                  </p>
                ))}
              </div>

              <PackageTab packages={service?.packages!} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SlugPage;
