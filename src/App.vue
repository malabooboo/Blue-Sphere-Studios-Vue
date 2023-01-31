<template>
  <div id="app">
    <div class="wrapper">
      <SiteHeader :scrollValue="scrollValue" :currentSection="currentSection" :isWorkDetailPage="isWorkDetailPage" />
      <transition name="fade">
        <router-view :scrollValue="scrollValue" v-on:section-change="onSectionChange($event)"></router-view>
      </transition>
      <SiteFooter />
      <SvgAssets />
    </div>
  </div>
</template>

<style src="./app.scss" lang="scss"></style>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import SiteHeader from '@/shared/site-header.vue';  // @ is an alias to /src
import SiteFooter from '@/shared/site-footer.vue';
import SvgAssets from '@/shared/svg-assets.vue';
import SectionPositionInfo from './shared/interfaces';

@Component({
  components: {
    SiteHeader,
    SiteFooter,
    SvgAssets,
  },
})
export default class App extends Vue {
  scrollValue: number = 0;
  isWorkDetailPage: boolean = false;

  /** The current section info. */
  currentSection: SectionPositionInfo = {
    name: 'home',
    yPositionStart: 0,
    yPositionEnd: 0,
  };

  private timeout?: number;

  onSectionChange(currentSection: SectionPositionInfo) {
    this.currentSection =  currentSection;
  }

  @Watch('$route', { immediate: true, deep: true })
  private onUrlChange(newVal: any) {
    if (!newVal) {
      return;
    }

    // Toggles top nav type
    if (newVal.path) {
      this.isWorkDetailPage = (newVal.path).includes('/work/');
    }

    // Changes title, description
    if (newVal.meta && newVal.meta.title) {
      document.title =
        `${newVal.meta.title} - Blue Sphere Studios` ||
        'Blue Sphere Studios / Tim Malabuyo / Front end developer / UX Engineer / Portfolio';
    }
    if (newVal.meta && newVal.meta.description) {
      const metaDescription = document.querySelector(
        'head meta[name="description"]',
      );
      metaDescription?.setAttribute('content', newVal.meta.description);
    }
  }

  private mounted() {
    window.addEventListener('scroll', this.scrollHandler, false);
  }

  private scrollHandler() {
    // Debouncer with requestAnimationFrame.
    if (this.timeout) {
      window.cancelAnimationFrame(this.timeout);
    }
    this.timeout = window.requestAnimationFrame(() => {
      this.scrollValue = document.documentElement.scrollTop;
    });
  }
}
</script>
