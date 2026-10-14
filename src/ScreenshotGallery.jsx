import { useEffect, useMemo, useState } from 'react';
import { siteUrl } from './site-url.js';
import { Camera, ChevronLeft, ChevronRight, Maximize2, Pause, Play } from 'lucide-react';

const screenshots = [
  { file: 'ide-overview.png', title: 'IDE at a glance', group: 'Workspace', alt: 'Nexora Code IDE with Explorer, editor, Spotify player, and integrated terminal' },
  { file: 'editor-explorer.png', title: 'Editor + Explorer', group: 'Workspace', alt: 'Nexora Code with source open in the editor and project files in Explorer' },
  { file: 'quick-open.png', title: 'Quick Open', group: 'Workspace', alt: 'Nexora Code Quick Open file picker' },
  { file: 'browser.png', title: 'Integrated Browser', group: 'Workspace', alt: 'Google open in the Nexora Code integrated Browser' },
  { file: 'browser-sidebar-ai.png', title: 'Browser + AI sidebar', group: 'Workspace', alt: 'Nexora Code Browser workspace beside an AI website' },
  { file: 'spotify-controller.png', title: 'Spotify Controller', group: 'Built-in apps', alt: 'Nexora Code Spotify Controller with playback source, artwork, transport, seek, and volume controls' },
  { file: 'spotify-dynamic-island.png', title: 'Spotify Dynamic Island', group: 'Built-in apps', alt: 'Nexora Code titlebar Spotify Dynamic Island with artwork and playback controls' },
  { file: 'discord.png', title: 'Discord workspace', group: 'Built-in apps', alt: 'Discord displayed within Nexora Code' },
  { file: 'image-studio.png', title: 'Image Studio', group: 'Built-in apps', alt: 'Nexora Code Image Studio with crop controls, editing toolbar, and image canvas' },
  { file: 'efith-agent.png', title: 'EFITH in the IDE', group: 'EFITH', alt: 'EFITH coding agent open in the Nexora Code workspace' },
  { file: 'efith-chat.png', title: 'EFITH agent conversation', group: 'EFITH', alt: 'EFITH conversation showing agent activity in Nexora Code' },
  { file: 'efith-provider-settings.png', title: 'EFITH provider picker', group: 'EFITH', alt: 'EFITH Agent settings with the AI provider selector expanded' },
  { file: 'github-workspace.png', title: 'GitHub workspace', group: 'GitHub', alt: 'Repositories in the Nexora Code GitHub workspace' },
  { file: 'github-account-menu.png', title: 'GitHub account menu', group: 'GitHub', alt: 'GitHub account menu in Nexora Code' },
  { file: 'settings-about.png', title: 'About settings', group: 'Settings', alt: 'Nexora Code About settings' },
  { file: 'settings-appearance.png', title: 'Appearance settings', group: 'Settings', alt: 'Nexora Code Appearance settings with theme and app options' },
  { file: 'settings-developer-tools.png', title: 'Developer Tools settings', group: 'Settings', alt: 'Nexora Code Developer Tools settings showing detected tools' },
  { file: 'theme-blue.png', title: 'Blue theme', group: 'Settings', alt: 'Nexora Code in the blue theme' },
  { file: 'theme-deep-blue.png', title: 'Deep Blue theme', group: 'Settings', alt: 'Nexora Code in the deep-blue theme' },
  { file: 'theme-graphite.png', title: 'Graphite theme', group: 'Settings', alt: 'Nexora Code in the graphite theme' },
  { file: 'onboarding-welcome.png', title: 'Welcome', group: 'Onboarding', alt: 'Nexora Code first-run welcome screen' },
  { file: 'onboarding-theme.png', title: 'Theme selection', group: 'Onboarding', alt: 'Nexora Code onboarding theme selection screen' },
  { file: 'onboarding-github.png', title: 'GitHub setup', group: 'Onboarding', alt: 'Nexora Code onboarding GitHub setup screen' }
];

export default function ScreenshotGallery() {
  const [group, setGroup] = useState('All');
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const groups = useMemo(() => ['All', ...new Set(screenshots.map(image => image.group))], []);
  const visible = useMemo(() => group === 'All' ? screenshots : screenshots.filter(image => image.group === group), [group]);
  const selected = visible[index] || visible[0];

  useEffect(() => { setIndex(0); }, [group]);
  useEffect(() => {
    if (!playing || visible.length < 2) return undefined;
    const timer = window.setInterval(() => setIndex(current => (current + 1) % visible.length), 5000);
    return () => window.clearInterval(timer);
  }, [playing, visible.length]);

  const move = direction => setIndex(current => (current + direction + visible.length) % visible.length);
  return <section id="screenshots" className="screenshot-gallery" aria-labelledby="screenshot-gallery-title">
    <div className="screenshot-gallery-heading">
      <span className="eyebrow"><Camera size={13}/> REAL IDE SCREENSHOTS</span>
      <h2 id="screenshot-gallery-title">The product itself.<br/><span>Not a mockup.</span></h2>
      <p>Browse genuine Nexora Code captures. Filter by area, start the slideshow, or open any screen at full size.</p>
    </div>
    <div className="screenshot-gallery-filters" role="group" aria-label="Filter screenshots">
      {groups.map(name => <button key={name} type="button" className={group === name ? 'active' : ''} aria-pressed={group === name} onClick={() => setGroup(name)}>{name}</button>)}
    </div>
    <div className="screenshot-gallery-view">
      <a className="screenshot-gallery-main" href={siteUrl(`screenshots/${selected.file}`)} target="_blank" rel="noreferrer" aria-label={`Open ${selected.title} screenshot full size`}>
        <img key={selected.file} src={siteUrl(`screenshots/${selected.file}`)} alt={selected.alt} loading="lazy"/>
        <span><Maximize2 size={14}/> Open full size</span>
      </a>
      <div className="screenshot-gallery-controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous screenshot"><ChevronLeft size={17}/></button>
        <button type="button" className="screenshot-play-toggle" onClick={() => setPlaying(value => !value)} aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}>{playing ? <Pause size={14}/> : <Play size={14}/>} {playing ? 'Pause' : 'Slideshow'}</button>
        <button type="button" onClick={() => move(1)} aria-label="Next screenshot"><ChevronRight size={17}/></button>
        <span className="screenshot-counter">{index + 1} / {visible.length}</span>
        <strong>{selected.title}</strong><small>{selected.group}</small>
      </div>
    </div>
    <div className="screenshot-gallery-dots" role="group" aria-label="Choose screenshot">
      {visible.map((image, itemIndex) => <button key={image.file} type="button" className={index === itemIndex ? 'active' : ''} aria-label={`Show ${image.title}`} aria-current={index === itemIndex ? 'true' : undefined} onClick={() => setIndex(itemIndex)}/>)}
    </div>
  </section>;
}
