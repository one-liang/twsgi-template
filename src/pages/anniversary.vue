<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import AppFloatButtons from '../components/AppFloatButtons.vue';
import AppBanner from '../components/AppBanner.vue';
import AppMemorialCard from '../components/AppMemorialCard.vue';

import marquee01 from '@/assets/images/anniversary/anniversary-marquee-01.jpg';
import marquee02 from '@/assets/images/anniversary/anniversary-marquee-02.jpg';
import marquee03 from '@/assets/images/anniversary/anniversary-marquee-03.jpg';
import decorPattern from '@/assets/images/anniversary/anniversary-decor.svg';

const marqueeImages = [
  { src: marquee01, alt: '世界各地創價學會會員齊聚合影' },
  { src: marquee02, alt: '創價學會大阪大會歷史照片' },
  { src: marquee03, alt: '師弟之日紀念勤行會合影' },
];
const marqueeLoop = [...marqueeImages, ...marqueeImages];

const memorialList = [
  { title: '1/26 SGI之日', text: '1.26 SGI之日－SGI是世界市民的堡壘', link: '#' },
  { title: '3/16 廣宣流布紀念日', text: '3.16 廣宣流布紀念日－廣宣流布的模擬儀式', link: '#' },
  { title: '4/28 立宗宣言之日', text: '4.28 立宗宣言之日－確立「萬眾成佛」的唯一正法', link: '#' },
  { title: '5/3 創價學會日', text: '5.3 創價學會日－貫徹師弟的「出發之日」', link: '#' },
  {
    title: '7/3 師弟之日',
    text: '1957年7月3日，當時日本的檢察單位等權力者害怕學會迅速發展，以莫須有的罪名逮捕拘留池田先生（當時的參謀室長），稱為大阪事件。事件的起因是，當年4月舉辦參議員大阪地方補選時，有部份學會員涉嫌不當拜訪與賄選，違反選舉法被逮捕。',
    link: '#',
  },
  { title: '8/24 池田先生入信紀念日', text: '與戶田先生的邂逅', link: '#' },
  { title: '10/2 世界和平之日', text: '以這雙手開拓嶄新的歷史', link: '#' },
  {
    title: '11/18 創價學會創立紀念日',
    text: '1930年的這一天，創會會長牧口常三郎與弟子戶田城聖（第二任會長）出版了《創價教育學體系》第一卷，並把11月18日訂為「創價教育學會」（創價學會的前身）成立的日子。',
    link: '#',
  },
];
</script>

<template>
  <AppHeader />
  <AppBanner title="創價學會紀念日" :breadcrumb="[{ label: '創價學會紀念日' }]" />

  <section class="l-memorial">
    <!-- 裝飾背景 -->
    <span class="l-memorial__bg" :style="{ backgroundImage: `url(${decorPattern})` }"></span>
    <div class="container">
      <div class="row align-items-center g-4 g-lg-0">
        <div class="col-12 col-lg-4 l-memorial__intro">
          <h2 class="l-memorial__title">
            <span class="l-memorial__title-bar"></span>
            共築時刻
          </h2>
          <p class="l-memorial__desc">世界各地的創價學會會員，紀念這些於創價學會歷史上有重要意義的日子</p>
        </div>

        <!-- 跑馬燈 -->
        <div class="col-12 col-lg-8 l-memorial__marquee-col">
          <div class="l-memorial__marquee">
            <div class="l-memorial__track">
              <div v-for="(image, imageIndex) in marqueeLoop" :key="imageIndex" class="l-memorial__item">
                <img class="l-memorial__img" :src="image.src" :alt="image.alt" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 創價紀念日列表 -->
  <section class="l-memorial-list">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 l-memorial-list__inner">
          <!-- 卡片列表 -->
          <div class="l-memorial-list__grid">
            <AppMemorialCard v-for="(memorial, memorialIndex) in memorialList" :key="memorialIndex"
              :title="memorial.title" :text="memorial.text" :link="memorial.link" />
          </div>

          <!-- 分頁 -->
          <nav class="l-memorial-list__pagination">
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
