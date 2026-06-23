(function () {
  if (typeof document === 'undefined' || window.__twsgiTeachingNavInit) {
    return;
  }
  window.__twsgiTeachingNavInit = true;

  const isMobile = () => window.matchMedia('(max-width: 991.98px)').matches;

  const headerHeight = () => {
    const header = document.querySelector('.header');
    const value = header
      ? parseInt(getComputedStyle(header).getPropertyValue('--header-h'), 10)
      : 0;
    return value || 64;
  };

  const init = () => {
    const layout = document.querySelector('.l-teaching__layout');
    if (!layout) {
      return false;
    }

    const navItems = Array.from(layout.querySelectorAll('.c-teaching-nav__item'));
    const select = layout.querySelector('.js-teaching-select');
    const groups = Array.from(layout.querySelectorAll('.c-teaching-group'));
    if (!groups.length) {
      return false;
    }

    const scrollOffset = () => headerHeight() + 24;

    const scrollToGroup = (groupId) => {
      const target = document.getElementById(groupId);
      if (!target) {
        return;
      }
      const top = target.getBoundingClientRect().top + window.scrollY - scrollOffset();
      window.scrollTo({ top, behavior: 'smooth' });
    };

    const setCurrent = (groupId) => {
      groups.forEach((group) => {
        group.classList.toggle('is-shown', group.id === groupId);
      });
      navItems.forEach((item) => {
        item.classList.toggle('is-active', item.dataset.target === groupId);
      });
      if (select && select.value !== groupId) {
        select.value = groupId;
      }
    };

    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        scrollToGroup(item.dataset.target);
      });
    });

    if (select) {
      select.addEventListener('change', () => {
        setCurrent(select.value);
        const top = layout.getBoundingClientRect().top + window.scrollY - headerHeight();
        window.scrollTo({ top, behavior: 'auto' });
      });
    }

    const updateActiveOnScroll = () => {
      if (isMobile()) {
        return;
      }
      const line = scrollOffset() + 1;
      let currentId = groups[0].id;
      groups.forEach((group) => {
        if (group.getBoundingClientRect().top <= line) {
          currentId = group.id;
        }
      });
      setCurrent(currentId);
    };

    let scrollTicking = false;
    window.addEventListener('scroll', () => {
      if (scrollTicking) {
        return;
      }
      scrollTicking = true;
      window.requestAnimationFrame(() => {
        updateActiveOnScroll();
        scrollTicking = false;
      });
    }, { passive: true });
    updateActiveOnScroll();

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
