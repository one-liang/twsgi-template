(function () {
  if (typeof document === 'undefined' || window.__twsgiVideosSectionsInit) {
    return;
  }
  window.__twsgiVideosSectionsInit = true;

  const initSection = (root) => {
    if (root.dataset.videosReady === 'true' || typeof window.Swiper === 'undefined') {
      return false;
    }
    root.dataset.videosReady = 'true';

    new window.Swiper(root.querySelector('.l-videos-section__swiper'), {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 16,
      speed: 600,
      loop: true,
      navigation: {
        prevEl: root.querySelector('[data-videos-prev]'),
        nextEl: root.querySelector('[data-videos-next]'),
      },
      breakpoints: {
        992: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 40,
        },
      },
    });

    return true;
  };

  const initAllSections = () => {
    const sections = Array.from(document.querySelectorAll('[data-videos-section]'));
    if (sections.length === 0 || typeof window.Swiper === 'undefined') {
      return false;
    }
    sections.forEach((section) => initSection(section));
    return true;
  };

  if (!initAllSections()) {
    const observer = new MutationObserver(() => {
      if (initAllSections()) {
        observer.disconnect();
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    window.addEventListener('load', initAllSections);
  }
})();
