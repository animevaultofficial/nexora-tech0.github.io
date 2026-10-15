import { ArrowRight, ArrowUpRight, Braces, Code2, Github, HeartHandshake, Layers3, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { siteUrl } from './site-url.js';
import SiteHeader from './SiteHeader.jsx';
import SiteFooter from './SiteFooter.jsx';
import './legal-pages.css';

const REPOSITORY = 'https://github.com/animevaultofficial/Nexora-Code';
const ORGANIZATION = 'https://github.com/nexora-tech0';

export default function AboutPage() {
  return <div className="site-shell legal-shell">
    <SiteHeader currentPage="about"/>
    <main>
      <section className="legal-hero container">
        <span className="eyebrow"><span/> THE STORY BEHIND THE SOFTWARE</span>
        <h1>Built for the people who <span>build things.</span></h1>
        <p>Nexora is a software brand with a simple ambition: make useful technology feel more considered, approachable, and genuinely helpful. Not just more features on a screen—better tools for the work people want to do.</p>
        <div className="legal-hero-actions"><a className="button-primary" href={siteUrl('features/')}>Explore Nexora Code <ArrowRight size={15}/></a><a className="button-secondary" href={ORGANIZATION} target="_blank" rel="noreferrer">Find us on GitHub <ArrowUpRight size={14}/></a></div>
      </section>
      <section className="legal-content-section"><div className="container about-story-grid">
        <article className="about-story-main"><span className="legal-kicker">01 / OUR APPROACH</span><h2>Software should get out of your way.</h2><p>Nexora is founded by Ishah Mushak and shaped around the idea that software can feel capable without feeling overwhelming. We care about practical details: clear language, a coherent interface, sensible defaults, and features that respect the user's attention.</p><p>That philosophy is a work in progress, not a claim that every feature is perfect. Products evolve, bugs happen, and compatibility changes. Our goal is to keep improving, explain limitations honestly, and make each release more useful than the last.</p></article>
        <aside className="about-principles"><div><span><Sparkles size={17}/></span><strong>Intentional design</strong><p>Polish should support clarity, not compete with the work.</p></div><div><span><ShieldCheck size={17}/></span><strong>Honest by default</strong><p>Be clear about availability, limitations, permissions, and third-party services.</p></div><div><span><HeartHandshake size={17}/></span><strong>Built to keep learning</strong><p>Feedback and thoughtful iteration are part of the process.</p></div></aside>
      </div></section>
      <section className="legal-content-section about-products-section"><div className="container"><span className="legal-kicker">02 / WHAT WE'RE BUILDING</span><h2>A growing family of tools.</h2><div className="about-product-grid">
        <article><span className="about-product-icon"><Code2 size={20}/></span><h3>Nexora Code</h3><p>A Windows desktop coding workspace built around an editor, project Explorer, integrated terminal, source-control tools, browser, and optional integrations.</p><a href={siteUrl('features/')}>Explore features <ArrowRight size={13}/></a></article>
        <article><span className="about-product-icon"><Braces size={20}/></span><h3>EFITH</h3><p>An AI-assisted coding agent inside Nexora Code, designed to help with coding tasks while keeping provider setup and tool permissions visible to the user.</p><a href={siteUrl('efith/')}>Learn about EFITH <ArrowRight size={13}/></a></article>
        <article><span className="about-product-icon"><Layers3 size={20}/></span><h3>The wider Nexora vision</h3><p>A place for focused software experiments and products that aim to be useful, approachable, and carefully put together.</p><a href={ORGANIZATION} target="_blank" rel="noreferrer">View the organization <ArrowUpRight size={13}/></a></article>
      </div></div></section>
      <section className="legal-content-section"><div className="container about-contact" id="contact"><span className="legal-kicker">03 / GET IN TOUCH</span><h2>Contact details are coming later.</h2><p>We're leaving this section ready for official contact information. For now, the public GitHub repositories are the best place to follow development and use the available project discussions or issue tracker where enabled. Please don't send passwords, API keys, or other secrets in public issues.</p><div className="about-contact-actions"><a className="button-primary" href={REPOSITORY} target="_blank" rel="noreferrer"><Github size={16}/> Nexora Code repository <ArrowUpRight size={13}/></a><a className="button-secondary" href={ORGANIZATION} target="_blank" rel="noreferrer"><Code2 size={15}/> Nexora on GitHub <ArrowUpRight size={13}/></a></div><p className="legal-small-note"><Mail size={14}/> An official email address or contact form can be added here when provided.</p></div></section>
    </main>
    <SiteFooter/>
  </div>;
}
