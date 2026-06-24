<script setup>
import logoUrl from '@/assets/images/footer/logo.svg';

const navItems = [
  { title: 'Design System', href: 'designSystem.html' },
  {
    title: '關於創價學會',
    href: '#',
    columns: [
      [
        { text: '宗旨與使命', href: 'mission.html' },
        { text: '國際創價學會', href: '#' },
        {
          text: '各地會館與講堂',
          children: [
            { text: '文化會館', href: 'cultureHall.html' },
            { text: '講堂', href: 'lectureHall.html' },
            { text: '會員服務中心', href: 'memberCenter.html' },
            { text: '創價美術館', href: 'artMuseum.html' },
          ],
        },
      ],
      [
        { text: '日蓮大聖人法理', href: '#' },
        { text: '相關機構', href: '#' },
      ],
      [
        { text: '佛法教學入門', href: 'teachings.html' },
        { text: '台灣創價學會會則', href: '#' },
      ],
      [
        {
          text: '三代會長',
          children: [
            { text: '牧口常三郎', href: '#' },
            { text: '戶田城聖', href: '#' },
            { text: '池田大作', href: '#' },
          ],
        },
        { text: '獲獎與肯定', href: 'awards.html' },
      ],
    ],
  },
  {
    title: '最新訊息',
    href: 'news.html',
    columns: [
      [{ text: '創價電子新聞', href: '#' }],
      [{ text: '線上影音', href: 'videos.html' }],
      [],
      [],
    ],
  },
  {
    title: '日常活動',
    href: '#',
    columns: [
      [
        { text: '每日修行', href: '#' },
        { text: '年度活動主題', href: '#' },
      ],
      [{ text: '座談會', href: '#' }],
      [{ text: '佛法教學', href: '#' }],
      [{ text: '主要活動', href: '#' }],
    ],
  },
  {
    title: '社會行動',
    href: 'socialAction.html',
    columns: [
      [
        { text: '文化', href: '#' },
        { text: '創價藝文', href: '#' },
      ],
      [
        { text: '教育', href: '#' },
        { text: '創價永續', href: '#' },
      ],
      [{ text: '和平', href: '#' }],
      [{ text: '社會貢獻', href: '#' }],
    ],
  },
  {
    title: '會員專區',
    href: '#',
    columns: [
      [
        { text: '座談會御書e講義', href: 'lecture.html' },
        { text: '創價學會歌', href: '#' },
      ],
      [
        {
          text: '教學考試',
          children: [
            { text: '歷年榜單', href: '#' },
            { text: '歷屆試題', href: '#' },
          ],
        },
        { text: '檔案下載區', href: '#' },
      ],
      [
        {
          text: '佛法教學',
          children: [
            { text: '佛法講座', href: '#' },
            { text: '教學研究會', href: '#' },
            { text: '追善回向勤行會御書', href: '#' },
          ],
        },
        {
          text: '給新會員',
          children: [
            { text: '關於勤行唱題', href: '#' },
            { text: '創價學會活動', href: '#' },
            { text: '追善回向的意義', href: '#' },
            { text: '關於教學', href: '#' },
          ],
        },
      ],
      [
        { text: '創價學會紀念日', href: 'anniversary.html' },
        { text: '創價e購樂', href: '#' },
      ],
    ],
  },
  { title: '聖典檢索', href: 'https://cht.sgilibrary.org/', target: '_blank', rel: 'noopener noreferrer' },
  { title: '線上捐款', href: '#' },
];

const rowMajor = (columns) => {
  const max = Math.max(0, ...columns.map((col) => col.length));
  const out = [];
  for (let rowIndex = 0; rowIndex < max; rowIndex += 1) {
    for (const col of columns) {
      if (col[rowIndex]) {
        out.push(col[rowIndex]);
      }
    }
  }
  return out;
};

const colMajor = (columns) => columns.flat();

const megaColumns = [
  [navItems[0], navItems[1]],
  [navItems[2], navItems[3]],
  [navItems[4]],
  [navItems[5], navItems[6], navItems[7]],
];

const dropdownCollapseId = (navIndex, columnIndex, itemIndex) =>
  `header-dropdown-${navIndex}-${columnIndex}-${itemIndex}`;
const megamenuCollapseId = (navIndex, itemIndex) =>
  `header-megamenu-${navIndex}-${itemIndex}`;
const mobileCollapseId = (navIndex, itemIndex) =>
  `header-mobile-${navIndex}-${itemIndex}`;
</script>

