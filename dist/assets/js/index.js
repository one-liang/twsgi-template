(function () {
  if (typeof document === 'undefined' || window.__twsgiHomeBannerInit) {
    return;
  }
  window.__twsgiHomeBannerInit = true;

  const AUTOPLAY_DELAY = 4000;
  const RING_CIRCUMFERENCE = 2 * Math.PI * 23.5;

  const initBanner = (root) => {
    if (root.dataset.bannerReady === 'true' || typeof window.Swiper === 'undefined') {
      return false;
    }
    root.dataset.bannerReady = 'true';

    const countItems = Array.from(root.querySelectorAll('.home-banner__count-item'));

    const setActiveCount = (activeIndex) => {
      countItems.forEach((item, itemIndex) => {
        const isActive = itemIndex === activeIndex;
        item.classList.toggle('is-active', isActive);
        if (!isActive) {
          const ring = item.querySelector('.home-banner__count-ring-progress');
          if (ring) {
            ring.style.strokeDashoffset = RING_CIRCUMFERENCE;
          }
        }
      });
    };

    const swiper = new window.Swiper(root.querySelector('.swiper'), {
      loop: true,
      speed: 1000,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      autoHeight: true,
      autoplay: {
        delay: AUTOPLAY_DELAY,
        disableOnInteraction: false,
      },
      on: {
        init(instance) {
          setActiveCount(instance.realIndex);
        },
        slideChange(instance) {
          setActiveCount(instance.realIndex);
        },
        autoplayTimeLeft(instance, time, progress) {
          const activeItem = countItems[instance.realIndex];
          if (!activeItem) {
            return;
          }
          const ring = activeItem.querySelector('.home-banner__count-ring-progress');
          if (ring) {
            ring.style.strokeDashoffset = RING_CIRCUMFERENCE * progress;
          }
        },
      },
    });

    countItems.forEach((item) => {
      item.addEventListener('click', () => {
        const targetIndex = Number(item.getAttribute('data-banner-go'));
        if (!Number.isNaN(targetIndex)) {
          swiper.slideToLoop(targetIndex);
        }
      });
    });

    return true;
  };

  const tryInit = () => {
    const root = document.querySelector('[data-home-banner]');
    if (root) {
      return initBanner(root);
    }
    return false;
  };

  if (!tryInit()) {
    const observer = new MutationObserver(() => {
      if (tryInit()) {
        observer.disconnect();
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    window.addEventListener('load', tryInit);
  }
})();
