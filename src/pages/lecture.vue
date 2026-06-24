<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppBanner from '../components/AppBanner.vue';
import AppFooter from '../components/AppFooter.vue';
import AppFloatButtons from '../components/AppFloatButtons.vue';
import AppLectureCard from '../components/AppLectureCard.vue';

import sectionBg from '@/assets/images/lecture/lecture-section-bg.svg';

const lectureCards = [
  {
    date: '2026年3月份',
    title: '致妙一女居士函',
    entries: [
      { label: '文言文', text: '信奉法華經之人如冬，冬必為春。自昔未聞未見有冬盡秋來之事，亦未聞信奉法華經者終為凡夫。經文有云：「若有聞法者，無一不成佛。」' },
      { label: '白話文', text: '信奉《法華經》的人就像冬天，冬天一定會轉為春天。從來不曾聽到或看見冬天過了又返回秋天的事，也不曾聽到信奉《法華經》的人最終會是凡夫。經文有說：「若是有聽聞法華經的人，沒有一人不能成佛。」（方便品）' },
    ],
    source: '（御書文白並列本Ⅱ，160頁）',
    link: '#',
  },
  {
    date: '2026年1月份',
    title: '不可惜所領事 (覆四條金吾書其八)',
    entries: [
      { label: '文言文', text: '一生如夢，明日不可期。縱淪為乞食，不可損法華經。同為一生，豈能徒示人以愁容，誠如此誓狀所書，不稍諂媚，言行我素可也。諂媚於人，終必受惡。' },
      { label: '白話文', text: '人生就像作夢一般，無法期待一定能活到明天。縱使淪落成為乞丐，也不可以損害《法華經》的名字。同樣是一生，怎麼能夠隨便向人們露出愁容，就如同您在這誓言中所書寫的，不必有絲毫諂媚，言行舉止依照自己的信念行事就可以了。諂媚別人，反而一定不會有好結果。' },
    ],
    source: '（御書文白並列本Ⅲ，75頁）',
    link: '#',
  },
  {
    date: '2025年10月份',
    title: '地獄即寂光御書 (覆上野遺孀女居士書)',
    entries: [
      { label: '文言文', text: '聽得法華經法門更為砥礪信心，方是真正之道心者。天台云：「從藍而青。」此釋之意，謂青出於藍，染之更勝於藍。法華經如藍，修行如染，愈深而愈勝也。' },
      { label: '白話文', text: '聽到《法華經》法門而更加磨練信心，是真正有求道心的人。天台說：「從藍而青。」（摩訶止觀）這段解釋的意思是說，青色是從蓼藍裡提煉出來的，經反覆浸染後顏色就變得比蓼藍更深。《法華經》就像蓼藍，修行就像浸染，修行得越深就像顏色變得更藍。' },
    ],
    source: '（御書文白並列本Ⅱ，71～72頁）',
    link: '#',
  },
  {
    date: '2025年9月份',
    title: '轉重輕受法門',
    entries: [
      { label: '文言文', text: '涅槃經有云轉重輕受之法門。先業甚重，今生未盡，未來必受地獄之苦，然今生值如斯之重苦，地獄之苦豁然消滅，死後得受人天、三乘、一乘之益。' },
      { label: '白話文', text: '《涅槃經》有一個「轉重輕受」法門。過去世造了深重的業，今生沒有能夠全部消除，未來世一定會遭受地獄的痛苦，但是，今生為了法華經承受這樣沈重的苦痛，地獄的痛苦立刻全部消除，死後可以獲得人界、天界、聲聞、緣覺、菩薩界、佛界的功德。' },
    ],
    source: '（御書文白並列本Ⅰ，211頁）',
    link: '#',
  },
  {
    date: '2025年8月份',
    title: '辨大人與女居士書',
    entries: [
      { label: '文言文', text: '第六天魔王，興十軍，與法華經行者在生死海中，爭奪凡聖同居之穢土。日蓮以身當之，起大兵二十餘年。日蓮無一度退卻之心。' },
      { label: '白話文', text: '第六天魔王，發起十軍，與法華經行者在生死海之中，爭奪凡夫及聖人同居的穢土。日蓮自身肩負這場戰爭，發起大兵與第六天魔王戰鬥了二十多年。日蓮不曾有過一次生起退卻之心。' },
    ],
    source: '（御書文白並列本Ⅴ，35頁）',
    link: '#',
  },
  {
    date: '2025年6月份',
    title: '單衣抄',
    entries: [
      { label: '文言文', text: '日蓮若不出現於日本國，如來金言作虛，多寶證明又有何用？十方諸佛之言，皆成妄語歟！佛滅後二千二百二十餘年，月氏、漢土、日本不見「一切世間，多怨難信」之人。若無日蓮，佛語皆絕矣。' },
      { label: '白話文', text: '日蓮如果沒有出現在日本國，如來之金言將成為假話，多寶如來的證明又有什麼用呢？十方分身諸佛的證言，都成為謊言了吧！佛入滅後二千二百二十多年，印度、中國、日本沒有見到「一切世間的眾生多懷怨恨，而難於信受正法」的人。如果沒有日蓮，佛所說的話就徒勞無功了。' },
    ],
    source: '（御書文白並列本Ⅴ，162頁）',
    link: '#',
  },
];
</script>

<template>
  <AppHeader />
  <AppBanner title="座談會御書e講義" :breadcrumb="[{ label: '座談會御書e講義' }]" />

  <section class="l-lecture">
    <!-- 裝飾背景 -->
    <img class="l-lecture__bg" :src="sectionBg" alt="" />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 l-lecture__inner">
          <!-- 卡片格線 -->
          <div class="l-lecture__grid">
            <AppLectureCard v-for="(card, cardIndex) in lectureCards" :key="cardIndex" :date="card.date"
              :title="card.title" :entries="card.entries" :source="card.source" :link="card.link" />
          </div>

          <!-- 分頁 -->
          <nav class="l-lecture__pagination">
            <ul class="pagination mb-0">
              <li class="page-item">
                <a class="btn btn-icon btn-pagination-arrow" href="#">
                  <span class="btn-arrow btn-arrow--left">
                    <span class="btn-arrow__track">
                      <i class="fa-light fa-arrow-left"></i>
                      <i class="fa-light fa-arrow-left"></i>
                    </span>
                  </span>
                </a>
              </li>
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="btn btn-icon btn-pagination-arrow" href="#">
                  <span class="btn-arrow">
                    <span class="btn-arrow__track">
                      <i class="fa-light fa-arrow-right-long"></i>
                      <i class="fa-light fa-arrow-right-long"></i>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>

  <AppFloatButtons />
  <AppFooter />
</template>
