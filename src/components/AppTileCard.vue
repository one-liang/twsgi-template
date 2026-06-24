<script setup>
defineProps({
  image: { type: String, required: true },
  title: { type: String, default: '' },
  link: { type: String, default: '#' },
});
</script>

<template>
  <a class="c-tile-card" :href="link">
    <div class="c-tile-card__media">
      <img class="c-tile-card__img" :src="image" :alt="title" />
      <span class="c-tile-card__mask"></span>
    </div>
    <h3 class="c-tile-card__title">{{ title }}</h3>
  </a>
</template>
