<script setup>
defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  postal: { type: String, default: '' },
  address: { type: String, default: '' },
  phone: { type: String, default: '' },
});
</script>

<template>
  <article class="museum-card">
    <h3 class="museum-card__title">{{ title }}</h3>

    <div class="museum-card__container">
      <div class="museum-card__content">
        <div class="museum-card__address">
          <p v-if="address" class="museum-card__location">
            <i class="fa-solid fa-location-dot museum-card__icon"></i>
            <span>{{ postal }} {{ address }}</span>
          </p>
          <a v-if="address" class="museum-card__map" href="#">
            用地址定位
            <i class="fa-regular fa-arrow-up-right-from-square"></i>
          </a>
        </div>
        <p v-if="phone" class="museum-card__tel">
          <i class="fa-solid fa-phone museum-card__icon"></i>
          <span>{{ phone }}</span>
        </p>
      </div>

      <div class="museum-card__media">
        <img class="museum-card__img" :src="image" :alt="title" />
      </div>
    </div>
  </article>
</template>
