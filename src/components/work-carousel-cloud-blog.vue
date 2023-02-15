<template>
<div class="carousel-wrapper">
  <div class="carousel-slides" ref="slidesContainer">
    <figure class="slide slide-1" :class="{'slide--active': getCurrentSlide() == 1}" id="slide-1">
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
export default class WorkCarouselCloudBlog extends Vue {
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
@import '../shared/scss/vars';
@import '../shared/scss/work-carousel';

.carousel-controls {
  display: none;
}
</style>