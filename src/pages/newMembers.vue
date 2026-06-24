<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import AppFloatButtons from '../components/AppFloatButtons.vue';
import AppBanner from '../components/AppBanner.vue';
import AppTileCard from '../components/AppTileCard.vue';

import gongyoWhy from '@/assets/images/newMembers/newmembers-gongyo-why.jpg';
import gongyoQa from '@/assets/images/newMembers/newmembers-gongyo-qa.png';
import activityEvents from '@/assets/images/newMembers/newmembers-activity-events.jpg';
import activityFaq from '@/assets/images/newMembers/newmembers-activity-faq.jpg';
import memorialMeaning from '@/assets/images/newMembers/newmembers-memorial-meaning.jpg';
import teachingPractice from '@/assets/images/newMembers/newmembers-teaching-practice.jpg';
import teachingStudy from '@/assets/images/newMembers/newmembers-teaching-study.png';
import teachingKosen from '@/assets/images/newMembers/newmembers-teaching-kosen.jpg';
import teachingGosho from '@/assets/images/newMembers/newmembers-teaching-gosho.jpg';
import teachingHope from '@/assets/images/newMembers/newmembers-teaching-hope.jpg';
import decorLeft from '@/assets/images/newMembers/newmembers-decor-left.svg';
import decorRight from '@/assets/images/newMembers/newmembers-decor-right.svg';

const sectionList = [
  {
    id: 'gongyo',
    title: '關於勤行唱題',
    variant: 'panel',
    spv: 2,
    gap: 40,
    arrows: false,
    items: [
      { image: gongyoWhy, title: '為什麼要勤行呢？', link: '#' },
      { image: gongyoQa, title: '關於勤行唱題Q&A', link: '#' },
    ],
  },
  {
    id: 'activity',
    title: '關於創價活動',
    variant: 'cream',
    spv: 2,
    gap: 40,
    arrows: false,
    items: [
      { image: activityEvents, title: '創價學會的活動', link: '#' },
      { image: activityFaq, title: '信仰過程中常見的問題', link: '#' },
    ],
  },
  {
    id: 'memorial',
    title: '關於追善回向',
    variant: 'decor',
    spv: 1,
    gap: 28,
    arrows: false,
    items: [
      { image: memorialMeaning, title: '「追善回向」的意義', link: '#' },
    ],
  },
  {
    id: 'teaching',
    title: '關於教學',
    variant: 'gray',
    spv: 3,
    gap: 24,
    arrows: true,
    items: [
      { image: teachingPractice, title: '「實踐教學」的意義', link: '#' },
      { image: teachingStudy, title: '如劍豪般地鑽研御書', link: '#' },
      { image: teachingKosen, title: '「廣宣流布」的意義', link: '#' },
      { image: teachingGosho, title: '「御書全集」的發行意義', link: '#' },
      { image: teachingHope, title: '御書是「希望之書」', link: '#' },
      { image: teachingPractice, title: '「實踐教學」的意義', link: '#' },
      { image: teachingStudy, title: '如劍豪般地鑽研御書', link: '#' },
      { image: teachingKosen, title: '「廣宣流布」的意義', link: '#' },
    ],
  },
];

const tabList = [
  { label: '關於勤行唱題', target: 'gongyo' },
  { label: '關於創價活動', target: 'activity' },
  { label: '關於追善回向', target: 'memorial' },
  { label: '關於佛法教學', target: 'teaching' },
];

const decorImages = { left: decorLeft, right: decorRight };
</script>

<template>
  <AppHeader />

  <AppBanner title="給新會員" :breadcrumb="[{ label: '給新會員' }]" />

  <nav class="l-newcomer-tabs js-newcomer-tabs">
    <div class="l-newcomer-tabs__container container">
      <ul class="l-newcomer-tabs__list">
        <li v-for="tab in tabList" :key="tab.target" class="l-newcomer-tabs__item">
          <a class="tab-member" :href="`#${tab.target}`" :data-newcomer-tab="tab.target">
            {{ tab.label }}
            <span class="tab-member__icon"><i class="fa-regular fa-angle-down"></i></span>
          </a>
        </li>
      </ul>
    </div>
  </nav>

  <section v-for="section in sectionList" :id="section.id" :key="section.id" class="l-newcomer-section"
    :class="`l-newcomer-section--${section.variant}`" data-newcomer-section :data-newcomer-spv="section.spv"
    :data-newcomer-gap="section.gap">
    <!-- 裝飾性背景 -->
    <span v-if="section.variant === 'decor'" class="l-newcomer-section__bg">
      <img class="l-newcomer-section__bg-img l-newcomer-section__bg-img--left" :src="decorImages.left" alt="" />
      <img class="l-newcomer-section__bg-img l-newcomer-section__bg-img--right" :src="decorImages.right" alt="" />
    </span>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <h2 class="l-newcomer-section__title" data-aos="fade-up">
            <span class="l-newcomer-section__bar"></span>
            {{ section.title }}
          </h2>

          <!-- 卡片輪播 -->
          <div class="l-newcomer-section__body" data-aos="fade-up" data-aos-delay="100">
            <div class="l-newcomer-section__carousel"
              :class="{ 'l-newcomer-section__carousel--panel': section.variant === 'panel' }">
              <button v-if="section.arrows" type="button"
                class="btn btn-icon btn-solid l-newcomer-section__arrow l-newcomer-section__arrow--prev"
                data-newcomer-prev>
                <span class="btn-arrow btn-arrow--left">
                  <span class="btn-arrow__track">
                    <i class="fa-light fa-arrow-left"></i>
                    <i class="fa-light fa-arrow-left"></i>
                  </span>
                </span>
              </button>

              <div class="l-newcomer-section__swiper swiper">
                <div class="swiper-wrapper">
                  <div v-for="(card, cardIndex) in section.items" :key="cardIndex" class="swiper-slide">
                    <AppTileCard :image="card.image" :title="card.title" :link="card.link" />
                  </div>
                </div>
              </div>

              <button v-if="section.arrows" type="button"
                class="btn btn-icon btn-solid l-newcomer-section__arrow l-newcomer-section__arrow--next"
                data-newcomer-next>
                <span class="btn-arrow">
                  <span class="btn-arrow__track">
                    <i class="fa-light fa-arrow-right-long"></i>
                    <i class="fa-light fa-arrow-right-long"></i>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <AppFloatButtons />

  <AppFooter />
</template>

<script>
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
</script>
