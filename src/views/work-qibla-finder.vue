<template>
  <div class="page-wrapper">
    <section class="bs-grid">
      <h2 class="primary-heading
                 bs-grid-col-12
                 bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        Qibla Finder
      </h2>
      <div class="summary
                  bs-grid-col-12
                  bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        <p>For 2017's month of Ramadan, Brand Studio EMEA produced Qibla Finder, an augmented reality web app, which helps Muslims find the direction of Mecca for prayer.</p>
        <p>The Qibla Finder web app achieved 2M+ unique users in its first 5 days, with 8M+ pageviews, with thousands of social mentions.</p>
        <p><a href="https://qiblafinder.withgoogle.com/" target="_blank" rel="noopener">qiblafinder.withgoogle.com</a></p>
      </div>
    </section>

    <section class="summary-image full-bleed">
      <div class="bs-grid">
        <div class="figure-wrapper
                    bs-grid-col-12
                    bs-grid-sm-md-offset-2 bs-grid-sm-md-col-8">
          <figure>
            <picture>
              <img src="@/assets/images/portfolio/modal-qibla-finder-2x.png" style="border: 0;" alt="Qibla Finder showing the way to Meca">
            </picture>
            <figcaption>Qibla Finder showing the way to Meca</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="compare bs-grid">
      <h2 class="bs-grid-col-12
                 bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        Contributions
      </h2>
      <div class="bs-grid-col-12
                 bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        <figure class="qibla-finder-animation">
          <img src="@/assets/images/portfolio/modal-qibla-finder-animated.gif" alt="An animation showing Qibla Finder showing the direction to Mecca">
          <figcaption>Qibla Finder showing the direction to Mecca</figcaption>
        </figure>
        <ul>
          <li>Took part in a multi-day project design sprint which resulted in the web app, Qibla Finder.</li>
          <li>Developed and presented several prototype explorations which informed the direction of the project.</li>
          <li>Quickly produced a high-fidelity HTML/CSS/JS prototype as a proof-of concept</li>
          <li>Pushed innovation by starting the development in Angular and TypeScript, which later became an official Google language.</li>
          <li>Was the lead developer in the final production code of the Qibla Finder web app which combined several technologies such as WebGL, HTML Navigator APIs, and Web VR.</li>
          <li>Co-presented Qibla Finder at Google's 2018 Creative Engineer Conference</li>
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
          <li><a href="https://www.blog.google/products/maps/finding-qibla-augmented-reality/" target="_blank" rel="noopener">2017 Google blog launch announcement</a></li>
          <li><a href="https://www.blog.google/topics/holidays/ramadan-kareem-get-ramadan-spirit-google/" target="_blank" rel="noopener">2018 Google blog launch announcement</a></li>
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
export default class WorkQiblaFinder extends Vue {}
</script>

<style scoped lang="scss">
@import '../shared/scss/vars';
@import '../shared/scss/mixins';
@import '../shared/scss/grid';
@import '../shared/scss/work';

.summary,
.summary-image {
  padding-bottom: 40px;
}

ul {
  margin-bottom: 0;
}

.qibla-finder-animation {
  float: right;
  width: 300px;
  margin: 0 0 20px 20px;
}

</style>
