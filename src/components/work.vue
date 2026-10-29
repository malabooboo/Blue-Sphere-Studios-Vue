<template>
  <div class="site-width work-container">
    <h2>Work</h2>
    <div class="work-google">
      <div class="carousel-content bs-grid no-padding">
        <div class="recent-work bs-grid-col-12 bs-grid-sm-col-4">
          <p class="intro">
            Of my {{ careerExperience }} years of experience in the tech industry, I have spent {{ tenure }} of those years as an engineer at Alphabet, including Google, YouTube, and Waymo teams in the California Bay
            Area and London, and have  had the opportunity to work with some amazing people on many different projects.  Some highlights include the following: 
          </p>
          <ul>
            <li>
              <a
                @click="setWork('google-stadia')"
                :class="{ active: currentWork == 'google-stadia' }"
                >Google Stadia</a
              >
            </li>
            <li>
              <a
                @click="setWork('youtube')"
                :class="{ active: currentWork == 'youtube' }"
                >YouTube</a
              >
            </li>
            <li>
              <a
                @click="setWork('google-earth')"
                :class="{ active: currentWork == 'google-earth' }"
                >Google Earth</a
              >
            </li>
            <li>
              <a
                @click="setWork('qibla-finder')"
                :class="{ active: currentWork == 'qibla-finder' }"
                >Qibla Finder</a
              >
            </li>
            <li>
              <a
                @click="setWork('cloud-blog')"
                :class="{ active: currentWork == 'cloud-blog' }"
                >Cloud Blog</a
              >
            </li>
            <li>
              <a
                @click="setWork('petra')"
                :class="{ active: currentWork == 'petra' }"
                >Petra <span class="mobile-hide">Treks / Petra VR</span></a
              >
            </li>
          </ul>
        </div>
        <div class="carousel bs-grid-col-12 bs-grid-sm-col-8">
          <transition name="fade">
            <WorkCarouselStadia v-if="currentWork == 'google-stadia'" />
            <WorkCarouselYouTube v-if="currentWork == 'youtube'" />
            <WorkCarouselEarth v-if="currentWork == 'google-earth'" />
            <WorkCarouselQiblaFinder v-if="currentWork == 'qibla-finder'" />
            <WorkCarouselCloudBlog v-if="currentWork == 'cloud-blog'" />
            <WorkCarouselPetra v-if="currentWork == 'petra'" />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WorkCarouselStadia from '@/components/work-carousel-stadia.vue';
import WorkCarouselYouTube from '@/components/work-carousel-youtube.vue';
import WorkCarouselEarth from '@/components/work-carousel-earth.vue';
import WorkCarouselQiblaFinder from '@/components/work-carousel-qibla-finder.vue';
import WorkCarouselPetra from '@/components/work-carousel-petra.vue';
import WorkCarouselCloudBlog from '@/components/work-carousel-cloud-blog.vue';
import { ALPHABET_START_YEAR, CAREER_START_YEAR, yearsSince } from '@/shared/career';

@Component({
  components: {
    WorkCarouselStadia,
    WorkCarouselYouTube,
    WorkCarouselEarth,
    WorkCarouselQiblaFinder,
    WorkCarouselPetra,
    WorkCarouselCloudBlog,
  },
})
export default class Work extends Vue {
  readonly careerExperience = yearsSince(CAREER_START_YEAR);
  readonly tenure = yearsSince(ALPHABET_START_YEAR);
  currentWork = 'google-stadia';

  setWork(work: string) {
    this.currentWork = work;
  }

  private getWork(): string {
    return this.currentWork;
  }
}
</script>

<style scoped lang="scss">
@use '../shared/scss/vars' as *;
@use '../shared/scss/mixins' as *;
@use '../shared/scss/grid' as *;

.intro {
  margin-bottom: 40px;
  text-align: left;
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
