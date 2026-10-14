# Nexora Code website

Official website for Nexora Code, the Windows desktop IDE developed under the Nexora brand.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Vite writes the production site to `dist/`. The repository is hosted as a project site at `https://animevaultofficial.github.io/nexora-tech0.github.io/`. The GitHub Actions build sets the production base path to `/nexora-tech0.github.io/`; local development keeps the root base path.

## Deployment

`.github/workflows/deploy.yml` builds `dist/` and deploys it using the GitHub Pages artifact workflow. The repository's Pages publishing source must be set to **GitHub Actions**.

The download links point to the official Nexora Code releases page. The site indicates when no public installer is listed rather than linking to an unpublished file.
