# Nexora Code Website

A React + Vite landing page for Nexora Code, designed for the `nexora-tech0/nexora.github.io` GitHub Pages repository.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

The included `.github/workflows/deploy.yml` builds and deploys the Vite site when changes are pushed to `main`. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.

## Connect the real installer

In `src/App.jsx`, replace the empty `DOWNLOAD_URL` constant with the URL of the actual Windows installer attached to the Nexora Code GitHub Release. Until then, the download CTA links to the Releases page and deliberately does not pretend an installer is already published.

The site is configured for a root-domain GitHub Pages repository (`nexora-tech0.github.io`), so Vite's base path is `/`.
