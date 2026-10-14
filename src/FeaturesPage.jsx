import { useState } from 'react';
import { siteUrl } from './site-url.js';
import './features-page.css';
import { siDiscord, siSpotify } from 'simple-icons';
import SimpleIcon from './SimpleIcon.jsx';
import SiteHeader from './SiteHeader.jsx';
import ProviderMark from './ProviderMark.jsx';
import ScreenshotGallery from './ScreenshotGallery.jsx';
import { aiProviders } from './provider-data.js';
import {
  ArrowDownToLine, ArrowRight, ArrowUpRight, Bot, Camera, Check,
  CircleHelp, Code2, Command, ExternalLink, Globe, Layers, Monitor,
  Music2, Puzzle, Search, Settings2, Volume2
} from 'lucide-react';

const REPOSITORY = 'https://github.com/animevaultofficial/Nexora-Code';
const RELEASES = `${REPOSITORY}/releases`;
const ORGANIZATION = 'https://github.com/nexora-tech0';
const JOJI_ARTWORK = 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7b/63/fd/7b63fdf0-31a7-ed7c-0449-ca3df4aec9dc/190296925382.jpg/100x100bb.jpg';
const JOJI_TRACK = 'https://music.apple.com/us/album/slow-dancing-in-the-dark/1724896193?i=1724896195';

function FeatureBrand() {
  return <a className="brand" href={siteUrl('')} aria-label="Nexora Code home">
    <img src={siteUrl('nexora-mark.svg')} width="34" height="34" alt="" />
    <span>NEXORA <span className="brand-muted">CODE</span></span>
  </a>;
}

function SectionHeading({ eyebrow, title, children, titleId }) {
  return <div className="feature-guide-heading">
    <div><div className="eyebrow"><span/>{eyebrow}</div><h2 id={titleId}>{title}</h2></div>
    <p>{children}</p>
  </div>;
}

function RealIslandPreview() {
  return <div className="island-showcase-visual island-showcase-real">
    <figure className="island-real-capture">
      <span className="island-capture-label"><i/> CAPTURED FROM NEXORA CODE</span>
      <img className="island-real-titlebar" src={siteUrl('screenshots/spotify-dynamic-island.png')} alt="Actual Nexora Code titlebar Spotify player, captured from the running IDE"/>
      <figcaption>The real titlebar player: album art, track details, playback controls, and visualizer.</figcaption>
      <img className="island-real-workspace" src={siteUrl('screenshots/ide-overview.png')} alt="Full Nexora Code workspace with its real Spotify titlebar controller and integrated terminal"/>
    </figure>
    <div className="island-copy">
      <span className="island-kicker"><SimpleIcon icon={siSpotify} title="Spotify" size={15}/> SPOTIFY DYNAMIC ISLAND</span>
      <h3>Spotify controls close at hand.</h3>
      <p>A compact, resizable music control sits in the IDE titlebar. It surfaces the active track and album art, adds a playback visualizer, and keeps essential controls close while you work.</p>
      <ul>
        <li><Check size={15}/> Previous, play/pause, and next track</li>
        <li><Check size={15}/> Track title, artist, and artwork from the active session</li>
        <li><Check size={15}/> App-volume controls and optional visualizer</li>
        <li><Check size={15}/> Full playback controls in the Spotify sidebar</li>
      </ul>
      <figure className="spotify-art-reference">
        <img src={JOJI_ARTWORK} alt="Official BALLADS 1 artwork associated with Joji's Slow Dancing in the Dark"/>
        <figcaption><span>TRACK ART REFERENCE</span><strong>Joji · Slow Dancing in the Dark</strong><a href={JOJI_TRACK} target="_blank" rel="noreferrer">Open official track listing <ExternalLink size={11}/></a></figcaption>
      </figure>
    </div>
  </div>;
}

