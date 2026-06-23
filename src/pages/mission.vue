<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import AppFloatButtons from '../components/AppFloatButtons.vue';
import AppBanner from '../components/AppBanner.vue';
import missionResearch from '@/assets/images/mission/mission-research.jpg';
import missionRelief from '@/assets/images/mission/mission-relief.jpg';
import missionPerformance from '@/assets/images/mission/mission-performance.jpg';
import missionBand from '@/assets/images/mission/mission-band.jpg';
import missionYearbook from '@/assets/images/mission/mission-yearbook.png';
import missionPattern from '@/assets/images/mission/mission-pattern.svg';

const honorPhotos = [
  { image: missionResearch, caption: '教學研究會' },
  { image: missionRelief, caption: '花蓮馬太鞍溪堰塞湖溢流創價捐助賑災金' },
  { image: missionPerformance, caption: '創價公演' },
  { image: missionBand, caption: '嘉義管樂節' },
];
</script>

<template>
  <AppHeader />
  <AppBanner title="宗旨與使命" :breadcrumb="[{ label: '宗旨與使命' }]" />

  <!-- 宗旨介紹 -->
  <section class="l-mission-intro">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <div class="l-mission-intro__title">
            <span class="l-mission-intro__bar"></span>
            <h2 class="mb-0">致力於文化、教育、和平的人本主義團體</h2>
          </div>
          <p class="l-mission-intro__lead">
            台灣創價學會成立的宗旨，是以日蓮大聖人佛法積極入世、自行化他的精神為基礎，倡導人性的尊嚴與平等，積極致力於文化、教育及和平的活動，以創造生命最高價值，促進人類的友好與和平，是一個為了文化、教育、和平的人本主義團體。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 榮譽成果 -->
  <section class="l-mission-honor">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <p class="l-mission-honor__desc">
            在台弘教從1962年開始，
            於1990年正式成立法人後，迄今已榮獲「行政院獎」，及連續24度榮獲內政部頒發「全國性社會團體公益貢獻獎」（原社會優良團體獎），23度獲內政部頒發「宗教公益獎」（原績優宗教團體獎）。在教育方面，則10度獲頒「社會教育貢獻獎」（原推展社會教育有功團體獎）、2度獲頒「藝術教育貢獻獎」；更6度獲文化部頒發「文馨獎」。
          </p>
          <div class="row g-4 g-lg-5">
            <div v-for="photo in honorPhotos" :key="photo.caption" class="col-12 col-md-6">
              <figure class="c-honor-photo mb-0">
                <div class="c-honor-photo__media">
                  <img :src="photo.image" :alt="photo.caption" />
                </div>
                <figcaption class="c-honor-photo__caption">{{ photo.caption }}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 台灣創價學會 -->
  <section class="l-mission-about">
    <!-- 裝飾圖 -->
    <span class="l-mission-about__bg">
      <img :src="missionPattern" alt="" />
    </span>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <div class="l-mission-about__card">
            <h2 class="l-mission-about__title">台灣創價學會</h2>
            <div class="l-mission-about__media">
              <img :src="missionYearbook" alt="台灣創價學會創價年刊封面" />
            </div>
            <p class="l-mission-about__text">
              所謂「創價」，意指「創造生命最高價值」。信仰日蓮佛法的目的，即在於開啟每個人生命中所具有的「佛性」，透過不斷自我改革（人間革命），一方面建設自己的生活、家庭，一方面獻身於社會及人群，以構築自他彼此皆幸福的和平樂土。
            </p>
            <a href="#" class="btn btn-solid btn-lg l-mission-about__btn d-inline-flex align-items-center gap-2">
              瀏覽創價年刊
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
