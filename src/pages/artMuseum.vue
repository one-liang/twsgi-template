<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import AppFloatButtons from '../components/AppFloatButtons.vue';
import AppBanner from '../components/AppBanner.vue';
import AppVenueTabs from '../components/AppVenueTabs.vue';
import AppMuseumCard from '../components/AppMuseumCard.vue';
import venuesDecoration from '@/assets/images/venues/venues-decoration.svg';
import artMuseumMain from '@/assets/images/artMuseum/artMuseum-main.jpg';
import artMuseumZhishan from '@/assets/images/artMuseum/artMuseum-zhishan.jpg';
import artMuseumBanqiao from '@/assets/images/artMuseum/artMuseum-banqiao.jpg';
import artMuseumTaoyuan from '@/assets/images/artMuseum/artMuseum-taoyuan.jpg';
import artMuseumHsinchu from '@/assets/images/artMuseum/artMuseum-hsinchu.jpg';
import artMuseumTaichung from '@/assets/images/artMuseum/artMuseum-taichung.jpg';
import artMuseumXiushui from '@/assets/images/artMuseum/artMuseum-xiushui.jpg';
import artMuseumJingyang from '@/assets/images/artMuseum/artMuseum-jingyang.jpg';
import artMuseumAnnan from '@/assets/images/artMuseum/artMuseum-annan.jpg';
import artMuseumPingtung from '@/assets/images/artMuseum/artMuseum-pingtung.jpg';
import artMuseumYilan from '@/assets/images/artMuseum/artMuseum-yilan.jpg';
import artMuseumHualien from '@/assets/images/artMuseum/artMuseum-hualien.jpg';

const venues = [
  { image: artMuseumMain, title: "創價美術館", postal: "811027", address: "高雄市楠梓區金富街 1 號", phone: "07-361-7990" },
  { image: artMuseumZhishan, title: "創價美術館 至善館", postal: "111004", address: "台北市士林區至善路二段 250 號", phone: "02-2888-1777" },
  { image: artMuseumBanqiao, title: "創價美術館 板橋館", postal: "220401", address: "新北市板橋區民生路二段 232 號 3 樓", phone: "02-2257-5012" },
  { image: artMuseumTaoyuan, title: "創價美術館 桃園館", postal: "337002", address: "桃園市大園區高鐵北路二段 140 號 7 樓", phone: "03-381-6871" },
  { image: artMuseumHsinchu, title: "創價美術館 新竹館", postal: "300008", address: "新竹市北區國華街 68 號 2 樓", phone: "03-543-9850" },
  { image: artMuseumTaichung, title: "創價美術館 台中館", postal: "407535", address: "台中市西屯區大容東街 90 號 3 樓 140 號 7 樓", phone: "04-2327-0259" },
  { image: artMuseumXiushui, title: "創價美術館 秀水館", postal: "504009", address: "彰化縣秀水鄉安溪村平安五街 61 號 2 樓", phone: "04-763-3643" },
  { image: artMuseumJingyang, title: "創價美術館 景陽館", postal: "640012", address: "雲林縣斗六市北平路 46 巷 11 號 1、2 樓", phone: "05-534-5711" },
  { image: artMuseumAnnan, title: "創價美術館 安南館", postal: "709018", address: "台南市安南區郡安路四段 66 號 2、3 樓", phone: "06-281-4683" },
  { image: artMuseumPingtung, title: "創價美術館 屏東館", postal: "911161", address: "屏東縣竹田鄉大成路 46 號 B1", phone: "08-788-0208" },
  { image: artMuseumYilan, title: "創價美術館 宜蘭館", postal: "260006", address: "宜蘭縣宜蘭市陽明路 131 巷 99 號", phone: "03-937-2363" },
  { image: artMuseumHualien, title: "創價美術館 花蓮館", postal: "970026", address: "花蓮縣花蓮市富裕五街 71 號 B1", phone: "03-857-1101" },
];

const venueRows = [];
for (let rowIndex = 0; rowIndex < venues.length; rowIndex += 2) {
  venueRows.push(venues.slice(rowIndex, rowIndex + 2));
}
</script>

<template>
  <AppHeader />
  <AppBanner title="服務據點" :breadcrumb="[{ label: '服務據點' }]" />

  <section class="l-venues-locations">
    <!-- 裝飾花紋 -->
    <span class="l-venues-locations__decoration">
      <img :src="venuesDecoration" alt="" />
    </span>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <AppVenueTabs active="art" />
          <div class="l-museum-grid">
            <div v-for="(venueRow, rowIndex) in venueRows" :key="rowIndex" class="l-museum-grid__row">
              <AppMuseumCard v-for="museum in venueRow" :key="museum.title" v-bind="museum" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <AppFloatButtons />
  <AppFooter />
</template>
