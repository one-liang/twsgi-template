<script setup>
defineProps({
  image: { type: String, required: true },
  title: { type: String, default: '' },
  link: { type: String, default: '#' },
});
</script>

<template>
  <a class="c-video-card" :href="link">
    <div class="c-video-card__media">
      <img class="c-video-card__img" :src="image" :alt="title" />
      <span class="c-video-card__mask"></span>
    </div>
    <h3 class="c-video-card__title">{{ title }}</h3>
  </a>
</template>
