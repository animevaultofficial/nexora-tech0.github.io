import { ArrowUpRight, Braces, Github } from 'lucide-react';
import { siteUrl } from './site-url.js';

const REPOSITORY = 'https://github.com/animevaultofficial/Nexora-Code';
const ORGANIZATION = 'https://github.com/nexora-tech0';

export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-brand-column">
        <a className="brand brand-footer" href={siteUrl('')} aria-label="Nexora Code home"><img src={siteUrl('nexora-mark.svg')} width="30" height="30" alt=""/><span>NEXORA <span className="brand-muted">CODE</span></span></a>
        <p>Thoughtful tools for people who build things. Nexora Code brings your editor, terminal, source control, and selected integrations into one Windows workspace.</p>
        <p className="footer-note">Built with care under the Nexora name. Keep creating, keep learning, and take the next step at your own pace.</p>
      </div>
      <div className="footer-links-group"><strong>EXPLORE</strong><a href={siteUrl('')}>Home</a><a href={siteUrl('features/')}>Features</a><a href={siteUrl('tech-stack/')}>Tech stack</a><a href={siteUrl('installation/')}>Installation guide</a><a href={siteUrl('efith/')}>EFITH</a></div>
      <div className="footer-links-group"><strong>NEXORA</strong><a href={siteUrl('about/')}>About Nexora</a><a href={ORGANIZATION} target="_blank" rel="noreferrer">GitHub organization <ArrowUpRight size={12}/></a><a href={REPOSITORY} target="_blank" rel="noreferrer">Source repository <ArrowUpRight size={12}/></a><a href={REPOSITORY + '/releases'} target="_blank" rel="noreferrer">Releases <ArrowUpRight size={12}/></a></div>
      <div className="footer-links-group"><strong>POLICIES</strong><a href={siteUrl('terms/')}>Terms &amp; Conditions</a><a href={siteUrl('privacy-policy/')}>Privacy Policy</a><a href={siteUrl('about/#contact')}>Contact information</a></div>
    </div>
    <div className="footer-legal-note"><div className="container"><p>Nexora Code is provided as a software project. Features, integrations, compatibility, and availability may change between builds. Third-party product names and logos belong to their respective owners; their appearance does not imply endorsement.</p></div></div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Nexora. All rights reserved.</span><span>Nexora Code · Made for the work ahead.</span><a href={siteUrl('terms/')}>Terms</a><a href={siteUrl('privacy-policy/')}>Privacy</a></div>
  </footer>;
}
