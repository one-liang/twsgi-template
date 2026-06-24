<script setup>
defineProps({
  title: { type: String, default: '' },
  text: { type: String, default: '' },
  link: { type: String, default: '#' },
});
</script>

<template>
  <a class="c-memorial-card" :href="link">
    <div class="c-memorial-card__body">
      <div class="c-memorial-card__title">
        <span class="c-memorial-card__bar"></span>
        <h3 class="c-memorial-card__heading">{{ title }}</h3>
      </div>
      <p class="c-memorial-card__text">{{ text }}</p>
    </div>
    <span class="c-memorial-card__arrow">
      <span class="btn-arrow">
        <span class="btn-arrow__track">
          <i class="fa-light fa-arrow-right-long"></i>
          <i class="fa-light fa-arrow-right-long"></i>
        </span>
      </span>
    </span>
  </a>
</template>
