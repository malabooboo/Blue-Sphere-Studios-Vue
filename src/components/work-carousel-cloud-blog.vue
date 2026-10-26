<template>
<div class="carousel-wrapper">
  <div class="carousel-slides" ref="slidesContainer">
    <figure class="slide slide-1" :class="{'slide--active': getCurrentSlide() == 1}">
      <picture>
        <source srcset="../assets/images/google-cloud-blog-01.webp" type="image/webp">
        <source srcset="../assets/images/google-cloud-blog-01.jpg" type="image/jpeg">
        <img src="../assets/images/google-cloud-blog-01.jpg" alt="Google Cloud Blog">
      </picture>
      <figcaption>Google Cloud launched it's own blog, which consolidated many of the different Cloud-related blogs around the web
        provided a single place for Cloud's announcements and articles. <a href="https://cloud.google.com/blog" target="_blank">cloud.google.com/blog</a>
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
import {Component} from 'vue-property-decorator';
import WorkCarousel from '@/shared/work-carousel';

@Component
export default class WorkCarouselCloudBlog extends WorkCarousel {}
</script>

<style scoped lang="scss">
@use '../shared/scss/vars' as *;
@use '../shared/scss/work-carousel' as *;

.carousel-controls {
  display: none;
}
</style>