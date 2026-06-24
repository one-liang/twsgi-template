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
  <a class="c-search-card" :href="link">
    <div class="c-search-card__media">
      <img class="c-search-card__img" :src="image" :alt="title" />
      <span class="c-search-card__mask"></span>
    </div>
    <div class="c-search-card__body">
      <p class="c-search-card__date">{{ date }}</p>
      <h3 class="c-search-card__title">{{ title }}</h3>
      <p class="c-search-card__excerpt">{{ excerpt }}</p>
    </div>
  </a>
</template>
