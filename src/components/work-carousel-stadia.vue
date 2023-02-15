<template>
<div class="carousel-wrapper">
  <div class="carousel-slides" ref="slidesContainer">
    <figure class="slide slide-1" :class="{'slide--active': getCurrentSlide() == 1}" id="slide-1">
      <picture class="with-details" @click="navigateTo('/work/stadia-launch')">
        <source srcset="@/assets/images/google-stadia-01.webp" type="image/webp">
        <source srcset="@/assets/images/google-stadia-01.jpg" type="image/jpeg">
        <img src="@/assets/images/google-stadia-01.jpg" alt="Google Stadia launch splash screen">
      </picture>
      <figcaption>
        I handled some of the homepage animations for the Google Stadia launch as a 20% project, then joined the team full-time shortly after.
      </figcaption>
      <router-link :to="'/work/stadia-launch'" exact class="rarr">Details</router-link>
    </figure>
    <figure class="slide slide-2" :class="{'slide--active': getCurrentSlide() == 2}" id="slide-2">
      <picture class="with-details" @click="navigateTo('/work/stadia-home-redesign')">
        <source srcset="@/assets/images/google-stadia-05.webp" type="image/webp">
        <source srcset="@/assets/images/google-stadia-05.jpg" type="image/jpeg">
        <img src="@/assets/images/google-stadia-05.jpg" alt="Google Stadia web redesign">
      </picture>
      <figcaption>
        A complete redesign of the Stadia's homepage, which surfaced previously buried features such as free trials and games currently being played.
      </figcaption>
      <router-link :to="'/work/stadia-home-redesign'" exact class="rarr">Details</router-link>
    </figure>
    <figure class="slide slide-3" :class="{'slide--active': getCurrentSlide() == 3}" id="slide-3">
      <picture class="with-details" @click="navigateTo('/work/stadia-game-menu')">
        <source srcset="@/assets/images/google-stadia-06.webp" type="image/webp">
        <source srcset="@/assets/images/google-stadia-06.jpg" type="image/jpeg">
        <img src="@/assets/images/google-stadia-06.jpg" alt="Google Stadia game menu redesign">
      </picture>
      <figcaption>
        A consolidation and redesign of the game menu.
        <a href="https://stadia.google.com">stadia.google.com</a>
      </figcaption>
      <router-link :to="'/work/stadia-game-menu'" exact class="rarr">Details</router-link>
    </figure>
    <figure class="slide slide-4" :class="{'slide--active': getCurrentSlide() == 4}" id="slide-4">
      <picture class="with-details" @click="navigateTo('/work/stadia-gameplay-on-ios')">
        <source srcset="@/assets/images/google-stadia-02.webp" type="image/webp">
        <source srcset="@/assets/images/google-stadia-02.jpg" type="image/jpeg">
        <img src="@/assets/images/google-stadia-02.jpg" alt="Google Stadia PWA allows Stadia to be playable on iOS devices">
      </picture>
      <figcaption>Stadia launched an iOS beta which involved converting the website into a PWA.</figcaption>
      <router-link :to="'/work/stadia-gameplay-on-ios'" exact class="rarr">Details</router-link>
    </figure>
    <figure class="slide slide-5" :class="{'slide--active': getCurrentSlide() == 5}" id="slide-5">
      <picture class="with-details" @click="navigateTo('/work/stadia-search')">
        <source srcset="@/assets/images/google-stadia-03.webp" type="image/webp">
        <source srcset="@/assets/images/google-stadia-03.jpg" type="image/jpeg">
        <img src="@/assets/images/google-stadia-03.jpg" alt="Google Stadia platform search">
      </picture>
      <figcaption>Implemented Stadia search, one of the most requested features in 2021 as the game library continued to grow.</figcaption>
      <router-link :to="'/work/stadia-search'" exact class="rarr">Details</router-link>
    </figure>
    <figure class="slide slide-6" :class="{'slide--active': getCurrentSlide() == 6}" id="slide-6">
      <picture class="with-details" @click="navigateTo('/work/immersive-stream-for-games')">
        <source srcset="@/assets/images/google-stadia-04.webp" type="image/webp">
        <source srcset="@/assets/images/google-stadia-04.jpg" type="image/jpeg">
        <img src="@/assets/images/google-stadia-04.jpg" alt="Google Immersive Stream for Games">
      </picture>
      <figcaption>Built the Web UI for the first release of Google Immersive Stream for Games.</figcaption>
      <router-link :to="'/work/immersive-stream-for-games'" exact class="rarr">Details</router-link>
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
export default class WorkCarouselStadia extends Vue {
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