<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import AppFloatButtons from '../components/AppFloatButtons.vue';
import AppBanner from '../components/AppBanner.vue';
import AppVenueTabs from '../components/AppVenueTabs.vue';
import AppVenueRow from '../components/AppVenueRow.vue';
import venuesDecoration from '@/assets/images/venues/venues-decoration.svg';

const venues = [
  { name: "錦州服務中心", postal: "104014", address: "台北市中山區中山北路二段 115 巷 3 弄 20 號", phone: "02-2567-0136", hours: "週一～週二、週四～週六 10:00～21:30 週三、週日 10:00～19:30" },
  { name: "板橋服務中心", postal: "220007", address: "新北市板橋區民生路二段 232 號 1 樓之 6", phone: "02-2257-5445", hours: "週二～週六 13:00～19:30 週日 13:00～17:30 (週一公休)" },
  { name: "基隆服務中心", postal: "204001", address: "基隆市安樂區安樂路一段 150 號", phone: "02-2429-2460", hours: "週三、週六 13:00～17:00" },
  { name: "宜蘭服務中心", postal: "260006", address: "宜蘭縣宜蘭市陽明路 131 巷 99 號", phone: "03-932-3965", hours: "週三 13:00～16:00" },
  { name: "花蓮服務中心", postal: "970026", address: "花蓮縣花蓮市富裕五街 71 號", phone: "03-846-2175", hours: "週三 09:00～12:00" },
  { name: "桃園服務中心", postal: "337002", address: "桃園市大園區高鐵北路二段 140 號", phone: "03-381-9175", hours: "週二～週五 11:30～17:00 週六～週日 09:30～17:00 (週一公休)" },
  { name: "新竹服務中心", postal: "300008", address: "新竹市北區國華街 68 號", phone: "03-535-8828", hours: "週三 09:00～12:00" },
  { name: "台中服務中心", postal: "407535", address: "台中市西屯區大容東街 90 號 2 樓", phone: "04-2326-8903", hours: "週二～週日 10:00～18:00 (週一公休)" },
  { name: "彰化服務中心", postal: "504009", address: "彰化縣秀水鄉安溪村平安五街 61 號", phone: "04-763-6303", hours: "週二～週六 13:00～19:30 週日 13:00～17:30 (週一公休)" },
  { name: "雲林服務中心", postal: "640012", address: "雲林縣斗六市北平路 46 巷 5 號 3 樓", phone: "05-534-1163", hours: "週二～週六 09:30～17:30 (週一公休)" },
  { name: "台南服務中心", postal: "709018", address: "台南市安南區郡安路四段 64 號", phone: "06-281-4691", hours: "週二～週六 13:00～19:30 週日 13:00～17:30 (週一公休)" },
  { name: "高雄服務中心", postal: "811027", address: "高雄市楠梓區金富街 1 號", phone: "07-361-7992", hours: "週二～週日 10:30～17:00 (週一公休)" },
  { name: "鹽埕服務中心", postal: "803004", address: "高雄市鹽埕區莒光街 197 號", phone: "07-561-2236", hours: "週二～週六 13:00～19:30 週日 13:00～17:30 (週一公休)" },
  { name: "屏東服務中心", postal: "911161", address: "屏東縣竹田鄉大湖村大成路 46 號", phone: "08-788-0616", hours: "週三、週六、週日 09:00～17:00" },
];
</script>

<template>
  <AppHeader />
  <AppBanner title="服務據點" :breadcrumb="[{ label: '服務據點' }]" />

  <section class="venues-locations">
    <!-- 裝飾花紋 -->
    <span class="venues-locations__decoration">
      <img :src="venuesDecoration" alt="" />
    </span>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <AppVenueTabs active="member" />
          <div class="venue-list">
            <AppVenueRow v-for="(venue, venueIndex) in venues" :key="venueIndex" v-bind="venue" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <AppFloatButtons />
  <AppFooter />
</template>
