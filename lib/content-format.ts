export function formatDate(date?: string): string | null {
  if (!date) return null;
  return new Date(date + 'T00:00:00Z').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function isSafeExternalUrl(value: string | undefined): value is string {
  if (!value) return false;
  try { return ['https:', 'http:'].includes(new URL(value).protocol); }
  catch { return false; }
}
