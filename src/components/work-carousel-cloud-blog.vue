<template>
<div class="carousel-wrapper">
  <div class="slides">
  <figure class="slide slide-1" :class="{'active': getCurrentSlide() == 1}">
    <picture>
      <source srcset="../assets/images/google-cloud-blog-01.webp" type="image/webp">
      <source srcset="../assets/images/google-cloud-blog-01.jpg" type="image/jpeg">
      <img src="../assets/images/google-cloud-blog-01.jpg" alt="Google Cloud Blog">
    </picture>
    <figcaption>Google Cloud launched it's own blog, which consolidated many of the different Cloud-related blogs around the web
      provided a single place for Cloud's announcements and articles.
    </figcaption>
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
export default class WorkCarouselCloudBlog extends Vue {
  private currentSlide: number = 1;
  private totalSlides: number = 1;

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