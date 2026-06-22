<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import AppFloatButtons from '../components/AppFloatButtons.vue';
import AppBanner from '../components/AppBanner.vue';
import AppCultureCard from '../components/AppCultureCard.vue';
import foundationPeace from '@/assets/images/socialAction/foundation-peace.jpg';
import cultureArt from '@/assets/images/socialAction/culture-art.jpg';
import culturePerformance from '@/assets/images/socialAction/culture-performance.jpg';
import cultureExhibition from '@/assets/images/socialAction/culture-exhibition.jpg';
import cultureYouth from '@/assets/images/socialAction/culture-youth.jpg';
import educationStudent from '@/assets/images/socialAction/education-student.jpg';
import educationLecture from '@/assets/images/socialAction/education-lecture.jpg';
import educationAcademic from '@/assets/images/socialAction/education-academic.jpg';
import educationPractice from '@/assets/images/socialAction/education-practice.jpg';
import educationBg from '@/assets/images/socialAction/education-bg.svg';
import peaceInternational from '@/assets/images/socialAction/peace-international.jpg';
import peaceExhibition from '@/assets/images/socialAction/peace-exhibition.jpg';
import contributionFestival from '@/assets/images/socialAction/contribution-festival.jpg';
import contributionRelief from '@/assets/images/socialAction/contribution-relief.jpg';
import contributionService from '@/assets/images/socialAction/contribution-service.jpg';
import contributionCharity from '@/assets/images/socialAction/contribution-charity.jpg';

const cultureCards = [
  {
    image: cultureArt,
    title: '創價藝文',
    description:
      '為提升社會的文化氣息，創價自2003年起，以「文化尋根 建構台灣美術百年史」為策展主題，在全台巡迴展出本土藝術家的作品，並從2012年起推動「行動美術館」，將優質展覽帶進校園。',
    link: '#',
  },
  {
    image: culturePerformance,
    title: '創價公演',
    description:
      '「藝術絕不是部分特權階級的專利品。要使音樂這人類共同的財寶普及於民眾─這就是我創辦民音的出發點。」',
    link: '#',
  },
  {
    image: cultureExhibition,
    title: '國際特別展',
    description: '匯聚國內外重量級美術館資源，策劃浮世繪、跨文化藝術與經典典藏等多元展覽。',
    link: '#',
  },
  {
    image: cultureYouth,
    title: '青年文化團隊',
    description: '透過音樂、舞蹈與表演藝術，培育青年人才並推動文化教育發展。',
    link: '#',
  },
];

const educationCards = [
  {
    image: educationStudent,
    title: '學生活動',
    description: '透過多元營隊與研修活動，培育從孩童到大學生的未來人才。',
    link: '#',
  },
  {
    image: educationLecture,
    title: '生活講座',
    description:
      '教育是人類進步的關鍵！為建構民眾普賢的社會，創價在各地舉辦醫學、心理、教育、文學、法律、消防安全等各類講座，引導會員更有智慧地面對挑戰。',
    link: '#',
  },
  {
    image: educationAcademic,
    title: '學術交流',
    description:
      '為讓整個社會為「教育」事業傾注更多心力，並作為學術機構與民眾之間的教育平台，創價除舉辦或參與學術研討會之外，並在池田先生支持下，將各類教育叢書及對談集致贈給各級學校及各縣市鄉鎮圖書館，以帶動莘莘學子閱讀優良讀物的風氣。',
    link: '#',
  },
  {
    image: educationPractice,
    title: '教育實踐大會',
    description: '匯聚教育工作者與青年幹部，共同推動以孩童幸福為核心的教育理念。',
    link: '#',
  },
];

const peaceCards = [
  {
    image: peaceInternational,
    title: '國際交流',
    description:
      '秉持牧口初代會長所說：「要將21世紀建設為『人道競爭』的世紀」，創價於1990年「法人化」之後，積極與SGI會員國進行國際交流。',
    link: '#',
  },
  {
    image: peaceExhibition,
    title: '各項展覽',
    description:
      '為喚醒大家重視攸關人類存亡的環境惡化、衝突及貧窮等全球性危機，創價自2004年起，陸續引進多項國際性展覽來台',
    link: '#',
  },
];

const contributionCards = [
  {
    image: contributionFestival,
    title: '社區友好文化節',
    description:
      '在世界經濟不景氣，人心喪失希望之際，社區友好文化節正是一項鼓舞人心、帶給社區莫大勇氣與喜悅的重要活動。',
    link: '#',
  },
  {
    image: contributionRelief,
    title: '救災賑災',
    description:
      '創價長期以來致力於社會公益事業，本著「人飢己飢、人溺己溺」的人道關懷精神，不僅持續投入資源推動偏鄉教育、促進文化平權，每逢國內重大災害，更積極協助政府投入救災行列。',
    link: '#',
  },
  {
    image: contributionService,
    title: '社會服務',
    description: '自921震災後展開服務行動，持續關懷災區、偏鄉與弱勢孩童。',
    link: '#',
  },
  {
    image: contributionCharity,
    title: '慈善義演',
    description:
      '透過音樂與表演走入社會，關懷長者、兒童及弱勢族群，並於災後舉辦音樂會，撫慰人心、凝聚力量，陪伴社會走向復原。',
    link: '#',
  },
];
</script>

