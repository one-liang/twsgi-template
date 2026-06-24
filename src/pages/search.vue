<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import AppFloatButtons from '../components/AppFloatButtons.vue';
import AppBanner from '../components/AppBanner.vue';
import AppSearchCard from '../components/AppSearchCard.vue';

import searchImg01 from '@/assets/images/search/search-01.jpg';
import searchImg02 from '@/assets/images/search/search-02.jpg';
import searchImg03 from '@/assets/images/search/search-03.jpg';

const keyword = '創價';
const total = 12;

const results = [
  {
    image: searchImg01,
    date: '2026.03.20',
    title: '5月份大研專場座談會 青年向創價母親表達感謝',
    excerpt: '創價於5月18至24日，在全台各地熱絡地舉辦5月份座談會。',
    link: '#',
  },
  {
    image: searchImg02,
    date: '2026.03.20',
    title: '日本創價大學理事長秋谷芳英訪問台灣大學、高雄大學',
    excerpt:
      '日本創價大學理事長秋谷芳英、國際部部長川上喜彥及創價學會國際涉外局第二部部長水嶋肇等一行人，2月24日上午，在共同執行長林澤、吳青蓉等陪同下',
    link: '#',
  },
  {
    image: searchImg03,
    date: '2026.03.20',
    title: '台灣SGI青年與亞洲5萬名青年大合唱〈歡樂頌〉',
    excerpt:
      '為慶祝創立95週年，堂堂邁向創立100週年，11月23日，九州創價學會的「亞洲和平音樂節」（Asia Peace Festa 2025',
    link: '#',
  },
  {
    image: searchImg01,
    date: '2026.03.20',
    title: '5月份大研專場座談會 青年向創價母親表達感謝',
    excerpt: '創價於5月18至24日，在全台各地熱絡地舉辦5月份座談會。',
    link: '#',
  },
  {
    image: searchImg02,
    date: '2026.03.20',
    title: '日本創價大學理事長秋谷芳英訪問台灣大學、高雄大學',
    excerpt:
      '日本創價大學理事長秋谷芳英、國際部部長川上喜彥及創價學會國際涉外局第二部部長水嶋肇等一行人，2月24日上午，在共同執行長林澤、吳青蓉等陪同下',
    link: '#',
  },
  {
    image: searchImg03,
    date: '2026.03.20',
    title: '台灣SGI青年與亞洲5萬名青年大合唱〈歡樂頌〉',
    excerpt:
      '為慶祝創立95週年，堂堂邁向創立100週年，11月23日，九州創價學會的「亞洲和平音樂節」（Asia Peace Festa 2025',
    link: '#',
  },
  {
    image: searchImg01,
    date: '2026.03.20',
    title: '5月份大研專場座談會 青年向創價母親表達感謝',
    excerpt: '創價於5月18至24日，在全台各地熱絡地舉辦5月份座談會。',
    link: '#',
  },
  {
    image: searchImg02,
    date: '2026.03.20',
    title: '日本創價大學理事長秋谷芳英訪問台灣大學、高雄大學',
    excerpt:
      '日本創價大學理事長秋谷芳英、國際部部長川上喜彥及創價學會國際涉外局第二部部長水嶋肇等一行人，2月24日上午，在共同執行長林澤、吳青蓉等陪同下',
    link: '#',
  },
  {
    image: searchImg03,
    date: '2026.03.20',
    title: '台灣SGI青年與亞洲5萬名青年大合唱〈歡樂頌〉',
    excerpt:
      '為慶祝創立95週年，堂堂邁向創立100週年，11月23日，九州創價學會的「亞洲和平音樂節」（Asia Peace Festa 2025',
    link: '#',
  },
  {
    image: searchImg01,
    date: '2026.03.20',
    title: '5月份大研專場座談會 青年向創價母親表達感謝',
    excerpt: '創價於5月18至24日，在全台各地熱絡地舉辦5月份座談會。',
    link: '#',
  },
];
</script>

<template>
  <AppHeader />
  <AppBanner title="搜尋結果" :breadcrumb="[{ label: '搜尋結果' }]" />

  <section class="l-search">
    <!-- 裝飾背景 -->
    <div class="l-search__bg"></div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 l-search__inner">
          <div class="l-search__head">
            <h2 class="l-search__heading">
              {{ keyword }}<span class="l-search__heading-sub">搜尋結果</span>
            </h2>
            <p class="l-search__count">
              共找到 <span class="l-search__count-num">{{ total }}</span> 篇與「{{ keyword }}」相關的文章
            </p>

            <!-- 搜尋框 -->
            <form class="search-input">
              <input type="search" class="search-input__field" :value="keyword" />
              <button type="submit" class="search-input__btn">
                <i class="fa-regular fa-magnifying-glass"></i>
              </button>
            </form>
          </div>

          <!-- 卡片列表 -->
          <div class="l-search__list">
            <AppSearchCard v-for="(result, resultIndex) in results" :key="resultIndex" :image="result.image"
              :date="result.date" :title="result.title" :excerpt="result.excerpt" :link="result.link" />
          </div>

          <!-- 分頁 -->
          <nav class="l-search__pagination">
            <ul class="pagination">
              <li class="page-item">
                <a class="btn btn-icon btn-pagination-arrow" href="#">
                  <span class="btn-arrow btn-arrow--left">
                    <span class="btn-arrow__track">
                      <i class="fa-light fa-arrow-left"></i>
                      <i class="fa-light fa-arrow-left"></i>
                    </span>
                  </span>
                </a>
              </li>
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="btn btn-icon btn-pagination-arrow" href="#">
                  <span class="btn-arrow">
                    <span class="btn-arrow__track">
                      <i class="fa-light fa-arrow-right-long"></i>
                      <i class="fa-light fa-arrow-right-long"></i>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>

  <AppFloatButtons />
  <AppFooter />
</template>
