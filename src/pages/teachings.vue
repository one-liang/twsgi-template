<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import AppFloatButtons from '../components/AppFloatButtons.vue';
import AppBanner from '../components/AppBanner.vue';
import teachingPattern from '@/assets/images/teachings/teaching-lotus.png';

const buildCards = (title, count) =>
  Array.from({ length: count }, (_, cardIndex) => `${title}（${cardIndex + 1}）`);

const teachingGroups = [
  {
    id: 'teaching-group-1',
    title: '日蓮大聖人的一生',
    cards: [
      '日蓮大聖人的一生(1)－誕生、出家、遊學',
      '日蓮大聖人的一生(2)－立正安國',
      '日蓮大聖人的一生(3)－龍口法難的起因',
      '日蓮大聖人的一生(4)－龍口法難',
      '日蓮大聖人的一生(5)－佐渡流罪',
      '日蓮大聖人的一生(6)－入身延山',
      '日蓮大聖人的一生(7)－付囑日興上人與入滅',
    ],
  },
  { id: 'teaching-group-2', title: '一念三千的佛法法理', cards: buildCards('一念三千的佛法法理', 4) },
  { id: 'teaching-group-3', title: '佛法的實踐', cards: buildCards('佛法的實踐', 10) },
  { id: 'teaching-group-4', title: '判定宗教的基準', cards: buildCards('判定宗教的基準', 5) },
  { id: 'teaching-group-5', title: '日蓮大聖人的御書', cards: buildCards('日蓮大聖人的御書', 3) },
  { id: 'teaching-group-6', title: '日蓮大聖人的門下', cards: buildCards('日蓮大聖人的門下', 4) },
  { id: 'teaching-group-7', title: '法華經', cards: buildCards('法華經', 10) },
  { id: 'teaching-group-8', title: '佛法用語', cards: buildCards('佛法用語', 18) },
  { id: 'teaching-group-9', title: '延伸閱讀', cards: buildCards('延伸閱讀', 10) },
];
</script>

<template>
  <AppHeader />
  <AppFloatButtons />

  <AppBanner title="佛法教學入門" :breadcrumb="[{ label: '佛法教學入門' }]" />

  <!-- 教學導覽區 -->
  <section class="l-teaching">
    <span class="l-teaching__bg" :style="{ backgroundImage: `url(${teachingPattern})` }"></span>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <div class="l-teaching__layout">
            <!-- 下拉選單(mobile) -->
            <select class="form-select l-teaching__select d-lg-none js-teaching-select">
              <option v-for="group in teachingGroups" :key="group.id" :value="group.id">
                {{ group.title }}
              </option>
            </select>

            <!-- 選單(desktop) -->
            <aside class="l-teaching__sidebar d-none d-lg-block">
              <nav class="c-teaching-nav">
                <button v-for="(group, groupIndex) in teachingGroups" :key="group.id" type="button"
                  class="c-teaching-nav__item" :class="{ 'is-active': groupIndex === 0 }" :data-target="group.id">
                  <span class="c-teaching-nav__dot"></span>
                  <span class="c-teaching-nav__text">{{ group.title }}</span>
                </button>
              </nav>
            </aside>
            <div class="l-teaching__content">
              <div v-for="(group, groupIndex) in teachingGroups" :key="group.id" :id="group.id" class="c-teaching-group"
                :class="{ 'is-shown': groupIndex === 0 }">
                <div class="c-teaching-group__title">
                  <span class="c-teaching-group__bar"></span>
                  <h2 class="mb-0">{{ group.title }}</h2>
                </div>
                <div class="c-teaching-group__list">
                  <a v-for="(card, cardIndex) in group.cards" :key="cardIndex" href="#" class="c-teaching-card">
                    <span class="c-teaching-card__text">{{ card }}</span>
                    <span class="c-teaching-card__icon">
                      <span class="btn-arrow">
                        <span class="btn-arrow__track">
                          <i class="fa-light fa-arrow-right-long"></i>
                          <i class="fa-light fa-arrow-right-long"></i>
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <AppFooter />
</template>

<script>
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
</script>
