import { useState } from 'react';
import './features-page.css';
import {
  Activity, ArrowDownToLine, ArrowLeft, ArrowRight, ArrowUpRight, AudioLines,
  Bot, Braces, Check, ChevronDown, CircleHelp, Code2, Command, Disc3,
  ExternalLink, FileCode2, FileImage, FolderOpen, Github, Globe, GitBranch,
  Layers, LockKeyhole, Menu, MessageCircle, Monitor,
  Music2, Pause, Play, Puzzle, Repeat, Search, Settings2, ShieldCheck,
  SkipBack, SkipForward, Sparkles, Terminal, Volume2, X
} from 'lucide-react';

const REPOSITORY = 'https://github.com/animevaultofficial/Nexora-Code';
const RELEASES = `${REPOSITORY}/releases`;
const ORGANIZATION = 'https://github.com/nexora-tech0';

function FeatureBrand() {
  return <a className="brand" href="/" aria-label="Nexora Code home">
    <img src="/nexora-mark.svg" width="34" height="34" alt="" />
    <span>NEXORA <span className="brand-muted">CODE</span></span>
  </a>;
}

function FeatureHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
    <div className="announcement">
      <span className="announcement-mark"><Sparkles size={13}/></span>
      <span>A closer look at the tools inside Nexora Code.</span>
      <a href="/#product">See the IDE <ArrowRight size={13}/></a>
    </div>
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <FeatureBrand/>
        <button type="button" className="mobile-menu" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)}>
          {menuOpen ? <X size={19}/> : <Menu size={19}/>}
        </button>
        <div className={`nav-links${menuOpen ? ' nav-open' : ''}`}>
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/features/" aria-current="page" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="/#efith" onClick={() => setMenuOpen(false)}>EFITH</a>
          <a href={REPOSITORY} target="_blank" rel="noreferrer"><Github size={15}/> GitHub <ArrowUpRight size={13}/></a>
          <a className="nav-download" href={RELEASES} target="_blank" rel="noreferrer">View releases <ArrowUpRight size={14}/></a>
        </div>
      </nav>
    </header>
  </>;
}

function SectionHeading({ eyebrow, title, children }) {
  return <div className="feature-guide-heading">
    <div><div className="eyebrow"><span/>{eyebrow}</div><h2>{title}</h2></div>
    <p>{children}</p>
  </div>;
}

