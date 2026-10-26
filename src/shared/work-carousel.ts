import {Component, Vue} from 'vue-property-decorator';

/**
 * Shared behavior for the work carousels. Each carousel component extends this
 * and provides a `slidesContainer` ref wrapping its <figure> slides.
 */
@Component
export default class WorkCarousel extends Vue {
  currentSlide = 1;
  totalSlides = 0;

  private slideObserver?: IntersectionObserver;

  mounted() {
    const slides = this.getSlides();
    this.totalSlides = slides.length;

    // Keeps currentSlide in sync however the carousel is scrolled: arrow
    // buttons, swiping, or trackpad. A slide is current once it's mostly in
    // view (isIntersecting alone would also match slides scrolling out).
    const threshold = 0.6;
    this.slideObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.intersectionRatio >= threshold) {
          this.currentSlide = slides.indexOf(entry.target as HTMLElement) + 1;
        }
      }
    }, {root: this.$refs.slidesContainer as HTMLElement, threshold});
    slides.forEach((slide) => this.slideObserver!.observe(slide));
  }

  beforeDestroy() {
    this.slideObserver?.disconnect();
  }

  getCurrentSlide() {
    return this.currentSlide;
  }

  getLastSlide() {
    return this.totalSlides;
  }

  setPreviousSlide() {
    this.navigateToSlide(this.currentSlide - 1);
  }

  setNextSlide() {
    this.navigateToSlide(this.currentSlide + 1);
  }

  navigateToSlide(slideNumber: number) {
    const slide = this.getSlides()[slideNumber - 1];
    if (!slide) {
      return;
    }
    this.currentSlide = slideNumber;
    slide.scrollIntoView({
      block: 'nearest',
      inline: 'center',
    });
  }

  navigateTo(route: string) {
    this.$router.push(route);
  }

  private getSlides(): HTMLElement[] {
    const slidesContainer = this.$refs.slidesContainer as HTMLElement;
    return Array.from(slidesContainer.querySelectorAll<HTMLElement>(':scope > figure'));
  }
}
