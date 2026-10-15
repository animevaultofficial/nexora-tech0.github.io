import { ArrowLeft, ArrowUpRight, BookOpenText, ExternalLink, ShieldCheck, Scale } from 'lucide-react';
import { siteUrl } from './site-url.js';
import SiteHeader from './SiteHeader.jsx';
import SiteFooter from './SiteFooter.jsx';
import './legal-pages.css';

const REPOSITORY = 'https://github.com/animevaultofficial/Nexora-Code';

const pages = {
  terms: {
    title: 'Terms & Conditions',
    eyebrow: 'THE GROUND RULES',
    intro: 'These terms explain the basic rules for using the Nexora website and information about Nexora Code. Please read them before relying on the site or using any linked software.',
    updated: 'October 15, 2026',
    icon: Scale,
    sections: [
      ['1. About these terms', 'In these terms, “Nexora”, “we”, or “us” refers to the Nexora software brand and the people maintaining this website. “Site” means the Nexora Code website and its pages. “Software” means Nexora Code and related tools or builds that we make available. If a separate licence or agreement ships with a particular component, that licence may govern that component.'],
      ['2. Using the website', 'You may browse the Site for lawful, personal, educational, or professional purposes. Do not attempt to disrupt the Site, bypass security controls, abuse hosting resources, misrepresent your affiliation with Nexora, or use the Site to distribute malicious material. Do not scrape or use the Site in a way that unreasonably interferes with its operation.'],
      ['3. Software availability and changes', 'Product descriptions are provided to explain intended features, not to guarantee that every feature is available in every build. Software, screenshots, compatibility, integrations, supported providers, and documentation can change. A feature may be experimental, unavailable, or require third-party accounts, software, credentials, or configuration. Check the official release page and release notes before installing a build.'],
      ['4. Your responsibilities', 'You are responsible for checking that a build is suitable for your device, maintaining backups, protecting your credentials, and reviewing commands or file changes before authorizing them. Do not use AI-assisted or automated output without checking whether it is accurate and appropriate for your situation. You remain responsible for your projects and the actions you choose to take.'],
      ['5. Third-party services', 'The Site and Software may link to or integrate with services operated by others, including code hosting, AI model providers, music, chat, and developer tools. Those services are controlled by their own operators and governed by their own terms, privacy notices, licences, and availability. A link or integration does not mean Nexora owns or endorses the third-party service. You are responsible for reviewing its terms and protecting any account or API credentials you use.'],
      ['6. Intellectual property', 'The Site’s original branding, written material, and original design elements are owned by or used with permission by their respective rights holders, unless otherwise stated. The Software repository may contain code and dependencies under separate open-source or third-party licences; review those licence notices for the applicable permissions and restrictions. Third-party names and logos remain the property of their owners. These terms do not transfer ownership to you.'],
      ['7. Feedback', 'If you choose to submit suggestions, bug reports, or other feedback through a public repository or another channel, do not include confidential information or secrets. You permit us to use the feedback to improve the project without an obligation to pay for it, to the extent permitted by applicable law. This does not transfer ownership of your separate projects or code.'],
      ['8. No warranty', 'To the extent permitted by applicable law, the Site and Software are provided “as is” and “as available”, without guarantees that they will be uninterrupted, error-free, secure, compatible with every system, or fit for a particular purpose. Nothing in these terms excludes a warranty or right that cannot legally be excluded in your jurisdiction.'],
      ['9. Limitation of liability', 'To the extent permitted by applicable law, Nexora is not liable for indirect, incidental, special, consequential, or punitive losses, or for loss of data, profits, or business arising from use of or inability to use the Site or Software. Nothing in these terms limits liability where applicable law does not permit that limitation. Keep backups and use appropriate care when running commands, applying changes, or installing software.'],
      ['10. Updates to these terms', 'We may update these terms as the project or applicable requirements change. The “Last updated” date at the top indicates the latest revision published on this page. Continued use of the Site after an update means you are viewing the current version; where consent is legally required, applicable law governs.'],
      ['11. Governing rules and contact', 'These terms are intended as a general starting point and are not legal advice. Applicable law and any mandatory consumer protections in your place of residence continue to apply. Official contact details will be added when provided. Until then, use the public project repository for project-related questions and avoid posting private or sensitive information.']
    ]
  },
  privacy: {
    title: 'Privacy Policy',
    eyebrow: 'YOUR DATA, EXPLAINED',
    intro: 'This page describes the current intended privacy practices for the Nexora Code website. The website is a project information site, not currently a user account portal or a contact-form service.',
    updated: 'October 15, 2026',
    icon: ShieldCheck,
    sections: [
      ['1. Scope', 'This policy applies to the Nexora Code website and the information you choose to share through its public links. It does not replace the privacy policies of GitHub, AI providers, Spotify, Discord, or other third-party services. The separate desktop Software may process information locally or send data to services you configure; its exact behavior depends on the feature and your settings.'],
      ['2. Information the website may process', 'When you visit a website hosted through a hosting provider such as GitHub Pages, the host may process technical request data such as IP address, browser and device information, requested URL, referring page, timestamps, and security or diagnostic logs. This is generally handled by the hosting provider to deliver, secure, and maintain the service. We do not operate a website account system or contact form on this Site at present.'],
      ['3. Information you choose to share', 'If you open a public repository, issue tracker, or discussion and post a message, the information you publish may be visible to others and handled by the platform under its own policy. Do not publish passwords, API keys, personal addresses, private logs, or other sensitive information in public. Contact details and any future contact channel will be described here if added.'],
      ['4. Cookies and analytics', 'The Site is not intentionally designed around advertising trackers or a user analytics profile. However, hosting infrastructure, embedded content, or linked third-party platforms may use cookies or similar technologies under their own practices. Browser settings can help you manage cookies, though blocking them may affect third-party services. This description should be reviewed if analytics, embeds, or other services are added in the future.'],
      ['5. Desktop software and AI providers', 'Nexora Code is separate from this website. Depending on the build and features you choose, the desktop app may interact with local files, installed developer tools, Git, Spotify, Discord, or other integrations. EFITH sends prompts and any relevant context required for a request to the AI provider and endpoint you configure; that provider may process the data under its own terms. Local or self-hosted endpoints may behave differently. Review provider policies, do not submit secrets, and inspect tool permissions before approving file or command actions.'],
      ['6. How information is used', 'Technical data handled by the hosting provider may be used to serve pages, prevent abuse, diagnose errors, and maintain security. Information you voluntarily publish may be used to respond to the issue or contribution you raised. We do not currently offer a website account, payment checkout, or newsletter signup on this Site. If those features are introduced, this policy should be updated before they are used.'],
      ['7. Sharing and external links', 'We do not sell personal information through this informational Site. Technical data may be processed by the hosting provider and its service providers as needed to operate the website. When you follow an external link, the destination site may receive information about your visit under its own policy. We cannot control third-party data practices or their content.'],
      ['8. Retention and security', 'Hosting providers determine how long operational logs are retained under their own systems and policies. Public posts may remain available according to the platform’s settings and retention rules. No website or software can guarantee absolute security; use care when publishing information and keep credentials out of public reports.'],
      ['9. Your choices and rights', 'Depending on where you live, you may have rights to request access, correction, deletion, restriction, or other handling of personal information. The appropriate process may be controlled by the hosting platform that collected the data. Official privacy contact details have not yet been supplied; they can be added here when available. Nothing in this policy limits rights granted by applicable law.'],
      ['10. Children', 'This Site is a general software information page and is not intended to collect personal information from children through a dedicated account or form. Because no account or contact form is currently provided, please do not submit personal information through public project issues.'],
      ['11. Changes to this policy', 'We may update this policy when the Site, Software, integrations, or applicable requirements change. The “Last updated” date above will be revised when this page changes. Please review it periodically, especially before using a new integration or feature.']
    ]
  }
};