<template>
  <header class="l-header" data-header-root>
    <div class="l-header__bar" data-keep-open>
      <a class="l-header__logo" href="index.html">
        <img :src="logoUrl" alt="台灣創價學會" />
      </a>

      <!-- 導覽 -->
      <nav class="nav-main">
        <template v-for="(item, navIndex) in navItems" :key="navIndex">
          <a v-if="!item.columns" class="nav-main__item" :href="item.href" :target="item.target" :rel="item.rel">
            <span class="nav-main__text">{{ item.title }}</span>
          </a>
          <div v-else class="nav-main__item nav-main__item--expandable" :data-dropdown="navIndex">
            <span class="nav-main__text">{{ item.title }}</span>
            <span class="nav-main__icon">
              <i class="fa-light fa-plus"></i>
              <i class="fa-light fa-minus"></i>
            </span>
          </div>
        </template>
      </nav>

      <!-- 右側功能鈕 -->
      <div class="l-header__actions">
        <button type="button" class="btn-circle" data-header="search-toggle">
          <i class="fa-light fa-magnifying-glass"></i>
        </button>
        <button type="button" class="btn-hamburger" data-header="menu-toggle">
          <span class="btn-hamburger__bar"></span>
          <span class="btn-hamburger__bar"></span>
          <span class="btn-hamburger__bar"></span>
        </button>
      </div>
    </div>

    <!-- 逐項 hover 下拉 -->
    <template v-for="(item, navIndex) in navItems" :key="`dd-${navIndex}`">
      <div v-if="item.columns" class="header-dropdown" :data-menu="navIndex" data-keep-open>
        <div class="header-dropdown__inner">
          <div class="header-dropdown__cols">
            <div v-for="(column, columnIndex) in item.columns" :key="columnIndex" class="header-dropdown__col">
              <template v-for="(child, itemIndex) in column" :key="itemIndex">
                <!-- 可展開群組 -->
                <div v-if="child.children" class="hmenu-group">
                  <button type="button" class="hmenu-link hmenu-link--group collapsed" data-bs-toggle="collapse"
                    :data-bs-target="`#${dropdownCollapseId(navIndex, columnIndex, itemIndex)}`">
                    <span class="hmenu-link__text">{{ child.text }}</span>
                    <span class="hmenu-link__icon hmenu-link__icon--toggle">
                      <i class="fa-light fa-plus"></i>
                      <i class="fa-light fa-minus"></i>
                    </span>
                  </button>
                  <div class="collapse hmenu-group__panel" :id="dropdownCollapseId(navIndex, columnIndex, itemIndex)">
                    <a v-for="(sub, subIndex) in child.children" :key="subIndex" class="hmenu-link hmenu-link--sub"
                      :href="sub.href">
                      <span class="hmenu-link__text">{{ sub.text }}</span>
                      <i class="hmenu-link__icon fa-light fa-angle-right"></i>
                    </a>
                  </div>
                </div>
                <a v-else class="hmenu-link hmenu-link--top" :href="child.href">
                  <span class="hmenu-link__text">{{ child.text }}</span>
                  <i class="hmenu-link__icon fa-light fa-angle-right"></i>
                </a>
              </template>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- 搜尋列 -->
    <div class="header-search">
      <form class="header-search__inner">
        <div class="header-search__field">
          <input type="text" class="header-search__input" placeholder="輸入關鍵字" />
        </div>
        <button type="submit" class="btn-circle header-search__btn">
          <i class="fa-light fa-magnifying-glass"></i>
        </button>
      </form>
    </div>

    <!-- 漢堡 megamenu -->
    <div class="megamenu">
      <span class="megamenu__bg"></span>
      <div class="megamenu__inner">
        <div class="megamenu__cols">
          <div v-for="(megaColumn, megaColumnIndex) in megaColumns" :key="megaColumnIndex" class="megamenu__col">
            <div v-for="section in megaColumn" :key="section.title" class="megamenu__section">
              <a class="megamenu__title" :href="section.href" :target="section.target" :rel="section.rel">{{
                section.title
                }}</a>
              <div v-if="section.columns" class="megamenu__list">
                <template v-for="(child, itemIndex) in rowMajor(section.columns)" :key="itemIndex">
                  <div v-if="child.children" class="hmenu-group">
                    <button type="button" class="hmenu-link hmenu-link--group collapsed" data-bs-toggle="collapse"
                      :data-bs-target="`#${megamenuCollapseId(navItems.indexOf(section), itemIndex)}`">
                      <span class="hmenu-link__text">{{ child.text }}</span>
                      <span class="hmenu-link__icon hmenu-link__icon--toggle">
                        <i class="fa-light fa-plus"></i>
                        <i class="fa-light fa-minus"></i>
                      </span>
                    </button>
                    <div class="collapse hmenu-group__panel"
                      :id="megamenuCollapseId(navItems.indexOf(section), itemIndex)">
                      <a v-for="(sub, subIndex) in child.children" :key="subIndex" class="hmenu-link hmenu-link--sub"
                        :href="sub.href">
                        <span class="hmenu-link__text">{{ sub.text }}</span>
                        <i class="hmenu-link__icon fa-light fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                  <a v-else class="hmenu-link" :href="child.href">
                    <span class="hmenu-link__text">{{ child.text }}</span>
                    <i class="hmenu-link__icon fa-light fa-angle-right"></i>
                  </a>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 多層選單 -->
    <div class="nav-mobile">
      <!-- 第一層 -->
      <div class="nav-mobile__panel nav-mobile__panel--l1">
        <template v-for="(item, navIndex) in navItems" :key="navIndex">
          <button v-if="item.columns" type="button" class="nav-mobile__row" :data-mobile-drill="navIndex">
            <span class="nav-mobile__text">{{ item.title }}</span>
            <i class="nav-mobile__arrow fa-light fa-angle-right"></i>
          </button>
          <a v-else class="nav-mobile__row" :href="item.href" :target="item.target" :rel="item.rel">
            <span class="nav-mobile__text">{{ item.title }}</span>
          </a>
        </template>
      </div>

      <!-- 第二層 -->
      <template v-for="(item, navIndex) in navItems" :key="`mb-${navIndex}`">
        <div v-if="item.columns" class="nav-mobile__panel nav-mobile__panel--l2" :data-mobile-panel="navIndex">
          <button type="button" class="nav-mobile__back" data-mobile-back>
            <i class="fa-light fa-angle-left"></i>
            <span>返回</span>
          </button>
          <template v-for="(child, itemIndex) in colMajor(item.columns)" :key="itemIndex">
            <!-- 可展開群組 -->
            <div v-if="child.children" class="nav-mobile__group">
              <button type="button" class="nav-mobile__row nav-mobile__row--toggle collapsed" data-bs-toggle="collapse"
                :data-bs-target="`#${mobileCollapseId(navIndex, itemIndex)}`">
                <span class="nav-mobile__text">{{ child.text }}</span>
                <span class="nav-mobile__icon">
                  <i class="fa-light fa-plus"></i>
                  <i class="fa-light fa-minus"></i>
                </span>
              </button>
              <div class="collapse nav-mobile__sublist" :id="mobileCollapseId(navIndex, itemIndex)">
                <a v-for="(sub, subIndex) in child.children" :key="subIndex" class="nav-mobile__subrow"
                  :href="sub.href">{{ sub.text }}</a>
              </div>
            </div>
            <a v-else class="nav-mobile__row" :href="child.href">
              <span class="nav-mobile__text">{{ child.text }}</span>
              <i class="nav-mobile__arrow fa-light fa-angle-right"></i>
            </a>
          </template>
        </div>
      </template>
    </div>

    <!-- 遮罩 -->
    <div class="header-backdrop" data-header="close"></div>
  </header>
