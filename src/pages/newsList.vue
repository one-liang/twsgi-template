<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import AppFloatButtons from '../components/AppFloatButtons.vue';
import AppBanner from '../components/AppBanner.vue';
import AppNewsCard from '../components/AppNewsCard.vue';

import newsList01 from '@/assets/images/newsList/news-list-01.jpg';
import newsList02 from '@/assets/images/newsList/news-list-02.jpg';
import newsList03 from '@/assets/images/newsList/news-list-03.jpg';
import newsList04 from '@/assets/images/newsList/news-list-04.jpg';
import newsList05 from '@/assets/images/newsList/news-list-05.jpg';
import newsList06 from '@/assets/images/newsList/news-list-06.jpg';

const newsList = [
  {
    image: newsList01,
    date: '2026.03.20',
    title: '日本創價大學理事長秋谷芳英訪問台灣大學、高雄大學',
    excerpt:
      '日本創價大學理事長秋谷芳英、國際部部長川上喜彥及創價學會國際涉外局第二部部長水嶋肇等一行人，2月24日上午前往台灣大學訪問。',
    link: 'newsDetail.html',
  },
  {
    image: newsList02,
    date: '2026.03.20',
    title: '教師部盛大舉辦「創價·教育 EXPO」研修 秉持人本主義 建構為了教育的社會',
    excerpt:
      '教師部「創價・教育 EXPO」研修會，2月7日於桃園文化會館盛大舉行，來自全台各地及離島澎湖的500多位教師踴躍參與。',
    link: 'newsDetail.html',
  },
  {
    image: newsList03,
    date: '2026.03.20',
    title: '晨曦合唱團成立紀念勤行會 台南古都 迎接嶄新文化團隊啟航',
    excerpt:
      '迎來「1.27台灣師弟原點之日」63週年，1月31日，創價於安南文化會館舉行「晨曦合唱團成立紀念勤行會」，林釗理事長專程蒞臨主持。',
    link: 'newsDetail.html',
  },
  {
    image: newsList04,
    date: '2026.03.20',
    title: '全國區長會 林釗理事長期勉幹部 全力培育青年後繼 建設廣布黃金城',
    excerpt:
      '全國區長會於5月25日假桃園文化會館盛大舉行，林釗理事長向與會幹部宣布三項振奮人心的好消息，期勉全力培育青年後繼。',
    link: 'newsDetail.html',
  },
  {
    image: newsList05,
    date: '2026.03.20',
    title: '5月份大研專場座談會 青年向創價母親表達感謝',
    excerpt:
      '創價於5月18至24日，在全台各地熱絡地舉辦5月份座談會，青年們把握機會向創價母親表達由衷的感謝。',
    link: 'newsDetail.html',
  },
  {
    image: newsList06,
    date: '2026.03.20',
    title: '台灣SGI青年與亞洲5萬名青年大合唱〈歡樂頌〉',
    excerpt:
      '為慶祝創立95週年，堂堂邁向創立100週年，11月23日，九州創價學會舉辦「亞洲和平音樂節」，台灣青年共襄盛舉。',
    link: 'newsDetail.html',
  },
  {
    image: newsList01,
    date: '2026.03.20',
    title: '日本創價大學理事長秋谷芳英訪問台灣大學、高雄大學',
    excerpt:
      '日本創價大學理事長秋谷芳英、國際部部長川上喜彥及創價學會國際涉外局第二部部長水嶋肇等一行人，2月24日上午前往台灣大學訪問。',
    link: 'newsDetail.html',
  },
  {
    image: newsList02,
    date: '2026.03.20',
    title: '教師部盛大舉辦「創價·教育 EXPO」研修 秉持人本主義 建構為了教育的社會',
    excerpt:
      '教師部「創價・教育 EXPO」研修會，2月7日於桃園文化會館盛大舉行，來自全台各地及離島澎湖的500多位教師踴躍參與。',
    link: 'newsDetail.html',
  },
  {
    image: newsList03,
    date: '2026.03.20',
    title: '晨曦合唱團成立紀念勤行會 台南古都 迎接嶄新文化團隊啟航',
    excerpt:
      '迎來「1.27台灣師弟原點之日」63週年，1月31日，創價於安南文化會館舉行「晨曦合唱團成立紀念勤行會」，林釗理事長專程蒞臨主持。',
    link: 'newsDetail.html',
  },
];
</script>

<template>
  <AppHeader />
  <AppBanner title="最新消息" :breadcrumb="[{ label: '焦點新聞' }]" />

  <!-- 焦點新聞列表 -->
  <section class="l-news-list">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 l-news-list__inner">
          <h2 class="l-news-list__title">
            <span class="l-news-list__title-bar"></span>
            焦點新聞
          </h2>

          <!-- 卡片 -->
          <div class="row gy-5 gx-4 l-news-list__grid">
            <div v-for="(news, newsIndex) in newsList" :key="newsIndex" class="col-12 col-md-6 col-lg-4">
              <AppNewsCard :image="news.image" :date="news.date" :title="news.title" :excerpt="news.excerpt"
                :link="news.link" />
            </div>
          </div>

          <!-- 分頁 -->
          <nav class="l-news-list__pagination">
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
              <li class="page-item"><a class="page-link" href="#">4</a></li>
              <li class="page-item"><a class="page-link" href="#">5</a></li>
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
