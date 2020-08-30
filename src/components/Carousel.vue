<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="margin-bottom: 5rem; text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        class="slider"
        caption="PGO Ur1"
        text="承襲歐式經典設計語彙完美交融經典與現代電能科技以簡約優雅的曲線打造車身外型加上最新科技產品與未來感的元素創造出經典、科技、時尚、優雅和品味於一身將Ur1打造成最獨一無二的工藝精品"
        img-src="https://media.zenfs.com/zh-tw/2gamesome_455/d898bda2e82840ea004f51a7285405c1"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide
      class="slider"
        img-src="https://cdn2.techbang.com/system/excerpt_images/76903/original/b0ee386f0194e3fed9eca3a35cdf1995.png?1584092543"
      >
        <h1>多種繽紛顏色讓您選擇</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide class="slider">
        
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/msg-1.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide class="slider">
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="280"
            src="../assets/msg-2.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
    <Info />
    <Info2 />
  </div>
</template>

<script>
import Info from "./info/info";
import Info2 from "./info/info2";
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  components: {
    Info,
    Info2,
  },
  methods: {
    onSlideStart(slide) {
      if (slide) this.sliding = true;
    },
    onSlideEnd(slide) {
      if (slide) this.sliding = false;
    },
  },
};
</script>

<style scoped>
.slider {
  max-height: 30em;
}
</style>
