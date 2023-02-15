<template>
<div class="carousel-wrapper">
  <div class="carousel-slides" ref="slidesContainer">
    <figure class="slide slide-1" :class="{'slide--active': getCurrentSlide() == 1}" id="slide-1">
      <picture class="with-details" @click="navigateTo('/work/qibla-finder')">
        <img src="../assets/images/google-qibla-finder-01.jpg" alt="Qibla Finder homepage">
      </picture>
      <figcaption>Qibla Finder was Google's Ramadan site for 2017, a complex web app which uses the user's location and compass to show them
      the direction to Mecca, and 3D elements to provide an immersive experience. <a href="https://qiblafinder.withgoogle.com" target="_blank">qiblafinder.withgoogle.com</a>
      <a href="https://qiblafinder.withgoogle.com" target="_blank" rel="noopener">See the site</a></figcaption>
      <router-link :to="'/work/qibla-finder'" exact class="rarr">Details</router-link>
    </figure>
    <figure class="slide slide-2" :class="{'slide--active': getCurrentSlide() == 2}" id="slide-2">
      <picture class="with-details" @click="navigateTo('/work/qibla-finder')">
        <img src="../assets/images/google-qibla-finder-03.jpg" alt="Qibla Finder">
      </picture>
      <figcaption>Tech used on the site included Angular, Three.js, geolocation, and Web Navigator APIs.</figcaption>
      <router-link :to="'/work/qibla-finder'" exact class="rarr">Details</router-link>
    </figure>
    <figure class="slide slide-3" :class="{'slide--active': getCurrentSlide() == 3}" id="slide-3">
      <picture class="with-details" @click="navigateTo('/work/qibla-finder')">
        <img src="../assets/images/google-qibla-finder-02.jpg" alt="Qibla Finder">
      </picture>
      <figcaption>Qibla Finder was well-received and has been kept live after Ramadan 2017 and actively developed since then.</figcaption>
      <router-link :to="'/work/qibla-finder'" exact class="rarr">Details</router-link>
    </figure>
  </div>

  <nav class="carousel-controls">
    <div class="carousel-controls--previous" @click="setPreviousSlide($event)" :class="{'hidden': getCurrentSlide() == 1}">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use>
      </svg>
    </div>
    <div class="carousel-controls--next" @click="setNextSlide($event)" :class="{'hidden': getCurrentSlide() == getLastSlide()}">
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
  private currentSlide = 1;
  private totalSlides?: number;

  mounted() {
    const slidesContainer = this.$refs.slidesContainer as HTMLElement;
    this.totalSlides = slidesContainer.querySelectorAll('figure').length;
    slidesContainer.querySelectorAll('figure').forEach((slide) => {
      slide.style.width = slidesContainer.offsetWidth + 'px';
    });
  }

  getCurrentSlide() {
    return this.currentSlide;
  }

  getLastSlide() {
    return this.totalSlides;
  }

  setPreviousSlide(event: Event) {
    this.currentSlide = this.getCurrentSlide() - 1;
    this.navigateToSlide(event);
  }

  setNextSlide(event: Event) {
    this.currentSlide = this.getCurrentSlide() + 1;
    this.navigateToSlide(event);
  }

  navigateToSlide(event: Event) {
    const currentSlideEl =
        document.getElementById('slide-' + this.currentSlide);
    currentSlideEl!.scrollIntoView({
      // behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  navigateTo(route: string) {
    this.$router.push(route);
  }
}
</script>

<style scoped lang="scss">
@import '../shared/scss/work-carousel';
</style>