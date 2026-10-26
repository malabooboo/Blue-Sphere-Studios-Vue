<template>
<div class="carousel-wrapper">
  <div class="carousel-slides" ref="slidesContainer">
    <figure class="slide slide-1" :class="{'slide--active': getCurrentSlide() == 1}">
      <picture class="with-details" @click="navigateTo('/work/google-earth')">
        <img src="../assets/images/google-earth-splash-2.jpg" alt="Google Earth launch splash screen">
      </picture>
      <figcaption>The new Google Earth launched on Earth Day, 2017. I was responsible for building the front end platform for the first version of Voyager, the content
        feed feature of the new Google Earth. <a href="http://earth.google.com" target="_blank">earth.google.com</a></figcaption>
      <router-link :to="'/work/google-earth'" exact class="rarr">Details</router-link>
    </figure>
    <figure class="slide slide-2" :class="{'slide--active': getCurrentSlide() == 2}">
      <picture class="with-details" @click="navigateTo('/work/google-earth')">
        <img src="../assets/images/google-earth-mission-blue-02.jpg" alt="Google Earth Voyager templates">
      </picture>
      <figcaption>The templates are currently being used by many of Google Earth's content partners, including BBC, National Geographic,
        NASA, and the Jane Goodall Institute.</figcaption>
      <router-link :to="'/work/google-earth'" exact class="rarr">Details</router-link>
    </figure>
    <figure class="slide slide-3" :class="{'slide--active': getCurrentSlide() == 3}">
      <picture class="with-details" @click="navigateTo('/work/google-earth')">
        <img src="../assets/images/google-earth-national-treasures.jpg" alt="Google Earth Voyager templates">
      </picture>
      <figcaption></figcaption>
      <router-link :to="'/work/google-earth'" exact class="rarr">Details</router-link>
    </figure>
    <figure class="slide slide-4" :class="{'slide--active': getCurrentSlide() == 4}">
      <picture class="with-details" @click="navigateTo('/work/google-earth')">
        <img src="../assets/images/google-earth-mission-blue-01.jpg" alt="Google Earth Voyager templates">
      </picture>
      <figcaption></figcaption>
      <router-link :to="'/work/google-earth'" exact class="rarr">Details</router-link>
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
export default class WorkCarouselEarth extends WorkCarousel {}
</script>

<style scoped lang="scss">
@use '../shared/scss/work-carousel' as *;
</style>