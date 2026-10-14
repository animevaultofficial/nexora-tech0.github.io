const SITE_BASE = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export function siteUrl(path = '') {
  return `${SITE_BASE}${String(path).replace(/^\/+/, '')}`;
}

export function siteRoute(pathname = window.location.pathname) {
  const relative = pathname.startsWith(SITE_BASE)
    ? pathname.slice(SITE_BASE.length)
    : pathname.replace(/^\/+/, '');
  const normalized = relative.replace(/\/+$/, '');
  return normalized ? `/${normalized}` : '/';
}
