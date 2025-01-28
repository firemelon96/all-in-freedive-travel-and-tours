import { tours } from '@/app/data/tours';
import { TourCard } from '../components/tour-card';
import { Filter } from './_components/filter';
import { TourType } from './_components/tour-type';
import { getTravelTours } from '@/lib/helper';
import { BannerImage } from '@/components/banner-image';

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
      <BannerImage title='Travel and Tours' />
      <section className='container mx-auto'>
        <div className='flex flex-col gap-4 my-10'>
          <div className='flex p-2 space-x-4 bg-slate-50'>
            <Filter />
            <TourType items={tourTypes} />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-4 gap-8 mx-auto'>
            {tourData.map((tour) => (
              <TourCard
                title={tour.title}
                key={tour.slug}
                slug={tour.slug}
                image={tour.images[0]}
                description={tour.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TourPage;
