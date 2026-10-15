
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Check,
  Monitor,
  ShieldCheck,
} from 'lucide-react';

import SiteHeader from './SiteHeader.jsx';
import SiteFooter from './SiteFooter.jsx';
import './installation-page.css';

const DOWNLOAD_URL =
  'https://github.com/nexora-tech0/nexora-tech0.github.io/releases/download/v.1.0.0/Nexora.Code.Setup.0.1.0.exe';

const requirements = [
  {
    number: '01',
    title: 'Windows 10 or Windows 11',
    description:
      'Nexora Code is a Windows desktop development environment built to keep your coding workflow in one place.',
  },
  {
    number: '02',
    title: 'Your development tools',
    description:
      'Use Git, Node.js, and other developer tools when your projects require them. Check for existing installations first.',
  },
  {
    number: '03',
    title: 'Optional integrations',
    description:
      'Configure Spotify and Discord inside Nexora Code if you want to use them. These integrations are optional.',
  },
];

const setupSteps = [
  {
    number: '01',
    title: 'Download Nexora',
    description:
      'Download the official Windows installer directly from GitHub.',
  },
  {
    number: '02',
    title: 'Run the installer',
    description:
      'Open Nexora.Code.Setup.0.1.0.exe and follow the installation wizard.',
  },
  {
    number: '03',
    title: 'Launch your workspace',
    description:
      'Open Nexora Code, configure your preferences, and start working on your project.',
  },
];

function DownloadButton({ secondary = false }) {
  return (
    <a
      className={secondary ? 'button-secondary' : 'button-primary'}
      href={DOWNLOAD_URL}
      download="Nexora.Code.Setup.0.1.0.exe"
    >
      <ArrowDownToLine size={17} />
      Download Nexora
      <ArrowUpRight size={14} />
    </a>
  );
}

export default function InstallationPage() {
  return (
    <div className="site-shell installation-page">
      <SiteHeader currentPage="installation" />

      <main>
        <section className="install-hero container">
          <div className="install-hero-copy">
            <div className="eyebrow">
              <span />
              NEXORA CODE / WINDOWS
            </div>

            <h1>
              Your next workspace.
              <br />
              <span>One download away.</span>
            </h1>

            <p>
              Meet Nexora Code, a Windows desktop IDE that brings your
              code editor, integrated terminal, Git tools, browser, and
              optional integrations together in one workspace.
            </p>

            <div className="install-hero-actions">
              <DownloadButton />

              <a
                className="button-secondary"
                href="#install-process"
              >
                How to install
                <ArrowRight size={15} />
              </a>
            </div>

            <p className="install-availability">
              <ShieldCheck size={15} />
              Official Windows installer · Version 0.1.0
            </p>
          </div>

          <aside className="install-hero-note">
            <span className="install-note-icon">
              <Monitor size={21} />
            </span>

            <strong>Everything starts in one workspace.</strong>

            <p>
              Write code, work with project files, use your integrated
              terminal, and customize your environment as you go.
            </p>

            <div className="install-note-points">
              <span>
                <Check size={14} />
                Windows desktop IDE
              </span>

              <span>
                <Check size={14} />
                Integrated terminal
              </span>

              <span>
                <Check size={14} />
                Customizable workspace
              </span>
            </div>
          </aside>
        </section>

        <section
          id="install-process"
          className="install-steps-section"
        >
          <div className="container">
            <div className="install-section-heading">
              <div>
                <div className="eyebrow">
                  <span />
                  QUICK INSTALLATION
                </div>

                <h2>From download to your first project.</h2>
              </div>

              <p>
                Three simple steps to get Nexora Code running on your
                Windows PC.
              </p>
            </div>

            <div className="install-process-grid">
              {setupSteps.map((step) => (
                <article
                  className="install-process-card"
                  key={step.number}
                >
                  <div className="install-process-copy">
                    <span className="install-process-number">
                      {step.number}
                    </span>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>

                    {step.number === '01' && (
                      <a href={DOWNLOAD_URL}>
                        Get the installer
                        <ArrowDownToLine size={14} />
                      </a>
                    )}

                    {step.number === '02' && (
                      <span className="install-step-foot">
                        <Check size={13} />
                        Follow the setup wizard
                      </span>
                    )}

                    {step.number === '03' && (
                      <span className="install-step-foot">
                        <Check size={13} />
                        Make it your own
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="install-components-section">
          <div className="container">
            <div className="install-section-heading">
              <div>
                <div className="eyebrow">
                  <span />
                  BEFORE YOU START
                </div>

                <h2>Everything you need to know.</h2>
              </div>

              <p>
                Keep installation simple. Review these notes before
                setting up your development environment.
              </p>
            </div>

            <div className="install-component-list">
              {requirements.map((item) => (
                <article
                  className="install-component"
                  key={item.number}
                >
                  <div className="install-component-copy">
                    <div className="install-component-heading">
                      <h3>{item.title}</h3>
                    </div>

                    <p>{item.description}</p>
                  </div>

                  <span className="install-component-index">
                    {item.number}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="install-bottom-cta">
          <div className="container install-bottom-inner">
            <div>
              <div className="eyebrow">
                <span />
                NEXORA CODE FOR WINDOWS
              </div>

              <h2>Ready to build something?</h2>

              <p>
                Download Nexora Code and bring your development
                workflow into one desktop workspace.
              </p>
            </div>

            <DownloadButton />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