</template>

<script>
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
    root.querySelectorAll('.header-dropdown.is-open').forEach((dropdownEl) => {
      dropdownEl.classList.remove('is-open');
    });
    root.querySelectorAll('.nav-main__item--expandable.is-active').forEach((navItem) => {
      navItem.classList.remove('is-active');
    });
  };

  const closeMenu = (root) => {
    if (root.classList.contains('is-menu-open')) {
      root.classList.remove('is-menu-open', 'is-l2-open');
      root.querySelectorAll('.nav-mobile__panel--l2.is-open').forEach((panelEl) => {
        panelEl.classList.remove('is-open');
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

  document.addEventListener('click', (event) => {
    const root = getRoot();
    if (!root) {
      return;
    }

    const action = event.target.closest('[data-header]');
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
    const drill = event.target.closest('[data-mobile-drill]');
    if (drill && root.contains(drill)) {
      const index = drill.getAttribute('data-mobile-drill');
      const panel = root.querySelector(`.nav-mobile__panel--l2[data-mobile-panel="${index}"]`);
      if (panel) {
        root.querySelectorAll('.nav-mobile__panel--l2.is-open').forEach((panelEl) => {
          panelEl.classList.remove('is-open');
        });
        panel.classList.add('is-open');
        root.classList.add('is-l2-open');
      }
      return;
    }

    // Mobile 返回第一層
    const back = event.target.closest('[data-mobile-back]');
    if (back && root.contains(back)) {
      root.classList.remove('is-l2-open');
      root.querySelectorAll('.nav-mobile__panel--l2.is-open').forEach((panelEl) => {
        panelEl.classList.remove('is-open');
      });
    }
  });

  document.addEventListener('mouseover', (event) => {
    const root = getRoot();
    if (!root || window.matchMedia('(max-width: 1199.98px)').matches) {
      return;
    }

    const item = event.target.closest('.nav-main__item--expandable');
    if (item && root.contains(item)) {
      openDropdown(root, item.getAttribute('data-dropdown'));
      return;
    }

    if (event.target.closest('[data-keep-open]') && root.contains(event.target)) {
      return;
    }

    if (root.classList.contains('is-dropdown-open')) {
      closeDropdown(root);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const root = getRoot();
      if (root) {
        closeAll(root);
        lockBody(false);
      }
    }
  });
})();
</script>
