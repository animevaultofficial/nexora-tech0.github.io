import { useState } from 'react';
import { siteUrl } from './site-url.js';
import { ArrowRight, ArrowUpRight, Code2, Github, Menu, X } from 'lucide-react';

const REPOSITORY = 'https://github.com/animevaultofficial/Nexora-Code';
const RELEASES = `${REPOSITORY}/releases`;

export default function SiteHeader({ currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <div className="announcement">
      <span className="announcement-mark"><Code2 size={13}/></span>
      <span>Nexora Code for Windows.</span>
      <a href={siteUrl('features/')}>Explore features <ArrowRight size={13}/></a>
    </div>
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href={siteUrl('')} aria-label="Nexora Code home"><img src={siteUrl('nexora-mark.svg')} width="34" height="34" alt=""/><span>NEXORA <span className="brand-muted">CODE</span></span></a>
        <button type="button" className="mobile-menu" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(open => !open)}>
          {menuOpen ? <X size={19}/> : <Menu size={19}/>}
        </button>
        <div id="site-navigation" className={`nav-links${menuOpen ? ' nav-open' : ''}`}>
          <a href={siteUrl('')} aria-current={currentPage === 'home' ? 'page' : undefined} onClick={closeMenu}>Home</a>
          <a href={siteUrl('features/')} aria-current={currentPage === 'features' ? 'page' : undefined} onClick={closeMenu}>Features</a>
          <a href={siteUrl('tech-stack/')} aria-current={currentPage === 'tech-stack' ? 'page' : undefined} onClick={closeMenu}>Tech stack</a>
          <a href={siteUrl('installation/')} aria-current={currentPage === 'installation' ? 'page' : undefined} onClick={closeMenu}>Install</a>
          <a href={siteUrl('efith/')} aria-current={currentPage === 'efith' ? 'page' : undefined} onClick={closeMenu}>EFITH</a>
          <a href={REPOSITORY} target="_blank" rel="noreferrer"><Github size={15}/> GitHub <ArrowUpRight size={13}/></a>
          <a className="nav-download" href={RELEASES} target="_blank" rel="noreferrer">View releases <ArrowUpRight size={14}/></a>
        </div>
      </nav>
    </header>
  </>;
}
