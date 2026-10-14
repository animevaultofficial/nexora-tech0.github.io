import { useState } from 'react';
import { siteUrl, siteRoute } from './site-url.js';
import './product-first.css';
import FeaturesPage from './FeaturesPage.jsx';
import TechStackPage from './TechStackPage.jsx';
import EfithPage from './EfithPage.jsx';
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Braces,
  Check,
  ChevronDown,
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
            <a href={siteUrl('efith/')} onClick={closeMenu}>EFITH</a>
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
            <h1>A Windows IDE for the way you work.</h1>
            <p className="hero-description">Nexora Code combines a code editor, terminal, Git tools, browser, Spotify, Discord, and EFITH in one Windows app. AI provider access depends on your configuration.</p>
            <div className="hero-actions">
              <a className="button-primary" href={RELEASES} target="_blank" rel="noreferrer">
                <ArrowDownToLine size={16} /> Check Windows releases <ArrowUpRight size={14} />
              </a>
              <a className="button-secondary" href="#product">Explore the IDE <ArrowRight size={15} /></a>
            </div>
            <p className="availability"><span /> No public installer is currently listed. Check GitHub Releases for availability.</p>
          </div>
          <div className="hero-side">
            <div className="hero-index"><span>01</span> / A workspace in context</div>
            <div className="hero-rule" />
            <p>Move between the code you are writing and the tools that help you ship it.</p>
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
                <h2>The tools you use, in one place.</h2>
              </div>
              <p>A Windows desktop IDE with an editor, terminal, source control, and optional integrated tools. <a className="feature-guide-link" href={siteUrl('features/')}>Explore the complete feature guide <ArrowRight size={13}/></a></p>
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
              <h2>From project files to commit.</h2>
              <p>Edit files, run commands, and review changes from the same workspace.</p>
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

        <section id="efith" className="efith-section">
          <div className="container efith-layout">
            <div className="efith-copy">
              <div className="eyebrow"><span /> MEET EFITH</div>
              <h2>An AI coding agent for your project.</h2>
              <p>EFITH can answer questions about your code and propose edits. Review changes before applying them.</p>
              <ul className="efith-points">
                <li><Check size={15} /> Choose a supported AI provider and model.</li>
                <li><Check size={15} /> Review proposed file changes before applying them.</li>
                <li><Check size={15} /> Set the agent's tool permissions in its settings.</li>
                <li><Check size={15} /> Return to saved conversations with chat history.</li>
              </ul>
              <div className="hero-actions"><a className="text-link" href={siteUrl('efith/')}>Explore EFITH in detail <ArrowRight size={14}/></a><a className="text-link" href={REPOSITORY} target="_blank" rel="noreferrer">Nexora Code on GitHub <ExternalLink size={14} /></a></div>
            </div>
            <div className="efith-panel">
              <div className="efith-panel-header"><span className="efith-panel-brand"><span className="efith-panel-mark"><Code2 size={16} /></span><span><strong>EFITH</strong><small>CODING AGENT</small></span></span><span className="mode-pill">CHAT <ChevronDown size={12} /></span></div>
              <div className="efith-panel-content">
                <div className="chat-date">CONVERSATION / CURRENT WORKSPACE</div>
                <div className="chat-user"><span>YOU</span><p>Help me understand where this component gets its data.</p></div>
                <div className="chat-assistant"><span className="assistant-avatar"><Bot size={14} /></span><div><strong>EFITH</strong><p>I can trace the component's props and related project files. Would you like an explanation or a suggested change?</p><span className="review-example"><FileCode2 size={14} /> Review proposed changes</span></div></div>
              </div>
              <div className="permission-note"><ShieldCheck size={14} /> Permissions are configurable in EFITH settings</div>
              <div className="chat-composer" aria-hidden="true"><span>Ask EFITH about your workspace…</span><span className="composer-send"><ArrowRight size={14} /></span></div>
              <p className="efith-disclaimer">Illustrative example. Provider access and model availability depend on your configuration.</p>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container about-layout">
            <div className="about-mark"><img src={siteUrl('nexora-mark.svg')} alt="" /></div>
            <div className="about-copy">
              <div className="eyebrow"><span /> ABOUT NEXORA</div>
              <h2>About Nexora.</h2>
              <p>Nexora is a software brand founded by Ishah Mushak. Nexora Code is its Windows IDE, and EFITH is its coding agent.</p>
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
              <p>Check GitHub Releases for published builds and release notes.</p>
              <a className="button-primary" href={RELEASES} target="_blank" rel="noreferrer"><Monitor size={16} /> View GitHub Releases <ArrowUpRight size={14} /></a>
              <p className="availability availability-download"><span /> There is no public installer listed on the release page right now.</p>
            </div>
            <div className="release-card">
              <div className="release-card-top"><span className="release-icon"><ArrowDownToLine size={17} /></span><span className="release-badge">OFFICIAL RELEASES</span></div>
              <h3>Get the latest release</h3>
              <p>No installer is currently listed on the release page.</p>
              <a href={RELEASES} target="_blank" rel="noreferrer">Open release page <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand-column"><Brand footer /><p>A Windows IDE by Nexora.</p></div>
          <div className="footer-links-group"><strong>PRODUCT</strong><a href={siteUrl('features/')}>Features</a><a href={siteUrl('efith/')}>EFITH</a><a href={siteUrl('tech-stack/')}>Tech stack</a><a href="#download">Downloads</a></div>
          <div className="footer-links-group"><strong>PROJECT</strong><a href={REPOSITORY} target="_blank" rel="noreferrer">Source code <ArrowUpRight size={12} /></a><a href={RELEASES} target="_blank" rel="noreferrer">Releases <ArrowUpRight size={12} /></a><a href={ORGANIZATION} target="_blank" rel="noreferrer">Nexora on GitHub <ArrowUpRight size={12} /></a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Nexora Code</span><span>Made for the work ahead.</span></div>
      </footer>
    </div>
  );
}

export default App;
