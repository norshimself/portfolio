import { siteConfig } from '@/data/site';
import {
  experiences,
  education,
  works,
  services,
  techStack,
  faqs,
} from '@/data/portfolio';

/**
 * Serves /llms.txt — a plain-text, markdown-formatted summary of the portfolio
 * for LLMs and AI crawlers. Generated from the same data as the rest of the site
 * so it never drifts. See https://llmstxt.org for the emerging convention.
 */
export const dynamic = 'force-static';

function buildLlmsText(): string {
  const lines: string[] = [];

  lines.push(`# ${siteConfig.name}`);
  lines.push('');
  lines.push(`> ${siteConfig.shortDescription}`);
  lines.push('');
  lines.push(`- **Role:** ${siteConfig.jobTitle}`);
  lines.push(
    `- **Location:** ${siteConfig.location.city}, ${siteConfig.location.country}`,
  );
  lines.push(`- **Website:** ${siteConfig.url}`);
  lines.push(`- **Email:** ${siteConfig.email}`);
  lines.push(`- **LinkedIn:** ${siteConfig.social.linkedin}`);
  lines.push(`- **GitHub:** ${siteConfig.social.github}`);
  lines.push('');

  lines.push('## Experience');
  lines.push('');
  for (const exp of experiences) {
    lines.push(`### ${exp.role} — ${exp.company}`);
    const meta = [exp.period, exp.location].filter(Boolean).join(' · ');
    if (meta) lines.push(meta);
    lines.push('');
    for (const item of exp.responsibilities ?? []) {
      lines.push(`- ${item}`);
    }
    lines.push('');
  }

  lines.push('## Education');
  lines.push('');
  for (const edu of education) {
    lines.push(`### ${edu.program} — ${edu.school}`);
    const meta = [edu.period, edu.location].filter(Boolean).join(' · ');
    if (meta) lines.push(meta);
    lines.push('');
    for (const item of edu.details ?? []) {
      lines.push(`- ${item}`);
    }
    lines.push('');
  }

  lines.push('## Selected Projects');
  lines.push('');
  for (const work of works) {
    lines.push(`### ${work.title}`);
    const meta = [work.role, work.category, work.date]
      .filter(Boolean)
      .join(' · ');
    if (meta) lines.push(meta);
    if (work.description) lines.push(work.description);
    if (work.stack?.length) lines.push(`Stack: ${work.stack.join(', ')}`);
    lines.push(`Link: ${work.href}`);
    lines.push('');
  }

  lines.push('## Services');
  lines.push('');
  for (const service of services) {
    lines.push(`### ${service.title}`);
    for (const item of service.items) {
      lines.push(`- ${item}`);
    }
    lines.push('');
  }

  lines.push('## Skills');
  lines.push('');
  const byCategory = new Map<string, string[]>();
  for (const tech of techStack) {
    const entry = byCategory.get(tech.category) ?? [];
    entry.push(`${tech.name} (${tech.level})`);
    byCategory.set(tech.category, entry);
  }
  for (const [category, items] of byCategory) {
    lines.push(`- **${category}:** ${items.join(', ')}`);
  }
  lines.push('');

  lines.push('## FAQ');
  lines.push('');
  for (const faq of faqs) {
    lines.push(`### ${faq.question}`);
    lines.push(faq.answer);
    lines.push('');
  }

  return lines.join('\n').trimEnd() + '\n';
}

export function GET() {
  return new Response(buildLlmsText(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
    },
  });
}
