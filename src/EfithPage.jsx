import { ArrowRight, ArrowUpRight, Check, ChevronDown, FileCode2, FolderSearch, Github, History, KeyRound, MessageSquare, Search, ShieldAlert, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import SiteHeader from './SiteHeader.jsx';
import ProviderMark from './ProviderMark.jsx';
import { aiProviders } from './provider-data.js';
import './efith-page.css';

const REPOSITORY = 'https://github.com/animevaultofficial/Nexora-Code';

function PermissionCard({ title, badge, description, icon: Icon, tone = '' }) {
  return <article className={`efith-permission-card${tone ? ` ${tone}` : ''}`}>
    <div className="efith-permission-card-top"><span className="efith-permission-icon"><Icon size={17}/></span><span className="efith-permission-badge">{badge}</span></div>
    <h3>{title}</h3><p>{description}</p>
  </article>;
}

export default function EfithPage() {
  return <div className="site-shell efith-page">
    <SiteHeader currentPage="efith"/>
    <main>
      <section className="efith-page-hero container">
        <div className="eyebrow efith-brand-lockup"><img src="/nexora-mark.svg" alt=""/> NEXORA CODE / EFITH AI</div>
        <h1>Meet EFITH.<br/><span>Your coding agent, in context.</span></h1>
        <p>EFITH is Nexora Code's AI coding agent. Ask questions about a project, explore workspace files with tools, and review proposed edits before they are applied. Choose the provider, model, and permission level that fit the task.</p>
        <div className="efith-page-actions"><a className="button-primary" href="/features/">Explore all IDE features <ArrowRight size={14}/></a><a className="button-secondary" href={REPOSITORY} target="_blank" rel="noreferrer">View Nexora Code source <ArrowUpRight size={14}/></a></div>
      </section>

      <section className="efith-workflow-section">
        <div className="container efith-workflow-layout">
          <div className="efith-workflow-copy">
            <span className="efith-page-kicker"><Sparkles size={14}/> CHAT + AGENT WORKFLOWS</span>
            <h2>Go from a question<br/>to a <span>reviewed change.</span></h2>
            <p>EFITH can explain code in the current project or use tools to investigate and make a proposed change. You decide what gets applied and how much access the agent receives.</p>
            <ul className="efith-page-points">
              <li><Check size={15}/> Ask questions and keep conversations with workspace-scoped history.</li>
              <li><Check size={15}/> List, read, and search project files as part of an agent task.</li>
              <li><Check size={15}/> Review proposed file edits in a diff before accepting them.</li>
              <li><Check size={15}/> Run project commands only under your selected permission mode.</li>
            </ul>
          </div>
          <figure className="efith-agent-preview">
            <img src="/screenshots/efith-agent.png" alt="Actual Nexora Code IDE with EFITH open in its coding-agent sidebar" loading="lazy"/>
            <figcaption><img src="/nexora-mark.svg" alt=""/> EFITH in the real Nexora Code workspace</figcaption>
          </figure>
        </div>
      </section>

      <section className="efith-capabilities-section container">
        <div className="feature-guide-heading">
          <div><div className="eyebrow"><span/> HOW EFITH WORKS</div><h2>Useful tools.<br/><span>Visible decisions.</span></h2></div>
          <p>EFITH connects an AI conversation to a small set of explicit workspace actions. File changes are presented for review instead of being silently written behind your back.</p>
        </div>
        <div className="efith-capability-grid">
          <article><span><FolderSearch size={17}/></span><small>01 / EXPLORE</small><h3>Understand the project</h3><p>List workspace files, read relevant source, and search for symbols or text to ground a response in the open project.</p></article>
          <article><span><FileCode2 size={17}/></span><small>02 / PROPOSE</small><h3>Prepare focused edits</h3><p>When a task calls for code changes, inspect the proposed diff and accept or reject the edit before it is applied.</p></article>
          <article><span><Terminal size={17}/></span><small>03 / RUN</small><h3>Execute with boundaries</h3><p>EFITH can run commands when permitted. Your permission mode controls when it asks and where file access is allowed.</p></article>
          <article><span><History size={17}/></span><small>04 / RETURN</small><h3>Keep conversations handy</h3><p>Use multiple conversations and return to saved chat history associated with the current workspace on this device.</p></article>
        </div>
      </section>

      <section className="efith-permissions-section">
        <div className="container">
          <div className="feature-guide-heading">
            <div><div className="eyebrow"><span/> YOU SET THE ACCESS</div><h2>Three permission modes.<br/><span>One clear boundary.</span></h2></div>
            <p>The mode is visible in the EFITH panel and settings. Full access is intentionally explicit because it can reach outside the open project.</p>
          </div>
          <div className="efith-permission-grid">
            <PermissionCard icon={ShieldAlert} title="Ask every time" badge="MOST CONTROL" description="EFITH asks before each tool action and each file edit. Review each request as the agent works."/>
            <PermissionCard icon={ShieldCheck} title="Workspace" badge="PROJECT BOUNDARY" description="EFITH can read and edit project files automatically. It still asks before running commands; file access stays within the workspace."/>
            <PermissionCard icon={ShieldAlert} title="Full access" badge="USE WITH CARE" description="EFITH can read and edit files outside the workspace and run commands in other folders without asking. Only enable this for an agent and provider you trust." tone="efith-permission-danger"/>
          </div>
        </div>
      </section>

      <section className="efith-providers-section container">
        <div className="feature-guide-heading">
          <div><div className="eyebrow"><span/> PROVIDER + MODEL CHOICE</div><h2>Choose your AI.<br/><span>Keep the configuration yours.</span></h2></div>
          <p>EFITH supports hosted providers, a local Ollama-compatible endpoint, and custom OpenAI-compatible APIs. Model lists can be fetched from the configured provider; availability and credentials depend on your account.</p>
        </div>
        <div className="efith-provider-grid">{aiProviders.map(provider => <article className="efith-provider-card" key={provider.id}>
          <div className="efith-provider-card-top"><ProviderMark provider={provider} size={23}/><span className={`efith-provider-type ${provider.id === 'ollama' ? 'local' : ''}`}>{provider.id === 'ollama' ? 'LOCAL OPTION' : provider.id === 'custom' ? 'CUSTOM ENDPOINT' : 'PROVIDER'}</span></div>
          <h3>{provider.name}</h3>
          <p>{provider.setup}</p>
          <div className="efith-provider-model"><span>Default model</span><code>{provider.model}</code></div>
        </article>)}</div>
        <p className="efith-model-note"><KeyRound size={14}/> Default model IDs are starting selections from the app; use Fetch available models to check what your account or endpoint currently offers. API keys are configured per provider and are not written into workspace files.</p>
        <figure className="efith-settings-capture"><img src="/screenshots/efith-provider-settings.png" alt="Actual EFITH provider selector showing the supported AI providers in Nexora Code" loading="lazy"/><figcaption><img src="/nexora-mark.svg" alt=""/> EFITH's actual provider picker in Agent settings</figcaption></figure>
      </section>

      <section className="efith-privacy-section">
        <div className="container efith-privacy-card">
          <span className="efith-privacy-icon"><ShieldAlert size={19}/></span>
          <div><span className="eyebrow"><span/> BE MINDFUL OF PROVIDER DATA</span><h2>AI requests go to the provider you choose.</h2><p>When you send a prompt or authorize workspace tools, the selected provider may receive that prompt and the file or command context EFITH uses to answer. Check your provider's data policies, avoid sending secrets, and use the permission mode that matches your trust boundary. Ollama can use a local endpoint when configured that way.</p></div>
        </div>
      </section>

      <section className="efith-page-cta container">
        <div><span className="eyebrow"><span/> PART OF NEXORA CODE</span><h2>See EFITH alongside<br/><span>the rest of your tools.</span></h2></div>
        <div className="efith-page-actions"><a className="button-primary" href="/features/">Explore all features <ArrowRight size={14}/></a><a className="button-secondary" href="/tech-stack/">Explore language support <ArrowUpRight size={14}/></a></div>
      </section>
    </main>
    <footer className="site-footer"><div className="container footer-bottom"><span>© {new Date().getFullYear()} Nexora Code</span><a href={REPOSITORY} target="_blank" rel="noreferrer">View the source on GitHub <ArrowUpRight size={12}/></a></div></footer>
  </div>;
}
