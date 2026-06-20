<script setup>
import logoUrl from '@/assets/images/footer/logo.svg';

const socialGroups = [
  {
    icon: 'fa-facebook',
    links: [
      { text: '台灣創價學會', href: '#' },
      { text: '創價藝文', href: '#' },
    ],
  },
  {
    icon: 'fa-youtube',
    links: [
      { text: '創價新聞', href: '#' },
      { text: '創價藝文', href: '#' },
    ],
  },
  {
    icon: 'fa-instagram',
    links: [
      { text: '創價新聞', href: '#' },
      { text: '創價SDGs', href: '#' },
      { text: '文化團隊', href: '#' },
    ],
  },
];

const footerColumns = [
  [
    { title: '首頁', href: '#' },
    {
      title: '關於創價學會',
      href: '#',
      items: [
        { text: '宗旨與使命', href: '#' },
        { text: '日蓮大聖人法理', href: '#' },
        { text: '佛法教學入門', href: '#' },
        {
          text: '三代會長',
          children: [
            { text: '牧口常三郎', href: '#' },
            { text: '戶田城聖', href: '#' },
            { text: '池田大作', href: '#' },
          ],
        },
        { text: '國際創價學會', href: '#' },
        { text: '相關機構', href: '#' },
        { text: '台灣創價學會會則', href: '#' },
        { text: '獲獎與肯定', href: '#' },
        {
          text: '各地會館與講堂',
          children: [
            { text: '北部會館', href: '#' },
            { text: '中部會館', href: '#' },
            { text: '南部會館', href: '#' },
          ],
        },
      ],
    },
  ],
  [
    {
      title: '最新訊息',
      href: '#',
      items: [
        { text: '創價電子新聞', href: '#' },
        { text: '線上影音', href: '#' },
      ],
    },
    {
      title: '日常活動',
      href: '#',
      items: [
        { text: '每日修行', href: '#' },
        { text: '座談會', href: '#' },
        { text: '佛法教學', href: '#' },
        { text: '主要活動', href: '#' },
        { text: '年度活動主題', href: '#' },
      ],
    },
  ],
  [
    {
      title: '社會行動',
      href: '#',
      items: [
        { text: '文化', href: '#' },
        { text: '教育', href: '#' },
        { text: '和平', href: '#' },
        { text: '社會貢獻', href: '#' },
        { text: '創價藝文', href: '#' },
        { text: '創價永續', href: '#' },
      ],
    },
  ],
  [
    {
      title: '會員專區',
      href: '#',
      items: [
        { text: '座談會御書e講義', href: '#' },
        {
          text: '教學考試',
          children: [
            { text: '初級教學', href: '#' },
            { text: '中級教學', href: '#' },
          ],
        },
        {
          text: '佛法教學',
          children: [
            { text: '入門課程', href: '#' },
            { text: '進階課程', href: '#' },
          ],
        },
        { text: '創價學會紀念日', href: '#' },
        { text: '創價學會歌', href: '#' },
        { text: '檔案下載區', href: '#' },
        {
          text: '給新會員',
          children: [
            { text: '新會員指南', href: '#' },
            { text: '常見問題', href: '#' },
          ],
        },
        { text: '創價e購樂', href: '#' },
      ],
    },
    { title: '聖典檢索', href: 'https://cht.sgilibrary.org/', target: '_blank', rel: 'noopener noreferrer' },
    { title: '線上捐款', href: '#' },
  ],
];

const accId = (ci, si, ii) => `footer-acc-${ci}-${si}-${ii}`;
</script>

<template>
  <footer class="l-footer">
    <!-- 右下裝飾花紋 -->
    <span class="l-footer__bg"></span>

    <div class="l-footer__container">
      <!-- Logo + 社群列 -->
      <div class="l-footer__top">
        <img class="l-footer__logo" :src="logoUrl" alt="台灣創價學會" />

        <div class="footer-social">
          <div v-for="(group, gi) in socialGroups" :key="gi" class="footer-social__group">
            <i class="footer-social__icon fa-brands" :class="group.icon"></i>
            <template v-for="(link, li) in group.links" :key="li">
              <span v-if="li > 0" class="footer-social__sep"></span>
              <a class="footer-social__link" :href="link.href">{{ link.text }}</a>
            </template>
          </div>
        </div>
      </div>

      <!-- 主選單 -->
      <nav class="l-footer__nav">
        <div v-for="(column, ci) in footerColumns" :key="ci" class="l-footer__col">
          <div v-for="(section, si) in column" :key="si" class="footer-menu">
            <a class="footer-menu__title" :href="section.href || '#'">{{ section.title }}</a>

            <div v-if="section.items" class="footer-menu__list">
              <template v-for="(item, ii) in section.items" :key="ii">
                <template v-if="item.children">
                  <button type="button" class="footer-accordion__toggle collapsed" data-bs-toggle="collapse"
                    :data-bs-target="'#' + accId(ci, si, ii)">
                    <span class="footer-link__text">{{ item.text }}</span>
                    <span class="footer-accordion__icon">
                      <i class="fa-light fa-plus"></i>
                      <i class="fa-light fa-minus"></i>
                    </span>
                  </button>
                  <div class="collapse footer-accordion__panel" :id="accId(ci, si, ii)">
                    <a v-for="(child, ki) in item.children" :key="ki" class="footer-link footer-link--sub"
                      :href="child.href">
                      <span class="footer-link__text">{{ child.text }}</span>
                      <i class="footer-link__icon fa-light fa-angle-right"></i>
                    </a>
                  </div>
                </template>

                <a v-else class="footer-link" :href="item.href">
                  <span class="footer-link__text">{{ item.text }}</span>
                </a>
              </template>
            </div>
          </div>
        </div>
      </nav>

      <div class="l-footer__copyright">
        ©&nbsp;&nbsp;Taiwan Soka Association All Rights Reserved.
      </div>
    </div>
  </footer>
</template>
