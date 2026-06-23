<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: { type: String, required: true },
  breadcrumb: { type: Array, default: () => [] },
  homeHref: { type: String, default: '#' },
});

const backCrumb = computed(() => {
  const items = props.breadcrumb;
  if (items.length >= 2) {
    const parent = items[items.length - 2];
    return { label: parent.label, href: parent.href || props.homeHref, isHome: false };
  }
  return { label: '首頁', href: props.homeHref, isHome: true };
});
</script>

<template>
  <section class="l-banner">
    <div class="container l-banner__inner">
      <h1 class="l-banner__title">{{ title }}</h1>
      <nav>
        <!-- PC 麵包屑 -->
        <ol class="breadcrumb d-none d-lg-flex mb-0">
          <li class="breadcrumb-item">
            <a :href="homeHref"><span class="l-banner__home-icon"></span></a>
          </li>
          <li v-for="(crumb, crumbIndex) in breadcrumb" :key="crumbIndex" class="breadcrumb-item"
            :class="{ active: !crumb.href }">
            <a v-if="crumb.href" :href="crumb.href">{{ crumb.label }}</a>
            <template v-else>{{ crumb.label }}</template>
          </li>
        </ol>
        <!-- Mobile 返回上一層(頂層用首頁 icon，子頁用上一層文字) -->
        <a :href="backCrumb.href" class="l-banner__back d-inline-flex d-lg-none">
          <i class="fa-regular fa-chevron-left"></i>
          <span v-if="backCrumb.isHome" class="l-banner__home-icon"></span>
          <span v-else class="l-banner__back-label">{{ backCrumb.label }}</span>
        </a>
      </nav>
    </div>
  </section>
</template>
