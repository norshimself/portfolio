import { siteConfig } from '@/data/site';
import { faqs, education, experiences, works, techStack } from '@/data/portfolio';

/**
 * JSON-LD structured data for rich results in search engines and clean parsing
 * by AI crawlers. Emits a Person (with occupation, employment history, and
 * skills), WebSite, ProfilePage, the portfolio projects as CreativeWork nodes,
 * and an FAQPage — all built from the site data so they never drift.
 */
export default function StructuredData() {
  const personId = `${siteConfig.url}/#person`;

  // Skills the person is interview-ready or comfortable with, surfaced so search
  // engines can connect the profile to specific technology queries.
  const skills = techStack
    .filter((tech) => tech.level === 'core' || tech.level === 'proficient')
    .map((tech) => tech.name);

  const knowsAbout = [
    'Backend Architecture',
    'Data Engineering',
    'Full-Stack Development',
    'API Integration',
    'ETL Pipelines',
    'Microservices',
    ...skills,
  ];

  // Every company worked for, de-duplicated, so the employment history is
  // machine-readable rather than buried in prose. schema.org `worksFor` accepts
  // an array of Organizations.
  const organizations = Array.from(
    new Map(
      experiences.map((exp) => [
        exp.company,
        {
          '@type': 'Organization',
          name: exp.company,
          ...(exp.website ? { url: `https://${exp.website}` } : {}),
        },
      ]),
    ).values(),
  );

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
        homeLocation: {
          '@type': 'Place',
          name: `${siteConfig.location.city}, ${siteConfig.location.country}`,
        },
        sameAs: [siteConfig.social.linkedin, siteConfig.social.github],
        ...(organizations.length ? { worksFor: organizations } : {}),
        hasOccupation: {
          '@type': 'Occupation',
          name: siteConfig.jobTitle,
          skills: skills.join(', '),
          occupationLocation: {
            '@type': 'Country',
            name: siteConfig.location.country,
          },
        },
        alumniOf: education.map((edu) => ({
          '@type': 'EducationalOrganization',
          name: edu.school,
          ...(edu.website ? { url: `https://${edu.website}` } : {}),
        })),
        knowsAbout,
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
      // Portfolio projects, each linked back to the person as author so crawlers
      // attribute the work and can surface it for technology-specific queries.
      ...works.map((work) => ({
        '@type': 'CreativeWork',
        name: work.title,
        url: work.href,
        ...(work.description ? { description: work.description } : {}),
        ...(work.category ? { genre: work.category } : {}),
        ...(work.image
          ? { image: `${siteConfig.url}${work.image}` }
          : {}),
        ...(work.stack?.length ? { keywords: work.stack.join(', ') } : {}),
        author: { '@id': personId },
        creator: { '@id': personId },
      })),
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
