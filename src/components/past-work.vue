<template>
<div class="site-width work-container">
  <div class="secondary-content bs-grid">
      <h2 class="past-work-heading bs-grid-col-12 bs-grid-sm-md-col-4">Past work</h2>
      <div class="work work-1 bs-grid-col-12 bs-grid-sm-md-col-8">
        <div class="content-filemaker bs-grid-col-12 bs-grid no-padding simple">
          <div class="image-container bs-grid-col-12 bs-grid-sm-col-3">
            <img class="image" src="../assets/images/filemaker-homepage.jpg" alt="FileMaker, Inc">
            <div class="logo-overlay">
              <svg class="logo" width="120" height="142" viewBox="0 0 120 142" xmlns="http://www.w3.org/2000/svg">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#apple-logo"></use>
              </svg>
            </div>
          </div>
          <div class="content bs-grid-col-12 bs-grid-sm-col-3">
            <h3>FileMaker, an Apple subsidiary</h3>
            <p>From 2006 - 2013, I was part of FileMaker's web team, involved in the front-end development of the corporate website, an integral part of the multiple product launches every year.</p>
          </div>
        </div>
      </div>

      <div class="divider bs-grid-col-12 bs-grid-sm-md-offset-4 bs-grid-sm-md-col-8"></div>

      <div class="work work-2 bs-grid-col-12 bs-grid-xs-sm-col-6 bs-grid-sm-md-offset-4 bs-grid-sm-md-col-4">
        <div class="image-container">
          <img class="image" src="../assets/images/mcafee-homepage.jpg" alt="McAfee">
          <div class="logo-overlay">
            <svg class="logo" width="120" height="139" viewBox="0 0 120 139" xmlns="http://www.w3.org/2000/svg">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mcafee-logo"></use>
            </svg>
          </div>
        </div>
        <h3>McAfee</h3>
        <p>As a member of the Web User Interface team, I helped launch a major redesign of the consumer website that featured their first CSS-based, "tableless" design in 2005 and another site redesign in 2006.</p>
      </div>
      <div class="work work-3 bs-grid-col-12 bs-grid-xs-sm-col-6 bs-grid-sm-md-col-4">
        <div class="image-container">
          <img class="image" src="../assets/images/cityteam-international.jpg" alt="Cityteam">
          <div class="logo-overlay">
            <img class="logo cityteam-logo" src="../assets/images/cityteam-logo.png" alt="Cityteam logo">
          </div>
        </div>
        <h3>Cityteam</h3>
        <p>After years as a web developer for Cityteam, I returned to work with old colleagues to help redesign their site, bringing the site out of a tabled layout into a more modern design.</p>
      </div>

      <div class="divider bs-grid-col-12 bs-grid-sm-md-offset-4 bs-grid-sm-md-col-8"></div>

      <p class="see-more bs-grid-col-12 bs-grid-sm-md-offset-4 bs-grid-sm-md-col-8">See more of my work history and education on <a href="https://www.linkedin.com/in/timmalabuyo/">LinkedIn</a></p>

    </div>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class PastWork extends Vue {}
</script>

<style scoped lang="scss">
@import '../shared/scss/vars';
@import '../shared/scss/mixins';
@import '../shared/scss/grid';

.secondary-content {
  border-top: 1px solid #ddd;
  padding: 50px 0 0;
}

.past-work-heading {
  @include element-appear-resting;
  .in-view & {
    @include element-appear-in();
  }
}

.work {
  margin-bottom: 30px;

  @include large-mobile {
    margin-bottom: 0;
  }

  .image {
    display: block;
    width: 100%;
    height: 80%;
    object-fit: cover;
    border: 1px solid rgba($color-black, 0.2);
    box-shadow: 0 0 20px -10px rgba($color-black, 0.4);
  }
}

.work-1 {
  @include element-appear-resting;
  .in-view & {
    @include element-appear-in(0.3s);
  }

  .content-filemaker {
    gap: 20px;
    overflow: hidden;
  }
}

.work-2 {
  @include element-appear-resting;
  .in-view & {
    @include element-appear-in(0.6s);
  }
}

.work-3 {
  @include element-appear-resting;
  .in-view & {
    @include element-appear-in(0.9s);
  }
}

.image-container {
  position: relative;
  margin-bottom: 15px;
}

.logo-overlay {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 200px;
  object-fit: cover;
  background: rgba($color-white, 0.7);
  opacity: 0;
  transition: opacity 0.5s ease-out;

  &:hover {
    opacity: 1;
    transition: opacity 0.5s ease-out;
  }

  .logo {
    width: 60px;
    height: 60px;
    border: 0;
  }
}

.divider {
  padding-bottom: 20px;
  margin-bottom: 20px;

  @include bp-sm-md {
    border-bottom: 1px solid rgba($color-black, 0.1);
    padding-bottom: 40px;
    margin-bottom: 40px;
  }
}
</style>