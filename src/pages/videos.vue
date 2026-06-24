<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppBanner from '../components/AppBanner.vue';
import AppFooter from '../components/AppFooter.vue';
import AppFloatButtons from '../components/AppFloatButtons.vue';
import AppMediaCard from '../components/AppMediaCard.vue';

import artsImg01 from '@/assets/images/videos/videos-arts-01.jpg';
import artsImg02 from '@/assets/images/videos/videos-arts-02.jpg';
import artsImg03 from '@/assets/images/videos/videos-arts-03.jpg';
import lectureImg01 from '@/assets/images/videos/videos-lecture-01.jpg';
import lectureImg02 from '@/assets/images/videos/videos-lecture-02.jpg';
import lectureImg03 from '@/assets/images/videos/videos-lecture-03.jpg';
import activityImg01 from '@/assets/images/videos/videos-activity-01.jpg';
import activityImg02 from '@/assets/images/videos/videos-activity-02.jpg';
import activityImg03 from '@/assets/images/videos/videos-activity-03.jpg';
import featureImg01 from '@/assets/images/videos/videos-feature-01.jpg';
import featureImg02 from '@/assets/images/videos/videos-feature-02.jpg';
import featureImg03 from '@/assets/images/videos/videos-feature-03.jpg';
import introImg01 from '@/assets/images/videos/videos-intro-01.jpg';
import introImg02 from '@/assets/images/videos/videos-intro-02.jpg';
import introImg03 from '@/assets/images/videos/videos-intro-03.jpg';

const videoSections = [
  {
    key: 'arts',
    title: '創價藝文',
    moreHref: '#',
    items: [
      { image: artsImg01, title: '逆風前行－高一峰紀念展｜2025創價藝文', link: 'videoDetail.html' },
      { image: artsImg02, title: '悠然望玉山－林玉山藝術實踐｜2025創價藝文', link: 'videoDetail.html' },
      { image: artsImg03, title: '跨界即興－台灣現代陶之先鋒 李茂宗特展｜2025年創價藝文', link: 'videoDetail.html' },
      { image: artsImg01, title: '逆風前行－高一峰紀念展｜2025創價藝文', link: 'videoDetail.html' },
      { image: artsImg02, title: '悠然望玉山－林玉山藝術實踐｜2025創價藝文', link: 'videoDetail.html' },
      { image: artsImg03, title: '跨界即興－台灣現代陶之先鋒 李茂宗特展｜2025年創價藝文', link: 'videoDetail.html' },
    ],
  },
  {
    key: 'lecture',
    title: '講座',
    variant: 'gray',
    moreHref: '#',
    items: [
      { image: lectureImg01, title: '【藝文講座】歌劇美聲饗宴', link: 'videoDetail.html' },
      { image: lectureImg02, title: '【創價醫學講座】癌症的預防保健及早期篩檢', link: 'videoDetail.html' },
      { image: lectureImg03, title: '【創價醫學講座】肺部疾病與肺癌防治/陳晉興 醫師', link: 'videoDetail.html' },
      { image: lectureImg01, title: '【藝文講座】歌劇美聲饗宴', link: 'videoDetail.html' },
      { image: lectureImg02, title: '【創價醫學講座】癌症的預防保健及早期篩檢', link: 'videoDetail.html' },
      { image: lectureImg03, title: '【創價醫學講座】肺部疾病與肺癌防治/陳晉興 醫師', link: 'videoDetail.html' },
    ],
  },
  {
    key: 'activity',
    title: '活動',
    variant: 'decor',
    moreHref: '#',
    items: [
      { image: activityImg01, title: '璀璨風華．經典盛宴 有馬徹古巴之夜樂團Noche Cubana x 山本琳達 －2026創價公演－', link: 'videoDetail.html' },
      { image: activityImg02, title: '｜開幕報導｜創價美術館推出國寶級藝術家林玉山、高一峰展覽 譜寫精彩台灣美術史', link: 'videoDetail.html' },
      { image: activityImg03, title: '｜開幕剪綵｜突破傳統 不斷創新 創價美術館舉行李奇茂、李茂宗作品展', link: 'videoDetail.html' },
      { image: activityImg01, title: '璀璨風華．經典盛宴 有馬徹古巴之夜樂團Noche Cubana x 山本琳達 －2026創價公演－', link: 'videoDetail.html' },
      { image: activityImg02, title: '｜開幕報導｜創價美術館推出國寶級藝術家林玉山、高一峰展覽 譜寫精彩台灣美術史', link: 'videoDetail.html' },
      { image: activityImg03, title: '｜開幕剪綵｜突破傳統 不斷創新 創價美術館舉行李奇茂、李茂宗作品展', link: 'videoDetail.html' },
    ],
  },
  {
    key: 'feature',
    title: '特輯',
    variant: 'gray',
    moreHref: '#',
    items: [
      { image: featureImg01, title: '御書文白並列本檢索網 操作說明', link: 'videoDetail.html' },
      { image: featureImg02, title: '【創價SDGs運動】翻轉世界 從心做起 蕭瓊瑞教授 演講', link: 'videoDetail.html' },
      { image: featureImg03, title: '【專題演講】巴黎協定xSDGs啟動世界大翻轉', link: 'videoDetail.html' },
      { image: featureImg01, title: '御書文白並列本檢索網 操作說明', link: 'videoDetail.html' },
      { image: featureImg02, title: '【創價SDGs運動】翻轉世界 從心做起 蕭瓊瑞教授 演講', link: 'videoDetail.html' },
      { image: featureImg03, title: '【專題演講】巴黎協定xSDGs啟動世界大翻轉', link: 'videoDetail.html' },
    ],
  },
  {
    key: 'intro',
    title: '簡介',
    variant: 'decor',
    moreHref: '#',
    items: [
      { image: introImg01, title: '世界青年學會・飛翔之年｜2025地區友好總會 年度影片｜', link: 'videoDetail.html' },
      { image: introImg02, title: '世界青年學會 開幕之年｜2024年地區友好總會 年度影片｜', link: 'videoDetail.html' },
      { image: introImg03, title: '迎向 2023 青年・凱歌之年｜2023地區勝利總會 年度影片｜', link: 'videoDetail.html' },
      { image: introImg01, title: '世界青年學會・飛翔之年｜2025地區友好總會 年度影片｜', link: 'videoDetail.html' },
      { image: introImg02, title: '世界青年學會 開幕之年｜2024年地區友好總會 年度影片｜', link: 'videoDetail.html' },
      { image: introImg03, title: '迎向 2023 青年・凱歌之年｜2023地區勝利總會 年度影片｜', link: 'videoDetail.html' },
    ],
  },
  {
    key: 'podcast',
    title: 'Podcast、有聲書',
    variant: 'gray',
    moreHref: '#',
    items: [
      { image: introImg01, title: '世界青年學會・飛翔之年｜2025地區友好總會 年度影片｜', link: 'videoDetail.html' },
      { image: introImg02, title: '世界青年學會 開幕之年｜2024年地區友好總會 年度影片｜', link: 'videoDetail.html' },
      { image: introImg03, title: '迎向 2023 青年・凱歌之年｜2023地區勝利總會 年度影片｜', link: 'videoDetail.html' },
      { image: introImg01, title: '世界青年學會・飛翔之年｜2025地區友好總會 年度影片｜', link: 'videoDetail.html' },
      { image: introImg02, title: '世界青年學會 開幕之年｜2024年地區友好總會 年度影片｜', link: 'videoDetail.html' },
      { image: introImg03, title: '迎向 2023 青年・凱歌之年｜2023地區勝利總會 年度影片｜', link: 'videoDetail.html' },
    ],
  },
];
</script>

