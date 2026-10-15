import { ArrowDownToLine, ArrowRight, ArrowUpRight, Check, CircleHelp, Palette, Settings2, ShieldCheck, Wrench } from 'lucide-react';
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
    summary: 'Keep playback, track details, and music controls close by. Use the Spotify sidebar when you want a fuller player beside your code.',
    action: 'Show or hide in Nexora Code Settings',
  },
  {
    id: 'discord',
    name: 'Discord',
    icon: siDiscord,
    tone: 'discord',
    type: 'Optional integration',
    summary: 'Keep conversations within reach without letting another app take over your workspace. Sign in with your own Discord account.',
    action: 'Show or hide in Nexora Code Settings',
  },
  {
    id: 'git',
    name: 'Git',
    icon: siGit,
    tone: 'git',
    type: 'Developer tool',
    summary: 'Use Git for local version control. Check whether it is already installed before adding another copy.',
    action: 'Settings → Developer Tools',
  },
  {
    id: 'node',
    name: 'Node.js',
    icon: siNodedotjs,
    tone: 'node',
    type: 'Developer tool',
    summary: 'Run JavaScript tooling and npm scripts when a project needs them. Keep your current installation if it already works.',
    action: 'Settings → Developer Tools',
  },
];

const themePreviews = [
  {
    id: 'welcome',
    title: 'Start with a clean setup',
    description: 'The onboarding screen gives you a clear starting point before you open a project.',
    image: 'onboarding-welcome.png',
    alt: 'Nexora Code welcome and onboarding screen',
    label: 'FIRST LAUNCH',
  },
  {
    id: 'theme',
    title: 'Choose your look',
    description: 'Preview the real appearance selection screen and pick the workspace style that feels right.',
    image: 'onboarding-theme.png',
    alt: 'Nexora Code onboarding theme selection screen',
    label: 'THEME SELECTION',
  },
  {
    id: 'appearance',
    title: 'Fine-tune the details',
    description: 'Adjust the IDE appearance from Settings after setup; the screenshot shows the actual settings interface.',
    image: 'settings-appearance.png',
    alt: 'Nexora Code appearance settings in the running desktop IDE',
    label: 'APPEARANCE SETTINGS',
  },
];

const installSteps = [
  {
    number: '01',
    title: 'Check the official release',
    description: 'Open GitHub Releases and download a Windows installer only when a public build is available.',
    image: 'onboarding-welcome.png',
    alt: 'Nexora Code welcome screen shown during first launch',
    link: true,
  },
  {
    number: '02',
    title: 'Make the workspace yours',
    description: 'Choose a theme during onboarding, then revisit Appearance in Settings whenever you want to change it.',
    image: 'onboarding-theme.png',
    alt: 'Nexora Code theme selection during onboarding',
  },
  {
    number: '03',
    title: 'Check tools before installing',
    description: 'Review Git and Node.js detection in Developer Tools. Avoid installing another copy if your current tools are already available.',
    image: 'settings-developer-tools.png',
    alt: 'Nexora Code Developer Tools settings',
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

function ThemePreview({ item }) {
  return <article className="install-theme-card">
    <div className="install-theme-image">
      <img src={siteUrl(`screenshots/${item.image}`)} alt={item.alt} loading="lazy"/>
      <span>{item.label}</span>
    </div>
    <div className="install-theme-copy">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  </article>;
}

function InstallStep({ step }) {
  return <article className="install-process-card">
    <div className="install-process-image">
      <img src={siteUrl(`screenshots/${step.image}`)} alt={step.alt} loading="lazy"/>
      <span className="install-process-number">{step.number}</span>
    </div>
    <div className="install-process-copy">
      <h3>{step.title}</h3>
      <p>{step.description}</p>
      {step.link
        ? <a href={RELEASES} target="_blank" rel="noreferrer">Official GitHub Releases <ArrowUpRight size={13}/></a>
        : <span className="install-step-foot"><Check size={13}/>{step.number === '02' ? 'Change it again any time' : 'Check before adding another copy'}</span>}
    </div>
  </article>;
}

export default function InstallationPage() {
  return <div className="site-shell installation-page">
    <SiteHeader currentPage="installation"/>
    <main>
      <section className="install-hero container">
        <div className="install-hero-copy">
          <div className="eyebrow"><span/> NEXORA CODE / GETTING STARTED</div>
          <h1>Your workspace.<br/><span>Your setup. Your style.</span></h1>
          <p>Get familiar with Nexora Code, choose an appearance you like, and add only the tools you actually need. Your editor stays at the center; everything else is there when you want it.</p>
          <div className="install-hero-actions">
            <a className="button-primary" href={RELEASES} target="_blank" rel="noreferrer"><ArrowDownToLine size={16}/> Check Windows releases <ArrowUpRight size={14}/></a>
            <a className="button-secondary" href="#install-process">See the setup process <ArrowRight size={14}/></a>
          </div>
          <p className="install-availability"><CircleHelp size={14}/> No public installer is currently listed on GitHub Releases. This page links to the official release location and will remain accurate as availability changes.</p>
        </div>
        <aside className="install-hero-note">
          <span className="install-note-icon"><ShieldCheck size={20}/></span>
          <strong>Start simple. Add things later.</strong>
          <p>You do not need to set up every integration on day one. Check existing developer tools first, then enable the optional apps that fit your workflow.</p>
        </aside>
      </section>

      <section id="install-process" className="install-steps-section">
        <div className="container">
          <div className="install-section-heading">
            <div><div className="eyebrow"><span/> THE SETUP, STEP BY STEP</div><h2>From first launch to your own workspace.</h2></div>
            <p>Real Nexora Code screenshots walk you through the key decisions. The public installer is not listed yet, so the first step is to check the official release page for availability.</p>
          </div>
          <div className="install-process-grid">{installSteps.map(step => <InstallStep key={step.number} step={step}/>)}</div>
        </div>
      </section>

      <section id="themes" className="install-themes-section">
        <div className="container">
          <div className="install-section-heading">
            <div><div className="eyebrow"><span/> APPEARANCE & THEMES</div><h2>Make it feel like your IDE.</h2></div>
            <p>Pick a look during onboarding, then revisit Appearance in Settings when you want a change. These are screenshots of Nexora Code's real setup and settings screens—not concept mockups.</p>
          </div>
          <div className="install-theme-grid">{themePreviews.map(item => <ThemePreview key={item.id} item={item}/>)}</div>
          <div className="install-theme-note"><Palette size={17}/><p><strong>One workspace, your preferences.</strong> Theme availability depends on the options exposed by the current build. The images show where appearance choices live; they are not a promise of themes that are not present in the app.</p></div>
        </div>
      </section>

      <section id="included" className="install-components-section">
        <div className="container">
          <div className="install-section-heading">
            <div><div className="eyebrow"><span/> OPTIONAL COMPONENTS</div><h2>Add only what earns its place.</h2></div>
            <p>Spotify and Discord are optional integrations. Git and Node.js are developer tools. Configure integrations inside Nexora Code, and check for existing tools before installing anything new.</p>
          </div>
          <div className="install-component-list">{setupItems.map((item, index) => <SetupItem key={item.id} item={item} index={index}/>)}</div>
        </div>
      </section>

      <section className="install-bottom-cta">
        <div className="container install-bottom-inner">
          <div><div className="eyebrow"><span/> OFFICIAL DOWNLOADS ONLY</div><h2>Ready when the build is published.</h2><p>We link directly to the official Nexora Code release page instead of hosting an unofficial installer. Check there for the package and release notes.</p></div>
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