import { tours } from '@/app/data/tours';
import { TourCard } from '../components/tour-card';
import { Filter } from './_components/filter';
import { TourType } from './_components/tour-type';
import { getTravelTours } from '@/lib/helper';
import { BannerImage } from '@/components/banner-image';
import FadeInWrapper from '../components/fade-in-wrapper';

type Props = {
  searchParams: Promise<{ location: string; type: string }>;
};

const TourPage = async ({ searchParams }: Props) => {
  const searchUrl = await searchParams;

  const tourTypes = [...new Set(tours.map((tour) => tour.type))];

  const tourData = getTravelTours(searchUrl);

  // const tourData =
  return (
    <>
      <BannerImage
        title='Travel and Tour Services'
        imageUrl='https://res.cloudinary.com/dutkzg9la/image/upload/v1738146307/GRNT-0110_czspcd.avif'
      />
      <section className='container mx-auto'>
        <div className='flex flex-col gap-4 my-10'>
          <div className='flex flex-wrap md:flex-row  p-2 gap-2 bg-slate-50'>
            <FadeInWrapper direction='left' className='w-full'>
              <Filter />
            </FadeInWrapper>
            <FadeInWrapper direction='left' delay={200} className='w-full'>
              <TourType items={tourTypes} />
            </FadeInWrapper>
          </div>
          <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-auto'>
            {tourData.map((tour, i) => (
              <FadeInWrapper key={tour.slug} delay={i * 200}>
                <TourCard
                  title={tour.title}
                  slug={tour.slug}
                  image={tour.images[0]}
                />
              </FadeInWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TourPage;
