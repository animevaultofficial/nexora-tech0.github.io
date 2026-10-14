import { useState } from 'react';
import { siteUrl, siteRoute } from './site-url.js';
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
  Command,
  ExternalLink,
  FileCode2,
  FolderOpen,
  GitBranch,
  Github,
  Menu,
  Monitor,
  PanelRight,
  Play,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react';

const REPOSITORY = 'https://github.com/animevaultofficial/Nexora-Code';
const RELEASES = `${REPOSITORY}/releases`;
const ORGANIZATION = 'https://github.com/nexora-tech0';

const projectFiles = [
  { name: 'src', kind: 'folder' },
  { name: 'App.jsx', kind: 'react' },
  { name: 'styles.css', kind: 'style' },
  { name: 'package.json', kind: 'json' },
  { name: 'README.md', kind: 'markdown' },
];

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

function CodeLine({ number, children }) {
  return <div className="code-line"><span className="line-number">{number}</span><code>{children}</code></div>;
}

function ProductPreview() {
  const [activeFile, setActiveFile] = useState('App.jsx');
  const isStyleFile = activeFile === 'styles.css';
  const isPackageFile = activeFile === 'package.json';

  return (
    <section className="product-preview" aria-label="Nexora Code interface preview">
      <div className="preview-caption">
        <span><i className="live-indicator" /> NEXORA CODE / WORKSPACE</span>
        <span>WINDOWS DESKTOP IDE</span>
      </div>
      <div className="product-window">
        <div className="window-titlebar">
          <div className="window-controls" aria-hidden="true"><i /><i /><i /></div>
          <div className="window-title"><img src={siteUrl('nexora-mark.svg')} alt="" /> Nexora Code <span>— nexora-app</span></div>
          <span className="window-action" aria-hidden="true"><Command size={14} /></span>
        </div>
        <div className="window-content">
          <aside className="activity-rail" aria-label="Workspace tools">
            <img src={siteUrl('nexora-mark.svg')} alt="" />
            <span className="rail-active"><FolderOpen size={17} /></span>
            <span><GitBranch size={17} /></span>
            <span><Terminal size={17} /></span>
            <span><Sparkles size={17} /></span>
          </aside>
          <aside className="file-explorer">
            <div className="explorer-heading">EXPLORER <ChevronDown size={13} /></div>
            <div className="project-name"><ChevronDown size={13} /> NEXORA-APP</div>
            <div className="file-list">
              {projectFiles.map((file) => (
                <button
                  key={file.name}
                  type="button"
                  className={`file-item ${activeFile === file.name ? 'file-selected' : ''} ${file.kind === 'folder' ? 'folder-item' : ''}`}
                  aria-pressed={activeFile === file.name}
                  onClick={() => file.kind !== 'folder' && setActiveFile(file.name)}
                  disabled={file.kind === 'folder'}
                >
                  {file.kind === 'folder' ? <FolderOpen size={14} /> : <FileCode2 size={14} />}
                  {file.name}
                </button>
              ))}
            </div>
            <div className="explorer-status"><span /> Workspace open</div>
          </aside>
          <section className="code-editor" aria-label={`${activeFile} preview`}>
            <div className="editor-tabs">
              {['App.jsx', 'styles.css', 'package.json'].map((file) => (
                <button key={file} type="button" onClick={() => setActiveFile(file)} aria-pressed={activeFile === file} className={activeFile === file ? 'tab-active' : ''}>
                  <FileCode2 size={13} />{file}
                </button>
              ))}
            </div>
            <div className="editor-breadcrumb">src <span>/</span> {activeFile}</div>
            <div className="code-content" aria-live="polite">
              {isStyleFile ? <>
                <CodeLine number="1"><span className="token-pink">.workspace</span> {'{'}</CodeLine>
                <CodeLine number="2">&nbsp;&nbsp;<span className="token-blue">display</span>: flex;</CodeLine>
                <CodeLine number="3">&nbsp;&nbsp;<span className="token-blue">min-height</span>: <span className="token-green">100vh</span>;</CodeLine>
                <CodeLine number="4">&nbsp;&nbsp;<span className="token-blue">color</span>: <span className="token-green">var(--text-primary)</span>;</CodeLine>
                <CodeLine number="5">{'}'}</CodeLine>
                <CodeLine number="6">{' '}</CodeLine>
                <CodeLine number="7"><span className="token-pink">.editor</span> {'{'}</CodeLine>
                <CodeLine number="8">&nbsp;&nbsp;<span className="token-blue">flex</span>: 1;</CodeLine>
                <CodeLine number="9">&nbsp;&nbsp;<span className="token-blue">overflow</span>: hidden;</CodeLine>
                <CodeLine number="10">{'}'}</CodeLine>
              </> : isPackageFile ? <>
                <CodeLine number="1">{'{'}</CodeLine>
                <CodeLine number="2">&nbsp;&nbsp;<span className="token-blue">"name"</span>: <span className="token-green">"nexora-app"</span>,</CodeLine>
                <CodeLine number="3">&nbsp;&nbsp;<span className="token-blue">"private"</span>: <span className="token-orange">true</span>,</CodeLine>
                <CodeLine number="4">&nbsp;&nbsp;<span className="token-blue">"scripts"</span>: {'{'}</CodeLine>
                <CodeLine number="5">&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-blue">"dev"</span>: <span className="token-green">"vite"</span>,</CodeLine>
                <CodeLine number="6">&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-blue">"build"</span>: <span className="token-green">"vite build"</span></CodeLine>
                <CodeLine number="7">&nbsp;&nbsp;{'}'}</CodeLine>
                <CodeLine number="8">{'}'}</CodeLine>
              </> : <>
                <CodeLine number="1"><span className="token-pink">import</span> {'{'} useState {'}'} <span className="token-pink">from</span> <span className="token-green">'react'</span>;</CodeLine>
                <CodeLine number="2">{' '}</CodeLine>
                <CodeLine number="3"><span className="token-pink">export default function</span> <span className="token-yellow">App</span>() {'{'}</CodeLine>
                <CodeLine number="4">&nbsp;&nbsp;<span className="token-pink">const</span> [ready, setReady] =</CodeLine>
                <CodeLine number="5">&nbsp;&nbsp;&nbsp;&nbsp;useState(<span className="token-orange">false</span>);</CodeLine>
                <CodeLine number="6">{' '}</CodeLine>
                <CodeLine number="7">&nbsp;&nbsp;<span className="token-pink">return</span> (</CodeLine>
                <CodeLine number="8">&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-red">&lt;main</span> <span className="token-blue">className</span>=</CodeLine>
                <CodeLine number="9">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-green">"workspace"</span><span className="token-red">&gt;</span></CodeLine>
                <CodeLine number="10">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-red">&lt;Editor</span> <span className="token-blue">ready</span>=&#123;ready&#125; /&gt;</CodeLine>
                <CodeLine number="11">&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-red">&lt;/main&gt;</span></CodeLine>
                <CodeLine number="12">&nbsp;&nbsp;);</CodeLine>
                <CodeLine number="13">{'}'}</CodeLine>
              </>}
            </div>
            <div className="editor-footer"><span className="cursor-dot" /> Select a file to preview its contents</div>
          </section>
          <aside className="efith-preview" aria-label="EFITH assistant preview">
            <div className="efith-preview-title"><span><EfithMark size={16}/> EFITH</span><span className="efith-state">READY</span></div>
            <div className="efith-preview-intro"><div className="efith-symbol"><EfithMark size={21}/></div><strong>Work through the next step.</strong><p>Ask about your code or describe what you want to change.</p></div>
            <div className="efith-example"><span>YOU</span><p>Can you explain this component?</p></div>
            <div className="efith-response"><span><EfithMark size={13}/> EFITH</span><p>I can inspect the selected file and walk through its structure.</p></div>
            <div className="efith-compose">Message EFITH… <ArrowRight size={13} /></div>
            <div className="efith-permission"><ShieldCheck size={12} /> Tool access follows your permission setting</div>
          </aside>
        </div>
        <div className="window-statusbar"><span><GitBranch size={12} /> main</span><span><Play size={11} /> Ready</span><span className="status-spacer" /><span>UTF-8</span><span>Spaces: 2</span></div>
      </div>
      <p className="preview-note">Illustrative interface preview. Product features and availability may vary by release.</p>
    </section>
  );
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
        <span className="announcement-mark"><Sparkles size={13} /></span>
        <span>A focused desktop workspace for the work you want to make.</span>
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
            <h1>Your code.<br />Your workflow.<br /><span>One focused workspace.</span></h1>
            <p className="hero-description">Nexora Code brings your editor, terminal, Git, integrated browser, Spotify, Discord, and EFITH together in one Windows desktop IDE. EFITH supports GitHub Copilot, OpenAI, Gemini, and additional configured AI providers.</p>
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
                <h2>Keep the tools close.<br /><span>Keep your attention on the work.</span></h2>
              </div>
              <p>A desktop IDE that puts core development tools in one place, without hiding how they work. <a className="feature-guide-link" href={siteUrl('features/')}>Explore the complete feature guide <ArrowRight size={13}/></a></p>
            </div>
            <div className="feature-grid">
              {featureCards.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
            </div>
          </div>
        </section>

        <section id="workflow" className="workflow-section">
          <div className="container workflow-layout">
            <div className="workflow-heading">
              <div className="eyebrow"><span /> A WORKSPACE THAT CONNECTS THE STEPS</div>
              <h2>From open project<br />to <span>next commit.</span></h2>
              <p>Keep the everyday parts of development within reach, and move between them as your work takes shape.</p>
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
              <h2>A coding agent<br />that works <span>with you.</span></h2>
              <p>EFITH is Nexora Code's AI coding agent. Ask questions about your project, get help planning a change, and review file edits before they are applied.</p>
              <ul className="efith-points">
                <li><Check size={15} /> Choose a supported AI provider and model.</li>
                <li><Check size={15} /> Review proposed file changes before applying them.</li>
                <li><Check size={15} /> Set the agent's tool permissions in its settings.</li>
                <li><Check size={15} /> Return to saved conversations with chat history.</li>
              </ul>
              <div className="hero-actions"><a className="text-link" href={siteUrl('efith/')}>Explore EFITH in detail <ArrowRight size={14}/></a><a className="text-link" href={REPOSITORY} target="_blank" rel="noreferrer">Nexora Code on GitHub <ExternalLink size={14} /></a></div>
            </div>
            <div className="efith-panel">
              <div className="efith-panel-header"><span className="efith-panel-brand"><span className="efith-panel-mark"><Sparkles size={16} /></span><span><strong>EFITH</strong><small>CODING AGENT</small></span></span><span className="mode-pill">CHAT <ChevronDown size={12} /></span></div>
              <div className="efith-panel-content">
                <div className="chat-date">CONVERSATION / CURRENT WORKSPACE</div>
                <div className="chat-user"><span>YOU</span><p>Help me understand where this component gets its data.</p></div>
                <div className="chat-assistant"><span className="assistant-avatar"><Sparkles size={14} /></span><div><strong>EFITH</strong><p>I can trace the component's props and related project files. Would you like an explanation or a suggested change?</p><span className="review-example"><FileCode2 size={14} /> Review proposed changes</span></div></div>
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
              <h2>Built under the <span>Nexora</span> name.</h2>
              <p>Nexora is a software brand founded and led by CEO Ishah Mushak. Nexora Code is its Windows desktop IDE, and EFITH was built by Ishah Mushak as its AI coding agent.</p>
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
              <h2>See what is<br /><span>available.</span></h2>
              <p>Visit the official release page for the latest published downloads and release notes.</p>
              <a className="button-primary" href={RELEASES} target="_blank" rel="noreferrer"><Monitor size={16} /> View GitHub Releases <ArrowUpRight size={14} /></a>
              <p className="availability availability-download"><span /> There is no public installer listed on the release page right now.</p>
            </div>
            <div className="release-card">
              <div className="release-card-top"><span className="release-icon"><ArrowDownToLine size={17} /></span><span className="release-badge">OFFICIAL RELEASES</span></div>
              <h3>Get the latest release</h3>
              <p>Check the release page for downloadable builds, version details, and update notes.</p>
              <a href={RELEASES} target="_blank" rel="noreferrer">Open release page <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand-column"><Brand footer /><p>A focused Windows desktop workspace, developed under Nexora.</p></div>
          <div className="footer-links-group"><strong>PRODUCT</strong><a href={siteUrl('features/')}>Features</a><a href={siteUrl('efith/')}>EFITH</a><a href={siteUrl('tech-stack/')}>Tech stack</a><a href="#download">Downloads</a></div>
          <div className="footer-links-group"><strong>PROJECT</strong><a href={REPOSITORY} target="_blank" rel="noreferrer">Source code <ArrowUpRight size={12} /></a><a href={RELEASES} target="_blank" rel="noreferrer">Releases <ArrowUpRight size={12} /></a><a href={ORGANIZATION} target="_blank" rel="noreferrer">Nexora on GitHub <ArrowUpRight size={12} /></a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Nexora Code</span><span>Made for the work ahead.</span></div>
      </footer>
    </div>
  );
}

export default App;
