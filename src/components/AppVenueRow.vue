<script setup>
// 單筆服務據點：名稱／地址（含用地址定位連結）／電話／傳真／營業時間（會員服務中心專用）
defineProps({
  name: { type: String, required: true },
  postal: { type: String, default: '' },
  address: { type: String, default: '' },
  phone: { type: String, default: '' },
  fax: { type: String, default: '' },
  hours: { type: String, default: '' },
});
</script>

<template>
  <div class="venue-row" :class="{ 'venue-row--member': hours }">
    <h3 class="venue-row__name">{{ name }}</h3>

    <div class="venue-row__address">
      <p v-if="address" class="venue-row__location">
        <i class="fa-solid fa-location-dot venue-row__location-icon"></i>
        <span>{{ postal }} {{ address }}</span>
      </p>
      <a v-if="address" class="venue-row__map" href="#">
        用地址定位
        <i class="fa-regular fa-arrow-up-right-from-square"></i>
      </a>
      <p v-if="hours" class="venue-row__hours">{{ hours }}</p>
    </div>

    <div class="venue-row__contact">
      <p v-if="phone" class="venue-row__tel">
        <i class="fa-solid fa-phone venue-row__contact-icon"></i>
        <span>{{ phone }}</span>
      </p>
      <p v-if="fax" class="venue-row__fax">
        <i class="fa-solid fa-fax venue-row__contact-icon"></i>
        <span>{{ fax }}</span>
      </p>
    </div>
  </div>
</template>
