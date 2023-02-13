<template>
  <div class="page-wrapper">
    <section class="bs-grid">
      <h2 class="primary-heading
                 bs-grid-col-12
                 bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        Google Earth 2017 Launch
      </h2>
      <div class="summary
                  bs-grid-col-12
                  bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
          <p>In what started as a 20% role, I ended up taking the lead on the front end development of the Voyager platform, the marquee feature of the new Google.</p>
          <p>1I worked closely with the Google Earth team and partners to create a feasible partner-facing content platform. This gave me a chance to work closely with engineers and UX designers outside of Brand Studio, and take the lead on a project's technical design, documentation, development, and refinement.</p>
      </div>
    </section>
    <section class="full-bleed">
      <div class="launch-screen bs-grid">
        <div class="figure-wrapper
                    bs-grid-col-12
                    bs-grid-sm-md-offset-1 bs-grid-sm-md-col-10">
          <figure>
            <picture>
              <source srcset="@/assets/images/portfolio/2017-04-18-google-earth.webp, @/assets/images/portfolio/2017-04-18-google-earth-2x.webp 2x" type="image/webp">
              <img src="@/assets/images/portfolio/2017-04-18-google-earth-2x.jpg" alt="Google Earth splash screen">
            </picture>
            <figcaption>Google Earth splash screen</figcaption>
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
          <li>Took on the lead engineer role in discussions with Earth engineers and UX to build a flexible front end platform in HTML, CSS, and JavaScript for Earth Feed</li>
          <li>Authored a custom carousel for the platform, which converts Maps KML data to JSON to build the necessary markup</li>
          <li>Created a local development environment to automate much of the templating for rapid development</li>
          <li>Created a staging environment and an interactive template creation tool where stakeholders can easily preview the current templates</li>
          <li>Authored and published detailed documentation on <a href="https://developers.google.com/earth/feed/" target="_blank" rel="noopener">developers.google.com/earth/feed/</a> for the Earth team and partners</li>
          <li>Initiated and authored a detailed project technical design doc</li>
        </ul>
      </div>
    </section>

    <section class="links bs-grid">
      <div class="divider bs-grid-col-12"></div>
      <h2 class="bs-grid-col-12
                 bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        Links
      </h2>
      <div class="bs-grid-col-12
                 bs-grid-sm-md-offset-3
                 bs-grid-sm-md-col-6">
        <ul>
          <li><a href="https://blog.google/products/earth/welcome-home-new-google-earth/" target="_blank" rel="noopener">Google blog launch announcement</a></li>
          <li><a href="https://blog.google/products/earth/get-lost-earths-beauty-space/" target="_blank" rel="noopener">Google blog feature on Earth View</a></li>
        </ul>
      </div>
    </section>

    <section class="full-bleed">
      <div class="additional-images bs-grid">
        <div class="side-by-side figure-wrapper
                  bs-grid-col-12
                  bs-grid-sm-md-offset-1 bs-grid-sm-md-col-10">
          <figure>
            <picture>
              <img src="@/assets/images/portfolio/modal-google-earth-1.jpg" alt="Voyager splash page">
            </picture>
            <figcaption>Voyager splash page</figcaption>
          </figure>
          <figure>
            <picture>
              <img src="@/assets/images/portfolio/modal-google-earth-2.jpg" alt="Default panel">
            </picture>
            <figcaption>Default panel</figcaption>
          </figure>
          <figure>
            <picture>
              <img src="@/assets/images/portfolio/modal-google-earth-3.jpg" alt="Customized dark mode panel">
            </picture>
            <figcaption>Customized dark mode panel</figcaption>
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

.contributions.bs-grid,
.links.bs-grid {
  padding-bottom: 0;
}

ul {
  margin-bottom: 0;
}

.side-by-side {
  gap: 20px;

  @include bp-sm-md {
    display: flex;
    flex-wrap: wrap;

    figure {
      flex: 1 1 45%;
    }
  }
}
</style>
