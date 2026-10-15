import { ArrowRight, ArrowUpRight, BookOpen, Braces, CheckCircle2, Code2, ExternalLink, FileText, GitBranch, ShieldCheck, Terminal } from 'lucide-react';
import { siteUrl } from './site-url.js';
import SiteHeader from './SiteHeader.jsx';
import SiteFooter from './SiteFooter.jsx';
import './docs-page.css';

const REPOSITORY = 'https://github.com/animevaultofficial/Nexora-Code';
const RELEASES = `${REPOSITORY}/releases`;

const guideSections = [
  {
    id: 'overview',
    number: '01',
    title: 'What is Nexora Code?',
    icon: Code2,
    body: 'Nexora Code is a Windows desktop development workspace from Nexora CO. It brings common coding tasks into one interface so you can move between editing, project files, terminal work, and source control without constantly switching windows.',
    bullets: ['Monaco-powered code editor and project Explorer', 'Integrated terminal and Git-oriented workflow', 'Optional browser, Spotify, and Discord integrations', 'EFITH, an AI-assisted coding agent with configuration and permission considerations'],
  },
  {
    id: 'requirements',
    number: '02',
    title: 'Before you begin',
    icon: CheckCircle2,
    body: 'Requirements vary by build and by the tools your project uses. Check the release notes for the build you intend to install, and keep existing development tools if they already meet your needs.',
    bullets: ['A supported Windows environment for the selected build', 'Review release notes and any bundled installation instructions', 'Git and Node.js may be needed for developer workflows, not every use of the IDE', 'Some integrations require their own installed apps, accounts, or configuration'],
  },
  {
    id: 'install',
    number: '03',
    title: 'Install and get started',
    icon: Terminal,
    body: 'Use the official release location as the source of truth for downloadable installers. If no public installer is listed, wait for a release rather than downloading an unofficial package.',
    bullets: ['Open the official GitHub Releases page', 'Read the release notes and verify the package matches your system', 'Follow the installer prompts and launch Nexora Code', 'Open a project folder and check its files before running project commands'],
    link: { label: 'Open official releases', href: RELEASES },
  },
  {
    id: 'workflow',
    number: '04',
    title: 'Your first coding workflow',
    icon: GitBranch,
    body: 'A simple loop is a good place to start. Keep a backup of important work, especially when trying a new tool or using generated code.',
    bullets: ['Open a project folder in the Explorer', 'Select a file and make a small, reviewable change', 'Use the integrated terminal to run the project’s documented commands', 'Review changes before committing or pushing with Git'],
  },
  {
    id: 'efith',
    number: '05',
    title: 'Using EFITH and AI features',
    icon: Braces,
    body: 'EFITH can assist with coding tasks depending on the installed build and configured provider. AI features may require your own provider account, credentials, or settings. Review generated suggestions and proposed file changes before accepting them.',
    bullets: ['Check which provider and model are configured', 'Never paste API keys or passwords into public issues or shared screenshots', 'Review commands, edits, and generated output before running or applying them', 'Check the provider’s own privacy terms for how prompts and data are handled'],
    link: { label: 'Read the feature guide', href: siteUrl('features/') },
  },
  {
    id: 'integrations',
    number: '06',
    title: 'Optional integrations',
    icon: ExternalLink,
    body: 'Spotify, Discord, and other integrations are optional and depend on the current build and third-party service availability. Their sign-in, account, and privacy rules are controlled by the relevant service provider.',
    bullets: ['Enable only integrations you actually want to use', 'Use official sign-in flows and review permissions', 'Keep account credentials private and revoke access you no longer need', 'If an integration fails, check its service status and the current Nexora Code release notes'],
    link: { label: 'Explore features', href: siteUrl('features/') },
  },
  {
    id: 'safety',
    number: '07',
    title: 'Security and good practice',
    icon: ShieldCheck,
    body: 'Treat your project and credentials with care. Development tools can modify files or execute commands, and third-party integrations have their own permissions and data practices.',
    bullets: ['Back up important files and use version control', 'Inspect terminal commands and AI-proposed changes before approving them', 'Do not share secrets, tokens, passwords, or private keys', 'Install software from official sources and keep dependencies updated'],
  },
];

function DocsCard({ item }) {
  const Icon = item.icon;
  return <article id={item.id} className="docs-article">
    <div className="docs-article-index"><span>{item.number}</span><Icon size={17}/></div>
    <div className="docs-article-copy">
      <h2>{item.title}</h2>
      <p>{item.body}</p>
      <ul>{item.bullets.map(bullet => <li key={bullet}><CheckCircle2 size={14}/><span>{bullet}</span></li>)}</ul>
      {item.link && <a className="docs-inline-link" href={item.link.href} target={item.link.href.startsWith('http') ? '_blank' : undefined} rel={item.link.href.startsWith('http') ? 'noreferrer' : undefined}>{item.link.label} <ArrowUpRight size={13}/></a>}
    </div>
  </article>;
}

export default function DocsPage() {
  return <div className="site-shell docs-shell">
    <SiteHeader currentPage="docs"/>
    <main>
      <section className="docs-hero container">
        <div className="eyebrow"><span/> NEXORA CODE / DOCUMENTATION</div>
        <h1>Clear answers.<br/><span>Better flow.</span></h1>
        <p>The starting point for understanding Nexora Code, setting up your workspace, using EFITH, and working safely with integrations.</p>
        <div className="docs-hero-meta"><span><BookOpen size={15}/> PRODUCT DOCUMENTATION</span><span><FileText size={15}/> GETTING STARTED &amp; GUIDES</span></div>
        <div className="docs-hero-actions"><a className="button-primary" href="#install">Get started <ArrowRight size={15}/></a><a className="button-secondary" href={REPOSITORY} target="_blank" rel="noreferrer">View source repository <ArrowUpRight size={14}/></a></div>
      </section>
      <section className="docs-layout-section">
        <div className="container docs-layout">
          <aside className="docs-toc">
            <span className="docs-toc-label">ON THIS PAGE</span>
            {guideSections.map(item => <a key={item.id} href={'#' + item.id}><span>{item.number}</span>{item.title}</a>)}
            <div className="docs-toc-divider"/>
            <a href={siteUrl('terms/')}><span><FileText size={13}/></span>Terms &amp; Conditions</a>
            <a href={siteUrl('privacy-policy/')}><span><ShieldCheck size={13}/></span>Privacy Policy</a>
            <a href={siteUrl('about/')}><span><Code2 size={13}/></span>About Nexora</a>
          </aside>
          <div className="docs-articles">
            {guideSections.map(item => <DocsCard key={item.id} item={item}/>)}
            <div className="docs-help-card"><div className="docs-help-icon"><BookOpen size={18}/></div><div><h2>Need a little more detail?</h2><p>Browse the feature guide for the product tour, or check the official repository for project updates and issue reporting where enabled.</p><div className="docs-help-links"><a href={siteUrl('features/')}>Feature guide <ArrowRight size={13}/></a><a href={REPOSITORY} target="_blank" rel="noreferrer">GitHub repository <ArrowUpRight size={13}/></a></div></div></div>
            <p className="docs-disclaimer">Documentation describes intended workflows and may not match every build. Features and requirements can change; consult the release notes for the version you use.</p>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter/>
  </div>;
}
