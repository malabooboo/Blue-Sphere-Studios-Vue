<template>
<div class="site-width work-container">
  <h2>Work</h2>
  <div class="work-google">
    <p class="intro">Over the last {{tenure}} years as part of Google's Stadia, Cloud, and Brand Studio teams in London and Mountain View, I have contributed to many different projects, including...</p>
    <div class="carousel-content bs-grid no-padding">
      <ul class="recent-work bs-grid-col-12 bs-grid-sm-col-4">
        <li><a @click="setWork('google-stadia')" :class="{'active': currentWork == 'google-stadia'}">Google Stadia</a></li>
        <li><a @click="setWork('google-earth')" :class="{'active': currentWork == 'google-earth'}">Google Earth</a></li>
        <li><a @click="setWork('qibla-finder')" :class="{'active': currentWork == 'qibla-finder'}">Qibla Finder</a></li>
        <li><a @click="setWork('cloud-blog')" :class="{'active': currentWork == 'cloud-blog'}">Cloud Blog</a></li>
        <li><a @click="setWork('petra')" :class="{'active': currentWork == 'petra'}">Petra <span class="mobile-hide">Treks / Petra VR</span></a></li>
      </ul>
      <div class="carousel bs-grid-col-12 bs-grid-sm-col-8">
        <WorkCarouselStadia v-if="currentWork == 'google-stadia'" />
        <WorkCarouselEarth v-if="currentWork == 'google-earth'" />
        <WorkCarouselQiblaFinder v-if="currentWork == 'qibla-finder'" />
        <WorkCarouselCloudBlog v-if="currentWork == 'cloud-blog'" />
        <WorkCarouselPetra v-if="currentWork == 'petra'" />
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import WorkCarouselStadia from '@/components/work-carousel-stadia.vue';
import WorkCarouselEarth from '@/components/work-carousel-earth.vue';
import WorkCarouselQiblaFinder from '@/components/work-carousel-qibla-finder.vue';
import WorkCarouselPetra from '@/components/work-carousel-petra.vue';
import WorkCarouselCloudBlog from '@/components/work-carousel-cloud-blog.vue';

@Component({
  components: {
    WorkCarouselStadia,
    WorkCarouselEarth,
    WorkCarouselQiblaFinder,
    WorkCarouselPetra,
    WorkCarouselCloudBlog,
  },
})
export default class Work extends Vue {
  private tenure: number = 3;
  private startYear: number = 2013;
  private currentYear = new Date().getFullYear();
  private currentWork = 'google-stadia';

  private mounted() {
    this.tenure = this.yearsSince_(this.startYear, this.currentYear);
  }

  private yearsSince_(date1: number, date2: number): number {
    return date2 - date1;
  }

  private getWork(): string {
    return this.currentWork;
  }

  private setWork(work: string) {
    this.currentWork = work;
  }
}
</script>

<style scoped lang="scss">
@import '../shared/scss/vars';
@import '../shared/scss/mixins';
@import '../shared/scss/grid';

// :host {
//   display: block;

//   @include site-width;
// }

.intro {
  margin-bottom: 40px;
}

.work-logo {
  display: block;
  margin: 20px auto 10px;
  width: auto;
  height: 40px;
  text-align: center;
}

.carousel-content {
  overflow: visible;
}

.recent-work {
  margin-bottom: 10px;
  text-align: center;

  @include bp-sm {
    margin-bottom: 40px;
    margin-left: 30px;
    text-align: left;
  }

  li {
    display: inline-block;
    list-style: none;

    @include tablet {
      display: block;
      list-style: disc;
    }
  }

  a {
    cursor: pointer;
    display: block;
    padding: 3px 10px;
  }

  a.active {
    color: $color-black;
    font-weight: 400;
    cursor: auto;
  }
}

.carousel {
  position: relative;
}
</style>