import { assetUrl } from '../utils/assets.js';

export function installApp(app) {
  app.config.globalProperties.$assetUrl = assetUrl;
  app.provide('assetUrl', assetUrl);

  return app;
}
