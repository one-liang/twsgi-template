<script setup>
defineProps({
  image: { type: String, required: true },
  title: { type: String, default: '' },
  link: { type: String, default: '#' },
});
</script>

<template>
  <a class="award-card" :href="link">
    <div class="award-card__media">
      <img class="award-card__img" :src="image" :alt="title" />
      <span class="award-card__mask"></span>
    </div>
    <div class="award-card__head">
      <h4 class="award-card__title">{{ title }}</h4>
      <span class="award-card__arrow">
        <span class="btn-arrow">
          <span class="btn-arrow__track">
            <i class="fa-light fa-arrow-right-long"></i>
            <i class="fa-light fa-arrow-right-long"></i>
          </span>
        </span>
      </span>
    </div>
  </a>
</template>
