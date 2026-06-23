(function () {
  if (typeof document === 'undefined' || window.__twsgiAwardCarouselInit) {
    return;
  }
  window.__twsgiAwardCarouselInit = true;

  const initCarousel = (root) => {
    if (root.dataset.carouselReady === 'true' || typeof window.Swiper === 'undefined') {
      return false;
    }
    root.dataset.carouselReady = 'true';

    new window.Swiper(root.querySelector('.swiper'), {
      slidesPerView: 'auto',
      spaceBetween: 0,
      speed: 600,
      navigation: {
        prevEl: root.querySelector('[data-award-prev]'),
        nextEl: root.querySelector('[data-award-next]'),
      },
    });

    return true;
  };

  const tryInitCarousel = () => {
    const root = document.querySelector('[data-award-carousel]');
    if (root) {
      return initCarousel(root);
    }
    return false;
  };

  if (!tryInitCarousel()) {
    const observer = new MutationObserver(() => {
      if (tryInitCarousel()) {
        observer.disconnect();
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    window.addEventListener('load', tryInitCarousel);
  }
})();
