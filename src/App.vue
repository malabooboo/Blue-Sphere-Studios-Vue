<template>
  <div id="app">
    <div class="wrapper">
      <SiteHeader :currentSection="currentSection" :isWorkDetailPage="isWorkDetailPage" />
      <transition name="fade">
        <router-view v-on:section-change="onSectionChange($event)"></router-view>
      </transition>
      <SiteFooter />
      <SvgAssets />
    </div>
  </div>
</template>

<style src="./app.scss" lang="scss"></style>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import { Route } from 'vue-router';
import SiteHeader from '@/shared/site-header.vue';  // @ is an alias to /src
import SiteFooter from '@/shared/site-footer.vue';
import SvgAssets from '@/shared/svg-assets.vue';
import { trackPageView } from '@/shared/analytics';

const DEFAULT_TITLE = document.title;
const metaDescription = document.querySelector('head meta[name="description"]');
const DEFAULT_DESCRIPTION = metaDescription?.getAttribute('content') || '';

@Component({
  components: {
    SiteHeader,
    SiteFooter,
    SvgAssets,
  },
})
export default class App extends Vue {
  isWorkDetailPage = false;

  /** The id of the home page section currently in view. */
  currentSection = 'home';

  onSectionChange(currentSection: string) {
    this.currentSection = currentSection;
  }

  @Watch('$route', { immediate: true, deep: true })
  private onUrlChange(newVal: Route) {
    if (!newVal) {
      return;
    }

    // Toggles top nav type
    if (newVal.path) {
      this.isWorkDetailPage =
        (newVal.path).includes('/work/') || (newVal.path).includes('/resume') || (newVal.path).includes('/about-me');
    }

    // Changes title, description, falling back to the defaults in index.html
    document.title = newVal.meta?.title || DEFAULT_TITLE;
    metaDescription?.setAttribute('content', newVal.meta?.description || DEFAULT_DESCRIPTION);

    // Before the initial route resolves (e.g. a lazy-loaded page on first
    // load), $route is a placeholder '/' that matches nothing. Don't count it.
    if (newVal.matched.length) {
      trackPageView(newVal.path, document.title);
    }
  }
}
</script>
