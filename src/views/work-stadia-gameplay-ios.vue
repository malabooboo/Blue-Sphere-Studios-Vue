<template>
  <div class="page-wrapper">
    <section class="bs-grid">
      <h2 class="primary-heading
                 bs-grid-col-12
                 bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        Stadia gameplay on iOS
      </h2>
      <div class="summary
                  bs-grid-col-12
                  bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        <p>To continue the mission of making Stadia the easiest place to play, we launched the first version of gameplay on iOS devices in 2020 as a web app. This closes the largest remaining gap in Stadia's availability on mobile devices, unlocking gameplay on over 200M iPhones and iPads in launched regions.</p>
        <p>I was the primary UXE that implemented the design system in the various views and components of stadia.google.com, adapting the web experience to mobile and tablet form factors.</p>
      </div>
    </section>

    <section class="full-bleed">
      <div class="screens bs-grid">
        <div class="before-after figure-wrapper
                    bs-grid-col-12
                    bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
          <figure>
            <picture>
              <source srcset="@/assets/images/portfolio/stadia-ios-loading-framed.webp, @/assets/images/portfolio/stadia-ios-loading-framed_2x.webp 2x" type="image/webp">
              <img src="@/assets/images/portfolio/stadia-ios-loading-framed_2x.jpg" alt="iPhone screenshot of stadia.google.com loading in Safari">
            </picture>
            <figcaption>Loading stadia.google.com in Safari</figcaption>
          </figure>
          <figure>
            <picture>
              <source srcset="@/assets/images/portfolio/stadia-ios-pwa-framed.webp, @/assets/images/portfolio/stadia-ios-pwa-framed_2x.webp 2x" type="image/webp">
              <img src="@/assets/images/portfolio/stadia-ios-pwa-framed_2x.jpg" alt="iPhone screenshot of adding Stadia to the iOS homescreen as a progressive Web app">
            </picture>
            <figcaption>Adding Stadia to the iOS homescreen as a progressive web app</figcaption>
          </figure>
          <figure>
            <picture>
              <source srcset="@/assets/images/portfolio/stadia-ios-homepage-pwa-framed.webp, @/assets/images/portfolio/stadia-ios-homepage-pwa-framed_2x.webp 2x" type="image/webp">
              <img src="@/assets/images/portfolio/stadia-ios-homepage-pwa-framed_2x.jpg" alt="iPhone screenshot of the Stadia homepage as a PWA">
            </picture>
            <figcaption>Gaming on Stadia on iOS unlocked!</figcaption>
          </figure>
        </div>
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
          <li>The team leveraged my foundational work of implementing the design system grids, margins</li>
          <li>Refactored the utility nav items to display in fullscreen in mobile device sizes</li>
          <li>Added back button to the top navigation to allow users in PWA to go back in their history, rather always going back to Home or Store</li>
          <li>Authored a device orientation service and implemented a "rotate your device" dialog to encourage users to rotate to landscape mode for gameplay</li>
          <li>Implemented the responsive grid to all Stadia's views</li>
        </ul>
      </div>
    </section>

    <section class="contributions-figure bs-grid">
      <div class="before-after figure-wrapper
                  bs-grid-col-12
                  bs-grid-sm-md-offset-1 bs-grid-sm-md-col-10">
        <figure>
          <picture>
            <source srcset="@/assets/images/portfolio/stadia-ios-ipad-home-framed.webp, @/assets/images/portfolio/stadia-ios-ipad-home-framed_2x.webp 2x" type="image/webp">
            <img src="@/assets/images/portfolio/stadia-ios-ipad-home-framed_2x.jpg" alt="Stadia on an iPad">
          </picture>
          <figcaption>Stadia on an iPad became my favorite way to play Stadia</figcaption>
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
export default class WorkStadiaGameplayIos extends Vue {}
</script>

<style scoped lang="scss">
@import '../shared/scss/vars';
@import '../shared/scss/mixins';
@import '../shared/scss/grid';
@import '../shared/scss/work';

.full-bleed {
  margin-top: 30px;
  padding-bottom: 40px;
}

.figure-wrapper {
  background-color: none;

  @include bp-sm {
    display: flex;
    gap: 20px;
  }
}

.contributions ul {
  margin-bottom: 0;
}

.contributions-figure.bs-grid {
  padding-top: 0;
}
</style>