const livePreviewScreens = [
  { id: 'workspace', title: 'Workspace', file: 'ide-overview.png', alt: 'Authentic Nexora Code workspace with editor, Explorer, Spotify player, and terminal' },
  { id: 'editor', title: 'Editor + Explorer', file: 'editor-explorer.png', alt: 'Authentic Nexora Code editor and project Explorer' },
  { id: 'quick-open', title: 'Quick Open', file: 'quick-open.png', alt: 'Authentic Nexora Code Quick Open file picker' },
  { id: 'browser', title: 'Browser', file: 'browser.png', alt: 'Authentic Nexora Code integrated Browser' },
  { id: 'spotify', title: 'Spotify', file: 'spotify-controller.png', alt: 'Authentic Nexora Code Spotify Controller' },
  { id: 'dynamic-island', title: 'Dynamic Island', file: 'spotify-dynamic-island.png', alt: 'Authentic Spotify Dynamic Island in the Nexora Code titlebar' },
  { id: 'discord', title: 'Discord', file: 'discord.png', alt: 'Authentic Discord workspace inside Nexora Code' },
  { id: 'image-studio', title: 'Image Studio', file: 'image-studio.png', alt: 'Authentic Nexora Code Image Studio' },
  { id: 'efith', title: 'EFITH', file: 'efith-chat.png', alt: 'Authentic EFITH conversation inside Nexora Code' },
  { id: 'github', title: 'GitHub', file: 'github-workspace.png', alt: 'Authentic Nexora Code GitHub workspace' },
  { id: 'settings', title: 'Settings', file: 'settings-appearance.png', alt: 'Authentic Nexora Code appearance settings' },
  { id: 'onboarding', title: 'Onboarding', file: 'onboarding-welcome.png', alt: 'Authentic Nexora Code first-run onboarding' }
];

const featureCaptures = {
  editor: 'editor-explorer.png',
  terminal: 'ide-overview.png',
  git: 'ide-overview.png',
  browser: 'browser.png',
  efith: 'efith-chat.png',
  image: 'image-studio.png'
};

function InteractiveIdePreview() {
  const [activeId, setActiveId] = useState('workspace');
  const active = livePreviewScreens.find(screen => screen.id === activeId) || livePreviewScreens[0];
  const handleTabKeyDown = (event, index) => {
    let nextIndex = index;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % livePreviewScreens.length;
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + livePreviewScreens.length) % livePreviewScreens.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = livePreviewScreens.length - 1;
    else return;
    event.preventDefault();
    const nextScreen = livePreviewScreens[nextIndex];
    setActiveId(nextScreen.id);
    document.getElementById(`live-preview-tab-${nextScreen.id}`)?.focus();
  };
  return <section className="live-ide-showcase" id="live-preview" aria-labelledby="live-ide-title">
    <div className="container">
      <SectionHeading titleId="live-ide-title" eyebrow="EXPLORE THE REAL PRODUCT" title={<>Nexora Code,<br/><span>in the workspace.</span></>}>
        Switch between authentic captures of the IDE. These are real product screens, not source listings or invented interface mockups.
      </SectionHeading>
      <div className="live-ide-frame">
        <div className="live-ide-tabs" role="tablist" aria-label="Nexora Code preview screens">
          {livePreviewScreens.map((screen, index) => <button key={screen.id} id={`live-preview-tab-${screen.id}`} type="button" role="tab" tabIndex={active.id === screen.id ? 0 : -1} aria-controls="live-preview-panel" aria-selected={active.id === screen.id} className={active.id === screen.id ? 'active' : ''} onKeyDown={event => handleTabKeyDown(event, index)} onClick={() => setActiveId(screen.id)}>{screen.title}</button>)}
        </div>
        <div className="live-ide-panel" id="live-preview-panel" role="tabpanel" aria-labelledby={`live-preview-tab-${active.id}`}>
          <a className="live-ide-screen" href={siteUrl(`screenshots/${active.file}`)} target="_blank" rel="noreferrer" aria-label={`Open ${active.title} capture at full size`}>
            <img key={active.file} src={siteUrl(`screenshots/${active.file}`)} alt={active.alt} loading="lazy" decoding="async"/>
            <span><ExternalLink size={13}/> Open full size</span>
          </a>
        </div>
        <div className="live-ide-caption"><span><i/> AUTHENTIC PRODUCT CAPTURE</span><strong>{active.title}</strong><small>Use the tabs above to explore Nexora Code.</small></div>
      </div>
    </div>
  </section>;
}

