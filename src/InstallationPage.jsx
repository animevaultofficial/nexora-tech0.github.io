import { ArrowDownToLine, ArrowRight, ArrowUpRight, Check, CircleHelp, Settings2, ShieldCheck, Wrench } from 'lucide-react';
import { siDiscord, siGit, siNodedotjs, siSpotify } from 'simple-icons';
import { siteUrl } from './site-url.js';
import SimpleIcon from './SimpleIcon.jsx';
import SiteHeader from './SiteHeader.jsx';
import './installation-page.css';

const REPOSITORY = 'https://github.com/animevaultofficial/Nexora-Code';
const RELEASES = `${REPOSITORY}/releases`;

const setupItems = [
  {
    id: 'spotify',
    name: 'Spotify controls',
    icon: siSpotify,
    tone: 'spotify',
    type: 'Optional integration',
    summary: 'Show playback controls in the titlebar and use the Spotify sidebar when you want music beside your code.',
    action: 'Enable or hide in Nexora Code Settings',
  },
  {
    id: 'discord',
    name: 'Discord',
    icon: siDiscord,
    tone: 'discord',
    type: 'Optional integration',
    summary: 'Keep your Discord workspace available inside the IDE. Sign in with your own Discord account.',
    action: 'Enable or hide in Nexora Code Settings',
  },
  {
    id: 'git',
    name: 'Git',
    icon: siGit,
    tone: 'git',
    type: 'Developer tool',
    summary: 'Needed for local repository operations. Nexora Code can check whether Git is already available on your PC.',
    action: 'Check in Settings → Developer Tools',
  },
  {
    id: 'node',
    name: 'Node.js',
    icon: siNodedotjs,
    tone: 'node',
    type: 'Developer tool',
    summary: 'Useful for JavaScript projects and npm scripts. Keep your existing installation, or install it if a project needs it.',
    action: 'Check in Settings → Developer Tools',
  },
];

function SetupItem({ item, index }) {
  return <article className="install-component">
    <div className={`install-component-icon ${item.tone}`}><SimpleIcon icon={item.icon} title={item.name} size={23}/></div>
    <div className="install-component-copy">
      <div className="install-component-heading"><h3>{item.name}</h3><span>{item.type}</span></div>
      <p>{item.summary}</p>
      <div className="install-component-action"><Check size={14}/>{item.action}</div>
    </div>
    <span className="install-component-index">{String(index + 1).padStart(2, '0')}</span>
  </article>;
}

export default function InstallationPage() {
  return <div className="site-shell installation-page">
    <SiteHeader currentPage="installation"/>
    <main>
      <section className="install-hero container">
        <div className="install-hero-copy">
          <div className="eyebrow"><span/> NEXORA CODE / INSTALLATION</div>
          <h1>Install the IDE.<br/><span>Choose what comes with it.</span></h1>
          <p>Start with Nexora Code, then choose the integrations and developer tools you actually need. You can change optional app visibility later in Settings.</p>
          <div className="install-hero-actions">
            <a className="button-primary" href={RELEASES} target="_blank" rel="noreferrer"><ArrowDownToLine size={16}/> Check Windows downloads <ArrowUpRight size={14}/></a>
            <a className="button-secondary" href="#included">What can I configure? <ArrowRight size={14}/></a>
          </div>
          <p className="install-availability"><CircleHelp size={14}/> No public installer is currently listed on GitHub Releases. This page will point to the official download when a build is published.</p>
        </div>
        <aside className="install-hero-note">
          <span className="install-note-icon"><ShieldCheck size={20}/></span>
          <strong>Nothing extra by default.</strong>
          <p>Keep optional integrations off if you don't use them. Check for developer tools before installing another copy.</p>
        </aside>
      </section>

      <section id="included" className="install-components-section">
        <div className="container">
          <div className="install-section-heading">
            <div><div className="eyebrow"><span/> OPTIONAL COMPONENTS</div><h2>Your setup, your call.</h2></div>
            <p>These options are managed after installation from Nexora Code Settings. Spotify and Discord are integrations; Git and Node.js are separate developer tools.</p>
          </div>
          <div className="install-component-list">{setupItems.map((item, index) => <SetupItem key={item.id} item={item} index={index}/>)}</div>
        </div>
      </section>

      <section className="install-steps-section">
        <div className="container">
          <div className="install-section-heading">
            <div><div className="eyebrow"><span/> GETTING STARTED</div><h2>From download to workspace.</h2></div>
            <p>Use the official release page for the Windows installer. Once Nexora Code is installed, configure only the extras you want.</p>
          </div>
          <div className="install-steps-grid">
            <article><span className="install-step-number">01</span><div className="install-step-icon"><ArrowDownToLine size={19}/></div><h3>Download Nexora Code</h3><p>Open the official GitHub Releases page and download a published Windows installer when one is available.</p><a href={RELEASES} target="_blank" rel="noreferrer">Official releases <ArrowUpRight size={13}/></a></article>
            <article><span className="install-step-number">02</span><div className="install-step-icon"><Settings2 size={19}/></div><h3>Open Settings</h3><p>Choose which built-in apps you want visible, including Spotify controls and the Discord workspace.</p><span className="install-step-foot">Settings → Apps / Integrations</span></article>
            <article><span className="install-step-number">03</span><div className="install-step-icon"><Wrench size={19}/></div><h3>Check developer tools</h3><p>Scan for Git and Node.js first. Use the available install or PATH actions only when you need them.</p><span className="install-step-foot">Settings → Developer Tools</span></article>
          </div>
        </div>
      </section>

      <section className="install-bottom-cta">
        <div className="container install-bottom-inner">
          <div><div className="eyebrow"><span/> READY WHEN YOU ARE</div><h2>Get the official build.</h2><p>We don't host unofficial installers. Check the release page for the latest published package and notes.</p></div>
          <a className="button-primary" href={RELEASES} target="_blank" rel="noreferrer">Open GitHub Releases <ArrowUpRight size={14}/></a>
        </div>
      </section>
    </main>
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-column"><a className="brand" href={siteUrl('')}><img src={siteUrl('nexora-mark.svg')} width="34" height="34" alt=""/><span>NEXORA <span className="brand-muted">CODE</span></span></a><p>A Windows IDE by Nexora.</p></div>
        <div className="footer-links-group"><strong>PRODUCT</strong><a href={siteUrl('')}>Home</a><a href={siteUrl('features/')}>Features</a><a href={siteUrl('tech-stack/')}>Tech stack</a></div>
        <div className="footer-links-group"><strong>GET STARTED</strong><a href={siteUrl('installation/')}>Installation</a><a href={RELEASES} target="_blank" rel="noreferrer">GitHub Releases <ArrowUpRight size={12}/></a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Nexora Code</span><span>Install only what you need.</span></div>
    </footer>
  </div>;
}
