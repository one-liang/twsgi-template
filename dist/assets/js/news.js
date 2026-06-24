(function () {
  if (typeof document === 'undefined' || window.__twsgiNewsSectionsInit) {
    return;
  }
  window.__twsgiNewsSectionsInit = true;

  const initSection = (root) => {
    if (root.dataset.newsReady === 'true' || typeof window.Swiper === 'undefined') {
      return false;
    }
    root.dataset.newsReady = 'true';

    new window.Swiper(root.querySelector('.l-news-section__swiper'), {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 16,
      speed: 600,
      loop: true,
      navigation: {
        prevEl: root.querySelector('[data-news-prev]'),
        nextEl: root.querySelector('[data-news-next]'),
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
    const sections = Array.from(document.querySelectorAll('[data-news-section]'));
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
