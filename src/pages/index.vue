<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import AppFloatButtons from '../components/AppFloatButtons.vue';
import AppNewsCard from '../components/AppNewsCard.vue';
import AppVideoCard from '../components/AppVideoCard.vue';
import heroConnectingWorld from '@/assets/images/home/hero-connecting-world.jpg';
import heroConcert from '@/assets/images/home/hero-concert.jpg';
import heroChildren from '@/assets/images/home/hero-children.jpg';
import news01 from '@/assets/images/home/news-01.jpg';
import news02 from '@/assets/images/home/news-02.jpg';
import news03 from '@/assets/images/home/news-03.jpg';
import news04 from '@/assets/images/home/news-04.jpg';
import news05 from '@/assets/images/home/news-05.jpg';
import news06 from '@/assets/images/home/news-06.jpg';
import video01 from '@/assets/images/home/video-01.jpg';
import video02 from '@/assets/images/home/video-02.jpg';
import video03 from '@/assets/images/home/video-03.jpg';
import socialAction from '@/assets/images/home/social-action.jpg';
import dailyActivities from '@/assets/images/home/daily-activities.jpg';
import bgGlobe from '@/assets/images/home/bg-globe.svg';
import locationsMap from '@/assets/images/home/locations-map.png';
import locationsHall from '@/assets/images/home/locations-hall.svg';
import locationsCienen from '@/assets/images/home/locations-cienen.svg';
import locationsMuseum from '@/assets/images/home/locations-museum.svg';

const banners = [
  {
    image: heroConnectingWorld,
    titleLines: ['A Better World', 'Together.'],
    subtitle: '以文化與教育連結世界',
  },
  {
    image: heroConcert,
    titleLines: ['A Better World', 'Together.'],
    subtitle: '以文化與教育連結世界',
  },
  {
    image: heroChildren,
    titleLines: ['A Better World', 'Together.'],
    subtitle: '以文化與教育連結世界',
  },
];

const formatCount = (index) => String(index + 1).padStart(2, '0');

const newsList = [
  {
    image: news01,
    date: '2026.03.20',
    title: '5月份大研專場座談會 青年向創價母親表達感謝',
    excerpt: '創價於5月18至24日，在全台各地熱絡地舉辦5月份座談會。',
    link: '#',
  },
  {
    image: news02,
    date: '2026.03.20',
    title: '日本創價大學理事長秋谷芳英訪問台灣大學、高雄大學',
    excerpt: '日本創價大學理事長秋谷芳英、國際部部長川上喜彥及創價學會國際涉外局第二部部長水嶋肇等一行人，2月24日上午，在共同執行長林澤、吳青蓉等陪同下',
    link: '#',
  },
  {
    image: news03,
    date: '2026.03.20',
    title: '台灣SGI青年與亞洲5萬名青年大合唱〈歡樂頌〉',
    excerpt: '為慶祝創立95週年，堂堂邁向創立100週年，11月23日，九州創價學會的「亞洲和平音樂節」（Asia Peace Festa 2025',
    link: '#',
  },
  {
    image: news04,
    date: '2026.03.20',
    title: '全國區長會 林釗理事長期勉幹部 全力培育青年後繼 建設廣布黃金城',
    excerpt: '全國區長會於5月25日假桃園文化會館盛大舉行，林釗理事長首先向與會幹部宣布三項振奮人心的好消息',
    link: '#',
  },
  {
    image: news05,
    date: '2026.03.20',
    title: '5月份大研專場座談會 青年向創價母親表達感謝',
    excerpt: '創價於5月18至24日，在全台各地熱絡地舉辦5月份座談會。',
    link: '#',
  },
  {
    image: news06,
    date: '2026.03.20',
    title: '林顯宗油畫世界展在創價美術館至善館舉行 藝遊人生 畫作展現蓬勃生命力',
    excerpt: '「藝遊人生──林顯宗油畫世界」展，6月7日下午在創價美術館至善館舉行開幕典禮，由林釗理事長...',
    link: '#',
  },
];

const videoList = [
  { image: video01, title: '悠然望玉山－林玉山藝術實踐｜2025創價藝文', link: '#' },
  { image: video02, title: 'CIMARRON 音樂冒險｜亞洲和平音樂節精選', link: '#' },
  { image: video03, title: '逆風前行 高一虹的生命樂章｜創價青年紀實', link: '#' },
  { image: video01, title: '悠然望玉山－林玉山藝術實踐｜2025創價藝文', link: '#' },
  { image: video02, title: 'CIMARRON 音樂冒險｜亞洲和平音樂節精選', link: '#' },
  { image: video03, title: '逆風前行 高一虹的生命樂章｜創價青年紀實', link: '#' },
];

