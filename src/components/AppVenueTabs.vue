<script setup>
defineProps({
  active: { type: String, default: 'culture' },
});

const tabs = [
  { key: 'culture', label: '文化會館', href: 'cultureHall.html' },
  { key: 'lecture', label: '講堂', href: 'lectureHall.html' },
  { key: 'member', label: '會員服務中心', href: 'memberCenter.html' },
  { key: 'art', label: '創價美術館', href: 'artMuseum.html' },
];
</script>

<template>
  <nav class="venue-tabs">
    <a v-for="tab in tabs" :key="tab.key" :href="tab.href" class="venue-tabs__item"
      :class="{ 'venue-tabs__item--active': tab.key === active }">{{ tab.label }}</a>
  </nav>
</template>
