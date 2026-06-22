<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import AppFloatButtons from '../components/AppFloatButtons.vue';
import AppBanner from '../components/AppBanner.vue';
import AppVenueTabs from '../components/AppVenueTabs.vue';
import AppVenueRow from '../components/AppVenueRow.vue';
import venuesDecoration from '@/assets/images/venues/venues-decoration.svg';

const venues = [
  { name: "至善文化會館", postal: "111004", address: "台北市士林區至善路二段250號", phone: "02-2888-1777", fax: "02-2888-1788" },
  { name: "花蓮文化會館", postal: "970026", address: "花蓮縣花蓮市富裕五街71號", phone: "03-857-1101", fax: "03-857-1301" },
  { name: "宜蘭文化會館", postal: "260006", address: "宜蘭市陽明路131巷99號", phone: "03-937-2363", fax: "03-937-2383" },
  { name: "基隆文化會館", postal: "204001", address: "基隆市安樂路1段150號1、2樓", phone: "02-2429-4999", fax: "02-2429-4370" },
  { name: "淡水文化會館", postal: "251007", address: "新北市淡水區中正東路1段3巷9號3樓", phone: "02-2628-3511", fax: "02-2628-3556" },
  { name: "汐止文化會館", postal: "221041", address: "新北市汐止區大安街50號3樓", phone: "02-8647-8998", fax: "02-8648-5977" },
  { name: "瑞光文化會館", postal: "114062", address: "台北市內湖區瑞光路26巷20弄25號2樓", phone: "02-8792-0266", fax: "02-8792-0267" },
  { name: "玉成文化會館", postal: "115027", address: "台北市南港區八德路四段768巷5號B1樓", phone: "02-2782-8721", fax: "02-2782-9070" },
  { name: "錦州文化會館藝文會堂", postal: "104015", address: "台北市中山區中山北路二段137巷24-1號", phone: "02-2523-4100", fax: "02-25234109" },
  { name: "錦州文化會館文化會堂", postal: "104015", address: "台北市中山區中山北路二段115巷39號B1", phone: "02-2523-7451" },
  { name: "中興文化會館", postal: "108008", address: "台北市萬華區成都路110號2、3樓", phone: "02-2383-1747", fax: "02-2382-1789" },
  { name: "景美文化會館", postal: "231021", address: "新北市新店區中正路542之3號5樓", phone: "02-8667-6739", fax: "02-8667-6740" },
  { name: "雙和文化會館", postal: "235026", address: "新北市中和區中山路二段362號2樓", phone: "02-8242-1767", fax: "02-8242-2219" },
  { name: "板橋文化會館", postal: "220007", address: "新北市板橋區民生路二段232號3樓", phone: "02-2257-5012", fax: "02-2259-9018" },
  { name: "三重文化會館", postal: "241017", address: "新北市三重區重新路五段609巷2號3樓之1", phone: "02-2278-3373", fax: "02-2278-3530" },
  { name: "新莊文化會館", postal: "242051", address: "新北市新莊區中正路657之10號3樓", phone: "02-2901-6617", fax: "02-2901-7812" },
  { name: "桃園文化會館", postal: "337002", address: "桃園市大園區高鐵北路二段140號", phone: "03-381-6871", fax: "03-381-0871" },
  { name: "新竹文化會館", postal: "300008", address: "新竹市國華街68號", phone: "03-543-9850", fax: "03-532-6956" },
  { name: "台中文化會館", postal: "407535", address: "台中市西屯區大容東街90號2、4樓", phone: "04-2327-0259", fax: "04-2327-0264" },
  { name: "霧峰文化會館", postal: "413003", address: "台中市霧峰區四德里中投西路二段76號", phone: "04-2339-1600", fax: "04-2339-1606" },
  { name: "彰化文化會館", postal: "504009", address: "彰化縣秀水鄉安溪村平安五街61號", phone: "04-763-3643", fax: "04-763-4462" },
  { name: "雲林文化會館", postal: "640012", address: "雲林縣斗六市北平路46巷5號", phone: "05-535-3600", fax: "05-535-3601" },
  { name: "雲林東勢會館", postal: "635001", address: "雲林縣東勢鄉東南村20鄰康安路269號", phone: "05-699-8153", fax: "05-699-3448" },
  { name: "西螺文化會館", postal: "648002", address: "雲林縣西螺鎮中山路225號3樓", phone: "05-586-0209" },
  { name: "友愛文化會館", postal: "600071", address: "嘉義市友愛路288號7樓3", phone: "05-231-3211", fax: "05-231-8965" },
  { name: "佳里文化會館", postal: "722001", address: "台南市佳里區延平路351號4樓", phone: "06-723-0951", fax: "06-723-6569" },
  { name: "安南文化會館", postal: "709018", address: "台南市安南區郡安路四段65號1樓", phone: "06-281-4683", fax: "06-282-9441" },
  { name: "高雄文化會館", postal: "811027", address: "高雄市楠梓區金富街1號", phone: "07-361-7990", fax: "07-361-7993" },
  { name: "鼓山文化會館", postal: "804723", address: "高雄市鼓山區裕誠路1093號3、4樓", phone: "07-553-7007", fax: "07-552-6006" },
  { name: "鹽埕文化會館", postal: "803004", address: "高雄市鹽埕區莒光街197號", phone: "07-561-5633", fax: "07-561-2239" },
  { name: "前鎮文化會館", postal: "806025", address: "高雄市前鎮區沱江街110巷1號", phone: "07-336-6985", fax: "07-336-6855" },
  { name: "鳳山文化會館", postal: "833173", address: "高雄市鳥松區鳥松里中正路2巷17號", phone: "07-733-2301", fax: "07-733-2703" },
  { name: "旗山文化會館", postal: "842042", address: "高雄市旗山區太平里復新街73號" },
  { name: "屏東文化會館", postal: "911161", address: "屏東縣竹田鄉大湖村大成路46號", phone: "08-788-0208", fax: "08-788-0105" },
  { name: "大龍峒會館", postal: "103040", address: "台北市大同區哈密街70巷9之3號1樓" },
  { name: "永康會館", postal: "710003", address: "台南市永康區中正路279巷1之2號", phone: "06-233-6762" },
  { name: "生爨會館", postal: "700011", address: "台南市中西區開山路184號" },
  { name: "忠義會館", postal: "700017", address: "台南市忠義路二段187號" },
  { name: "存孝會館", postal: "880007", address: "馬公市陽明里永和街11巷14號" },
  { name: "安明會館", postal: "807051", address: "高雄市三民區大昌二路212巷90、92號2、3、4樓" },
  { name: "大溪文化中心", postal: "335018", address: "桃園市大溪區美山路一段151巷60號", phone: "03-387-4261", fax: "03-387-4445" },
  { name: "華山文化中心", postal: "646006", address: "雲林縣古坑鄉華山村2鄰華山19號之16", phone: "05-590-1900" },
  { name: "華山慈恩堂", postal: "646006", address: "雲林縣古坑鄉華山村11鄰松林路79號", phone: "05-590-0390", fax: "05-590-0391" },
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
          <AppVenueTabs active="culture" />
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
