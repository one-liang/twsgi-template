<script setup>
defineProps({
  image: { type: String, required: true },
  date: { type: String, default: '' },
  title: { type: String, default: '' },
  excerpt: { type: String, default: '' },
  link: { type: String, default: '#' },
});
</script>

<template>
  <a class="news-card" :href="link">
    <div class="news-card__media">
      <img class="news-card__img" :src="image" :alt="title" />
      <span class="news-card__mask"></span>
    </div>
    <div class="news-card__body">
      <p class="news-card__date">{{ date }}</p>
      <h3 class="news-card__title">{{ title }}</h3>
      <p class="news-card__excerpt">{{ excerpt }}</p>
    </div>
  </a>
</template>
