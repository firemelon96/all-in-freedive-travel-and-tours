import { BannerImage } from '@/components/banner-image';
import { getServiceByType } from '@/lib/helper';
import FadeInWrapper from '../../components/fade-in-wrapper';
import { FreediveCard } from '../../components/freedive-card';
import { notFound } from 'next/navigation';

const FreedivePage = () => {
  const service = getServiceByType('freedive-tour');

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
        <div className='w-full space-y-4'>
          <div className='space-y-4 mb-10'>
            <FadeInWrapper className='p-2'>
              <p className='md:text-2xl text-xl text-center max-w-5xl mx-auto my-3'>
                Freediving in Coron, Philippines, is a truly marvelous and
                exhilarating experience surrounded with its renowned
                crystal-clear waters, vibrant and rich coral reefs, historical
                WWII wreck sites, and diverse marine life.,
              </p>
              <p className='md:text-2xl text-xl text-center max-w-5xl mx-auto my-3'>
                We offer daily joiner and private freediving tours good for
                newbie to experienced freedivers.
              </p>
            </FadeInWrapper>
            <hr />

            <div className='grid grid-cols-1 p-4 md:p-0 md:grid-cols-3 gap-8'>
              {service?.map((pckg, i) => (
                <FadeInWrapper key={pckg.id} delay={i * 200}>
                  <FreediveCard
                    title={pckg.title}
                    slug={pckg.slug}
                    image={pckg.images[0]}
                  />
                </FadeInWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreedivePage;
