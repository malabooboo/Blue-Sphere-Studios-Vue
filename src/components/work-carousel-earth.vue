<template>
<div class="carousel-wrapper">
  <div class="slides">
    <figure class="slide slide-1" :class="{'active': getCurrentSlide() == 1}">
      <img src="../assets/images/google-earth-splash-2.jpg" alt="Google Earth launch splash screen">
      <figcaption>The new Google Earth launched on Earth Day, 2017. I was responsible for building the front end platform for the first version of Voyager, the content
        feed feature of the new Google Earth. <a href="http://earth.google.com" target="_blank">earth.google.com</a></figcaption>
    </figure>
    <figure class="slide slide-2" :class="{'active': getCurrentSlide() == 2}">
      <img src="../assets/images/google-earth-mission-blue-02.jpg" alt="Google Earth Voyager templates">
      <figcaption>The templates are currently being used by many of Google Earth's content partners, including BBC, National Geographic,
        NASA, and the Jane Goodall Institute.</figcaption>
    </figure>
    <figure class="slide slide-3" :class="{'active': getCurrentSlide() == 3}">
      <img src="../assets/images/google-earth-national-treasures.jpg" alt="Google Earth Voyager templates">
      <figcaption></figcaption>
    </figure>
    <figure class="slide slide-4" :class="{'active': getCurrentSlide() == 4}">
      <img src="../assets/images/google-earth-mission-blue-01.jpg" alt="Google Earth Voyager templates">
      <figcaption></figcaption>
    </figure>
  </div>
  <nav class="carousel-controls">
    <div class="carousel-controls--previous" @click="setPreviousSlide()" :class="{'hidden': getCurrentSlide() == 1}">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use>
      </svg>
    </div>
    <div class="carousel-controls--next" @click="setNextSlide()" :class="{'hidden': getCurrentSlide() == getLastSlide()}">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
      </svg>
    </div>
  </nav>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class WorkCarouselEarth extends Vue {
  private currentSlide: number = 1;
  private totalSlides: number = 4;

  private getCurrentSlide() {
    return this.currentSlide;
  }

  private getLastSlide() {
    return this.totalSlides;
  }

  private setPreviousSlide() {
    this.currentSlide = this.getCurrentSlide() - 1;
  }

  private setNextSlide() {
    this.currentSlide = this.getCurrentSlide() + 1;
  }
}
</script>

<style scoped lang="scss">
@import '../shared/scss/work-carousel';
</style>