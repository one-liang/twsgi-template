<script setup>
defineProps({
  image: { type: String, required: true },
  title: { type: String, default: '' },
  link: { type: String, default: '#' },
});
</script>

<template>
  <a class="video-card" :href="link">
    <div class="video-card__media">
      <img class="video-card__img" :src="image" :alt="title" />
      <span class="video-card__mask"></span>
    </div>
    <h3 class="video-card__title">{{ title }}</h3>
  </a>
</template>