function IslandPreview() {
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(38);
  const [volume, setVolume] = useState(64);
  const [track, setTrack] = useState(0);
  const tracks = [
    { title: 'Midnight City', artist: 'M83', colors: 'island-art-blue' },
    { title: 'The Less I Know The Better', artist: 'Tame Impala', colors: 'island-art-amber' },
    { title: 'Sweet Disposition', artist: 'The Temper Trap', colors: 'island-art-violet' }
  ];
  const current = tracks[track];
  const stepTrack = direction => setTrack(index => (index + direction + tracks.length) % tracks.length);
  return <div className="island-showcase-visual">
    <div className="island-desktop">
      <div className="island-desktop-bar"><span className="island-brand"><img src="/nexora-mark.svg" alt=""/> NEXORA CODE</span><span>src / components / Player.jsx</span><span className="island-live"><i/> WORKSPACE ACTIVE</span></div>
      <div className="island-desktop-editor">
        <div className="island-code-rail"><i/><i/><i/><i/><i/></div>
        <div className="island-code-lines" aria-hidden="true">
          <span><i>01</i> <b>const</b> playlist = <em>await</em> loadWorkspace();</span>
          <span><i>02</i> <b>return</b> &lt;Editor project=&#123;playlist&#125; /&gt;;</span>
          <span><i>03</i> </span>
          <span><i>04</i> <b>function</b> <strong>keepFocus</strong>() &#123;</span>
          <span><i>05</i> &nbsp;&nbsp;const work = <em>'in progress'</em>;</span>
          <span><i>06</i> &nbsp;&nbsp;return work;</span>
          <span><i>07</i> &#125;</span>
        </div>
        <div className="island-explorer-mini"><span>EXPLORER</span><b><FolderOpen size={13}/> src</b><small>App.jsx</small><small>Player.jsx</small><small>styles.css</small><small>package.json</small><div><Terminal size={12}/> TERMINAL</div></div>
      </div>
      <div className="dynamic-island" aria-label="Illustrative Spotify Dynamic Island preview">
        <div className="island-track-art"><span className={current.colors}><Disc3 size={26}/></span></div>
        <div className="island-track-copy"><strong>{current.title}</strong><span>{current.artist} <i/> Spotify</span></div>
        <div className={'island-equalizer'+(playing?' active':'')} aria-label={playing ? 'Visualizer animating' : 'Visualizer paused'}><i/><i/><i/><i/><i/><i/><i/></div>
        <div className="island-controls">
          <button type="button" title="Previous track" aria-label="Previous track" onClick={() => stepTrack(-1)}><SkipBack size={14}/></button>
          <button type="button" className="island-play" title={playing ? 'Pause preview' : 'Play preview'} aria-label={playing ? 'Pause preview' : 'Play preview'} onClick={() => setPlaying(value => !value)}>{playing ? <Pause size={14} fill="currentColor"/> : <Play size={14} fill="currentColor"/>}</button>
          <button type="button" title="Next track" aria-label="Next track" onClick={() => stepTrack(1)}><SkipForward size={14}/></button>
        </div>
        <div className="island-volume"><Volume2 size={13}/><input aria-label="Preview volume" type="range" min="0" max="100" value={volume} onChange={event => setVolume(Number(event.target.value))}/></div>
        <div className="island-progress"><input aria-label="Preview track progress" type="range" min="0" max="100" value={progress} onChange={event => setProgress(Number(event.target.value))}/></div>
      </div>
      <div className="island-preview-caption"><AudioLines size={13}/> Illustrative preview · titlebar player follows detected Spotify playback</div>
    </div>
    <div className="island-copy">
      <span className="island-kicker"><Music2 size={14}/> SPOTIFY DYNAMIC ISLAND</span>
      <h3>Keep the beat.<br/><span>Keep your place.</span></h3>
      <p>A compact, resizable music control sits in the IDE titlebar. It surfaces the current track and album art, adds a playback visualizer, and keeps the essential controls one click away while you work.</p>
      <ul>
        <li><Check size={15}/> Previous, play/pause, and next track</li>
        <li><Check size={15}/> Live track title, artist, and artwork</li>
        <li><Check size={15}/> App-volume popover and optional visualizer</li>
        <li><Check size={15}/> Opens the full Spotify controls when you want more</li>
      </ul>
      <span className="island-disclaimer">The controls above are a website demonstration; track metadata and desktop controls in Nexora come from the Spotify session on your PC.</span>
    </div>
  </div>;
}

