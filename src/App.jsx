import { useState } from 'react';
import { siteUrl, siteRoute } from './site-url.js';
import './product-first.css';
import SimpleIcon from './SimpleIcon.jsx';
import InstallationPage from './InstallationPage.jsx';
import { siDiscord, siGit, siNodedotjs, siSpotify } from 'simple-icons';
import FeaturesPage from './FeaturesPage.jsx';
import TechStackPage from './TechStackPage.jsx';
import EfithPage from './EfithPage.jsx';
import AboutPage from './AboutPage.jsx';
import DocsPage from './DocsPage.jsx';
import LegalPage from './LegalPage.jsx';
import SiteFooter from './SiteFooter.jsx';
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Braces,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  FileCode2,
  FolderOpen,
  GitBranch,
  Github,
  Menu,
  Monitor,
  ShieldCheck,
  Terminal,
  X,
} from 'lucide-react';

const REPOSITORY = 'https://github.com/animevaultofficial/Nexora-Code';
const RELEASES = `${REPOSITORY}/releases`;
const ORGANIZATION = 'https://github.com/nexora-tech0';

const featureCards = [
  {
    icon: Braces,
    title: 'A capable code editor',
    description: 'Edit project files in a Monaco-powered editor with syntax highlighting, language-aware tools, and customizable themes.',
    detail: 'MONACO EDITOR',
  },
  {
    icon: FolderOpen,
    title: 'Your project, in view',
    description: 'Open a workspace, browse its files, and keep the Explorer in sync as files change.',
    detail: 'WORKSPACE EXPLORER',
  },
  {
    icon: Terminal,
    title: 'Terminal beside your code',
    description: 'Run shell commands in an integrated terminal without leaving the project you are working on.',
    detail: 'INTEGRATED TERMINAL',
  },
  {
    icon: GitBranch,
    title: 'Git in the workflow',
    description: 'Review repository changes and use GitHub-connected tools from the same desktop workspace.',
    detail: 'SOURCE CONTROL',
  },
  {
    icon: EfithMark,
    title: 'EFITH, with controls',
    description: 'Ask questions about your work, review proposed file edits, and choose how much access the agent gets.',
    detail: 'AI CODING AGENT',
  },
];

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? ' brand-footer' : ''}`} href={siteUrl('')} aria-label="Nexora Code home">
      <img src={siteUrl('nexora-mark.svg')} width="34" height="34" alt="" />
      <span>NEXORA <span className="brand-muted">CODE</span></span>
    </a>
  );
}

function EfithMark({ size = 19 }) {
  return <img className="efith-product-mark" src={siteUrl('nexora-mark.svg')} width={size} height={size} alt="EFITH"/>;
}

function RealProductPreview() {
  return <section className="product-preview product-real-preview" aria-label="Actual Nexora Code IDE screenshot">
    <div className="preview-caption">
      <span><i className="live-indicator"/> CAPTURED FROM NEXORA CODE</span>
      <span>REAL WINDOWS DESKTOP IDE</span>
    </div>
    <figure className="product-real-figure">
      <img src={siteUrl('screenshots/ide-overview.png')} alt="Actual Nexora Code desktop IDE with Explorer, Spotify titlebar controller, editor workspace, and integrated terminal" fetchPriority="high"/>
      <figcaption>This is a screenshot of the running Nexora Code IDE—not a reconstructed interface.</figcaption>
    </figure>
  </section>;
}

function FeatureCard({ icon: Icon, title, description, detail }) {
  return (
    <article className="feature-card">
      <div className="feature-icon"><Icon size={19} strokeWidth={1.7} /></div>
      <span className="feature-detail">{detail}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const route = siteRoute();
  if (route === '/features') return <FeaturesPage />;
  if (route === '/tech-stack') return <TechStackPage />;
  if (route === '/efith') return <EfithPage />;
  if (route === '/installation') return <InstallationPage />;
  if (route === '/about') return <AboutPage />;
  if (route === '/docs') return <DocsPage />;
  if (route === '/terms') return <LegalPage page="terms" />;
  if (route === '/privacy-policy') return <LegalPage page="privacy" />;

  return (
    <div id="top" className="site-shell">
      <div className="announcement">
        <span className="announcement-mark"><Code2 size={13} /></span>
        <span>Nexora Code for Windows.</span>
        <a href={siteUrl('features/')}>Explore all features <ArrowRight size={13} /></a>
      </div>
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <Brand />
          <button
            type="button"
            className="mobile-menu"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
          <div id="primary-navigation" className={`nav-links${menuOpen ? ' nav-open' : ''}`}>
            <a href={siteUrl('features/')} onClick={closeMenu}>Features</a>
            <a href={siteUrl('tech-stack/')}>Tech stack</a>
            <a href={siteUrl('installation/')} onClick={closeMenu}>Installation</a>
            <a href={siteUrl('efith/')} onClick={closeMenu}>EFITH</a>
            <a href={siteUrl('docs/')} onClick={closeMenu}>Docs</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href={REPOSITORY} target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={13} /></a>
            <a className="nav-download" href={RELEASES} target="_blank" rel="noreferrer">View releases <ArrowUpRight size={14} /></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span /> NEXORA CODE / WINDOWS</div>
            <h1>Your code. Your tools. One workspace.</h1>
            <p className="hero-description">A Windows desktop workspace built around your code—with an editor, terminal, Git tools, browser, optional Spotify and Discord integrations, and EFITH for AI-assisted coding. Provider access depends on your own configuration.</p>
            <div className="hero-actions">
              <a className="button-primary" href={RELEASES} target="_blank" rel="noreferrer">
                <ArrowDownToLine size={16} /> Check Windows releases <ArrowUpRight size={14} />
              </a>
              <a className="button-secondary" href="#product">Take a closer look <ArrowRight size={15} /></a>
            </div>
            <p className="availability"><span /> No public installer is currently listed. Check GitHub Releases for availability.</p>
          </div>
          <div className="hero-side">
            <div className="hero-index"><span>01</span> / A workspace in context</div>
            <div className="hero-rule" />
            <p>Keep your focus on the work. Bring the tools you need into reach when you need them.</p>
            <a href="#workflow">See how it fits together <ArrowRight size={14} /></a>
          </div>
        </section>

        <div id="product" className="container preview-wrap">
          <RealProductPreview />
        </div>

        <section id="features" className="features-section section-pad">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow"><span /> MADE FOR THE DAILY LOOP</div>
                <h2>Less window juggling. More room to build.</h2>
              </div>
              <p>A practical workspace for the everyday loop: open a project, write code, run it, review changes, and keep moving. <a className="feature-guide-link" href={siteUrl('features/')}>Explore the complete feature guide <ArrowRight size={13}/></a></p>
            </div>
            <div className="feature-grid">
              {featureCards.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
            </div>
          </div>
        </section>

        <section id="workflow" className="workflow-section">
          <div className="container workflow-layout">
            <div className="workflow-heading">
              <div className="eyebrow"><span /> DEVELOPMENT WORKFLOW</div>
              <h2>From first file to finished change.</h2>
              <p>Keep editing, testing, and reviewing close together—without losing sight of your project.</p>
            </div>
            <div className="workflow-steps">
              <article className="workflow-step">
                <span className="step-number">01</span>
                <div className="step-icon"><FolderOpen size={18} /></div>
                <div><h3>Open your workspace</h3><p>Browse project files and edit in the Monaco-powered editor.</p></div>
              </article>
              <article className="workflow-step">
                <span className="step-number">02</span>
                <div className="step-icon"><Terminal size={18} /></div>
                <div><h3>Build and test in context</h3><p>Use the integrated terminal and keep project changes close at hand.</p></div>
              </article>
              <article className="workflow-step">
                <span className="step-number">03</span>
                <div className="step-icon"><GitBranch size={18} /></div>
                <div><h3>Review your changes</h3><p>Work with Git and GitHub tools from the same desktop environment.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section id="setup" className="setup-section">
          <div className="container">
            <div className="section-heading">
              <div><div className="eyebrow"><span /> OPTIONAL COMPONENTS</div><h2>Make room for your workflow.</h2></div>
              <p>Keep integrations optional, check for existing developer tools first, and shape the workspace around the way you actually work.</p>
            </div>
            <div className="setup-card-grid">
              <article className="setup-card"><div className="setup-card-icon spotify"><SimpleIcon icon={siSpotify} title="Spotify" size={22}/></div><div className="setup-card-top"><span>INTEGRATION</span><span className="setup-card-state">Optional</span></div><h3>Spotify controls</h3><p>Titlebar playback controls and a full Spotify sidebar when you want music beside your code.</p><small>Configure in Settings</small></article>
              <article className="setup-card"><div className="setup-card-icon discord"><SimpleIcon icon={siDiscord} title="Discord" size={22}/></div><div className="setup-card-top"><span>INTEGRATION</span><span className="setup-card-state">Optional</span></div><h3>Discord</h3><p>Keep your Discord workspace in reach without taking over your editor.</p><small>Configure in Settings</small></article>
              <article className="setup-card"><div className="setup-card-icon git"><SimpleIcon icon={siGit} title="Git" size={22}/></div><div className="setup-card-top"><span>DEVELOPER TOOL</span><span className="setup-card-state">Check first</span></div><h3>Git</h3><p>Check whether Git is already installed and available before installing it again.</p><small>Settings → Developer Tools</small></article>
              <article className="setup-card"><div className="setup-card-icon node"><SimpleIcon icon={siNodedotjs} title="Node.js" size={22}/></div><div className="setup-card-top"><span>DEVELOPER TOOL</span><span className="setup-card-state">As needed</span></div><h3>Node.js</h3><p>Use Node.js and npm for JavaScript projects when your workflow requires them.</p><small>Settings → Developer Tools</small></article>
            </div>
            <div className="setup-section-footer"><span><ShieldCheck size={16}/> Existing installations should be detected before adding another copy.</span><a className="button-secondary" href={siteUrl('installation/')}>Installation guide <ArrowRight size={14}/></a></div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container about-layout">
            <div className="about-mark"><img src={siteUrl('nexora-mark.svg')} alt="" /></div>
            <div className="about-copy">
              <div className="eyebrow"><span /> ABOUT NEXORA</div>
              <h2>About Nexora.</h2>
              <p>Nexora CO is founded and led by Ishah Mushak, Founder and CEO. Nexora Code is a product under Nexora CO, alongside EFITH, its AI-assisted coding agent.</p>
              <div className="about-links">
                <a href={ORGANIZATION} target="_blank" rel="noreferrer"><Github size={15} /> Nexora on GitHub <ArrowUpRight size={13} /></a>
                <a href={REPOSITORY} target="_blank" rel="noreferrer"><Braces size={15} /> Nexora Code repository <ArrowUpRight size={13} /></a>
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="download-section">
          <div className="container download-inner">
            <div className="download-copy">
              <div className="eyebrow"><span /> NEXORA CODE FOR WINDOWS</div>
              <h2>Download status</h2>
              <p>The official release page is the source for published installers and release notes.</p>
              <a className="button-primary" href={RELEASES} target="_blank" rel="noreferrer"><Monitor size={16} /> View GitHub Releases <ArrowUpRight size={14} /></a>
              <p className="availability availability-download"><span /> There is no public installer listed on the release page right now.</p>
            </div>
            <div className="release-card">
              <div className="release-card-top"><span className="release-icon"><ArrowDownToLine size={17} /></span><span className="release-badge">OFFICIAL RELEASES</span></div>
              <h3>Find the official build</h3>
              <p>No installer is currently listed on the release page.</p>
              <a href={RELEASES} target="_blank" rel="noreferrer">Open release page <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