function FeatureBlock({ id, number, eyebrow, title, description, points, kind, reverse = false, note }) {
  const image = featureCaptures[kind];
  return <article id={id} className={`feature-block${reverse ? ' feature-block-reverse' : ''}`}>
    <div className="feature-block-visual">
      <figure className="feature-block-capture">
        <a href={siteUrl(`screenshots/${image}`)} target="_blank" rel="noreferrer" aria-label={`Open ${eyebrow} screenshot at full size`}>
          <img src={siteUrl(`screenshots/${image}`)} alt={`${eyebrow} shown in an authentic Nexora Code capture`} loading="lazy" decoding="async"/>
        </a>
        <figcaption><span><i/> REAL IDE SCREEN</span><a href={siteUrl(`screenshots/${image}`)} target="_blank" rel="noreferrer">Open full size <ExternalLink size={11}/></a></figcaption>
      </figure>
    </div>
    <div className="feature-block-copy">
      <div className="feature-block-meta"><span>{number}</span><i/>{eyebrow}</div>
      <h3>{title}</h3><p>{description}</p>
      <ul>{points.map(point => <li key={point}><Check size={15}/>{point}</li>)}</ul>
      {note && <small className="feature-block-note"><CircleHelp size={13}/>{note}</small>}
    </div>
  </article>;
}

function FeaturesFooter() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-brand-column"><FeatureBrand/><p>A focused Windows desktop workspace, developed under Nexora.</p></div>
      <div className="footer-links-group"><strong>PRODUCT</strong><a href={siteUrl('')}>Home</a><a href={siteUrl('features/')}>Features</a><a href={siteUrl('efith/')}>EFITH</a><a href={siteUrl('tech-stack/')}>Tech stack</a></div>
      <div className="footer-links-group"><strong>PROJECT</strong><a href={RELEASES} target="_blank" rel="noreferrer">Releases <ArrowUpRight size={12}/></a><a href={ORGANIZATION} target="_blank" rel="noreferrer">Nexora on GitHub <ArrowUpRight size={12}/></a></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Nexora Code</span><span>Authentic IDE captures; integrations may require configuration.</span></div>
  </footer>;
}

