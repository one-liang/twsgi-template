(function () {
  if (typeof document === 'undefined' || window.__twsgiHeaderInit) {
    return;
  }
  window.__twsgiHeaderInit = true;

  const ROOT = '[data-header-root]';
  const getRoot = () => document.querySelector(ROOT);

  const lockBody = (lock) => {
    document.body.style.overflow = lock ? 'hidden' : '';
  };

  const closeDropdown = (root) => {
    root.classList.remove('is-dropdown-open');
    root.querySelectorAll('.header-dropdown.is-open').forEach((el) => {
      el.classList.remove('is-open');
    });
    root.querySelectorAll('.nav-main__item--expandable.is-active').forEach((el) => {
      el.classList.remove('is-active');
    });
  };

  const closeMenu = (root) => {
    if (root.classList.contains('is-menu-open')) {
      root.classList.remove('is-menu-open', 'is-l2-open');
      root.querySelectorAll('.nav-mobile__panel--l2.is-open').forEach((el) => {
        el.classList.remove('is-open');
      });
      lockBody(false);
    }
  };

  const closeSearch = (root) => {
    root.classList.remove('is-search-open');
  };

  const openDropdown = (root, index) => {
    const panel = root.querySelector(`.header-dropdown[data-menu="${index}"]`);
    if (!panel || panel.classList.contains('is-open')) {
      return;
    }
    closeMenu(root);
    closeSearch(root);
    closeDropdown(root);
    const item = root.querySelector(`.nav-main__item--expandable[data-dropdown="${index}"]`);
    panel.classList.add('is-open');
    root.classList.add('is-dropdown-open');
    if (item) {
      item.classList.add('is-active');
    }
  };

  const toggleMenu = (root) => {
    const willOpen = !root.classList.contains('is-menu-open');
    closeDropdown(root);
    closeSearch(root);
    if (willOpen) {
      root.classList.add('is-menu-open');
      lockBody(true);
    } else {
      closeMenu(root);
    }
  };

  // 切換搜尋列
  const toggleSearch = (root) => {
    const willOpen = !root.classList.contains('is-search-open');
    closeDropdown(root);
    closeMenu(root);
    if (willOpen) {
      root.classList.add('is-search-open');
      const field = root.querySelector('.header-search__input');
      if (field) {
        setTimeout(() => field.focus(), 50);
      }
    } else {
      closeSearch(root);
    }
  };

  const closeAll = (root) => {
    closeDropdown(root);
    closeMenu(root);
    closeSearch(root);
  };

  document.addEventListener('click', (e) => {
    const root = getRoot();
    if (!root) {
      return;
    }

    const action = e.target.closest('[data-header]');
    if (action && root.contains(action)) {
      const type = action.getAttribute('data-header');
      if (type === 'menu-toggle') {
        toggleMenu(root);
      } else if (type === 'search-toggle') {
        toggleSearch(root);
      } else if (type === 'close') {
        closeAll(root);
      }
      return;
    }

    // Mobile 進入第二層
    const drill = e.target.closest('[data-mobile-drill]');
    if (drill && root.contains(drill)) {
      const index = drill.getAttribute('data-mobile-drill');
      const panel = root.querySelector(`.nav-mobile__panel--l2[data-mobile-panel="${index}"]`);
      if (panel) {
        root.querySelectorAll('.nav-mobile__panel--l2.is-open').forEach((el) => {
          el.classList.remove('is-open');
        });
        panel.classList.add('is-open');
        root.classList.add('is-l2-open');
      }
      return;
    }

    // Mobile 返回第一層
    const back = e.target.closest('[data-mobile-back]');
    if (back && root.contains(back)) {
      root.classList.remove('is-l2-open');
      root.querySelectorAll('.nav-mobile__panel--l2.is-open').forEach((el) => {
        el.classList.remove('is-open');
      });
    }
  });

  document.addEventListener('mouseover', (e) => {
    const root = getRoot();
    if (!root || window.matchMedia('(max-width: 1199.98px)').matches) {
      return;
    }

    const item = e.target.closest('.nav-main__item--expandable');
    if (item && root.contains(item)) {
      openDropdown(root, item.getAttribute('data-dropdown'));
      return;
    }

    if (e.target.closest('[data-keep-open]') && root.contains(e.target)) {
      return;
    }

    if (root.classList.contains('is-dropdown-open')) {
      closeDropdown(root);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const root = getRoot();
      if (root) {
        closeAll(root);
        lockBody(false);
      }
    }
  });
})();
