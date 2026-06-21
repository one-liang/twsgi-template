<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import AppFloatButtons from '../components/AppFloatButtons.vue';
import heroConnectingWorld from '@/assets/images/banner/hero-connecting-world.jpg';

const banners = [
  {
    image: heroConnectingWorld,
    titleLines: ['A Better World', 'Together.'],
    subtitle: '以文化與教育連結世界',
  },
  {
    image: heroConnectingWorld,
    titleLines: ['Culture &', 'Education.'],
    subtitle: '以對話開創和平共生的未來',
  },
  {
    image: heroConnectingWorld,
    titleLines: ['Peace for', 'the Future.'],
    subtitle: '攜手共創尊重生命的社會',
  },
];

const formatCount = (index) => String(index + 1).padStart(2, '0');
</script>

<template>
  <AppHeader />

  <!-- 主輪播 -->
  <section class="home-banner" data-home-banner>
    <div class="home-banner__swiper swiper">
      <div class="swiper-wrapper">
        <div v-for="(banner, bannerIndex) in banners" :key="bannerIndex" class="home-banner__slide swiper-slide">
          <!-- 標題 -->
          <div class="home-banner__caption">
            <h1 class="home-banner__title h1-en">
              <template v-for="(line, lineIndex) in banner.titleLines" :key="lineIndex">{{ line }}<br /></template>
            </h1>
            <p class="home-banner__subtitle">
              <span class="home-banner__subtitle-bar"></span>
              {{ banner.subtitle }}
            </p>
          </div>

          <!-- 主圖片 -->
          <div class="home-banner__media">
            <img class="home-banner__img" :src="banner.image" alt="台灣創價學會主視覺" />
            <span class="home-banner__overlay"></span>
          </div>
        </div>
      </div>

      <!-- 計數器 -->
      <div class="home-banner__count" data-banner-count>
        <button v-for="(banner, bannerIndex) in banners" :key="bannerIndex" type="button"
          class="home-banner__count-item" :class="{ 'is-active': bannerIndex === 0 }" :data-banner-go="bannerIndex">
          <svg class="home-banner__count-ring" viewBox="0 0 52 52">
            <circle class="home-banner__count-ring-track" cx="26" cy="26" r="24" />
            <circle class="home-banner__count-ring-progress" cx="26" cy="26" r="23.5" />
          </svg>
          <span class="home-banner__count-num">{{ formatCount(bannerIndex) }}</span>
        </button>
      </div>
    </div>
  </section>

  <AppFloatButtons />
  <AppFooter />
</template>

<script>
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
</script>
