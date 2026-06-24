<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import AppFloatButtons from '../components/AppFloatButtons.vue';
import AppBanner from '../components/AppBanner.vue';
import AppNewsCard from '../components/AppNewsCard.vue';
import newsFocus01 from '@/assets/images/news/news-focus-01.jpg';
import newsFocus02 from '@/assets/images/news/news-focus-02.jpg';
import newsFocus03 from '@/assets/images/news/news-focus-03.jpg';
import newsFocus04 from '@/assets/images/news/news-focus-04.jpg';
import newsFocus05 from '@/assets/images/news/news-focus-05.jpg';
import newsFocus06 from '@/assets/images/news/news-focus-06.jpg';
import newsExperience01 from '@/assets/images/news/news-experience-01.jpg';
import newsExperience02 from '@/assets/images/news/news-experience-02.jpg';
import newsExperience03 from '@/assets/images/news/news-experience-03.jpg';
import newsExperience04 from '@/assets/images/news/news-experience-04.jpg';
import newsExperience05 from '@/assets/images/news/news-experience-05.jpg';
import newsExperience06 from '@/assets/images/news/news-experience-06.jpg';
import newsEducation01 from '@/assets/images/news/news-education-01.png';
import newsEducation02 from '@/assets/images/news/news-education-02.png';
import newsEducation03 from '@/assets/images/news/news-education-03.png';
import newsLife01 from '@/assets/images/news/news-life-01.jpg';
import newsLife02 from '@/assets/images/news/news-life-02.jpg';
import newsLife03 from '@/assets/images/news/news-life-03.jpg';
import newsLife04 from '@/assets/images/news/news-life-04.jpg';
import newsLife05 from '@/assets/images/news/news-life-05.jpg';
import newsLife06 from '@/assets/images/news/news-life-06.jpg';

const moreHref = 'newsList.html';

