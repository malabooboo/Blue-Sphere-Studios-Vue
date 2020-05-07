<template>
  <div id="app">
    <div class="wrapper">
      <SiteHeader :scrollValue="scrollValue" :currentSection="currentSection" />
      <router-view :scrollValue="scrollValue" v-on:section-change="onSectionChange($event)"></router-view>
      <SiteFooter />
      <SvgAssets />
    </div>
  </div>
</template>

<style src="./app.scss" lang="scss"></style>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
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
  private scrollValue: number = 0;
  private timeout?: number;

  /** The current section info. */
  private currentSection: SectionPositionInfo = {
    name: 'home',
    yPositionStart: 0,
    yPositionEnd: 0,
  };

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

  private onSectionChange(currentSection: SectionPositionInfo) {
    this.currentSection =  currentSection;
  }
}
</script>
