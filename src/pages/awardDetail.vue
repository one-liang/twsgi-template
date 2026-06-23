<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import AppFloatButtons from '../components/AppFloatButtons.vue';
import AppBanner from '../components/AppBanner.vue';
import AppAwardCard from '../components/AppAwardCard.vue';
import introImage from '@/assets/images/awards/award-religious-intro.jpg';
import year2003 from '@/assets/images/awards/award-religious-2003.jpg';
import year2004 from '@/assets/images/awards/award-religious-2004.jpg';
import year2005 from '@/assets/images/awards/award-religious-2005.jpg';
import year2006 from '@/assets/images/awards/award-religious-2006.jpg';
import year2007 from '@/assets/images/awards/award-religious-2007.jpg';
import year2008 from '@/assets/images/awards/award-religious-2008.jpg';
import year2009 from '@/assets/images/awards/award-religious-2009.jpg';
import year2010 from '@/assets/images/awards/award-religious-2010.jpg';
import year2012 from '@/assets/images/awards/award-religious-2012.jpg';
import year2013 from '@/assets/images/awards/award-religious-2013.jpg';
import year2015 from '@/assets/images/awards/award-religious-2015.jpg';
import year2016 from '@/assets/images/awards/award-religious-2016.jpg';
import year2017 from '@/assets/images/awards/award-religious-2017.jpg';
import year2018 from '@/assets/images/awards/award-religious-2018.jpg';
import year2019 from '@/assets/images/awards/award-religious-2019.jpg';
import year2020 from '@/assets/images/awards/award-religious-2020.jpg';
import year2021 from '@/assets/images/awards/award-religious-2021.jpg';
import year2022 from '@/assets/images/awards/award-religious-2022.jpg';
import year2023 from '@/assets/images/awards/award-religious-2023.jpg';
import year2024 from '@/assets/images/awards/award-religious-2024.jpg';
import nationalContribution from '@/assets/images/awards/award-national-contribution.jpg';
import religiousDeepening from '@/assets/images/awards/award-religious-deepening.jpg';
import socialEducation from '@/assets/images/awards/award-social-education.jpg';
import wenxin from '@/assets/images/awards/award-wenxin.jpg';
import artEducation from '@/assets/images/awards/award-art-education.jpg';

const breadcrumb = [
  { label: '獲獎與肯定', href: '#' },
  { label: '宗教公益獎' },
];

const awardYears = [
  { image: year2003, year: '2003年' },
  { image: year2004, year: '2004年' },
  { image: year2005, year: '2005年' },
  { image: year2006, year: '2006年' },
  { image: year2007, year: '2007年' },
  { image: year2008, year: '2008年' },
  { image: year2009, year: '2009年' },
  { image: year2010, year: '2010年' },
  { image: year2012, year: '2012年' },
  { image: year2013, year: '2013年' },
  { image: year2015, year: '2015年' },
  { image: year2016, year: '2016年' },
  { image: year2017, year: '2017年' },
  { image: year2018, year: '2018年' },
  { image: year2019, year: '2019年' },
  { image: year2020, year: '2020年' },
  { image: year2021, year: '2021年' },
  { image: year2022, year: '2022年' },
  { image: year2023, year: '2023年' },
  { image: year2024, year: '2024年' },
];

const relatedAwards = [
  { image: nationalContribution, title: '全國性社會團體公益貢獻獎', link: '#' },
  { image: religiousDeepening, title: '宗教公益深耕獎', link: '#' },
  { image: socialEducation, title: '社會教育貢獻獎', link: '#' },
  { image: wenxin, title: '文馨獎', link: '#' },
  { image: artEducation, title: '藝術教育貢獻獎', link: '#' },
];
</script>

<template>
  <AppHeader />
  <AppBanner title="獲獎與肯定" :breadcrumb="breadcrumb" />

  <!-- 宗教公益獎簡介 -->
  <section class="l-award-intro">
    <span class="l-award-intro__bg"></span>
    <div class="l-award-intro__media">
      <img class="l-award-intro__img" :src="introImage" alt="宗教公益獎頒獎典禮" />
    </div>
    <div class="container">
      <div class="l-award-intro__intro">
        <div class="l-award-intro__heading">
          <span class="l-award-intro__bar"></span>
          <h2 class="l-award-intro__title">宗教公益獎</h2>
        </div>
        <div class="l-award-intro__content">
          <p>台灣創價學會懷抱「人飢己飢，人溺己溺」之宗教情懷，投入各項公益慈善、社會教化及災難救助工作，迄今已23度榮獲內政部頒發「宗教公益獎」（原績優宗教團體獎）。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 歷年獲獎照片牆 -->
  <section class="l-award-years">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8">
          <div class="row l-award-years__grid">
            <div v-for="item in awardYears" :key="item.year" class="col-12 col-lg-6">
              <figure class="c-year-photo">
                <img class="c-year-photo__img" :src="item.image" :alt="`宗教公益獎 ${item.year}`" />
                <figcaption class="c-year-photo__caption">{{ item.year }}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 相關獎項輪播 -->
  <section class="l-award-related" data-award-carousel>
    <div class="l-award-related__swiper swiper">
      <div class="swiper-wrapper">
        <div v-for="award in relatedAwards" :key="award.title" class="swiper-slide">
          <AppAwardCard class="award-card--flat" :image="award.image" :title="award.title" :link="award.link" />
        </div>
      </div>
    </div>

    <div class="l-award-related__nav">
      <a class="btn btn-icon btn-pagination-arrow" href="#" data-award-prev>
        <span class="btn-arrow btn-arrow--left">
          <span class="btn-arrow__track">
            <i class="fa-light fa-arrow-left"></i>
            <i class="fa-light fa-arrow-left"></i>
          </span>
        </span>
      </a>
      <a class="btn btn-icon btn-pagination-arrow" href="#" data-award-next>
        <span class="btn-arrow">
          <span class="btn-arrow__track">
            <i class="fa-light fa-arrow-right-long"></i>
            <i class="fa-light fa-arrow-right-long"></i>
          </span>
        </span>
      </a>
    </div>
  </section>

  <AppFloatButtons />
  <AppFooter />
</template>

<script>
(function () {
  if (typeof document === 'undefined' || window.__twsgiAwardCarouselInit) {
    return;
  }
  window.__twsgiAwardCarouselInit = true;

  const initCarousel = (root) => {
    if (root.dataset.carouselReady === 'true' || typeof window.Swiper === 'undefined') {
      return false;
    }
    root.dataset.carouselReady = 'true';

    new window.Swiper(root.querySelector('.swiper'), {
      slidesPerView: 'auto',
      spaceBetween: 0,
      speed: 600,
      navigation: {
        prevEl: root.querySelector('[data-award-prev]'),
        nextEl: root.querySelector('[data-award-next]'),
      },
    });

    return true;
  };

  const tryInitCarousel = () => {
    const root = document.querySelector('[data-award-carousel]');
    if (root) {
      return initCarousel(root);
    }
    return false;
  };

  if (!tryInitCarousel()) {
    const observer = new MutationObserver(() => {
      if (tryInitCarousel()) {
        observer.disconnect();
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    window.addEventListener('load', tryInitCarousel);
  }
})();
</script>