const newsSections = [
  {
    key: 'focus',
    title: '焦點新聞',
    moreHref,
    items: [
      {
        image: newsFocus01,
        date: '2026.03.20',
        title: '日本創價大學理事長秋谷芳英訪問台灣大學、高雄大學',
        excerpt:
          '日本創價大學理事長秋谷芳英、國際部部長川上喜彥及創價學會國際涉外局第二部部長水嶋肇等一行人，2月24日上午，在共同執行長林澤、吳青蓉等陪同下，前往台灣大學訪問。',
        link: '#',
      },
      {
        image: newsFocus02,
        date: '2026.03.20',
        title: '教師部盛大舉辦「創價·教育 EXPO」研修 秉持人本主義 建構為了教育的社會',
        excerpt:
          '教師部「創價・教育 EXPO」研修會，2月7日於桃園文化會館盛大舉行，來自全台各地及離島澎湖的500多位教師踴躍參與，一同學習創價教育理念。',
        link: '#',
      },
      {
        image: newsFocus03,
        date: '2026.03.20',
        title: '晨曦合唱團成立紀念勤行會 台南古都 迎接嶄新文化團隊啟航',
        excerpt:
          '迎來「1.27台灣師弟原點之日」63週年，1月31日，創價於安南文化會館舉行「晨曦合唱團成立紀念勤行會」，林釗理事長專程蒞臨主持。',
        link: '#',
      },
      {
        image: newsFocus04,
        date: '2026.03.20',
        title: '全國區長會 林釗理事長期勉幹部 全力培育青年後繼 建設廣布黃金城',
        excerpt:
          '全國區長會於5月25日假桃園文化會館盛大舉行，林釗理事長首先向與會幹部宣布三項振奮人心的好消息，期勉全力培育青年後繼。',
        link: '#',
      },
      {
        image: newsFocus05,
        date: '2026.03.20',
        title: '5月份大研專場座談會 青年向創價母親表達感謝',
        excerpt:
          '創價於5月18至24日，在全台各地熱絡地舉辦5月份座談會，青年們把握機會向創價母親表達由衷的感謝。',
        link: '#',
      },
      {
        image: newsFocus06,
        date: '2026.03.20',
        title: '台灣SGI青年與亞洲5萬名青年大合唱〈歡樂頌〉',
        excerpt:
          '為慶祝創立95週年，堂堂邁向創立100週年，11月23日，九州創價學會舉辦「亞洲和平音樂節」，台灣青年共襄盛舉。',
        link: '#',
      },
    ],
  },
  {
    key: 'experience',
    title: '體驗談',
    moreHref,
    variant: 'gray',
    items: [
      {
        image: newsExperience01,
        date: '2026.03.20',
        title: '承繼家族信心 超越求學時期逆境 夫妻同心創業 以福運翻轉人生',
        excerpt:
          '我們家族信心的根源來自父親，在這條路上，我與妻子攜手同行，秉持信仰超越求學時期的逆境，最終以福運翻轉人生。',
        link: '#',
      },
      {
        image: newsExperience02,
        date: '2026.03.20',
        title: '透過信仰走出人生谷底 創價教師 拓展花蓮學子國際視野',
        excerpt:
          '我是花蓮人，15歲時加入創價，至今17年。我於人生低谷時透過信仰重新站起，如今投身教育，盼為花蓮學子拓展國際視野。',
        link: '#',
      },
      {
        image: newsExperience03,
        date: '2026.03.20',
        title: '積極投入廣布 超越疫情等考驗 建立事業新品牌 創造佳績',
        excerpt:
          '我從小生長在虔誠信仰的家庭，疫情期間事業面臨嚴峻考驗，我持續積極投入廣布，最終建立事業新品牌，創造亮眼佳績。',
        link: '#',
      },
      {
        image: newsExperience04,
        date: '2026.03.20',
        title: '承繼家族信心 超越求學時期逆境 夫妻同心創業 以福運翻轉人生',
        excerpt:
          '我們家族信心的根源來自父親，在這條路上，我與妻子攜手同行，秉持信仰超越求學時期的逆境，最終以福運翻轉人生。',
        link: '#',
      },
      {
        image: newsExperience05,
        date: '2026.03.20',
        title: '透過信仰走出人生谷底 創價教師 拓展花蓮學子國際視野',
        excerpt:
          '我是花蓮人，15歲時加入創價，至今17年。我於人生低谷時透過信仰重新站起，如今投身教育，盼為花蓮學子拓展國際視野。',
        link: '#',
      },
      {
        image: newsExperience06,
        date: '2026.03.20',
        title: '積極投入廣布 超越疫情等考驗 建立事業新品牌 創造佳績',
        excerpt:
          '我從小生長在虔誠信仰的家庭，疫情期間事業面臨嚴峻考驗，我持續積極投入廣布，最終建立事業新品牌，創造亮眼佳績。',
        link: '#',
      },
    ],
  },
  {
    key: 'education',
    title: '教育專欄',
    moreHref,
    variant: 'decor',
    items: [
      {
        image: newsEducation01,
        date: '2026.03.20',
        title: '慢 才是王道',
        excerpt:
          '我住意，然我覺知「慢」才是王道。民國42年，我剛讀大學，有次只是在台北街頭緩步而行，便深刻體會到從容的力量。',
        link: '#',
      },
      {
        image: newsEducation02,
        date: '2026.03.20',
        title: '當事人、關係人與路人',
        excerpt:
          '通常在日常生活，我們扮演主角當事人；有時則成為關係人；停下腳步時，我們又是看戲的路人。三種身分時時轉換。',
        link: '#',
      },
      {
        image: newsEducation03,
        date: '2026.03.20',
        title: '學校霸凌行為 不能忽視',
        excerpt:
          '校園霸凌是不能忽視的議題。從旁觀者到當事人，每個人都應正視自身的角色，共同守護孩子安心成長的學習環境。',
        link: '#',
      },
      {
        image: newsEducation01,
        date: '2026.03.20',
        title: '慢 才是王道',
        excerpt:
          '我住意，然我覺知「慢」才是王道。民國42年，我剛讀大學，有次只是在台北街頭緩步而行，便深刻體會到從容的力量。',
        link: '#',
      },
      {
        image: newsEducation02,
        date: '2026.03.20',
        title: '當事人、關係人與路人',
        excerpt:
          '通常在日常生活，我們扮演主角當事人；有時則成為關係人；停下腳步時，我們又是看戲的路人。三種身分時時轉換。',
        link: '#',
      },
      {
        image: newsEducation03,
        date: '2026.03.20',
        title: '學校霸凌行為 不能忽視',
        excerpt:
          '校園霸凌是不能忽視的議題。從旁觀者到當事人，每個人都應正視自身的角色，共同守護孩子安心成長的學習環境。',
        link: '#',
      },
    ],
  },
  {
    key: 'life',
    title: '藝文、生活',
    moreHref,
    variant: 'gray',
    items: [
      {
        image: newsLife01,
        date: '2026.03.20',
        title: '一場美好的冒險記 蘇勵的創作教學',
        excerpt:
          '亞洲大學現代美術館舉辦「蘇勵·美學·創作教育－1963大度山ära展」，由美學大師蘇勵領軍，帶來一場美好的冒險記。',
        link: '#',
      },
      {
        image: newsLife02,
        date: '2026.03.20',
        title: '網路購物 不可不知的權益！',
        excerpt:
          '隨著網際網路的普及，網路購物已牢不可破，因此產生的糾紛也日益增多，包含商品瑕疵、退貨爭議等，消費者不可不知。',
        link: '#',
      },
      {
        image: newsLife03,
        date: '2026.03.20',
        title: '台南 木造輝三兄弟',
        excerpt:
          '火車站旁西側大樹綠蔭的鐵青平房，傳入台南境內，還有三派水流泉湧建立的木造老屋，靜靜訴說著城市的歷史記憶。',
        link: '#',
      },
      {
        image: newsLife04,
        date: '2026.03.20',
        title: '一場美好的冒險記 蘇勵的創作教學',
        excerpt:
          '亞洲大學現代美術館舉辦「蘇勵·美學·創作教育－1963大度山ära展」，由美學大師蘇勵領軍，帶來一場美好的冒險記。',
        link: '#',
      },
      {
        image: newsLife05,
        date: '2026.03.20',
        title: '網路購物 不可不知的權益！',
        excerpt:
          '隨著網際網路的普及，網路購物已牢不可破，因此產生的糾紛也日益增多，包含商品瑕疵、退貨爭議等，消費者不可不知。',
        link: '#',
      },
      {
        image: newsLife06,
        date: '2026.03.20',
        title: '台南 木造輝三兄弟',
        excerpt:
          '火車站旁西側大樹綠蔭的鐵青平房，傳入台南境內，還有三派水流泉湧建立的木造老屋，靜靜訴說著城市的歷史記憶。',
        link: '#',
      },
    ],
  },
];
</script>

