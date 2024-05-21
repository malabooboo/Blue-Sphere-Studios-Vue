<template>
  <div class="carousel-wrapper">
    <div class="carousel-slides" ref="slidesContainer">
      <figure
        class="slide slide-1"
        :class="{ 'slide--active': getCurrentSlide() == 1 }"
        id="slide-1"
      >
        <picture>
          <source
            srcset="../assets/images/youtube-playables-01.webp"
            type="image/webp"
          />
          <source
            srcset="../assets/images/youtube-playables-01.png"
            type="image/jpeg"
          />
          <img
            src="../assets/images/youtube-playables-01.png"
            alt="YouTube Playables on the YouTube home feed"
            ref="firstImageEl"
          />
        </picture>
        <figcaption>
          In my current role at Google, I am a UX Engineer for a new YouTube
          feature, "Playables", which brings playable games into YouTube. I work
          closely with UX to prototype designs and user journeys, and with
          engineering to bring those prototypes to production.
          <a href="https://youtube.com/playables" target="_blank"
            >youtube.com/playables</a
          >
        </figcaption>
      </figure>
      <figure
        class="slide slide-2"
        :class="{ 'slide--active': getCurrentSlide() == 2 }"
        id="slide-2"
      >
        <iframe
          v-bind:width="mediaWidth"
          v-bind:height="mediaHeight"
          src="https://www.youtube.com/embed/kUt4DStyM8Q?si=OS4nr4OOy0P_kAmC&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <figcaption>
          Months before engineering had written any production code, I created a
          hi-fidelity prototype to give the team a very real experience of what
          the product would be, and a served as valuable reference for engineers
          as we started building the product.
        </figcaption>
      </figure>
    </div>

    <nav class="carousel-controls">
      <div
        class="carousel-controls--previous"
        @click="setPreviousSlide($event)"
        :class="{ hidden: getCurrentSlide() == 1 }"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#arrow-left"
          ></use>
        </svg>
      </div>
      <div
        class="carousel-controls--next"
        @click="setNextSlide($event)"
        :class="{ hidden: getCurrentSlide() == getLastSlide() }"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#arrow-right"
          ></use>
        </svg>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class WorkCarouselYouTube extends Vue {
  mediaWidth = 1200;
  mediaHeight = 710;
  private currentSlide = 1;
  private totalSlides?: number;

  mounted() {
    const slidesContainer = this.$refs.slidesContainer as HTMLElement;
    this.totalSlides = slidesContainer.querySelectorAll('figure').length;
    slidesContainer.querySelectorAll('figure').forEach((slide) => {
      slide.style.width = slidesContainer.offsetWidth + 'px';
    });

    // Uses the dimensions of the first image to set the width and height
    // for the video iframe YouTube embed
    const firstImageEl = this.$refs.firstImageEl as HTMLImageElement;
    firstImageEl.addEventListener('load', () => {
      this.mediaWidth = firstImageEl.clientWidth;
      this.mediaHeight = firstImageEl.clientHeight;
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
    const currentSlideEl = document.getElementById(
      'slide-' + this.currentSlide,
    );
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
