(function () {
  if (typeof document === 'undefined' || window.__twsgiFloatTabInit) {
    return;
  }
  window.__twsgiFloatTabInit = true;

  const BANNER_SELECTOR = '[data-home-banner], .l-home-banner, .l-banner';

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
