import { getServiceByType } from '@/lib/helper';
import { MetadataRoute } from 'next';
import { tours } from './data/tours';

const siteUrl = process.env.SITE_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const courseAndCert = getServiceByType('course');
  const retreats = getServiceByType('retreat');
  const freediveTours = getServiceByType('freedive-tour');
  const expeditions = getServiceByType('expedition');

  const coursesEntries: MetadataRoute.Sitemap = courseAndCert.map(
    ({ slug }) => ({
      url: `${siteUrl}/courses-and-certifications/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    })
  );

  const retreatEntries: MetadataRoute.Sitemap = retreats.map(({ slug }) => ({
    url: `${siteUrl}/freediving-tour-services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  const freediveTourEntries: MetadataRoute.Sitemap = freediveTours.map(
    ({ slug }) => ({
      url: `${siteUrl}/freediving-tour-services/freediving-tours/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    })
  );

  const expeditionEntries: MetadataRoute.Sitemap = expeditions.map(
    ({ slug }) => ({
      url: `${siteUrl}/freediving-tour-services/freediving-expeditions/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    })
  );

  const tourEntries: MetadataRoute.Sitemap = tours.map(({ slug }) => ({
    url: `${siteUrl}/travel-and-tour-services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/meet-the-team`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...coursesEntries,
    ...retreatEntries,
    ...freediveTourEntries,
    ...expeditionEntries,
    ...tourEntries,
  ];
}
