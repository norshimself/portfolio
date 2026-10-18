'use client';

import AmbientEmbers from '@/components/AmbientEmbers';

type Phase = 'golden' | 'afterglow' | 'twilight';

function getPhase(section: string): Phase {
  if (section === 'home') return 'golden';
  if (section === 'works' || section === 'experience' || section === 'services') return 'afterglow';
  return 'twilight';
}

/** Decorative atmosphere that changes gently with the current portfolio section. */
export default function SunsetAtmosphere({ active }: { active: string }) {
  const phase = getPhase(active);

  return (
    <div className={'sunset-atmosphere phase-' + phase} aria-hidden="true">
      <div className="sunset-atmosphere-layer atmosphere-golden" />
      <div className="sunset-atmosphere-layer atmosphere-afterglow" />
      <div className="sunset-atmosphere-layer atmosphere-twilight" />
      <div className="sunset-atmosphere-vignette" />
      <div className="sunset-atmosphere-grain" />
      <AmbientEmbers />
    </div>
  );
}
