<template>
<div class="carousel-wrapper">
  <div class="carousel-slides" ref="slidesContainer">
    <figure class="slide slide-1" :class="{'slide--active': getCurrentSlide() == 1}" id="slide-1">
      <img src="../assets/images/google-petra-01.jpg" alt="Petra Treks homepage">
      <figcaption>
        An immersive Treks experience for Petra in Jordan, famous for its temples and tombs. The site launched in 47 languages and
        allowed users to rediscover the lost city with Google Street View technology, audio narration and rich imagery.
        <a href="https://g.co/Petra" target="_blank">g.co/Petra</a>
      </figcaption>
    </figure>
    <figure class="slide slide-2" :class="{'slide--active': getCurrentSlide() == 2}" id="slide-2">
      <img src="../assets/images/google-petra-02.jpg" alt="Petra Treks">
      <figcaption></figcaption>
    </figure>
    <figure class="slide slide-3" :class="{'slide--active': getCurrentSlide() == 3}" id="slide-3">
      <img src="../assets/images/google-petra-04.jpg" alt="Petra VR">
      <figcaption>
        Petra Cardboard VR built on the success of the Petra Treks site and allowed users to explore Petra in 3D Web VR with Google Cardboard.
        <a href="https://g.co/PetraVR" target="_blank">g.co/PetraVR</a>
      </figcaption>
    </figure>
    <figure class="slide slide-4" :class="{'slide--active': getCurrentSlide() == 4}" id="slide-4">
      <img src="../assets/images/google-petra-03.jpg" alt="Petra VR">
      <figcaption></figcaption>
    </figure>
    <figure class="slide slide-5" :class="{'slide--active': getCurrentSlide() == 5}" id="slide-5">
      <img src="../assets/images/google-petra-05.jpg" alt="Petra VR">
      <figcaption></figcaption>
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
export default class WorkCarouselPetra extends Vue {
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