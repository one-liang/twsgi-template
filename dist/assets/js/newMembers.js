(function () {
  if (typeof document === 'undefined' || window.__twsgiNewMembersSwiperInit) {
    return;
  }
  window.__twsgiNewMembersSwiperInit = true;

  const initSection = (root) => {
    if (root.dataset.newcomerReady === 'true' || typeof window.Swiper === 'undefined') {
      return false;
    }
    root.dataset.newcomerReady = 'true';

    const slidesPerView = Number(root.dataset.newcomerSpv) || 1;
    const desktopGap = Number(root.dataset.newcomerGap) || 24;
    const prevEl = root.querySelector('[data-newcomer-prev]');
    const nextEl = root.querySelector('[data-newcomer-next]');
    const hasArrows = Boolean(prevEl && nextEl);

    new window.Swiper(root.querySelector('.l-newcomer-section__swiper'), {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 16,
      speed: 600,
      loop: hasArrows, // 卡片超過 3 張
      navigation: hasArrows ? { prevEl, nextEl } : false,
      breakpoints: {
        992: {
          slidesPerView,
          slidesPerGroup: 1,
          spaceBetween: desktopGap,
        },
      },
    });

    return true;
  };

  const initAllSections = () => {
    const sections = Array.from(document.querySelectorAll('[data-newcomer-section]'));
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

(function () {
  if (typeof document === 'undefined' || window.__twsgiNewMembersTabsInit) {
    return;
  }
  window.__twsgiNewMembersTabsInit = true;

  const init = () => {
    const tabs = Array.from(document.querySelectorAll('[data-newcomer-tab]'));
    const sections = Array.from(document.querySelectorAll('[data-newcomer-section]'));
    if (tabs.length === 0 || sections.length === 0) {
      return false;
    }

    tabs.forEach((tab) => {
      tab.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.getElementById(tab.dataset.newcomerTab);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    const setActive = (sectionId) => {
      tabs.forEach((tab) => {
        tab.classList.toggle('active', tab.dataset.newcomerTab === sectionId);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-140px 0px -55% 0px', threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));

    return true;
  };

  if (!init()) {
    const observer = new MutationObserver(() => {
      if (init()) {
        observer.disconnect();
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    window.addEventListener('load', init);
  }
})();

(function () {
  if (typeof document === 'undefined' || window.__twsgiNewMembersAosInit) {
    return;
  }
  window.__twsgiNewMembersAosInit = true;

  const init = () => {
    const targets = document.querySelectorAll('[data-aos]');
    if (targets.length === 0 || typeof window.AOS === 'undefined') {
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

  if (!init()) {
    const observer = new MutationObserver(() => {
      if (init()) {
        observer.disconnect();
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    window.addEventListener('load', init);
  }
})();
