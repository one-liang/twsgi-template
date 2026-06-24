<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import AppFloatButtons from '../components/AppFloatButtons.vue';
import AppBanner from '../components/AppBanner.vue';
import AppMediaCard from '../components/AppMediaCard.vue';

import artsArts01 from '@/assets/images/videoDetail/videoDetail-arts-01.jpg';
import artsArts02 from '@/assets/images/videoDetail/videoDetail-arts-02.jpg';
import artsArts03 from '@/assets/images/videoDetail/videoDetail-arts-03.jpg';

const videoList = [
  { image: artsArts01, title: '逆風前行－高一峰紀念展｜2025創價藝文', link: 'videoDetail.html' },
  { image: artsArts02, title: '悠然望玉山－林玉山藝術實踐｜2025創價藝文', link: 'videoDetail.html' },
  { image: artsArts03, title: '跨界即興－台灣現代陶之先鋒 李茂宗特展｜2025年創價藝文', link: 'videoDetail.html' },
  { image: artsArts01, title: '逆風前行－高一峰紀念展｜2025創價藝文', link: 'videoDetail.html' },
  { image: artsArts02, title: '悠然望玉山－林玉山藝術實踐｜2025創價藝文', link: 'videoDetail.html' },
  { image: artsArts03, title: '跨界即興－台灣現代陶之先鋒 李茂宗特展｜2025年創價藝文', link: 'videoDetail.html' },
  { image: artsArts01, title: '逆風前行－高一峰紀念展｜2025創價藝文', link: 'videoDetail.html' },
  { image: artsArts02, title: '悠然望玉山－林玉山藝術實踐｜2025創價藝文', link: 'videoDetail.html' },
  { image: artsArts03, title: '跨界即興－台灣現代陶之先鋒 李茂宗特展｜2025年創價藝文', link: 'videoDetail.html' },
];
</script>

<template>
  <AppHeader />
  <AppBanner title="線上影音" :breadcrumb="[{ label: '線上影音', href: 'videos.html' }, { label: '創價藝文' }]" />

  <section class="l-video-detail">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 l-video-detail__inner">
          <h2 class="l-video-detail__title">
            <span class="l-video-detail__title-bar"></span>
            創價藝文
          </h2>

          <!-- 卡片列表 -->
          <div class="row l-video-detail__grid">
            <div v-for="(video, videoIndex) in videoList" :key="videoIndex" class="col-12 col-md-6 col-lg-4">
              <AppMediaCard :image="video.image" :title="video.title" :link="video.link" />
            </div>
          </div>

          <!-- 分頁 -->
          <nav class="l-video-detail__pagination">
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