export default function FeaturesPage() {
  return <div className="site-shell feature-guide-shell">
    <SiteHeader currentPage="features"/>
    <main>
      <section className="feature-guide-hero container">
        <div className="eyebrow"><span/> NEXORA CODE / FEATURE GUIDE</div>
        <h1>Nexora Code features</h1>
        <p>See the current interface and features. Some integrations require a separate account or local configuration.</p>
        <div className="feature-guide-actions"><a className="button-primary" href={RELEASES} target="_blank" rel="noreferrer"><ArrowDownToLine size={16}/> Check Windows releases <ArrowUpRight size={14}/></a><a className="button-secondary" href={siteUrl('')}>Back to overview <ArrowRight size={15}/></a></div>
        <div className="feature-guide-index"><a href="#editor"><Code2 size={14}/> Editor</a><a href="#music"><Music2 size={14}/> Spotify</a><a href="#apps"><Layers size={14}/> Built-in apps</a><a href="#efith"><Bot size={14}/> EFITH</a><a href="#developer-tools"><Settings2 size={14}/> Developer tools</a><a href="#live-preview"><Monitor size={14}/> Live preview</a><a href="#screenshots"><Camera size={14}/> Screenshots</a></div>
      </section>

      <InteractiveIdePreview/>
      <section className="container"><ScreenshotGallery/></section>

      <section id="music" className="island-section">
        <div className="container">
          <SectionHeading eyebrow="SPOTIFY CONTROLS" title={<>Spotify controls in the titlebar.</>}>The titlebar player shows the current track and provides quick playback controls. More controls are available in the Spotify sidebar.</SectionHeading>
          <RealIslandPreview/>
          <div className="island-detail-strip"><span><SimpleIcon icon={siSpotify} title="Spotify" size={16}/><b>Spotify Desktop</b><small>Windows media controls</small></span><span><Globe size={16}/><b>Spotify Web</b><small>Built-in browser session</small></span><span><Volume2 size={16}/><b>Quick controls</b><small>Seek, repeat, volume</small></span></div>
        </div>
      </section>

      <section id="editor" className="feature-guide-section container">
        <SectionHeading eyebrow="EDITOR AND WORKSPACE" title={<>Edit files, run commands, review changes.</>}>Open files, edit code, use a terminal, inspect changes, and keep documentation nearby.</SectionHeading>
        <FeatureBlock id="editing" number="01" eyebrow="EDITOR + EXPLORER" title="A project workspace you can shape." kind="editor" description="Open a folder into a Monaco-powered editor and a live project Explorer. Keep files in tabs, compare work side by side, and jump straight to a file or command without leaving the keyboard." points={['Monaco editing with syntax highlighting and editor-level JavaScript/TypeScript diagnostics','File tree, create/rename/delete, quick open, and search across workspace files','Multiple editor tabs, split editor, diff view, and unsaved-change safeguards','Customize font, tab size, wrapping, minimap, line numbers, suggestions, and editor behavior']} note="Python and C/C++ have syntax highlighting, but external language servers are not configured by default."/>
        <FeatureBlock id="terminal" number="02" eyebrow="INTEGRATED TERMINAL" title="Run the project where you edit it." kind="terminal" reverse description="The terminal is part of the workspace, not a separate window. Start sessions, switch shells, split panes, and keep command output beside your source." points={['PowerShell, Command Prompt, and Git Bash options','Multiple terminal sessions with split, restart, clear, and resize controls','xterm.js terminal with scrollback and theme-aware colors','Ctrl-click detected links to open them in your default browser']}/>
        <FeatureBlock id="source-control" number="03" eyebrow="GIT + GITHUB" title="Review work before it leaves your machine." kind="git" description="Use source control views to inspect file changes and diffs, stage intentionally, commit, and manage repository history from the IDE." points={['Stage and unstage files; review staged and unstaged diffs','Commit, branch, remote, push/pull, clone, and repository initialization actions','Browse commit history and inspect files in commits','Review merge conflicts and edit the resolved file before staging','GitHub sign-in and a separate workspace for repositories, issues, and pull requests']}/>
        <FeatureBlock id="browser" number="04" eyebrow="INTEGRATED BROWSER" title="Keep docs, local builds, and the web nearby." kind="browser" reverse description="Open websites in a tabbed browser panel or editor area. Navigate, search, reload, and test localhost pages alongside your source files." points={['Address bar supports URLs and web searches, including localhost','Multiple browser tabs with context actions and separate navigation state','Use Spotify Web or browse supporting AI websites in the browser surface','Web content runs in an isolated session separate from your editor']}/>
      </section>

      <section id="apps" className="feature-guide-apps">
        <div className="container">
          <SectionHeading eyebrow="INTEGRATED APPS" title={<>Spotify, Discord, and browser.</>}>Use supported music, communication, and browser tools alongside your code.</SectionHeading>
          <div className="feature-app-grid">
            <article className="feature-app-card feature-app-spotify"><img className="feature-app-screenshot" src={siteUrl('screenshots/spotify-controller.png')} alt="Actual Nexora Code Spotify Controller with playback, seek, source selection, and volume controls" loading="lazy"/><div className="feature-app-icon spotify-icon"><SimpleIcon icon={siSpotify} title="Spotify" size={19}/></div><span className="feature-detail">SPOTIFY CONTROLLER</span><h3>Music with a full control surface.</h3><p>Choose automatic, Spotify Desktop, or Spotify Web playback. Search tracks, artists, and albums; open playlists; see current artwork and track details; seek, skip, repeat, and adjust desktop app volume.</p><ul><li><Check size={14}/> Desktop playback through Windows media controls</li><li><Check size={14}/> Spotify Web Player in the built-in browser</li><li><Check size={14}/> Compact titlebar player with visualizer</li></ul><a href="#music">Explore the Dynamic Island <ArrowRight size={14}/></a></article>
            <article className="feature-app-card"><img className="feature-app-screenshot" src={siteUrl('screenshots/discord.png')} alt="Actual Discord workspace inside Nexora Code" loading="lazy"/><div className="feature-app-icon discord-icon"><SimpleIcon icon={siDiscord} title="Discord" size={19}/></div><span className="feature-detail">DISCORD WORKSPACE</span><h3>Keep community within reach.</h3><p>Open Discord as an embedded web workspace with back, forward, and reload controls. Its persistent session is distinct from Nexora Browser tabs.</p><ul><li><Check size={14}/> Dedicated Discord surface</li><li><Check size={14}/> Persistent, separate web session</li><li><Check size={14}/> Optional Rich Presence for coding activity</li></ul><small>Rich Presence requires the Discord desktop app and a local app ID. Presence shares labels—not file contents or full local paths.</small></article>
            <article className="feature-app-card"><img className="feature-app-screenshot" src={siteUrl('screenshots/browser.png')} alt="Actual integrated Browser workspace in Nexora Code" loading="lazy"/><div className="feature-app-icon browser-icon"><Globe size={19}/></div><span className="feature-detail">WEB + AI PAGES</span><h3>Browse while you build.</h3><p>Use browser tabs for documentation, localhost, Spotify Web, and supported web services. ChatGPT, Claude, and Gemini can also be opened as browser-backed sidebar apps.</p><ul><li><Check size={14}/> Browser panel or editor placement</li><li><Check size={14}/> Isolated page content and tab controls</li><li><Check size={14}/> External-browser fallback where a site requires it</li></ul></article>
          </div>
        </div>
      </section>

      <section id="efith" className="feature-guide-section container">
        <SectionHeading eyebrow="EFITH / AI CODING AGENT" title={<>Configure EFITH for your workflow.</>}>Choose a provider and model, set tool permissions, and review proposed file changes before applying them.</SectionHeading>
        <FeatureBlock id="efith-agent" number="05" eyebrow="CHAT + AGENT WORKFLOWS" title="From a question to a reviewable change." kind="efith" description="Use EFITH for code questions and agent tasks. When it proposes an edit, inspect the diff before applying it. Tool actions can be approved as they happen or governed by the selected access mode." points={['Tools for listing, reading, searching, and editing project files, plus running commands','Review proposed file changes in a diff before accepting','Ask every time, workspace, and full-access permission modes','Workspace-scoped chat history, multiple conversations, and model selection','Linked GitHub Copilot sign-in or configured provider credentials']}/>
        <div className="provider-panel">
          <div><span className="provider-kicker"><Bot size={14}/> AI PROVIDERS</span><h3>Use the service that fits your setup.</h3><p>Provider access, API credentials, and available model lists depend on your account and configuration.</p></div>
          <div className="provider-chips">{aiProviders.map(provider => <a className="provider-chip" href={siteUrl('efith/')} key={provider.id}><ProviderMark provider={provider} size={15}/>{provider.name}</a>)}</div>
          <a className="provider-panel-link" href={siteUrl('efith/')}>See every provider and EFITH workflow <ArrowRight size={13}/></a>
        </div>
        <FeatureBlock id="image-studio" number="06" eyebrow="IMAGE STUDIO" title="Make quick visual edits without leaving the project." kind="image" reverse description="Open image files in the built-in canvas editor for common adjustments and annotations. See edits on the canvas and save them back in a supported format." points={['Crop, resize, rotate, and flip','Adjust brightness, contrast, and saturation','Undo and redo image operations; zoom and pan the canvas','Annotate with pen/highlighter, shapes, lines, arrows, text, and numbered pins','Save PNG, JPEG, or WebP; marker annotations can be stored in a sidecar file']}/>
      </section>

      <section className="onboarding-showcase">
        <div className="container">
          <SectionHeading eyebrow="FIRST-RUN SETUP" title={<>Set up your workspace.</>}>Screenshots show the welcome flow, theme selection, integrations, and optional GitHub sign-in. You can change preferences later in Settings.</SectionHeading>
          <div className="onboarding-screenshot-grid">
            <figure><img src={siteUrl('screenshots/onboarding-welcome.png')} alt="Nexora Code first-run onboarding welcome step" loading="lazy"/><figcaption>01 · Welcome</figcaption></figure>
            <figure><img src={siteUrl('screenshots/onboarding-theme.png')} alt="Nexora Code onboarding theme selection step" loading="lazy"/><figcaption>02 · Choose a theme</figcaption></figure>
            <figure><img src={siteUrl('screenshots/onboarding-github.png')} alt="Nexora Code onboarding GitHub connection step" loading="lazy"/><figcaption>04 · Optional GitHub setup</figcaption></figure>
          </div>

        </div>
      </section>

      <section id="developer-tools" className="feature-guide-tools">
        <div className="container">
          <SectionHeading eyebrow="SETTINGS AND UTILITIES" title={<>Settings, shortcuts, and project checks.</>}>Use Quick Open, keyboard shortcuts, project checks, and settings to manage your workspace.</SectionHeading>
          <div className="tool-feature-grid">
            <article><img className="tool-feature-screenshot" src={siteUrl('screenshots/quick-open.png')} alt="Actual Nexora Code Quick Open file picker" loading="lazy"/><span className="tool-feature-icon"><Search size={17}/></span><span className="feature-detail">PROJECT SCANNER + QUICK OPEN</span><h3>Find files, issues, and next steps.</h3><p>Search workspace files quickly. Run heuristic source checks on supported files, inspect findings by severity, and jump to their source locations. Optional actions include safe checks, dependency update/audit checks, and detected project test commands.</p><small>Scans are bounded and may be partial. Heuristic checks are not a guarantee that a project is vulnerability-free.</small></article>
            <article><span className="tool-feature-icon"><Command size={17}/></span><span className="feature-detail">COMMANDS + KEYBOARD</span><h3>Reach common actions quickly.</h3><p>Search and run commands with the Command Palette, open files with Quick Open, and use shortcuts for save, search, terminal, line navigation, image editing, and more.</p><small>Examples: Ctrl+Shift+P for commands, Ctrl+P for files, Ctrl+` for terminal, Ctrl+Shift+F for workspace search.</small></article>
            <article><img className="tool-feature-screenshot" src={siteUrl('screenshots/settings-appearance.png')} alt="Actual Nexora Code Appearance settings with theme and application controls" loading="lazy"/><span className="tool-feature-icon"><Settings2 size={17}/></span><span className="feature-detail">SETTINGS + THEMES</span><h3>Tune the feel and behavior.</h3><p>Configure editor preferences, themes and accent colors, UI density and scale, built-in app visibility, auto-save behavior, terminal shell and font, Discord Rich Presence, and GitHub integration.</p><small>Preferences are stored locally on the device. Reduced motion and visualizer options are available.</small></article>
            <article><img className="tool-feature-screenshot" src={siteUrl('screenshots/settings-developer-tools.png')} alt="Actual Nexora Code Developer Tools settings and environment scan" loading="lazy"/><span className="tool-feature-icon"><Code2 size={17}/></span><span className="feature-detail">DEVELOPER TOOLS</span><h3>Check your development environment.</h3><p>Scan for installed developer tools and environment paths, review detected versions, and use the available installation or PATH actions.</p><small>Debugger adapters are not bundled; external language servers are not installed automatically.</small></article>
            <article><span className="tool-feature-icon"><Puzzle size={17}/></span><span className="feature-detail">EXTENSIONS</span><h3>Extension support is being prepared.</h3><p>The extension catalog and runtime are temporarily unavailable while compatibility and safety work continues. Existing extension files are left untouched.</p><small>We do not present the marketplace as currently installable.</small></article>
          </div>
        </div>
      </section>

      <section className="feature-guide-cta"><div className="container feature-cta-inner">
        <span className="eyebrow"><span/> DOWNLOADS</span><h2>Get Nexora Code.</h2>
        <p>Check the official release page for published builds and release notes. No public installer is currently listed there.</p>
        <div className="feature-guide-actions"><a className="button-primary" href={RELEASES} target="_blank" rel="noreferrer"><Monitor size={16}/> Check official releases <ArrowUpRight size={14}/></a><a className="button-secondary" href={siteUrl('')}>Back to overview <ArrowRight size={14}/></a></div>
      </div></section>
    </main>
    <FeaturesFooter/>
  </div>;
}
