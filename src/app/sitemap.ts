import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tourrecap.com';
  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/enterprise`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/samples`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/basic-demo`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/guides`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), priority: 0.3 },
  ];
}
