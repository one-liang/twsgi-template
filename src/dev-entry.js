import { createApp } from 'vue';

import './assets/scss/main.scss';
import { installApp } from './runtime/install-app.js';

const params = new URL(import.meta.url).searchParams;
const pageName = params.get('page') || 'index';
const pages = import.meta.glob('./pages/*.vue');
const loadPage = pages[`./pages/${pageName}.vue`];

if (!loadPage) {
  throw new Error(`Page "${pageName}" was not found in src/pages.`);
}

const { default: Page } = await loadPage();
const app = createApp(Page);

installApp(app);
app.mount('#app');
