import { siteConfig } from '@/data/site';
import { faqs } from '@/data/portfolio';

/**
 * JSON-LD structured data for rich results in search engines.
 * Emits a Person + WebSite graph and an FAQPage built from the site FAQ data.
 */
export default function StructuredData() {
  const personId = `${siteConfig.url}/#person`;

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: siteConfig.name,
        url: siteConfig.url,
        jobTitle: siteConfig.jobTitle,
        email: `mailto:${siteConfig.email}`,
        description: siteConfig.shortDescription,
        image: `${siteConfig.url}/opengraph-image`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: siteConfig.location.city,
          addressCountry: siteConfig.location.countryCode,
        },
        sameAs: [siteConfig.social.linkedin, siteConfig.social.github],
        knowsAbout: [
          'Backend Architecture',
          'Data Engineering',
          'Full-Stack Development',
          'NestJS',
          'Next.js',
          'TypeScript',
          'PostgreSQL',
          'API Integration',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: 'en-US',
        publisher: { '@id': personId },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${siteConfig.url}/#profilepage`,
        url: siteConfig.url,
        name: siteConfig.title,
        about: { '@id': personId },
        inLanguage: 'en-US',
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteConfig.url}/#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