<template>
  <AppHeader />
  <AppBanner title="線上影音" :breadcrumb="[{ label: '線上影音' }]" />

  <section v-for="section in videoSections" :key="section.key" class="l-videos-section"
    :class="section.variant ? `l-videos-section--${section.variant}` : ''" :data-videos-section="section.key">
    <!-- 背景裝飾圖 -->
    <span v-if="section.variant === 'decor'" class="l-videos-section__bg"></span>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 l-videos-section__inner">
          <div class="l-videos-section__head">
            <h2 class="l-videos-section__title">
              <span class="l-videos-section__title-bar"></span>
              {{ section.title }}
            </h2>
            <div class="l-videos-section__nav">
              <button type="button" class="btn btn-icon btn-outline-soft" data-videos-prev>
                <span class="btn-arrow btn-arrow--left">
                  <span class="btn-arrow__track">
                    <i class="fa-light fa-arrow-left"></i>
                    <i class="fa-light fa-arrow-left"></i>
                  </span>
                </span>
              </button>
              <button type="button" class="btn btn-icon btn-outline-soft" data-videos-next>
                <span class="btn-arrow">
                  <span class="btn-arrow__track">
                    <i class="fa-light fa-arrow-right-long"></i>
                    <i class="fa-light fa-arrow-right-long"></i>
                  </span>
                </span>
              </button>
            </div>
          </div>

          <div class="l-videos-section__swiper swiper">
            <div class="swiper-wrapper">
              <div v-for="(video, videoIndex) in section.items" :key="videoIndex" class="swiper-slide">
                <AppMediaCard :image="video.image" :title="video.title" :link="video.link" />
              </div>
            </div>
          </div>
          <div class="l-videos-section__more">
            <a :href="section.moreHref"
              class="btn btn-solid d-inline-flex align-items-center justify-content-center gap-2">
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

  <AppFloatButtons />
  <AppFooter />
</template>

<script>
(function () {
  if (typeof document === 'undefined' || window.__twsgiVideosSectionsInit) {
    return;
  }
  window.__twsgiVideosSectionsInit = true;

  const initSection = (root) => {
    if (root.dataset.videosReady === 'true' || typeof window.Swiper === 'undefined') {
      return false;
    }
    root.dataset.videosReady = 'true';

    new window.Swiper(root.querySelector('.l-videos-section__swiper'), {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 16,
      speed: 600,
      loop: true,
      navigation: {
        prevEl: root.querySelector('[data-videos-prev]'),
        nextEl: root.querySelector('[data-videos-next]'),
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

  const initAllSections = () => {
    const sections = Array.from(document.querySelectorAll('[data-videos-section]'));
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
</script>