<template>
  <AppHeader />
  <AppBanner title="最新消息" :breadcrumb="[{ label: '最新消息' }]" />

  <section v-for="section in newsSections" :key="section.key" class="l-news-section"
    :class="section.variant ? `l-news-section--${section.variant}` : ''" :data-news-section="section.key">
    <!-- 裝飾性背景 -->
    <span v-if="section.variant === 'decor'" class="l-news-section__bg"></span>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 l-news-section__inner">
          <div class="l-news-section__head">
            <h2 class="l-news-section__title">
              <span class="l-news-section__title-bar"></span>
              {{ section.title }}
            </h2>
            <!-- 左右箭頭 -->
            <div class="l-news-section__nav">
              <button type="button" class="btn btn-icon btn-outline-soft" data-news-prev>
                <span class="btn-arrow btn-arrow--left">
                  <span class="btn-arrow__track">
                    <i class="fa-light fa-arrow-left"></i>
                    <i class="fa-light fa-arrow-left"></i>
                  </span>
                </span>
              </button>
              <button type="button" class="btn btn-icon btn-outline-soft" data-news-next>
                <span class="btn-arrow">
                  <span class="btn-arrow__track">
                    <i class="fa-light fa-arrow-right-long"></i>
                    <i class="fa-light fa-arrow-right-long"></i>
                  </span>
                </span>
              </button>
            </div>
          </div>

          <!-- 卡片輪播 -->
          <div class="l-news-section__swiper swiper">
            <div class="swiper-wrapper">
              <div v-for="(news, newsIndex) in section.items" :key="newsIndex" class="swiper-slide">
                <AppNewsCard :image="news.image" :date="news.date" :title="news.title" :excerpt="news.excerpt"
                  :link="news.link" />
              </div>
            </div>
          </div>

          <!-- 查看更多 -->
          <div class="l-news-section__more">
            <a :href="section.moreHref"
              class="btn btn-solid btn-lg d-inline-flex align-items-center justify-content-center gap-2">
              查看更多
              <span class="btn-arrow">
                <span class="btn-arrow__track">
                  <i class="fa-light fa-arrow-right-long"></i>
                  <i class="fa-light fa-arrow-right-long"></i>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <AppFloatButtons />
  <AppFooter />
</template>

<script>
(function () {
  if (typeof document === 'undefined' || window.__twsgiNewsSectionsInit) {
    return;
  }
  window.__twsgiNewsSectionsInit = true;

  const initSection = (root) => {
    if (root.dataset.newsReady === 'true' || typeof window.Swiper === 'undefined') {
      return false;
    }
    root.dataset.newsReady = 'true';

    new window.Swiper(root.querySelector('.l-news-section__swiper'), {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 16,
      speed: 600,
      loop: true,
      navigation: {
        prevEl: root.querySelector('[data-news-prev]'),
        nextEl: root.querySelector('[data-news-next]'),
      },
      breakpoints: {
        992: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 40,
        },
      },
    });

    return true;
  };

  const initAllSections = () => {
    const sections = Array.from(document.querySelectorAll('[data-news-section]'));
    if (sections.length === 0 || typeof window.Swiper === 'undefined') {
      return false;
    }
    sections.forEach((section) => initSection(section));
    return true;
  };

  if (!initAllSections()) {
    const observer = new MutationObserver(() => {
      if (initAllSections()) {
        observer.disconnect();
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    window.addEventListener('load', initAllSections);
  }
})();
</script>