const actionList = [
  {
    image: socialAction,
    eyebrow: 'Social Initiatives',
    title: '社會行動',
    subtitle: '文化．教育．和平',
    desc: '創價學會以尊重生命與人類幸福為理念，推動文化、教育與和平行動，並持續投入社會關懷與災難援助。',
    link: '#',
    reverse: false,
  },
  {
    image: dailyActivities,
    eyebrow: 'Daily Activities',
    title: '日常活動',
    subtitle: '信仰．修行．弘法',
    desc: '創價學會承襲佛教慈悲精神，以《法華經》為核心，透過信仰與修行弘揚南無妙法蓮華經。',
    link: '#',
    reverse: true,
  },
];

const locationStats = [
  { icon: locationsHall, name: '會館講堂', count: '49', unit: '間', variant: 'brand', link: '#' },
  { icon: locationsCienen, name: '慈恩堂', count: '1', unit: '座', variant: 'green', link: '#' },
  { icon: locationsMuseum, name: '創價美術館', count: '12', unit: '間', variant: 'blue', link: '#' },
];

const relatedLinks = [
  { icon: 'fa-books', name: '聖典檢索', url: '#' },
  { icon: 'fa-book', name: '池田大作中文網', url: '#' },
  { icon: 'fa-globe', name: '創價學會全球網', url: '#' },
  { icon: 'fa-newspaper', name: '創價新聞電子報', url: '#' },
  { icon: 'fa-building-columns', name: '創價藝文', url: '#' },
  { icon: 'fa-hand-holding-heart', name: '線上捐款', url: '#' },
];
</script>

