<template>
  <div class="page-wrapper">
    <section class="bs-grid">
      <h2 class="primary-heading
                 bs-grid-col-12
                 bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        Stadia launch, November 19, 2019
      </h2>
      <div class="summary
                  bs-grid-col-12
                  bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        <p>I reached out to the Stadia team in the summer of 2019 to see how I could contribute to the exciting, new product, "<a href="https://blog.google/technology/developers/pushing-limits-streaming-technology/" target="_blank" rel="noopener">Project Stream</a>" which was to be Stadia.</p>
        <p>Stadia UX was glad to have the help and I helped close some high prority launch bugs, but chief among them was the task of working with Motion Design to implement the Stadia "S" logo loading animation for the website.</p>
      </div>
    </section>

    <section class="highlights bs-grid">
      <div class="divider bs-grid-col-12"></div>
      <h2 class="bs-grid-col-12
                 bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        Highlights
      </h2>
      <div class="bs-grid-col-12
                 bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        <ul>
          <li>Contributed to the Stadia launch on Nov 19, 2019 by closing high priority UX bugs for their initial product launch, implementing the Stadia "S" cold start animation, and performant homepage animations</li>
          <li><a href="https://blog.google/products/stadia/stadia-launches-today/" target="_blank" rel="noopener">Launch announcement</a> on Keyword Blog</li>
          <li>My work with the team leading up to launch and beyond directly led to the offer of a full time role on the UXE team in March 2020</li>
        </ul>
      </div>
      <div class="side-by-side figure-wrapper
                  bs-grid-col-12
                  bs-grid-sm-md-offset-1 bs-grid-sm-md-col-10">
        <figure>
          <picture>
            <img src="@/assets/images/portfolio/stadia-s-loading-animation.gif" alt="The Stadia cold start S logo animation">
            <figcaption>The Stadia cold start S logo animation, still in use by Stadia's turn down in 2022</figcaption>
          </picture>
        </figure>
        <figure>
          <picture>
            <source srcset="@/assets/images/portfolio/stadia-home-launch.webp, @/assets/images/portfolio/stadia-home-launch_2x.webp 2x" type="image/webp">
            <source srcset="@/assets/images/portfolio/stadia-home-launch.jpg, @/assets/images/portfolio/stadia-home-launch_2x.jpg 2x" type="image/jpg">
            <img src="@/assets/images/portfolio/stadia-home-launch_2x.jpg" alt="The Stadia homepage at launch in 2019">
          </picture>
          <figcaption>The Stadia homepage at launch in 2019</figcaption>
        </figure>
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
export default class WorkStadiaLaunch extends Vue {}
</script>

<style scoped lang="scss">
@import '../shared/scss/vars';
@import '../shared/scss/mixins';
@import '../shared/scss/grid';
@import '../shared/scss/work';

.side-by-side {
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
</style>