export default function LegalPage({ page = 'terms' }) {
  const data = pages[page] || pages.terms;
  const Icon = data.icon;
  return <div className="site-shell legal-shell">
    <SiteHeader currentPage={page === 'privacy' ? 'privacy-policy' : 'terms'}/>
    <main>
      <section className="legal-hero container legal-document-hero">
        <span className="eyebrow"><span/> {data.eyebrow}</span>
        <span className="legal-document-icon"><Icon size={23}/></span>
        <h1>{data.title}</h1>
        <p>{data.intro}</p>
        <div className="legal-meta"><span>Last updated: {data.updated}</span><span>•</span><span>Applies to the Nexora Code website</span></div>
      </section>
      <section className="legal-content-section"><article className="container legal-document">
        <div className="legal-document-note"><BookOpenText size={17}/><p>Please read this page carefully. It is written to explain the current project at a practical level, and should be reviewed as the website and software evolve.</p></div>
        {data.sections.map(([heading, body]) => <section className="legal-article-section" key={heading}><h2>{heading}</h2><p>{body}</p></section>)}
        <div className="legal-document-end"><span>Still exploring?</span><a href={siteUrl('about/')}>About Nexora <ArrowUpRight size={13}/></a><a href={REPOSITORY} target="_blank" rel="noreferrer">Project repository <ExternalLink size={13}/></a><a href={siteUrl(page === 'privacy' ? 'terms/' : 'privacy-policy/')}>{page === 'privacy' ? 'Terms & Conditions' : 'Privacy Policy'} <ArrowUpRight size={13}/></a></div>
      </article></section>
    </main>
    <SiteFooter/>
  </div>;
}
