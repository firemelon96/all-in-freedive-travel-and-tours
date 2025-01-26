import { servicesData } from '@/app/data/services';
import { tours } from '@/app/data/tours';

export const getServiceBySlug = (slug: string) => {
  const service = servicesData.find((service) => service.slug === slug);

  return service;
};

export const getServiceByType = (type: string) => {
  const service = servicesData.filter((data) => data.type === type);
  return service;
};

export const getTourBySlug = (slug: string) => {
  const tour = tours.find((service) => service.slug === slug);

  return tour;
};

export const ellipsis = (text: string, count: number) => {
  const paragraph = text.slice(0, count);
  return `${paragraph}...`;
};

export const getTravelTours = ({
  location,
  type,
}: {
  location: string;
  type: string;
}) => {
  let travelTourData = [];

  if (location === 'all') {
    travelTourData = tours;
  } else {
    travelTourData = tours.filter(
      (tour) => tour.type === type && tour.address === location
    );
  }

  return travelTourData;
};
