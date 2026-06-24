<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import AppFloatButtons from '../components/AppFloatButtons.vue';
import AppBanner from '../components/AppBanner.vue';
import AppAwardCard from '../components/AppAwardCard.vue';
import sectionBg from '@/assets/images/awards/award-section-bg.svg';
import religiousWelfare from '@/assets/images/awards/award-religious-welfare.jpg';
import nationalContribution from '@/assets/images/awards/award-national-contribution.jpg';
import religiousDeepening from '@/assets/images/awards/award-religious-deepening.jpg';
import socialEducation from '@/assets/images/awards/award-social-education.jpg';
import wenxin from '@/assets/images/awards/award-wenxin.jpg';
import artEducation from '@/assets/images/awards/award-art-education.jpg';

const awardCards = [
  { image: religiousWelfare, title: '宗教公益獎', link: 'awardDetail.html' },
  { image: nationalContribution, title: '全國性社會團體公益貢獻獎', link: 'awardDetail.html' },
  { image: religiousDeepening, title: '宗教公益深耕獎', link: 'awardDetail.html' },
  { image: socialEducation, title: '社會教育貢獻獎', link: 'awardDetail.html' },
  { image: wenxin, title: '文馨獎', link: 'awardDetail.html' },
  { image: artEducation, title: '藝術教育貢獻獎', link: 'awardDetail.html' },
];
</script>

<template>
  <AppHeader />
  <AppBanner title="獲獎與肯定" :breadcrumb="[{ label: '獲獎與肯定' }]" />

  <section class="l-awards-honor">
    <!-- 裝飾圖 -->
    <img class="l-awards-honor__bg" :src="sectionBg" alt="" />

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <p class="l-awards-honor__lead h3">
            創價會員秉持佛法慈悲精神積極關懷社會的行動，受到政府各部門肯定，屢屢獲獎。
          </p>
          <div class="l-awards-honor__panel">
            <div class="row g-0">
              <div v-for="card in awardCards" :key="card.title" class="col-12 col-lg-6">
                <AppAwardCard :image="card.image" :title="card.title" :link="card.link" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <AppFloatButtons />
  <AppFooter />
</template>
