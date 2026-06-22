<script setup>
defineProps({
  title: { type: String, required: true },
  breadcrumb: { type: Array, default: () => [] },
  homeHref: { type: String, default: '#' },
  backHref: { type: String, default: '#' },
});
</script>

<template>
  <section class="banner">
    <div class="container banner__inner">
      <h1 class="banner__title">{{ title }}</h1>
      <nav>
        <!-- PC 麵包屑 -->
        <ol class="breadcrumb d-none d-lg-flex mb-0">
          <li class="breadcrumb-item">
            <a :href="homeHref"><span class="banner__home-icon"></span></a>
          </li>
          <li v-for="(crumb, crumbIndex) in breadcrumb" :key="crumbIndex" class="breadcrumb-item"
            :class="{ active: !crumb.href }">
            <a v-if="crumb.href" :href="crumb.href">{{ crumb.label }}</a>
            <template v-else>{{ crumb.label }}</template>
          </li>
        </ol>
        <!-- Mobile 返回 -->
        <a :href="backHref" class="banner__back d-inline-flex d-lg-none">
          <i class="fa-regular fa-chevron-left"></i>
          <span class="banner__home-icon"></span>
        </a>
      </nav>
    </div>
  </section>
</template>
