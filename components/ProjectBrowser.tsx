'use client';

import { useState } from 'react';
import EditorialCard from '@/components/EditorialCard';
import type { EditorialCardData } from '@/components/EditorialCard';

type ProjectPreview = EditorialCardData & { stack: string[] };

export default function ProjectBrowser({ projects }: { projects: ProjectPreview[] }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');

  const categories = [...new Set(projects.map(project => project.tags[0] ?? 'Other'))];
  const trimmed = search.trim().toLocaleLowerCase('en-US');
  const matches = projects.filter(project => {
    const inCategory = selectedCategory === 'All' || project.tags[0] === selectedCategory;
    if (!inCategory) return false;
    if (!trimmed) return true;
    const terms = [project.title, project.description, ...project.tags, ...project.stack].join(' ');
    return terms.toLocaleLowerCase('en-US').includes(trimmed);
  });

  const reset = () => {
    setSelectedCategory('All');
    setSearch('');
  };

  return (
    <div className="project-browser">
      <div className="project-browser-toolbar">
        <div className="project-category-filters" role="group" aria-label="Filter projects by category">
          {['All', ...categories].map(category => {
            const count = category === 'All'
              ? projects.length : projects.filter(project => project.tags[0] === category).length;
            return (
              <button key={category} type="button"
                className={category === selectedCategory ? 'is-active' : ''}
                aria-pressed={category === selectedCategory}
                onClick={() => setSelectedCategory(category)}>
                <span>{category === 'All' ? 'All projects' : category}</span>
                <span className="project-filter-count" aria-hidden="true">{count}</span>
              </button>
            );
          })}
        </div>
        <label className="project-search">
          <span className="project-search-label">Find a project</span>
          <span className="project-search-input">
            <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor"
              strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
              <circle cx="8.5" cy="8.5" r="5.5" />
              <path d="M13 13l4.5 4.5" />
            </svg>
            <input type="search" value={search} onChange={event => setSearch(event.target.value)}
              placeholder="Project name or technology…" />
          </span>
        </label>
      </div>
      <p className="project-results-count" role="status" aria-live="polite">
        {matches.length === 1 ? '1 project' : matches.length + ' projects'}
        {selectedCategory !== 'All' ? ' in ' + selectedCategory : ''}
        {trimmed ? ' matching your search' : ''}
      </p>
      {matches.length > 0 ? (
        <div className="editorial-grid">
          {matches.map(entry => <EditorialCard key={entry.slug} entry={entry} />)}
        </div>
      ) : (
        <div className="editorial-empty project-empty">
          <span className="editorial-empty-icon" aria-hidden="true">⌕</span>
          <h3>No matching projects</h3>
          <p>Try a different search term or choose another project category.</p>
          <button type="button" className="editorial-outlined-link" onClick={reset}>
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
