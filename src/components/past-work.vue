<template>
<div class="site-width work-container">
  <div class="secondary-content">
      <h2 class="past-work-heading">Past work</h2>
      <div class="work work-1">
        <div class="content-filemaker">
          <div class="image-container">
            <img class="image" src="../assets/images/filemaker-homepage.jpg" alt="FileMaker, Inc">
            <div class="logo-overlay">
              <svg class="logo" width="120" height="142" viewBox="0 0 120 142" xmlns="http://www.w3.org/2000/svg">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#apple-logo"></use>
              </svg>
            </div>
          </div>
          <div class="content">
            <h3>FileMaker, an Apple subsidiary</h3>
            <p>From 2006 - 2013, I was part of FileMaker's web team, involved in the front-end development of the corporate website, an integral part of the multiple product launches every year.</p>
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="work work-2">
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
      <div class="work work-3">
        <div class="image-container">
          <img class="image" src="../assets/images/cityteam-international.jpg" alt="Cityteam">
          <div class="logo-overlay">
            <img class="logo cityteam-logo" src="../assets/images/cityteam-logo.png" alt="Cityteam logo">
          </div>
        </div>
        <h3>Cityteam</h3>
        <p>After years as a web developer for Cityteam, I returned to work with old colleagues to help redesign their site, bringing the site out of a tabled layout into a more modern design.</p>
      </div>

      <div class="divider"></div>

      <p class="see-more">See more of my work history and education on <a href="https://www.linkedin.com/in/timmalabuyo/">LinkedIn</a></p>

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

.secondary-content {
  display: grid;
  @include work-grid-3-columns;
  border-top: 1px solid #ddd;
  padding: 50px 0 0;

  @include large-mobile {
    padding-bottom: 200px;
  }
}

.past-work-heading {
  grid-column: 1 / 3;

  @include element-appear-resting;
  .in-view & {
    @include element-appear-in();
  }

  @include large-mobile {
    grid-column: 1 / 1;
  }
}

.work {
  margin-bottom: 30px;

  @include large-mobile {
    margin-bottom: 0;
  }

  .image {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border: 1px solid rgba($color-black, 0.2);
    box-shadow: 0 0 20px -10px $color-black;
  }
}

.work-1 {
  grid-column: 1 / span 3;

  @include element-appear-resting;
  .in-view & {
    @include element-appear-in(0.3s);
  }

  @include large-mobile {
    grid-column: span 2 / span 3;
  }

  .content-filemaker {
    display: grid;
    @include work-grid-2-columns;
    grid-column: span 2;

    @include large-mobile {
      .image-container {
        margin: 0;
      }
    }

    .image-container,
    .content {
      grid-column: 1 / span 2;
    }

    @include large-mobile {
      .image-container {
        grid-column: 1;
      }

      .content {
        grid-column: 2;
      }
    }
  }
}

.work-2 {
  grid-column: 1 / span 3;

  @include element-appear-resting;
  .in-view & {
    @include element-appear-in(0.6s);
  }

  @include large-mobile {
    grid-column: 2;
  }
}

.work-3 {
  grid-column: 1 / span 3;

  @include element-appear-resting;
  .in-view & {
    @include element-appear-in(0.9s);
  }

  @include large-mobile {
    grid-column: 3;
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
  grid-column: 1 / span 3;

  @include large-mobile {
    // margin-bottom: 60px;
    // padding-bottom: 20px;
    border-bottom: 1px solid rgba($color-black, 0.1);
    // box-shadow: 0 4px 40px -10px $color-black;
    grid-column: 2 / span 2;
  }
}

.see-more {
  grid-column: 1 / span 3;

  @include large-mobile {
    grid-column: 2 / span 2;
  }
}
</style>