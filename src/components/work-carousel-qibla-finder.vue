<template>
<div class="carousel-wrapper">
  <div class="slides" ref="slidesContainer">
  <figure class="slide slide-1" :class="{'active': getCurrentSlide() == 1}">
    <picture class="with-details" @click="navigateTo('/work/qibla-finder')">
      <img src="../assets/images/google-qibla-finder-01.jpg" alt="Qibla Finder homepage">
    </picture>
    <figcaption>Qibla Finder was Google's Ramadan site for 2017, a complex web app which uses the user's location and compass to show them
    the direction to Mecca, and 3D elements to provide an immersive experience. <a href="https://qiblafinder.withgoogle.com" target="_blank">qiblafinder.withgoogle.com</a>
    <a href="https://qiblafinder.withgoogle.com" target="_blank" rel="noopener">See the site</a></figcaption>
    <router-link :to="'/work/qibla-finder'" exact class="rarr">Details</router-link>
  </figure>
  <figure class="slide slide-2" :class="{'active': getCurrentSlide() == 2}">
    <picture class="with-details" @click="navigateTo('/work/qibla-finder')">
      <img src="../assets/images/google-qibla-finder-03.jpg" alt="Qibla Finder">
    </picture>
    <figcaption>Tech used on the site included Angular, Three.js, geolocation, and Web Navigator APIs.</figcaption>
    <router-link :to="'/work/qibla-finder'" exact class="rarr">Details</router-link>
  </figure>
  <figure class="slide slide-3" :class="{'active': getCurrentSlide() == 3}">
    <picture class="with-details" @click="navigateTo('/work/qibla-finder')">
      <img src="../assets/images/google-qibla-finder-02.jpg" alt="Qibla Finder">
    </picture>
    <figcaption>Qibla Finder was well-received and has been kept live after Ramadan 2017 and actively developed since then.</figcaption>
    <router-link :to="'/work/qibla-finder'" exact class="rarr">Details</router-link>
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
export default class WorkCarouselQiblaFinder extends Vue {
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

  getCurrentSlide() {
    return this.currentSlide;
  }

  getLastSlide() {
    return this.totalSlides;
  }

  setPreviousSlide() {
    this.currentSlide = this.getCurrentSlide() - 1;
  }

  setNextSlide() {
    this.currentSlide = this.getCurrentSlide() + 1;
  }

  navigateTo(route: string) {
    this.$router.push(route);
  }
}
</script>

<style scoped lang="scss">
@import '../shared/scss/work-carousel';
</style>