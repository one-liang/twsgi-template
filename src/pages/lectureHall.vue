<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import AppFloatButtons from '../components/AppFloatButtons.vue';
import AppBanner from '../components/AppBanner.vue';
import AppVenueTabs from '../components/AppVenueTabs.vue';
import AppVenueRow from '../components/AppVenueRow.vue';
import venuesDecoration from '@/assets/images/venues/venues-decoration.svg';

const venues = [
  { name: "合江講堂", postal: "104110", address: "台北市中山區合江街 31 巷 4 號 B1" },
  { name: "天母講堂", postal: "111039", address: "台北市士林區中山北路六段 776 巷 80 號 1 樓", phone: "02-2875-2567" },
  { name: "德旺講堂", postal: "105056", address: "台北市松山區八德路四段 306 號 7 樓" },
  { name: "淡水龍峯講堂", postal: "251007", address: "新北市淡水區中正東路一段 3 巷 39 號 8 樓" },
  { name: "三峽講堂", postal: "237009", address: "新北市三峽區中華路 20 號 2 樓之 2", phone: "02-2671-3139" },
  { name: "樹林講堂", postal: "238010", address: "新北市樹林區中山路二段 151 巷 12-1 號 2 樓" },
  { name: "長壽講堂", postal: "112019", address: "台北市北投區立德路120巷23號B1", phone: "02-2971-1665" },
  { name: "泰林講堂", postal: "243081", address: "新北市泰山區泰林路二段 292 巷 14 號 2 樓" },
  { name: "金門講堂", postal: "891003", address: "金門縣金湖鎮夏興 79 號" },
  { name: "勝利講堂", postal: "202005", address: "基隆市中正區中正路 18 號 12 樓之 1", phone: "02-2428-8209" },
  { name: "光復講堂", postal: "976002", address: "花蓮縣光復鄉大進村復興街 1 號", phone: "03-870-0822" },
  { name: "壽豐講堂", postal: "974004", address: "花蓮縣壽豐鄉共和村中華路一段 52 巷 20 號", phone: "03-865-3516" },
  { name: "同安講堂", postal: "330007", address: "桃園市桃園區同安街 366 號 5 樓", phone: "03-325-6579", fax: "03-356-8951" },
  { name: "新民講堂", postal: "330002", address: "桃園市桃園區中正路 115 巷 12 弄 4 號 6 樓", phone: "03-332-0915" },
  { name: "龜山講堂", postal: "333028", address: "桃園市龜山區大同路 111 巷 6 弄 2-6 號", phone: "03-329-3714" },
  { name: "苗栗講堂", postal: "360014", address: "苗栗市為公路 709 巷 101 號", phone: "03-726-9722" },
  { name: "萬喜講堂", postal: "351012", address: "苗栗縣頭份市蟠桃里上庄路 58 巷 9 弄 5 號 2 樓" },
  { name: "清水講堂", postal: "436038", address: "台中市清水區中清路九段535巷6號", phone: "04-2627-1407" },
  { name: "金弘笙講堂", postal: "407028", address: "台中市西屯區龍瑞街103號4樓" },
  { name: "平和講堂", postal: "500023", address: "彰化市崙平里建中街 37 號", phone: "04-762-1531" },
  { name: "永靖講堂", postal: "512003", address: "彰化縣永靖鄉永社路78號1、2樓" },
  { name: "有能講堂", postal: "528012", address: "彰化縣芳苑鄉芳東路57號" },
  { name: "虎尾講堂", postal: "632003", address: "雲林縣虎尾鎮林森路一段 416 巷 32 號 2 樓" },
  { name: "翊誠講堂", postal: "733003", address: "台南巿東山區東山里242-17號", phone: "06-680-2118" },
  { name: "瓊林講堂", postal: "824003", address: "高雄市燕巢區瓊林村瓊林路90 之12 號2 樓", phone: "07-616-0360" },
  { name: "路竹講堂", postal: "821005", address: "高雄市路竹區復興路 327 巷 16 弄 2-1 號" },
  { name: "大智講堂", postal: "803004", address: "高雄市鹽埕區光榮街 66 巷 9 之 3 號 4 樓", phone: "07-533-8255" },
  { name: "大同講堂", postal: "801706", address: "高雄市前金區大同二路 147 號 3 樓之 3", phone: "07-281-4526" },
  { name: "宗寶講堂", postal: "831122", address: "高雄市大寮區江山村江山路 79 之 10 號", phone: "07-701-9492" },
  { name: "鳳仁講堂", postal: "814035", address: "高雄市仁武區名山三街1號", phone: "07-374-2843" },
  { name: "光明講堂", postal: "912010", address: "屏東縣內埔鄉內埔村光明路 611 號 3 樓" },
  { name: "豐樂講堂", postal: "950025", address: "台東縣台東市豐年路一段171巷123弄32號1、2樓", phone: "08-923-7778" },
  { name: "羅東聯絡處", postal: "265009", address: "宜蘭縣羅東鎮純精路二段252號", phone: "03-954-3255" },
  { name: "宜蘭聯絡處", postal: "260003", address: "宜蘭縣宜蘭市昇平街16-3號6樓", phone: "03-935-3258" },
];
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
          <AppVenueTabs active="lecture" />
          <div class="l-venue-list">
            <AppVenueRow v-for="(venue, venueIndex) in venues" :key="venueIndex" v-bind="venue" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <AppFloatButtons />
  <AppFooter />
</template>
