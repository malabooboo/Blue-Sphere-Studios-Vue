<template>
  <div class="site-width work-container">
    <h2>Work</h2>
    <div class="work-google">
      <div class="carousel-content bs-grid no-padding">
        <div class="recent-work bs-grid-col-12 bs-grid-sm-col-4">
          <p class="intro">
            Over the last {{ tenure }} years as a User Experience Engineer on
            several Google and YouTube teams in London and the California Bay
            Area, I've had the opportunity to work with some amazing people on
            many different projects.
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
            <WorkCarouselStadia
              v-if="currentWork == 'google-stadia' && !isResizing"
            />
            <WorkCarouselYouTube
              v-if="currentWork == 'youtube' && !isResizing"
            />
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
import { Component, Prop, Vue } from 'vue-property-decorator';
import WorkCarouselStadia from '@/components/work-carousel-stadia.vue';
import WorkCarouselYouTube from '@/components/work-carousel-youtube.vue';
import WorkCarouselEarth from '@/components/work-carousel-earth.vue';
import WorkCarouselQiblaFinder from '@/components/work-carousel-qibla-finder.vue';
import WorkCarouselPetra from '@/components/work-carousel-petra.vue';
import WorkCarouselCloudBlog from '@/components/work-carousel-cloud-blog.vue';

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
  tenure = 3;
  currentWork = 'google-stadia';
  @Prop() isResizing?: boolean;

  private startYear = 2013;
  private currentYear = new Date().getFullYear();

  setWork(work: string) {
    this.currentWork = work;
  }

  private mounted() {
    this.tenure = this.yearsSince_(this.startYear, this.currentYear);
  }

  private yearsSince_(date1: number, date2: number): number {
    return date2 - date1;
  }

  private getWork(): string {
    return this.currentWork;
  }
}
</script>

<style scoped lang="scss">
@import '../shared/scss/vars';
@import '../shared/scss/mixins';
@import '../shared/scss/grid';

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
