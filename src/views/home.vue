<template>
  <div class="router-wrapper">
    <section class="section-hero bs-grid" id="home">
      <Hero />
    </section>
    <section class="section-work bs-grid" id="work">
      <Work />
    </section>
    <section class="section-past-work bs-grid" id="past-work">
      <PastWork class="in-view" :class="{'in-view': sectionSeenState['past-work']}" />
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
import {Component, Prop, Watch, Vue} from 'vue-property-decorator';
import Hero from '@/components/hero.vue';
import Work from '@/components/work.vue';
import PastWork from '@/components/past-work.vue';
import Stats from '@/components/stats.vue';
import About from '@/components/about.vue';
import Contact from '@/components/contact.vue';
import SectionPositionInfo from '../shared/interfaces';

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
  @Prop() private scrollValue?: number;

  /** The current section info. */
  private currentSection: SectionPositionInfo = {
    name: 'home',
    yPositionStart: 0,
    yPositionEnd: 0,
  };

  /** An array of the sections and their info */
  private sectionPositions: SectionPositionInfo[] = [];

  /** The 'seen' state of each section for the build-in animation. */
  private sectionSeenState: SectionState = {
    'past-work': false,
    'stats': false,
    'about': false,
    'contact': false,
  };

  /*
   * Triggers the nav show/hide, and current section indicator.
   * Watches the scoll value property, the scrollTop value passed down from the
   * parent component.
   */
  @Watch('scrollValue')
  private onScrollValueChanged(value: number, oldValue: number) {
    if (!this.sectionPositions) {
      return;
    }

    const viewportHeight = document.documentElement.clientHeight;
    const adjustedPosition = value + viewportHeight - viewportHeight * .6;

    for (const section of this.sectionPositions) {
      // Sets the current section based on the scroll position.
      if (value > section.yPositionStart && value < section.yPositionEnd) {
        this.currentSection = section;
      }

      // Sets 'seen' value to trigger build-in animation
      if (adjustedPosition > section.yPositionStart) {
        const keys = Object.keys(this.sectionSeenState);
        for (const key of keys) {
          if (key === section.name) {
            this.sectionSeenState[key] = true;
          }

          // Exception for the bottom-most section.  Bulid-in at the same time
          // as the about section.
          if (key === 'about') {
            const lastSection = 'contact';
            this.sectionSeenState[lastSection] = true;
          }
        }
      }
    }
  }

  /**
   * Watches currentSection for changes and emits it up to the parent for
   * adding/removing the current section styling in the SiteHeader component.
   * (This could be done by adding a class name to the body, but doing it this
   * way to learn Vue).
   */
  @Watch('currentSection')
  private onCurrentSectionChanged(value: number, oldValue: number) {
    this.$emit('section-change', this.currentSection);
  }

  private mounted() {
    this.setSectionsInfo();
  }

  /**
   * Creates the array of sections and their scroll positions.
   */
  private setSectionsInfo() {
    const sectionsEl = document.querySelector('.router-wrapper');
    if (!sectionsEl) {
      return;
    }

    const sectionPositions: SectionPositionInfo[] = [];
    const sectionsEls = sectionsEl.querySelectorAll('section');
    for (const section of sectionsEls) {
      const yPositionStart = section.offsetTop;
      const yPositionEnd = section.offsetTop + section.offsetHeight;
      const sectionInfo: SectionPositionInfo = {
        name: section.id,
        yPositionStart,
        yPositionEnd,
      };
      sectionPositions.push(sectionInfo);
    }
    this.sectionPositions = sectionPositions;
  }
}
</script>
