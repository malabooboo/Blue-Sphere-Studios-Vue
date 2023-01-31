<template>
  <div class="page-wrapper">
    <!-- <div class="breadcrumbs bs-grid">
      <ul class="bs-grid-col-12">
        <li><router-link :to="'/'" exact>Home</router-link></li>
        <li><router-link :to="'/portfolio'" exact>Portfolio</router-link></li>
        <li><b>Stadia homepage redesign</b></li>
      </ul>
    </div> -->
    <section class="bs-grid">
      <h2 class="primary-heading bs-grid-col-12 bs-grid-sm-md-col-4">Stadia homepage redesign</h2>
      <div class="summary bs-grid-col-12 bs-grid-sm-md-col-8">
        <p>In 2022, a project began to completely redesign the Stadia.com homepage for logged-in users to increase game and feature discovery,
          highlight current activity on the plaform, feature the games in the existing library, and showcase the value of Stadia Pro.</p>
        <p>I was the primary UX Engineer on the project, building the UI, working with both software engineers and UX design.</p>
      </div>
    </section>
    <section class="compare bs-grid">
      <div class="divider bs-grid-col-12"></div>
      <h2 class="bs-grid-col-12 bs-grid-sm-md-col-4">Stadia homepage redesign, a comparison</h2>
      <div class="before-after bs-grid-col-12 bs-grid-sm-md-col-8">
        <figure class="figure-before">
          <figcaption>Previous Stadia homepage</figcaption>
          <picture>
            <source srcset="@/assets/images/portfolio/2022-09-28_stadia-home-before.webp, @/assets/images/portfolio/2022-09-28_stadia-home-before_2x.webp 2x" type="image/webp">
            <img src="@/assets/images/portfolio/2022-09-28_stadia-home-before_2x.jpg" alt="Previous homepage">
          </picture>
        </figure>
        <figure class="figure-after">
          <figcaption>New Stadia homepage design</figcaption>
          <picture>
            <source srcset="@/assets/images/portfolio/2022-09-28_stadia-home-redesign.webp, @/assets/images/portfolio/2022-09-28_stadia-home-redesign_2x.webp 2x" type="image/webp">
            <source srcset="@/assets/images/portfolio/2022-09-28_stadia-home-redesign.jpg, @/assets/images/portfolio/2022-09-28_stadia-home-redesign_2x.jpg 2x" type="image/jpg">
            <img src="@/assets/images/portfolio/2022-09-28_stadia-home-redesign_2x.jpg" alt="New Stadia homepage redesign in 2022">
          </picture>
        </figure>
      </div>
    </section>
    <section class="games bs-grid">
      <div class="divider bs-grid-col-12"></div>
      <h2 class="bs-grid-col-12 bs-grid-sm-md-col-4">Putting games front and center</h2>
      <div class="carousel-feature-copy bs-grid-col-12 bs-grid-sm-md-col-8">
        <p>A big part of the redesign was the hero carousel, which displayed large, engaging cards that covered the major areas of player intent, including resuming your gameplay, joining a public party, finding free trials, and seeing games new to Stadia Pro.</p>
        <p>These cards exposed features that were previously buried within menus often several clicks deep.</p>
        <figure class="carousel-feature-image">
          <picture>
            <source srcset="@/assets/images/portfolio/stadia-hero-carousel.webp, @/assets/images/portfolio/stadia-hero-carousel_2x.webp 2x" type="image/webp">
            <source srcset="@/assets/images/portfolio/stadia-hero-carousel.jpg, @/assets/images/portfolio/stadia-hero-carousel_2x.jpg 2x" type="image/jpg">
            <img src="@/assets/images/portfolio/stadia-hero-carousel_2x.jpg" alt="New Stadia homepage redesign in 2022">
          </picture>
          <figcaption>The hero carousel displayed large and varied, content-rich game cards.</figcaption>
        </figure>
      </div>
    </section>
    <section class="contributions bs-grid">
      <div class="divider bs-grid-col-12"></div>
      <h2 class="bs-grid-col-12 bs-grid-sm-md-col-4">My contributions</h2>
      <div class="carousel-feature-copy bs-grid-col-12 bs-grid-sm-md-col-8">
        <p>I was one of two UXE partnered with a team of software engineers tasked with building the redesigned homepage. I scoped the project tasks for UXE, was involved in daily standups, and authored much of the front-end code, leveraging existing components and building new ones.</p>
        <p>UXE acted as the bridge between UXD and engineering, and really owned the front-facing UX-related issues. This allowed SWE to focus on their tasks of authoring the middle and backend code and scaling.</p>
        <ul>
          <li>Scoped a UXE one-pager for project tasks</li>
          <li>Learned a new data architecture for this project, and designed many of the widgets, and added documentation</li>
          <li>Handled and managed the implementation of assets from UXD</li>
          <li>Implemented complex responsive carousel behavior from mobile to TV sizes</li>
        </ul>
      </div>
    </section>
    <section class="reception bs-grid">
      <div class="divider bs-grid-col-12"></div>
      <h2 class="bs-grid-col-12 bs-grid-sm-md-col-4">Reception</h2>
      <div class="carousel-feature-copy bs-grid-col-12 bs-grid-sm-md-col-8">
        <p>During user testing, the user surveys were overwhelmingly positive, above 90% just before launch. The new homepage was in the process of launching on September 29, 2022 when it was announced that Stadia would be turned down, so it never fully launched to all users, unfortunately.</p>
        <p>Despite only being ramped to small percentage of users, the intial reactions was already positive (<a href="https://www.reddit.com/r/Stadia/comments/xqmv7d/did_stadia_get_a_new_ui/" target="_blank" rel="noopener">Reddit</a>, <a href="https://twitter.com/ViviPlaysYT/status/1575222098456608768" target="_blank" rel="noopener">Twitter</a>)</p>
        <div class="carousel-animation">
          <figure class="figure-hero-carousel">
            <picture>
              <img src="@/assets/images/portfolio/2022-09-28_stadia-home-redesign-carousel_2x.gif" alt="An animation showing the types of card types in the hero carousel">
            </picture>
            <figcaption>The hero carousel in action in September 2022 just before Stadia's shutdown.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class WorkStadiaHomeRedesign extends Vue {}
</script>

<style scoped lang="scss">
@import '../shared/scss/vars';
@import '../shared/scss/mixins';
@import '../shared/scss/grid';
@import '../shared/scss/work';

.before-after {
  gap: 20px;

  .figure-before,
  .figure-after {
    width: 100%;
  }

  @include bp-sm {
    display: flex;

    .figure-before {
      width: 40%;
    }

    .figure-after {
      width: 60%;
    }
  }
}

.carousel-animation {
  width: 60%;
}
</style>