function InterfacePreview({ kind }) {
  if (kind === 'editor') return <div className="guide-preview editor-guide-preview">
    <div className="guide-preview-top"><span><Braces size={14}/> NEXORA-APP</span><span>Ctrl P <Search size={12}/></span></div>
    <div className="guide-editor-grid"><div className="guide-file-tree"><b><ChevronDown size={12}/> EXPLORER</b><span><FolderOpen size={13}/> src</span><i><FileCode2 size={12}/> App.jsx</i><i><FileCode2 size={12}/> index.css</i><span><FileCode2 size={13}/> package.json</span><span><FileCode2 size={13}/> README.md</span></div><div className="guide-code"><div><span>App.jsx</span><span>package.json</span></div><code><i>01</i> <b>import</b> &#123; Editor &#125; <em>from</em> <strong>'./Editor'</strong>;</code><code><i>02</i></code><code><i>03</i> <b>export default function</b> App() &#123;</code><code><i>04</i> &nbsp;&nbsp;<em>return</em> &lt;Editor workspace=&#123;project&#125; /&gt;;</code><code><i>05</i> &#125;</code></div></div>
    <div className="guide-preview-footer"><span><GitBranch size={12}/> main</span><span>UTF-8</span><span>Spaces: 2</span></div>
  </div>;
  if (kind === 'terminal') return <div className="guide-preview terminal-guide-preview">
    <div className="guide-preview-top"><span><Terminal size={14}/> TERMINAL</span><span><PlusIcon/> <Columns2Icon/></span></div>
    <div className="terminal-lines"><span><b>PS</b> C:\projects\nexora-app&gt; <strong>npm run build</strong></span><span className="terminal-muted">&gt; nexora-app@0.1.0 build</span><span className="terminal-green">✓ built in 2.84s</span><span className="terminal-muted">dist/assets/index-D7aK2.js&nbsp; 248.6 kB</span><span><b>PS</b> C:\projects\nexora-app&gt; <i className="terminal-cursor"/></span></div>
    <div className="terminal-options"><span>PowerShell</span><span>Command Prompt</span><span>Git Bash</span></div>
  </div>;
  if (kind === 'git') return <div className="guide-preview git-guide-preview">
    <div className="guide-preview-top"><span><GitBranch size={14}/> SOURCE CONTROL</span><span>main</span></div>
    <div className="git-change"><span className="git-change-badge">M</span><span>src/App.jsx<small>Modified · +18 −4</small></span><button aria-label="Stage file">+</button></div>
    <div className="git-change"><span className="git-change-badge added">U</span><span>src/FeatureCard.jsx<small>Untracked · new file</small></span><button aria-label="Stage file">+</button></div>
    <div className="git-commit-box"><span>Commit message</span><strong>Describe your changes…</strong><button type="button"><Check size={13}/> Commit staged</button></div>
    <div className="guide-preview-footer"><span>Changes</span><span>Branches</span><span>History</span><span>Remotes</span></div>
  </div>;
  if (kind === 'browser') return <div className="guide-preview browser-guide-preview">
    <div className="browser-guide-tabs"><span className="selected"><Globe size={12}/> localhost:5173</span><span><Globe size={12}/> docs</span><button aria-label="New tab">+</button></div>
    <div className="browser-guide-address"><ArrowLeft size={12}/><ArrowRight size={12}/><RefreshIcon/><LockKeyhole size={12}/> localhost:5173 <span>Go</span></div>
    <div className="browser-guide-page"><span className="browser-guide-logo"><Code2 size={20}/></span><strong>Build right here.</strong><span>Your browser tabs live beside your editor.</span><div><button>localhost:5173</button><button>Spotify Web</button></div></div>
    <div className="guide-preview-footer"><span><ShieldCheck size={12}/> Isolated web content</span><span>Tabs stay separate from your editor</span></div>
  </div>;
  if (kind === 'image') return <div className="guide-preview image-guide-preview">
    <div className="guide-preview-top"><span><FileImage size={14}/> Image Studio · hero-art.png</span><span>Undo ↶ &nbsp; Redo ↷</span></div>
    <div className="image-guide-canvas"><div className="image-guide-art"><span/><i/><b/></div><div className="image-guide-tools"><span>Crop</span><span>Rotate</span><span>Flip</span><span>Brightness</span><span>Contrast</span><span>Resize</span><span>Annotate</span></div></div>
    <div className="guide-preview-footer"><span>1920 × 1080</span><span>PNG</span><span>Save / Save As</span></div>
  </div>;
  if (kind === 'efith') return <div className="guide-preview efith-guide-preview">
    <div className="guide-preview-top"><span><Sparkles size={14}/> EFITH</span><span>GitHub Copilot <ChevronDown size={12}/></span></div>
    <div className="efith-guide-message you"><small>YOU</small><span>Explain this function and suggest a safer version.</span></div>
    <div className="efith-guide-message"><small><Sparkles size={12}/> EFITH</small><span>I found a change to review before it touches your file.</span></div>
    <div className="efith-guide-diff"><span><FileCode2 size={12}/> src/utils.ts</span><i>+ 3 additions</i><b>Review proposed edit</b></div>
    <div className="efith-guide-permission"><ShieldCheck size={12}/> Ask every time <span>·</span> Approve each tool action</div>
  </div>;
  if (kind === 'spotify') return <div className="guide-preview spotify-guide-preview">
    <div className="guide-preview-top"><span><Music2 size={14}/> Spotify Controller</span><span className="connected-dot"/> CONNECTED</div>
    <div className="spotify-guide-source"><span>Auto</span><span>Spotify Desktop</span><span>Spotify Web</span></div>
    <div className="spotify-guide-now"><div className="spotify-guide-cover"><Disc3 size={28}/></div><div><b>Now playing</b><strong>Track details from Spotify</strong><small>Search, playlists, and playback</small></div></div>
    <div className="spotify-guide-controls"><SkipBack size={15}/><span><Pause size={17} fill="currentColor"/></span><SkipForward size={15}/><Repeat size={14}/><span className="spotify-guide-volume"><Volume2 size={13}/> ━━━━━━</span></div>
    <div className="guide-preview-footer"><span>Track seek</span><span>App volume</span><span>Repeat current track</span></div>
  </div>;
  return null;
}

