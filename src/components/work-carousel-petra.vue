<template>
<div class="carousel-wrapper">
  <div class="slides" ref="slidesContainer">
    <figure class="slide slide-1" :class="{'active': getCurrentSlide() == 1}">
      <img src="../assets/images/google-petra-01.jpg" alt="Petra Treks homepage">
      <figcaption>
        An immersive Treks experience for Petra in Jordan, famous for its temples and tombs. The site launched in 47 languages and
        allowed users to rediscover the lost city with Google Street View technology, audio narration and rich imagery.
        <a href="https://g.co/Petra" target="_blank">g.co/Petra</a>
      </figcaption>
    </figure>
    <figure class="slide slide-2" :class="{'active': getCurrentSlide() == 2}">
      <img src="../assets/images/google-petra-02.jpg" alt="Petra Treks">
      <figcaption></figcaption>
    </figure>
    <figure class="slide slide-3" :class="{'active': getCurrentSlide() == 3}">
      <img src="../assets/images/google-petra-04.jpg" alt="Petra VR">
      <figcaption>
        Petra Cardboard VR built on the success of the Petra Treks site and allowed users to explore Petra in 3D Web VR with Google Cardboard.
        <a href="https://g.co/PetraVR" target="_blank">g.co/PetraVR</a>
      </figcaption>
    </figure>
    <figure class="slide slide-4" :class="{'active': getCurrentSlide() == 4}">
      <img src="../assets/images/google-petra-03.jpg" alt="Petra VR">
      <figcaption></figcaption>
    </figure>
    <figure class="slide slide-5" :class="{'active': getCurrentSlide() == 5}">
      <img src="../assets/images/google-petra-05.jpg" alt="Petra VR">
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
export default class WorkCarouselPetra extends Vue {
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