<script setup>
defineProps({
  date: { type: String, default: '' },
  title: { type: String, default: '' },
  entries: { type: Array, default: () => [] },
  source: { type: String, default: '' },
  link: { type: String, default: '#' },
});
</script>

<template>
  <a class="c-lecture-card" :href="link">
    <div class="c-lecture-card__body">
      <div class="c-lecture-card__head">
        <p class="c-lecture-card__date">{{ date }}</p>
        <h3 class="c-lecture-card__title">{{ title }}</h3>
      </div>
      <div v-for="(entry, entryIndex) in entries" :key="entryIndex" class="c-lecture-card__group">
        <p class="c-lecture-card__label">
          <span class="c-lecture-card__dot"></span>
          {{ entry.label }}
        </p>
        <p class="c-lecture-card__excerpt">{{ entry.text }}</p>
      </div>
    </div>
    <p class="c-lecture-card__source">{{ source }}</p>
    <div class="c-lecture-card__footer">
      <span class="c-lecture-card__arrow">
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
