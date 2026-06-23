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
  <a class="c-news-card" :href="link">
    <div class="c-news-card__media">
      <img class="c-news-card__img" :src="image" :alt="title" />
      <span class="c-news-card__mask"></span>
    </div>
    <div class="c-news-card__body">
      <p class="c-news-card__date">{{ date }}</p>
      <h3 class="c-news-card__title">{{ title }}</h3>
      <p class="c-news-card__excerpt">{{ excerpt }}</p>
    </div>
  </a>
</template>
