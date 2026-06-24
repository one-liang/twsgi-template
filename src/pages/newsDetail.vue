<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import AppFloatButtons from '../components/AppFloatButtons.vue';
import AppBanner from '../components/AppBanner.vue';

import newsDetailMain from '@/assets/images/newsDetail/news-detail-main.jpg';
import newsDetailDeco from '@/assets/images/newsDetail/news-detail-deco.svg';
import newsDetail01 from '@/assets/images/newsDetail/news-detail-01.jpg';
import newsDetail02 from '@/assets/images/newsDetail/news-detail-02.jpg';
import newsDetail03 from '@/assets/images/newsDetail/news-detail-03.jpg';
import newsDetail04 from '@/assets/images/newsDetail/news-detail-04.jpg';
import newsDetail05 from '@/assets/images/newsDetail/news-detail-05.jpg';
import newsDetail06 from '@/assets/images/newsDetail/news-detail-06.jpg';

const article = {
  tag: '焦點新聞',
  title: '日本創價大學理事長秋谷芳英訪問台灣大學、高雄大學',
  date: '2026-02-24 發布',
  mainImage: newsDetailMain,
  mainCaption: '台大與創大代表熱絡地交流',
  paragraphs: [
    '日本創價大學理事長秋谷芳英、國際部部長川上喜彥及創價學會國際涉外局第二部部長水嶋肇等一行人，2月24日上午，在共同執行長林澤、吳青蓉等陪同下，前往台灣大學訪問，受到副校長丁詩同、國際合作專員吳盈萱等的熱情接待。',
    '同日下午，一行人在共同執行長吳青蓉、常務副理事長洪玉柱等陪同下，訪問高雄大學，受到該校校長陳啟仁、副校長吳行浩、國際長林倖如的接待。',
    '兩校均表示，希望能與日本創價大學展開更多的學生交流與交換、學者間的學術合作等，一同為了高等教育的未來持續努力。',
  ],
};

const breadcrumb = [
  { label: '最新消息', href: 'newsList.html' },
  { label: article.title },
];

const gallery = [
  { image: newsDetail01, caption: '創大秋谷理事長(右3)一行人與台大副校長丁詩同(右4)、國際合作專員吳盈萱(左2)等人合影' },
  { image: newsDetail02, caption: '大國際合作專員吳盈萱(左1)向創大秋谷理事長等一行人介紹學校理念與特色' },
  { image: newsDetail03, caption: '創大秋谷理事長(左)與高雄大學陳啟仁校長(右)對談' },
  { image: newsDetail04, caption: '創大秋谷理事長(右4)一行人與高雄大學校長陳啟仁(右3)、副校長吳行浩(右2)、國際長林倖如(右1)合影' },
  { image: newsDetail05, caption: '創大與高雄大學展開熱絡交流' },
  { image: newsDetail06, caption: '創大秋谷理事長(左)致贈紀念品給高雄大學陳啟仁校長(右)' },
];
</script>

<template>
  <AppHeader />
  <AppBanner title="最新消息" :breadcrumb="breadcrumb" />

  <section class="l-newsDetail">
    <!-- 左下角裝飾圖 -->
    <img class="l-newsDetail__deco" :src="newsDetailDeco" alt="" />
    <div class="container">
      <div class="l-newsDetail__inner">
        <!-- 標題 -->
        <div class="l-newsDetail__head">
          <span class="l-newsDetail__tag">{{ article.tag }}</span>
          <div class="l-newsDetail__heading">
            <span class="l-newsDetail__bar"></span>
            <h2 class="l-newsDetail__title">{{ article.title }}</h2>
          </div>
          <p class="l-newsDetail__date">{{ article.date }}</p>
        </div>

        <!-- 內文區 -->
        <div class="l-newsDetail__body">
          <figure>
            <img :src="article.mainImage" :alt="article.mainCaption" />
            <figcaption>{{ article.mainCaption }}</figcaption>
          </figure>
          <p v-for="(paragraph, paragraphIndex) in article.paragraphs" :key="paragraphIndex">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 相片牆 -->
  <section class="l-newsDetail-gallery">
    <div class="container">
      <div class="l-newsDetail-gallery__inner">
        <div class="l-newsDetail-gallery__grid">
          <figure v-for="(photo, photoIndex) in gallery" :key="photoIndex" class="c-news-figure">
            <img class="c-news-figure__img" :src="photo.image" :alt="photo.caption" />
            <figcaption class="c-news-figure__caption">{{ photo.caption }}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>

  <AppFloatButtons />
  <AppFooter />
</template>