<template>
  <AppHeader />

  <!-- 主輪播 -->
  <section class="home-banner" data-home-banner>
    <div class="container home-banner__container">
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

      <!-- 向下捲動指示 -->
      <div class="home-banner__scroll">
        <div class="home-banner__scroll-label"><span>SCROLL</span></div>
        <span class="home-banner__scroll-line"></span>
      </div>
    </div>
  </section>

  <!-- 最新訊息 -->
  <section class="home-news" data-home-news>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 home-news__inner">
          <!-- 標題 -->
          <div class="home-news__head">
            <div class="home-news__heading">
              <p class="home-news__eyebrow">News</p>
              <h2 class="home-news__title">
                <span class="home-news__title-bar"></span>
                最新訊息
              </h2>
            </div>

            <!-- 上一頁 / 下一頁 -->
            <div class="home-news__nav">
              <button type="button" class="btn btn-icon btn-outline-soft" data-news-prev>
                <span class="btn-arrow btn-arrow--left">
                  <span class="btn-arrow__track">
                    <i class="fa-light fa-arrow-left"></i>
                    <i class="fa-light fa-arrow-left"></i>
                  </span>
                </span>
              </button>
              <button type="button" class="btn btn-icon btn-outline-soft" data-news-next>
                <span class="btn-arrow">
                  <span class="btn-arrow__track">
                    <i class="fa-light fa-arrow-right-long"></i>
                    <i class="fa-light fa-arrow-right-long"></i>
                  </span>
                </span>
              </button>
            </div>
          </div>

          <!-- 卡片輪播 -->
          <div class="home-news__swiper swiper">
            <div class="swiper-wrapper">
              <div v-for="(news, newsIndex) in newsList" :key="newsIndex" class="swiper-slide">
                <AppNewsCard :image="news.image" :date="news.date" :title="news.title" :excerpt="news.excerpt"
                  :link="news.link" />
              </div>
            </div>
          </div>

          <!-- 查看更多 -->
          <div class="home-news__more">
            <a href="#" class="btn btn-solid btn-lg d-inline-flex align-items-center justify-content-center gap-2">
              查看更多
              <span class="btn-arrow">
                <span class="btn-arrow__track">
                  <i class="fa-light fa-arrow-right-long"></i>
                  <i class="fa-light fa-arrow-right-long"></i>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 線上影音 -->
  <section class="home-video" data-home-video>
    <!-- 標題 -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <div class="home-video__head">
            <div class="home-video__heading">
              <p class="home-video__eyebrow">Online Video</p>
              <h2 class="home-video__title">
                <span class="home-video__title-bar"></span>
                線上影音
              </h2>
            </div>

            <!-- 查看更多 -->
            <a href="#" class="btn btn-text btn-lg d-inline-flex align-items-center gap-2">
              查看更多
              <span class="btn-text__icon">
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

    <!-- 卡片輪播 -->
    <div class="home-video__swiper swiper">
      <div class="swiper-wrapper">
        <div v-for="(video, videoIndex) in videoList" :key="videoIndex" class="swiper-slide">
          <AppVideoCard :image="video.image" :title="video.title" :link="video.link" />
        </div>
      </div>
    </div>

    <!-- 上一頁 / 下一頁 -->
    <div class="home-video__nav">
      <button type="button" class="btn btn-icon btn-outline-soft" data-video-prev>
        <span class="btn-arrow btn-arrow--left">
          <span class="btn-arrow__track">
            <i class="fa-light fa-arrow-left"></i>
            <i class="fa-light fa-arrow-left"></i>
          </span>
        </span>
      </button>
      <button type="button" class="btn btn-icon btn-outline-soft" data-video-next>
        <span class="btn-arrow">
          <span class="btn-arrow__track">
            <i class="fa-light fa-arrow-right-long"></i>
            <i class="fa-light fa-arrow-right-long"></i>
          </span>
        </span>
      </button>
    </div>
  </section>

  <!-- 社會行動 + 日常活動 -->
  <section class="home-action" data-home-action>
    <!-- 裝飾背景 -->
    <span class="home-action__bg" :style="{ backgroundImage: `url(${bgGlobe})` }"></span>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 home-action__inner">
          <!-- 卡片 -->
          <div v-for="(action, actionIndex) in actionList" :key="actionIndex" class="home-action__item"
            :class="{ 'home-action__item--reverse': action.reverse }" data-aos="fade-up"
            :data-aos-delay="action.reverse ? 150 : 0">
            <!-- 內容卡片 -->
            <div class="home-action__card">
              <p class="home-action__eyebrow">{{ action.eyebrow }}</p>
              <h2 class="home-action__title">{{ action.title }}</h2>
              <p class="home-action__subtitle">
                <span class="home-action__subtitle-bar"></span>
                {{ action.subtitle }}
              </p>
              <p class="home-action__desc">{{ action.desc }}</p>
              <a :href="action.link" class="btn btn-solid d-inline-flex align-items-center gap-2">
                <span class="flex-grow-1 text-center">查看更多</span>
                <span class="btn-arrow">
                  <span class="btn-arrow__track">
                    <i class="fa-light fa-arrow-right-long"></i>
                    <i class="fa-light fa-arrow-right-long"></i>
                  </span>
                </span>
              </a>
            </div>

            <!-- 圖片 -->
            <div class="home-action__media">
              <img class="home-action__img" :src="action.image" :alt="action.title" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 服務據點 -->
  <section class="home-locations" data-home-locations>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <div class="home-locations__box">
            <!-- 標題 -->
            <div class="home-locations__heading">
              <p class="home-locations__eyebrow">Locations / Our Centers</p>
              <h2 class="home-locations__title">
                <span class="home-locations__title-bar"></span>
                服務據點
              </h2>
            </div>

            <!-- 地圖 -->
            <div class="home-locations__map">
              <img class="home-locations__map-img" :src="locationsMap" alt="台灣創價學會各地服務據點分布地圖" />
            </div>

            <!-- 卡片 -->
            <div class="home-locations__cards">
              <a v-for="(item, locationIndex) in locationStats" :key="locationIndex" class="home-locations__card"
                :href="item.link">
                <span class="home-locations__info">
                  <span class="home-locations__icon">
                    <img :src="item.icon" :alt="item.name" />
                  </span>
                  <span class="home-locations__name">{{ item.name }}</span>
                </span>
                <span class="home-locations__count">
                  <span class="home-locations__number h1-en" :class="`home-locations__number--${item.variant}`">{{
                    item.count }}</span>
                  <span class="home-locations__unit">{{ item.unit }}</span>
                </span>
              </a>
            </div>

            <!-- 查看更多 -->
            <a href="#" class="home-locations__more btn btn-text btn-lg d-inline-flex align-items-center gap-2">
              查看各地據點
              <span class="btn-text__icon">
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
  </section>

  <!-- 相關網站 -->
  <section class="home-links" data-home-links>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <!-- 標題 -->
          <div class="home-links__heading">
            <p class="home-links__eyebrow">Related Websites</p>
            <h2 class="home-links__title">
              <span class="home-links__title-bar"></span>
              相關網站
            </h2>
          </div>
          <div class="home-links__grid">
            <a v-for="(link, linkIndex) in relatedLinks" :key="linkIndex" class="home-links__card" :href="link.url">
              <span class="home-links__icon"><i class="fa-thin" :class="link.icon"></i></span>
              <span class="home-links__name">{{ link.name }}</span>
              <span class="home-links__arrow">
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
</script>
