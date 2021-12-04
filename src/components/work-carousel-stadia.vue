<template>
<div class="carousel-wrapper">
  <div class="slides">
  <figure class="slide slide-1" :class="{'active': getCurrentSlide() == 1}">
    <picture>
      <source srcset="../assets/images/google-stadia-01.webp" type="image/webp">
      <source srcset="../assets/images/google-stadia-01.jpg" type="image/jpeg">
      <img src="../assets/images/google-stadia-01.jpg" alt="Google Stadia launch splash screen">
    </picture>
    <figcaption>
      I handled some of the homepage animations for the Google Stadia launch as a 20% project, then joined the team full-time shortly after.
      <a href="https://stadia.google.com">stadia.google.com</a>
    </figcaption>
  </figure>
  <figure class="slide slide-2" :class="{'active': getCurrentSlide() == 2}">
    <picture>
      <source srcset="../assets/images/google-stadia-02.webp" type="image/webp">
      <source srcset="../assets/images/google-stadia-02.jpg" type="image/jpeg">
      <img src="../assets/images/google-stadia-02.jpg" alt="Google Stadia PWA allows Stadia to be playable on iOS devices">
    </picture>
    <figcaption>Stadia launched an iOS beta which involved converting the website into a PWA.</figcaption>
  </figure>
  <figure class="slide slide-3" :class="{'active': getCurrentSlide() == 3}">
    <picture>
      <source srcset="../assets/images/google-stadia-03.webp" type="image/webp">
      <source srcset="../assets/images/google-stadia-03.jpg" type="image/jpeg">
      <img src="../assets/images/google-stadia-03.jpg" alt="Google Stadia platform search">
    </picture>
    <figcaption>Implemented Stadia search, one of the most requested features as the game library grew.</figcaption>
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
export default class WorkCarouselStadia extends Vue {
  private currentSlide: number = 1;
  private totalSlides: number = 3;

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