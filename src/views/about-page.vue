<template>
  <div class="page-wrapper">
    <section class="bs-grid">
      <h2 class="primary-heading
                 bs-grid-col-12
                 bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
                 About me
      </h2>
      <div class="summary
                  u-mb-20
                  bs-grid-col-12
                  bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        <p class="intro">Hello!  I'm Tim, a software engineer specializing in front end and user experience.</p>
        <p>
          Currently, I'm a YouTube User Experience Engineer (UXE), but have been on various teams at Google since 2013, including Brand Studio, Cloud, and Stadia.
          I love building products as part of a great team, and am in my zone when coding with a cup of coffee with good music.
        </p>
      </div>
      <div class="background
                  bs-grid-col-12
                  bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        <h3>A bit of background</h3>
        <figure>
          <picture>
            <img src="../assets/images/me-at-youtube.jpg" alt="">
          </picture>
          <figcaption>I started at YouTube in October 2022.</figcaption>
        </figure>
        <p>
          The web was exploding in popularity in the late 90's when I started tinkering with HTML. Someone (dad?) had given me a book that many of us started,
          <a href="https://www.goodreads.com/book/show/2011981.HTML_for_the_World_Wide_Web" target="_blank" rel="noopener noreferrer nofollow"><i>HTML for the World Wide Web</i> by Elizabeth Castro</a>,
          and I was loving publishing my own website for anyone to see.
        </p>
        <p>
          While at university in the year 2000, I took a class called <i>Art 301: Web design</i> because it looked interesting.  Already having learned the basics of HTML on my own, 
          I found the class interesting but had no idea that it would allow me to land my first job with the ultimate web generalist job title, <i>webmaster</i>.
        </p>
        <p>
          During the early 2000's, I was heavily influenced by Dave Shea's <a href="http://www.csszengarden.com/" target="_blank" rel="noopener noreferrer nofollow">Zen Garden</a> experiment,
          Dan Cederholm's website, <a href="http://simplebits.com/" target="_blank" rel="noopener noreferrer nofollow">Simplebits</a>, and Jefferery Zeldman's
          <a href="https://www.amazon.com/Designing-Web-Standards-Jeffrey-Zeldman/dp/0321616952"  target="_blank" rel="noopener noreferrer nofollow">Designing with Web Standards</a>. 
        <p>
          I got hooked on the possibilities with CSS and was part of the exciting transition from table layouts to CSS-based design with two different companies. One opportunity led to
          another and I found myself spending 7 years at Apple, before joining Google.
        </p>
        <p>
          Throughout my career, I've always been a tinkerer. If I didn't know how to do something, I would just "figure it out," an attitude which allowed me to learn how to code on my own
          without any formal training.  Because of my background in art and design, I've handled the responsibilities of the whole spectrum of web development at one time or another, so the
          UX Engineer role and roles like it are a perfect blend of both worlds.
        </p>
      </div>
      <div class="uxe side-by-side figure-wrapper
                  u-mt-20
                  bs-grid-col-12
                  bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        <h2>What is a User Experience Engineer?</h2>
        <p>That's a great question, and one UXEs at Google often struggle to answer since the role can be so varied! But if the role had to be described in a sentence, it might be:</p>
        <blockquote>
          As a UX Engineer at Google, you'll combine your design, engineering, and product intuition to help build experiences for everyone to enjoy.
        </blockquote>
        <p class="u-mt-20 u-mb-20">
          As a UXE in recent roles at Google and YouTube, I get to work as an engineer in service of UX, bridging the gap between design and engineering.
          I often partner with UX to create high-fidelity prototypes, then with software engineers in implementing product features into production.
        </p>
        <figure>
          <picture>
            <source srcset="@/assets/images/uxe-bridge.png, @/assets/images/uxe-bridge@2x.png 2x" type="image/png]"></source>
            <img src="@/assets/images/uxe-bridge@2x.png" alt="">
          </picture>
        </figure>
        <p class="u-mt-20">See more about <a href="https://uxe.withgoogle.com/" target="_blank" rel="noopener nofollow noreferrer">UX Engineering at Google</a></p>
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
@import '../shared/scss/work';
@import '../shared/scss/utils';

.page-wrapper {
  margin-top: 0;

  @include bp-sm {
    margin-top: 70px;
  }
}

.bs-grid {
  padding-top: 0;

  @include bp-sm {
    padding-top: 40px;
  }
}

.primary-heading {
  font-size: 200%;
  line-height: 120%;
  letter-spacing: -0.01em;
}

.summary {
  p:first-child {
    font-size: 32px;
    font-weight: 400;
    line-height: 42px;
  }
}

blockquote {
  font-size: 28px;
  width: 75%;
  padding-left: 20px;
  font-style: italic;
  line-height: 36px;
  border-left: 4px solid gray;
}

.uxe {
  img {
    border: 0;
    margin: 0 auto;
    display: block;
  }
}

.background {
  figure {
    padding: 0 0 20px 20px;
    margin: 0;
    float: right;
    width: 33%;

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