function PlusIcon() { return <span className="guide-mini-icon">+</span>; }
function Columns2Icon() { return <span className="guide-mini-icon">◫</span>; }
function RefreshIcon() { return <Activity size={12}/>; }

function FeatureBlock({ id, number, eyebrow, title, description, points, kind, reverse = false, note }) {
  return <article id={id} className={`feature-block${reverse ? ' feature-block-reverse' : ''}`}>
    <InterfacePreview kind={kind}/>
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
      <div className="footer-links-group"><strong>PRODUCT</strong><a href="/">Home</a><a href="/features/">Features</a><a href="/#efith">EFITH</a></div>
      <div className="footer-links-group"><strong>PROJECT</strong><a href={REPOSITORY} target="_blank" rel="noreferrer">Source code <ArrowUpRight size={12}/></a><a href={RELEASES} target="_blank" rel="noreferrer">Releases <ArrowUpRight size={12}/></a><a href={ORGANIZATION} target="_blank" rel="noreferrer">Nexora on GitHub <ArrowUpRight size={12}/></a></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Nexora Code</span><span>Illustrative UI previews; product behavior depends on configuration.</span></div>
  </footer>;
}

export default function FeaturesPage() {
  return <div className="site-shell feature-guide-shell">
    <FeatureHeader/>
    <main>
      <section className="feature-guide-hero container">
        <div className="eyebrow"><span/> NEXORA CODE / FEATURE GUIDE</div>
        <h1>More than an editor.<br/><span>Your tools, in context.</span></h1>
        <p>Explore the real workflows built into Nexora Code—from editing and source control to music, communication, image work, and EFITH. Each preview illustrates the shipped interface; integrations may require their own account or configuration.</p>
        <div className="feature-guide-actions"><a className="button-primary" href={RELEASES} target="_blank" rel="noreferrer"><ArrowDownToLine size={16}/> Check Windows releases <ArrowUpRight size={14}/></a><a className="button-secondary" href="/">Back to overview <ArrowRight size={15}/></a></div>
        <div className="feature-guide-index"><a href="#editor"><Code2 size={14}/> Editor</a><a href="#music"><Music2 size={14}/> Spotify</a><a href="#apps"><Layers size={14}/> Built-in apps</a><a href="#efith"><Bot size={14}/> EFITH</a><a href="#developer-tools"><Settings2 size={14}/> Developer tools</a></div>
      </section>

      <section id="music" className="island-section">
        <div className="container">
          <SectionHeading eyebrow="MUSIC THAT STAYS IN THE FLOW" title={<>Meet the Spotify<br/><span>Dynamic Island.</span></>}>A glanceable, interactive music surface in the titlebar, backed by the full Spotify Controller in the sidebar. No need to switch away just to skip a track.</SectionHeading>
          <IslandPreview/>
          <div className="island-detail-strip"><span><Disc3 size={16}/><b>Spotify Desktop</b><small>Windows media controls</small></span><span><Globe size={16}/><b>Spotify Web</b><small>Built-in browser session</small></span><span><Volume2 size={16}/><b>Quick controls</b><small>Seek, repeat, volume</small></span></div>
        </div>
      </section>

      <section id="editor" className="feature-guide-section container">
        <SectionHeading eyebrow="THE EVERYDAY DEVELOPMENT LOOP" title={<>Code, explore, and run<br/><span>without losing context.</span></>}>The workspace is designed around the practical loop: open project files, edit, use a shell, inspect changes, and keep reference pages close.</SectionHeading>
        <FeatureBlock id="editing" number="01" eyebrow="EDITOR + EXPLORER" title="A project workspace you can shape." kind="editor" description="Open a folder into a Monaco-powered editor and a live project Explorer. Keep files in tabs, compare work side by side, and jump straight to a file or command without leaving the keyboard." points={['Monaco editing with syntax highlighting and editor-level JavaScript/TypeScript diagnostics','File tree, create/rename/delete, quick open, and search across workspace files','Multiple editor tabs, split editor, diff view, and unsaved-change safeguards','Customize font, tab size, wrapping, minimap, line numbers, suggestions, and editor behavior']} note="Python and C/C++ have syntax highlighting, but external language servers are not configured by default."/>
        <FeatureBlock id="terminal" number="02" eyebrow="INTEGRATED TERMINAL" title="Run the project where you edit it." kind="terminal" reverse description="The terminal is part of the workspace, not a separate window. Start sessions, switch shells, split panes, and keep command output beside your source." points={['PowerShell, Command Prompt, and Git Bash options','Multiple terminal sessions with split, restart, clear, and resize controls','xterm.js terminal with scrollback and theme-aware colors','Ctrl-click detected links to open them in your default browser']}/>
        <FeatureBlock id="source-control" number="03" eyebrow="GIT + GITHUB" title="Review work before it leaves your machine." kind="git" description="Use source control views to inspect file changes and diffs, stage intentionally, commit, and manage repository history from the IDE." points={['Stage and unstage files; review staged and unstaged diffs','Commit, branch, remote, push/pull, clone, and repository initialization actions','Browse commit history and inspect files in commits','Review merge conflicts and edit the resolved file before staging','GitHub sign-in and a separate workspace for repositories, issues, and pull requests']}/>
        <FeatureBlock id="browser" number="04" eyebrow="INTEGRATED BROWSER" title="Keep docs, local builds, and the web nearby." kind="browser" reverse description="Open websites in a tabbed browser panel or editor area. Navigate, search, reload, and test localhost pages alongside your source files." points={['Address bar supports URLs and web searches, including localhost','Multiple browser tabs with context actions and separate navigation state','Use Spotify Web or browse supporting AI websites in the browser surface','Web content runs in an isolated session separate from your editor']}/>
      </section>

      <section id="apps" className="feature-guide-apps">
        <div className="container">
          <SectionHeading eyebrow="BUILT-IN APPS, RIGHT IN THE IDE" title={<>Your working tools.<br/><span>Not just code tools.</span></>}>Nexora brings music and communication into the same desktop workspace, while keeping their content separate from your code editor.</SectionHeading>
          <div className="feature-app-grid">
            <article className="feature-app-card feature-app-spotify"><div className="feature-app-icon spotify-icon"><Music2 size={19}/></div><span className="feature-detail">SPOTIFY CONTROLLER</span><h3>Music with a full control surface.</h3><p>Choose automatic, Spotify Desktop, or Spotify Web playback. Search tracks, artists, and albums; open playlists; see current artwork and track details; seek, skip, repeat, and adjust desktop app volume.</p><ul><li><Check size={14}/> Desktop playback through Windows media controls</li><li><Check size={14}/> Spotify Web Player in the built-in browser</li><li><Check size={14}/> Compact titlebar player with visualizer</li></ul><a href="#music">Explore the Dynamic Island <ArrowRight size={14}/></a></article>
            <article className="feature-app-card"><div className="feature-app-icon discord-icon"><MessageCircle size={19}/></div><span className="feature-detail">DISCORD WORKSPACE</span><h3>Keep community within reach.</h3><p>Open Discord as an embedded web workspace with back, forward, and reload controls. Its persistent session is distinct from Nexora Browser tabs.</p><ul><li><Check size={14}/> Dedicated Discord surface</li><li><Check size={14}/> Persistent, separate web session</li><li><Check size={14}/> Optional Rich Presence for coding activity</li></ul><small>Rich Presence requires the Discord desktop app and a local app ID. Presence shares labels—not file contents or full local paths.</small></article>
            <article className="feature-app-card"><div className="feature-app-icon browser-icon"><Globe size={19}/></div><span className="feature-detail">WEB + AI PAGES</span><h3>Browse while you build.</h3><p>Use browser tabs for documentation, localhost, Spotify Web, and supported web services. ChatGPT, Claude, and Gemini can also be opened as browser-backed sidebar apps.</p><ul><li><Check size={14}/> Browser panel or editor placement</li><li><Check size={14}/> Isolated page content and tab controls</li><li><Check size={14}/> External-browser fallback where a site requires it</li></ul></article>
          </div>
        </div>
      </section>

      <section id="efith" className="feature-guide-section container">
        <SectionHeading eyebrow="EFITH / AI CODING AGENT" title={<>Choose your model.<br/><span>Stay in control.</span></>}>EFITH can answer questions about a workspace or act on it using tools. Its configuration makes the provider, model, conversation, and permission mode visible to you.</SectionHeading>
        <FeatureBlock id="efith-agent" number="05" eyebrow="CHAT + AGENT WORKFLOWS" title="From a question to a reviewable change." kind="efith" description="Use EFITH for code questions and agent tasks. When it proposes an edit, inspect the diff before applying it. Tool actions can be approved as they happen or governed by the selected access mode." points={['Tools for listing, reading, searching, and editing project files, plus running commands','Review proposed file changes in a diff before accepting','Ask every time, workspace, and full-access permission modes','Workspace-scoped chat history, multiple conversations, and model selection','Linked GitHub Copilot sign-in or configured provider credentials']}/>
        <div className="provider-panel">
          <div><span className="provider-kicker"><Bot size={14}/> AI PROVIDERS</span><h3>Use the service that fits your setup.</h3><p>Provider access, API credentials, and available model lists depend on your account and configuration.</p></div>
          <div className="provider-chips"><span><Github size={14}/> GitHub Copilot</span><span>OpenAI</span><span>Google Gemini</span><span>Anthropic Claude</span><span>Groq</span><span>xAI / Grok</span><span>Ollama · local</span><span>OpenAI-compatible API</span></div>
        </div>
        <FeatureBlock id="image-studio" number="06" eyebrow="IMAGE STUDIO" title="Make quick visual edits without leaving the project." kind="image" reverse description="Open image files in the built-in canvas editor for common adjustments and annotations. See edits on the canvas and save them back in a supported format." points={['Crop, resize, rotate, and flip','Adjust brightness, contrast, and saturation','Undo and redo image operations; zoom and pan the canvas','Annotate with pen/highlighter, shapes, lines, arrows, text, and numbered pins','Save PNG, JPEG, or WebP; marker annotations can be stored in a sidecar file']}/>
      </section>

      <section id="developer-tools" className="feature-guide-tools">
        <div className="container">
          <SectionHeading eyebrow="PRODUCTIVITY + CONFIGURATION" title={<>Small tools that make<br/><span>the workspace yours.</span></>}>Quick commands, workspace checks, project task discovery, and detailed settings help you stay oriented without implying tools that are not actually bundled.</SectionHeading>
          <div className="tool-feature-grid">
            <article><span className="tool-feature-icon"><Search size={17}/></span><span className="feature-detail">PROJECT SCANNER</span><h3>Find issues and next steps.</h3><p>Run heuristic source checks on supported files, inspect findings by severity, and jump to their source locations. Optional actions include safe checks, dependency update/audit checks, and detected project test commands.</p><small>Scans are bounded and may be partial. Heuristic checks are not a guarantee that a project is vulnerability-free.</small></article>
            <article><span className="tool-feature-icon"><Command size={17}/></span><span className="feature-detail">COMMANDS + KEYBOARD</span><h3>Reach common actions quickly.</h3><p>Search and run commands with the Command Palette, open files with Quick Open, and use shortcuts for save, search, terminal, line navigation, image editing, and more.</p><small>Examples: Ctrl+Shift+P for commands, Ctrl+P for files, Ctrl+` for terminal, Ctrl+Shift+F for workspace search.</small></article>
            <article><span className="tool-feature-icon"><Layers size={17}/></span><span className="feature-detail">LAYOUTS + ONBOARDING</span><h3>Make room for the task at hand.</h3><p>Switch between focus, editor-plus-terminal, editor-plus-AI, and split-editor layouts. First-launch setup helps preview appearance and configure integrations.</p><small>Activity tools can be reordered; sidebars can be resized and docked.</small></article>
            <article><span className="tool-feature-icon"><Settings2 size={17}/></span><span className="feature-detail">SETTINGS</span><h3>Tune the feel and behavior.</h3><p>Configure editor preferences, themes and accent colors, UI density and scale, built-in app visibility, auto-save behavior, terminal shell and font, Discord Rich Presence, and GitHub integration.</p><small>Preferences are stored locally on the device. Reduced motion and visualizer options are available.</small></article>
            <article><span className="tool-feature-icon"><Code2 size={17}/></span><span className="feature-detail">DEVELOPER WORKBENCH</span><h3>See what the project already defines.</h3><p>Discover package scripts and launch configurations from the open workspace. Run a discovered script in the integrated terminal after choosing it.</p><small>Debugger adapters are not bundled; external language servers are not installed automatically.</small></article>
            <article><span className="tool-feature-icon"><Puzzle size={17}/></span><span className="feature-detail">EXTENSIONS</span><h3>Extension support is being prepared.</h3><p>The extension catalog and runtime are temporarily unavailable while compatibility and safety work continues. Existing extension files are left untouched.</p><small>We do not present the marketplace as currently installable.</small></article>
          </div>
        </div>
      </section>

      <section className="feature-guide-cta"><div className="container feature-cta-inner">
        <span className="eyebrow"><span/> READY TO TAKE A CLOSER LOOK</span><h2>See Nexora Code<br/><span>in your own workflow.</span></h2>
        <p>Check the official release page for published builds and release notes. No public installer is currently listed there.</p>
        <div className="feature-guide-actions"><a className="button-primary" href={RELEASES} target="_blank" rel="noreferrer"><Monitor size={16}/> Check official releases <ArrowUpRight size={14}/></a><a className="button-secondary" href={REPOSITORY} target="_blank" rel="noreferrer">Browse the source <ExternalLink size={14}/></a></div>
      </div></section>
    </main>
    <FeaturesFooter/>
  </div>;
}
