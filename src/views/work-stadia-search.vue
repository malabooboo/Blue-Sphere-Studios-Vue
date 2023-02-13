<template>
  <div class="page-wrapper">
    <section class="bs-grid">
      <h2 class="primary-heading
                 bs-grid-col-12
                 bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        Stadia Platform Search
      </h2>
      <div class="summary
                  bs-grid-col-12
                  bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        <p>The search bar lets users easily look up games available on Stadia from the site's main navigation and includes completion suggestions and similar game recommendations. Stadia launched without a search feature and the game library grew to 172 games by March 2021. Just before the launch of Platform Search's launch, a search function was the number one requested feature by the Stadia community.</p>
        <p>I worked with the team to build the front end of the Platform Search and the search results page, making sure it worked well in all screen sizes, and a solid experience from an accessibility standpoint: keyboard / "d-pad" (controller) navigation and screen reader-friendly.</p>
      </div>
    </section>
    <section class="compare bs-grid">
      <div class="before-after figure-wrapper
                  bs-grid-col-12
                  bs-grid-sm-offset-1 bs-grid-sm-col-10">
        <figure>
          <picture>
            <source srcset="@/assets/images/portfolio/stadia-search-desktop.webp" type="image/webp">
            <img src="@/assets/images/portfolio/stadia-search-desktop.png" alt="Stadia search on desktop">
          </picture>
          <figcaption>Stadia search on desktop</figcaption>
        </figure>
        <figure>
          <picture>
            <source srcset="@/assets/images/portfolio/stadia-search-results.webp" type="image/webp">
            <img src="@/assets/images/portfolio/stadia-search-results.png" alt="Stadia search results">
          </picture>
          <figcaption>Stadia search results</figcaption>
        </figure>
      </div>
    </section>

    <section class="contributions bs-grid">
      <h2 class="bs-grid-col-12
                 bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        Contributions
      </h2>
      <div class="bs-grid-col-12
                 bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        <ul>
          <li>Was responsible for logic determining the search field's expanded/ collapsed state based on numerous variables, such as triggered state, screen size, and a previously submitted search query.</li>
          <li>Consulted with accessibility specialists to make sure the accessibility was solid.</li>
          <li>Thoroughly tested screen reader, keyboard, and controller navigation</li>
          <li>Added voiceover announce message when search results have loaded</li>
        </ul>
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
export default class WorkStadiaSearch extends Vue {}
</script>

<style scoped lang="scss">
@import '../shared/scss/vars';
@import '../shared/scss/mixins';
@import '../shared/scss/grid';
@import '../shared/scss/work';

.compare.bs-grid {
  padding-bottom: 0;
}

.before-after {
  gap: 20px;

  @include bp-sm {
    display: flex;
  }
}
</style>