<template>
  <AppHeader />
  <AppBanner title="社會行動" :breadcrumb="[{ label: '社會行動' }]" />

  <section class="socialAction-foundation">
    <!-- 灰底帶(PC) -->
    <span class="socialAction-foundation__bg"></span>
    <div class="socialAction-foundation__media">
      <img class="socialAction-foundation__img" :src="foundationPeace" alt="台灣創價學會會員合影" />
    </div>
    <div class="container">
      <div class="socialAction-foundation__intro">
        <div class="socialAction-foundation__heading">
          <span class="socialAction-foundation__bar"></span>
          <h2 class="socialAction-foundation__title">文化．教育．和平</h2>
        </div>
        <div class="socialAction-foundation__content">
          <p>創價的和平運動起源於1930年代。在戰爭動盪與軍國主義氛圍下，初代會長 牧口常三郎 與第二代會長 戶田城聖 以「民眾幸福」為核心，創立創價學會，致力於推廣尊重生命的思想。</p>
          <p>秉持「人飢己飢、人溺己溺」的精神，創價積極投入社會關懷行動，關懷弱勢族群，並在國內外重大災害發生時迅速投入援助，為受災者帶來支持與希望。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 文化 -->
  <section class="socialAction-culture">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <div class="socialAction-culture__inner">
            <div class="socialAction-culture__heading">
              <p class="socialAction-culture__eyebrow">culture</p>
              <div class="socialAction-culture__title-row">
                <span class="socialAction-culture__bar"></span>
                <h2 class="socialAction-culture__title">文化</h2>
              </div>
              <p class="socialAction-culture__lead">
                文化是人性的表現，所以創造卓越的文化， 首先要耕耘人的精神和生命， 培養豐饒的人性土壤，此即宗教的使命。
              </p>
            </div>
            <div class="socialAction-culture__grid">
              <AppCultureCard v-for="card in cultureCards" :key="card.title" :image="card.image" :title="card.title"
                :description="card.description" :link="card.link" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 教育 -->
  <section class="socialAction-education">
    <!-- 裝飾花紋 -->
    <span class="socialAction-education__bg">
      <img :src="educationBg" alt="" />
    </span>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <div class="socialAction-education__inner">
            <div class="socialAction-education__heading">
              <p class="socialAction-education__eyebrow">education</p>
              <div class="socialAction-education__title-row">
                <span class="socialAction-education__bar"></span>
                <h2 class="socialAction-education__title">教育</h2>
              </div>
              <p class="socialAction-education__lead">
                所謂「智慧的人」，就是無論在何種環境， 皆能在自己所處的地方， 闊達地創造美、利、善價值的人， 去磨鍊、培養這種智慧， 即是「創價教育」的意義。
              </p>
            </div>
            <div class="socialAction-education__grid">
              <AppCultureCard v-for="card in educationCards" :key="card.title" :image="card.image" :title="card.title"
                :description="card.description" :link="card.link" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 和平 -->
  <section class="socialAction-peace">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <div class="socialAction-peace__inner">
            <div class="socialAction-peace__heading">
              <p class="socialAction-peace__eyebrow">peace</p>
              <div class="socialAction-peace__title-row">
                <span class="socialAction-peace__bar"></span>
                <h2 class="socialAction-peace__title">和平</h2>
              </div>
              <p class="socialAction-peace__lead">
                「和平」不在遙遠的地方，而是在自己所在之處， 在與這位朋友見面、與那位朋友結緣當中， 在不斷的誠實對話之中！
              </p>
            </div>
            <div class="socialAction-peace__grid">
              <AppCultureCard v-for="card in peaceCards" :key="card.title" :image="card.image" :title="card.title"
                :description="card.description" :link="card.link" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 社會貢獻 -->
  <section class="socialAction-contribution">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <div class="socialAction-contribution__inner">
            <div class="socialAction-contribution__heading">
              <p class="socialAction-contribution__eyebrow">Social contribution</p>
              <div class="socialAction-contribution__title-row">
                <span class="socialAction-contribution__bar"></span>
                <h2 class="socialAction-contribution__title">社會貢獻</h2>
              </div>
              <p class="socialAction-contribution__lead">
                創價懷抱「人飢己飢、人溺己溺」精神，積極展開社會關懷行動，不僅為弱勢族群送去溫暖，每當國內外有重大災難發生時，更在第一時間前往協助，為災民送去希望光輝。
              </p>
            </div>
            <div class="socialAction-contribution__panel">
              <AppCultureCard v-for="card in contributionCards" :key="card.title" :image="card.image"
                :title="card.title" :description="card.description" :link="card.link" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <AppFloatButtons />

  <AppFooter />
</template>
