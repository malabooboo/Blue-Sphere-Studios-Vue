<template>
<div class="carousel-wrapper">
  <div class="slides" ref="slidesContainer">
  <figure class="slide slide-1" :class="{'active': getCurrentSlide() == 1}">
    <picture>
      <source srcset="../assets/images/google-stadia-05.webp" type="image/webp">
      <source srcset="../assets/images/google-stadia-05.jpg" type="image/jpeg">
      <img src="../assets/images/google-stadia-05.jpg" alt="Google Stadia web redesign">
    </picture>
    <figcaption>
      A complete redesign of the Stadia's homepage, which surfaced previously buried features such as free trials and games currently being played.
      <a href="https://stadia.google.com">stadia.google.com</a>
    </figcaption>
  </figure>
  <figure class="slide slide-2" :class="{'active': getCurrentSlide() == 2}">
    <picture>
      <source srcset="../assets/images/google-stadia-06.webp" type="image/webp">
      <source srcset="../assets/images/google-stadia-06.jpg" type="image/jpeg">
      <img src="../assets/images/google-stadia-06.jpg" alt="Google Stadia game menu redesign">
    </picture>
    <figcaption>
      A consolidation and redesign of the game menu.
      <a href="https://stadia.google.com">stadia.google.com</a>
    </figcaption>
  </figure>
  <figure class="slide slide-3" :class="{'active': getCurrentSlide() == 3}">
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
  <figure class="slide slide-4" :class="{'active': getCurrentSlide() == 4}">
    <picture>
      <source srcset="../assets/images/google-stadia-02.webp" type="image/webp">
      <source srcset="../assets/images/google-stadia-02.jpg" type="image/jpeg">
      <img src="../assets/images/google-stadia-02.jpg" alt="Google Stadia PWA allows Stadia to be playable on iOS devices">
    </picture>
    <figcaption>Stadia launched an iOS beta which involved converting the website into a PWA.</figcaption>
  </figure>
  <figure class="slide slide-5" :class="{'active': getCurrentSlide() == 5}">
    <picture>
      <source srcset="../assets/images/google-stadia-03.webp" type="image/webp">
      <source srcset="../assets/images/google-stadia-03.jpg" type="image/jpeg">
      <img src="../assets/images/google-stadia-03.jpg" alt="Google Stadia platform search">
    </picture>
    <figcaption>Implemented Stadia search, one of the most requested features in 2021 as the game library continued to grow.</figcaption>
  </figure>
  <figure class="slide slide-6" :class="{'active': getCurrentSlide() == 6}">
    <picture>
      <source srcset="../assets/images/google-stadia-04.webp" type="image/webp">
      <source srcset="../assets/images/google-stadia-04.jpg" type="image/jpeg">
      <img src="../assets/images/google-stadia-04.jpg" alt="Google Immersive Stream for Games">
    </picture>
    <figcaption>Built the Web UI for the first release of Google Immersive Stream for Games.</figcaption>
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
  private totalSlides?: number;

  mounted() {
    const slidesContainer = this.$refs.slidesContainer as HTMLElement;
    this.totalSlides = slidesContainer.querySelectorAll('figure').length;

    // Sets the height of main image area based on ratio 12:7 to prevent
    // weird rendering before the image loads.
    const srcWidth = 1200;
    const srcHeight = 710;
    const slide = slidesContainer.querySelector('figure');
    const slideWidth = slide?.offsetWidth;
    slidesContainer.style.minHeight =
        slideWidth! * (srcHeight / srcWidth) + 'px';
  }

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