export function assetUrl(assetPath) {
  const cleanPath = assetPath
    .replace(/\\/g, '/')
    .replace(/^\.?\//, '')
    .replace(/^\/+/, '')
    .replace(/^assets\//, '');

  if (import.meta.env?.DEV) {
    return `/src/assets/${cleanPath}`;
  }

  const base = typeof window !== 'undefined' && window.__BS_ASSET_BASE__
    ? window.__BS_ASSET_BASE__
    : './assets/';

  return `${base.replace(/\/?$/, '/')}${cleanPath}`;
}
