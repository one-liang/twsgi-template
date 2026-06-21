<script setup>
const floatButtons = [
  { key: 'scripture', icon: 'fa-solid fa-book', text: '聖典檢索' },
  { key: 'donate', icon: 'fa-solid fa-hand-holding-heart', text: '線上捐款' },
  { key: 'museum', icon: 'fa-solid fa-building-columns', text: '創價美術館' },
  { key: 'member', icon: 'fa-solid fa-user', text: '會員專區' },
];
</script>

<template>
  <div class="btn-float-group">
    <a v-for="item in floatButtons" :key="item.key" href="#" class="btn-float">
      <i :class="item.icon" class="btn-float__icon"></i>
      <span class="btn-float__text">{{ item.text }}</span>
    </a>
  </div>
</template>

<script>
(function () {
  if (typeof document === 'undefined' || window.__twsgiFloatTabInit) {
    return;
  }
  window.__twsgiFloatTabInit = true;

  const BANNER_SELECTOR = '[data-home-banner], .home-banner, .banner';

  const init = () => {
    const group = document.querySelector('.btn-float-group');
    if (!group) {
      return false;
    }
    const banner = document.querySelector(BANNER_SELECTOR);
    if (!banner) {
      group.classList.add('is-visible');
      return true;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        group.classList.toggle('is-visible', !entry.isIntersecting);
      });
    }, { threshold: 0 });
    observer.observe(banner);
    return true;
  };

  if (!init()) {
    const domObserver = new MutationObserver(() => {
      if (init()) {
        domObserver.disconnect();
      }
    });
    domObserver.observe(document.documentElement, { childList: true, subtree: true });
    window.addEventListener('load', init);
  }
})();
</script>
