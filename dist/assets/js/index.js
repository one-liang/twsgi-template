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

// 最新訊息輪播
(function () {
  if (typeof document === 'undefined' || window.__twsgiHomeNewsInit) {
    return;
  }
  window.__twsgiHomeNewsInit = true;

  const initNews = (root) => {
    if (root.dataset.newsReady === 'true' || typeof window.Swiper === 'undefined') {
      return false;
    }
    root.dataset.newsReady = 'true';

    new window.Swiper(root.querySelector('.home-news__swiper'), {
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

  const tryInitNews = () => {
    const root = document.querySelector('[data-home-news]');
    if (root) {
      return initNews(root);
    }
    return false;
  };

  if (!tryInitNews()) {
    const observer = new MutationObserver(() => {
      if (tryInitNews()) {
        observer.disconnect();
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    window.addEventListener('load', tryInitNews);
  }
})();

// 線上影音輪播
(function () {
  if (typeof document === 'undefined' || window.__twsgiHomeVideoInit) {
    return;
  }
  window.__twsgiHomeVideoInit = true;

  const VIDEO_AUTOPLAY_DELAY = 5000;

  const initVideo = (root) => {
    if (root.dataset.videoReady === 'true' || typeof window.Swiper === 'undefined') {
      return false;
    }
    root.dataset.videoReady = 'true';

    new window.Swiper(root.querySelector('.home-video__swiper'), {
      slidesPerView: 1.1,
      slidesPerGroup: 1,
      spaceBetween: 16,
      loop: true,
      speed: 600,
      autoplay: {
        delay: VIDEO_AUTOPLAY_DELAY,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: root.querySelector('[data-video-prev]'),
        nextEl: root.querySelector('[data-video-next]'),
      },
      breakpoints: {
        992: {
          slidesPerView: 2.3,
          spaceBetween: 24,
        },
      },
    });

    return true;
  };

  const tryInitVideo = () => {
    const root = document.querySelector('[data-home-video]');
    if (root) {
      return initVideo(root);
    }
    return false;
  };

  if (!tryInitVideo()) {
    const observer = new MutationObserver(() => {
      if (tryInitVideo()) {
        observer.disconnect();
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    window.addEventListener('load', tryInitVideo);
  }
})();

// 社會行動 + 日常活動
(function () {
  if (typeof document === 'undefined' || window.__twsgiHomeActionInit) {
    return;
  }
  window.__twsgiHomeActionInit = true;

  const initAction = () => {
    const root = document.querySelector('[data-home-action]');
    if (!root || typeof window.AOS === 'undefined') {
      return false;
    }
    window.AOS.init({
      duration: 700,
      easing: 'ease-out',
      once: true,
      offset: 120,
    });
    return true;
  };

  if (!initAction()) {
    const observer = new MutationObserver(() => {
      if (initAction()) {
        observer.disconnect();
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    window.addEventListener('load', initAction);
  }
})();
