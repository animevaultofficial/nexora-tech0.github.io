import { useMemo, useState } from 'react';
import { siteUrl } from './site-url.js';
import { ArrowRight, ArrowUpRight, Check, Code2, Search } from 'lucide-react';
import SiteHeader from './SiteHeader.jsx';
import SimpleIcon from './SimpleIcon.jsx';
import { techStackGroups, techStackLanguageCount } from './tech-stack-data.js';
import './tech-stack-page.css';

const REPOSITORY = 'https://github.com/animevaultofficial/Nexora-Code';
const categories = ['All', ...techStackGroups.map(group => group.name)];

function LanguageCard({ item, group }) {
  return <article className="language-card">
    <div className="language-card-top">
      <span className="language-logo" style={item.icon ? { color: `#${item.icon.hex}` } : undefined}>
        {item.icon ? <SimpleIcon icon={item.icon} title={item.name} size={22}/> : <Code2 size={20}/>}
      </span>
      <span className="language-mode-tag">MONACO MODE</span>
    </div>
    <h3>{item.name}</h3>
    <span className="language-group-label">{group}</span>
    <code className="language-extensions">{item.ext}</code>
    <div className="language-card-foot">
      {item.diagnostics ? <span className="language-diagnostics"><Check size={12}/> Built-in diagnostics</span> : <span>Syntax highlighting</span>}
    </div>
  </article>;
}

export default function TechStackPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const visibleGroups = useMemo(() => techStackGroups
    .filter(group => category === 'All' || group.name === category)
    .map(group => ({
      ...group,
      entries: group.entries.filter(item => `${item.name} ${item.ext} ${group.name}`.toLowerCase().includes(query.trim().toLowerCase()))
    }))
    .filter(group => group.entries.length), [query, category]);
  const visibleCount = visibleGroups.reduce((total, group) => total + group.entries.length, 0);

  return <div className="site-shell tech-stack-page">
    <SiteHeader currentPage="tech-stack"/>
    <main>
      <section className="tech-stack-hero container">
        <div className="eyebrow"><span/> NEXORA CODE / EDITOR LANGUAGE SUPPORT</div>
        <h1>Know what your files can do.</h1>
        <p>Search by language or extension to see how Nexora Code currently maps files to Monaco. The page separates syntax support from deeper tooling, so the feature claims stay clear.</p>
        <div className="stack-summary">
          <span><strong>{techStackLanguageCount}</strong><small>mapped language modes</small></span>
          <span><strong>JS + TS</strong><small>built-in editor diagnostics</small></span>
          <span><strong>Monaco</strong><small>syntax highlighting engine</small></span>
        </div>
      </section>

      <section className="stack-catalog container" aria-labelledby="stack-catalog-title">
        <div className="stack-catalog-head">
          <div><span className="stack-catalog-kicker"><Code2 size={13}/> LANGUAGE AND FILE SUPPORT</span><h2 id="stack-catalog-title">Supported file types</h2><p>These are the file extensions currently mapped by the editor—not a claim that every language has a complete compiler, debugger, or language server.</p></div>
          <span className="stack-result-count">{visibleCount} / {techStackLanguageCount} shown</span>
        </div>
        <label className="stack-search"><Search size={16}/><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search a language or extension, e.g. .tsx"/>{query && <button type="button" onClick={() => setQuery('')} aria-label="Clear language search">Clear</button>}</label>
        <div className="stack-filters" role="group" aria-label="Filter language categories">{categories.map(name => <button type="button" key={name} className={category === name ? 'active' : ''} aria-pressed={category === name} onClick={() => setCategory(name)}>{name}</button>)}</div>
        {visibleGroups.length ? visibleGroups.map(group => <section className="language-group-section" key={group.name} aria-label={group.name}>
          <div className="language-group-heading"><h3>{group.name}</h3><span>{group.entries.length} {group.entries.length === 1 ? 'mode' : 'modes'}</span></div>
          <div className="language-card-grid">{group.entries.map(item => <LanguageCard key={item.name} item={item} group={group.name}/>)}</div>
        </section>) : <div className="stack-no-results"><Code2 size={21}/><strong>No matching language modes</strong><span>Try another language name, category, or extension.</span></div>}
        <aside className="stack-support-note">
          <Code2 size={17}/><div><strong>What editor support means</strong><p>Nexora maps these file types to Monaco syntax modes. JavaScript and TypeScript also use Monaco's built-in editor diagnostics. External language servers, full-project type checking, and debugger adapters are not bundled or configured by default.</p></div>
        </aside>
      </section>

      <section className="stack-next container">
        <div><span className="eyebrow"><span/> ALSO IN NEXORA CODE</span><h2>EFITH coding agent</h2><p>EFITH works with the open project through explicit tools and reviewable edits.</p></div>
        <div className="stack-next-actions"><a className="button-primary" href={siteUrl('efith/')}>Explore EFITH <ArrowRight size={14}/></a><a className="button-secondary" href={siteUrl('features/')}>See all features <ArrowUpRight size={14}/></a></div>
      </section>
    </main>
    <footer className="site-footer"><div className="container footer-bottom"><span>© {new Date().getFullYear()} Nexora Code</span><a href={REPOSITORY} target="_blank" rel="noreferrer">View the source on GitHub <ArrowUpRight size={12}/></a></div></footer>
  </div>;
}
