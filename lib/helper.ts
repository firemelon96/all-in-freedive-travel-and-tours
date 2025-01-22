import { servicesData } from '@/app/data/services';

export const getServiceBySlug = (slug: string) => {
  const service = servicesData.find((service) => service.slug === slug);

  return service;
};

export const getServiceByType = (type: string) => {
  const service = servicesData.filter((data) => data.type === type);
  return service;
};
