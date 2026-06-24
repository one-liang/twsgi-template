<script setup>
defineProps({
  image: { type: String, required: true },
  title: { type: String, default: '' },
  link: { type: String, default: '#' },
});
</script>

<template>
  <a class="c-media-card" :href="link">
    <div class="c-media-card__media">
      <img class="c-media-card__img" :src="image" :alt="title" />
      <span class="c-media-card__mask"></span>
    </div>
    <h3 class="c-media-card__title">{{ title }}</h3>
  </a>
</template>
