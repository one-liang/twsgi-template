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
  <article class="c-museum-card">
    <h3 class="c-museum-card__title">{{ title }}</h3>

    <div class="c-museum-card__container">
      <div class="c-museum-card__content">
        <div class="c-museum-card__address">
          <p v-if="address" class="c-museum-card__location">
            <i class="fa-solid fa-location-dot c-museum-card__icon"></i>
            <span>{{ postal }} {{ address }}</span>
          </p>
          <a v-if="address" class="c-museum-card__map" href="#">
            用地址定位
            <i class="fa-regular fa-arrow-up-right-from-square"></i>
          </a>
        </div>
        <p v-if="phone" class="c-museum-card__tel">
          <i class="fa-solid fa-phone c-museum-card__icon"></i>
          <span>{{ phone }}</span>
        </p>
      </div>

      <div class="c-museum-card__media">
        <img class="c-museum-card__img" :src="image" :alt="title" />
      </div>
    </div>
  </article>
</template>
