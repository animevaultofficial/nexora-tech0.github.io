import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Code2 } from 'lucide-react';
import SimpleIcon from './SimpleIcon.jsx';
import { techStackGroups, techStackLanguageCount } from './tech-stack-data.js';
import './tech-stack-menu.css';

export default function TechStackMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const dismiss = event => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', dismiss);
    document.addEventListener('keydown', dismiss);
    return () => {
      document.removeEventListener('pointerdown', dismiss);
      document.removeEventListener('keydown', dismiss);
    };
  }, [open]);

  return <div className="tech-stack-menu" ref={rootRef}>
    <button className="tech-stack-trigger" type="button" aria-expanded={open} aria-controls="tech-stack-popover" onClick={() => setOpen(value => !value)}>
      <Code2 size={14}/> Tech stack <ChevronDown size={13} className={open ? 'tech-stack-chevron open' : 'tech-stack-chevron'}/>
    </button>
    {open && <section className="tech-stack-popover" id="tech-stack-popover" aria-label="Nexora Code language support">
      <header className="tech-stack-popover-head"><div><span className="tech-stack-overline">EDITOR LANGUAGE MODES</span><h2>{techStackLanguageCount} mapped modes</h2></div><span className="tech-stack-count">{techStackLanguageCount} mapped</span></header>
      <p className="tech-stack-summary">Nexora maps these extensions to Monaco syntax modes. JavaScript and TypeScript also have built-in editor diagnostics; external language servers are not configured by default.</p>
      <div className="tech-stack-groups">{techStackGroups.map(group => <div className="tech-stack-group" key={group.name}>
        <h3>{group.name}<span>{group.entries.length}</span></h3>
        <div className="tech-stack-items">{group.entries.map(entry => <article className="tech-stack-item" key={entry.name}>
          <span className="tech-stack-icon" style={entry.icon ? { color: `#${entry.icon.hex}` } : undefined}>
            {entry.icon ? <SimpleIcon icon={entry.icon} title={entry.name} size={16}/> : <Code2 size={15}/>}
          </span>
          <span className="tech-stack-name">{entry.name}{entry.diagnostics && <i>JS/TS diagnostics</i>}</span>
          <code>{entry.ext}</code>
        </article>)}</div>
      </div>)}</div>
      <footer className="tech-stack-popover-foot"><span><Code2 size={13}/> Monaco syntax modes · 1 full reference</span><a href="/tech-stack/" onClick={() => setOpen(false)}>Explore full tech stack →</a></footer>
    </section>}
  </div>;
}
