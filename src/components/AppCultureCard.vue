<script setup>
defineProps({
  image: { type: String, required: true },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  link: { type: String, default: '#' },
});
</script>

<template>
  <a class="c-culture-card" :href="link">
    <div class="c-culture-card__media">
      <img class="c-culture-card__img" :src="image" :alt="title" />
      <span class="c-culture-card__mask"></span>
    </div>
    <div class="c-culture-card__body">
      <div class="c-culture-card__head">
        <h3 class="c-culture-card__title">{{ title }}</h3>
        <span class="c-culture-card__arrow">
          <span class="btn-arrow">
            <span class="btn-arrow__track">
              <i class="fa-light fa-arrow-right-long"></i>
              <i class="fa-light fa-arrow-right-long"></i>
            </span>
          </span>
        </span>
      </div>
      <p class="c-culture-card__desc">{{ description }}</p>
    </div>
  </a>
</template>
