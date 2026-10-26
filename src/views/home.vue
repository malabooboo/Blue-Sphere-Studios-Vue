<template>
  <div class="router-wrapper">
    <section class="section-hero bs-grid" id="home">
      <Hero />
    </section>
    <section class="section-work bs-grid" id="work">
      <Work />
    </section>
    <section class="section-past-work bs-grid" id="past-work">
      <PastWork :class="{'in-view': sectionSeenState['past-work']}" />
    </section>
    <section class="section-stats bs-grid" id="stats">
      <Stats :class="{'in-view': sectionSeenState['stats']}" />
    </section>
    <section class="section-about bs-grid" id="about">
      <About :class="{'in-view': sectionSeenState['about']}" />
    </section>
    <section class="section-contact bs-grid" id="contact">
      <Contact :class="{'in-view': sectionSeenState['contact']}" />
    </section>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Hero from '@/components/hero.vue';
import Work from '@/components/work.vue';
import PastWork from '@/components/past-work.vue';
import Stats from '@/components/stats.vue';
import About from '@/components/about.vue';
import Contact from '@/components/contact.vue';

interface SectionState {
  'past-work': boolean;
  'stats': boolean;
  'about': boolean;
  'contact': boolean;
  [key: string]: boolean;
}

@Component({
  components: {
    Hero,
    Work,
    PastWork,
    Stats,
    About,
    Contact,
  },
})
export default class Home extends Vue {
  /** The 'seen' state of each section for the build-in animation. */
  sectionSeenState: SectionState = {
    'past-work': false,
    'stats': false,
    'about': false,
    'contact': false,
  };

  private observers: IntersectionObserver[] = [];

  private mounted() {
    const sections = Array.from(this.$el.querySelectorAll('section'));

    // Current section: whichever section crosses the middle of the viewport.
    // Emitted up to the parent for the SiteHeader's current section styling.
    // (This could be done by adding a class name to the body, but doing it
    // this way to learn Vue).
    const currentSectionObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.$emit('section-change', entry.target.id);
        }
      }
    }, {rootMargin: '-50% 0px -50% 0px'});

    // Build-in animation: a section is 'seen' once its top passes 40% of the
    // way down the viewport. The root extends far above the viewport so
    // sections skipped over by a jump (e.g. reload mid-page) also count.
    const seenObserver = new IntersectionObserver((entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.markSeen(entry.target.id);
          observer.unobserve(entry.target);
        }
      }
    }, {rootMargin: '100000px 0px -60% 0px'});

    for (const section of sections) {
      currentSectionObserver.observe(section);
      if (section.id in this.sectionSeenState) {
        seenObserver.observe(section);
      }
    }
    this.observers = [currentSectionObserver, seenObserver];
  }

  private beforeDestroy() {
    this.observers.forEach((observer) => observer.disconnect());
  }

  private markSeen(name: string) {
    this.sectionSeenState[name] = true;

    // Exception for the bottom-most section, which may never scroll far enough
    // up to trigger on its own. Build-in at the same time as the about section.
    if (name === 'about') {
      this.sectionSeenState.contact = true;
    }
  }
}
</script>
