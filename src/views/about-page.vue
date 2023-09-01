<template>
  <div class="page-wrapper">
    <section class="bs-grid">
      <h2 class="primary-heading
                 bs-grid-col-12
                 bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
                 About me
      </h2>
      <div class="summary
                  bs-grid-col-12
                  bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        <figure>
          <picture>
            <img src="../assets/images/me-at-youtube.jpg" alt="">
          </picture>
        </figure>
        <p class="intro">Hello!  I'm Tim, a software engineer specializing in front end and user experience.</p>
        <p>
          Currently, I'm a YouTube UX Engineer, but have been on various teams at Google since 2013, including Brand Studio, Cloud, and Stadia.
          I love building software as part of a great team, and am in my zone when coding with a cup of coffee with good music.
        </p>
        <h3>A bit of background</h3>
        <p>
          The web was exploding in popularity in 1995 when I started tinkering with HTML, having been given a book that many of us might remember,
          HTML basics by Elizabeth Castro. In 2000, while at university I took "Web design" just for fun.  With the basics of HTML under my belt, 
          I found the class interesting but had no idea that it would allow me to land my first job as a <i>webmaster</i>.  One opportunity led to
          another and I found myself spending 7 years at Apple, before joining Google.
        </p>
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
export default class AboutPage extends Vue {}
</script>

<style scoped lang="scss">
@import '../shared/scss/vars';
@import '../shared/scss/mixins';
@import '../shared/scss/grid';

.page-wrapper {
  margin-top: 70px;
}

.bs-grid {
  padding-top: 40px;
}

.primary-heading {
  font-size: 200%;
  line-height: 120%;
  letter-spacing: -0.01em;
}

.summary {
  p:first-child {
    font-size: 22px;
    font-weight: 400;
  }

  figure {
    padding: 0 0 20px 20px;
    margin: 0;
    float: right;
    width: 25%;

    @include bp-sm-md {
      width: 50%;
      margin-right: -25%;
    }
  }

  img {
    display: block;
    width: 100%;
  }
}

.intro {
  font-size: 125%;
}
</style>
