<template>
  <div class="page-wrapper">
    <section class="bs-grid">
      <h2 class="primary-heading
                 bs-grid-col-12
                 bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        Google Immersive Stream for Games
      </h2>
      <div class="summary
                  bs-grid-col-12
                  bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        <p>In early 2021 Stadia presented a plan to provide Stadia's streaming technology to partners, a key deliverable being a client SDK. The SDK's UI library was designed so it could either be used with no modification, or customized for branding. The first of these partnerships was with AT&T, and launched Batman Arkham Knight in Oct 2021.</p>
        <p>I was the sole UX Engineer that planned, and built the UI on LitElement and TypeScript, and continue to work in partnership with SWEs building the API and UX Design in defining the design system needed for the Google Immersive Stream for Games SDK.</p>
      </div>
    </section>

    <section class="compare bs-grid">
      <div class="immersive-stream-figures figure-wrapper
                  bs-grid-col-12
                  bs-grid-sm-md-offset-1 bs-grid-sm-md-col-10">
        <figure>
          <picture>
            <source srcset="@/assets/images/portfolio/2021-10-18_google-stream2.webp, @/assets/images/portfolio/2021-10-18_google-stream2_2x.webp 2x" type="image/webp">
            <img src="@/assets/images/portfolio/2021-10-18_google-stream2_2x.jpg" alt="Batman Arkham Knight offerred by AT&amp;T, using Google Immersive Stream for Games">
          </picture>
          <figcaption>Batman Arkham Knight offerred by AT&amp;T, using Google Immersive Stream for Games</figcaption>
        </figure>
        <figure>
          <picture>
            <source srcset="@/assets/images/portfolio/2021-10-18_google-stream.webp, @/assets/images/portfolio/2021-10-18_google-stream_2x.webp 2x" type="image/webp">
            <img src="@/assets/images/portfolio/2021-10-18_google-stream_2x.jpg" alt="Batman Arkham Knight in game menu">
          </picture>
          <figcaption>Batman Arkham Knight in game menu</figcaption>
        </figure>
      </div>
    </section>
    
    <section class="contributions bs-grid">
      <h2 class="bs-grid-col-12
                 bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        Contributions
      </h2>
      <div class="carousel-feature-copy
                  bs-grid-col-12
                  bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        <ul>
          <li>Discussed and co-authored planning and design docs</li>
          <li>Researched how to build out the UI components and settled on using Material Design</li>
          <li>Learned Lit, a Web Components base class and templating system to use as the foundation for the UI templating</li>
          <li>Built the first several components, and integrated them into the first version of SDK, giving other engineers the ability to use them throughout the Stream UI.</li>
          <li>Implemented a robust testing suite, and wrote tests for all UI components during development</li>
        </ul>
        <p>Batman Arkham Knight on Google Immersive Stream for Games launched Oct 18, 2021 at <a href="https://att.com/playbatman" target="_blank" rel="noopener">att.com/playbatman</a>, and was the first example of Google's game streaming technology by a partner. It garnered positive external coverage: 
          <a href="https://9to5google.com/2021/10/20/batman-arkham-knight-white-label-stadia-att/" target="_blank" rel="noopener">9to5Google</a>, <a href="https://www.theverge.com/2021/10/21/22738550/arkham-knight-google-stadia-att" target="_blank" rel="noopener">TheVerge</a></p>
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
export default class WorkStadiaImmersiveStream extends Vue {}
</script>

<style scoped lang="scss">
@import '../shared/scss/vars';
@import '../shared/scss/mixins';
@import '../shared/scss/grid';
@import '../shared/scss/work';

.immersive-stream-figures {
  display: flex;
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

.compare.bs-grid {
  padding-bottom: 0;
}
</style>
