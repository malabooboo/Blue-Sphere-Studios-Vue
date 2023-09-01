<template>
<div class="site-width bs-grid no-padding">
  <div class="content bs-grid-col-12 bs-grid-md-offset-6 bs-grid-md-col-6">
    <h2>About</h2>
    <p class="intro">I've been in the business of building websites
      <a href="https://www.amazon.com/HTML-World-Visual-QuickStart-Guide/dp/0201884488" target="_blank" rel="noopener">since 1998</a>.</p>
    <p>
      In those years I have seen the web change and evolve, and I am proud to have
      been part of the early movement of web designers who championed web
      standards. During this time, I was heavily influenced by Dave Shea's
      <a href="http://www.csszengarden.com/">Zen Garden</a> experiment, Dan
      Cederholm's website, <a href="http://simplebits.com/">Simplebits</a>, and
      Jefferery Zeldman's
      <a
        href="https://www.amazon.com/Designing-Web-Standards-Jeffrey-Zeldman/dp/0321616952"
        >Designing with Web Standards</a
      >. I got hooked on the possibilities with CSS and was part of the exciting
      transition from table layouts to CSS-based design with two different
      companies.
    </p>
    <p>
      As the industry has matured and specialized, I've gone from a web generalist
      (a.k.a <i>webmaster</i>, yes, I've had that job title in the past) to specializing in front end, but still keep
      current on the design side, just so I feel like I'm making some use of that
      art degree!
    </p>
    <p>
      I'm currently coding away as a
      <a href="https://www.linkedin.com/in/timmalabuyo/">UX Engineer at YouTube</a>. At Google, I have been part of many launches, including Google Stadia, Google for Work,
      Gmail, Calendar, Inbox, and the new Google Earth.
    </p>
  </div>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class About extends Vue {}
</script>

<style scoped lang="scss">
@import '../shared/scss/vars';
@import '../shared/scss/mixins';

.site-width {
  overflow: hidden;
}

.content {
  background: rgba($color-black, 0.8);
  margin-right: 0;
  padding: 40px;
}

h2 {
  color: $color-white;

  @include element-appear-resting;
  .in-view & {
    @include element-appear-in();
  }
}

p {
  position: relative;
  z-index: 2;
  color: $color-white;

  @include element-appear-resting;
  .in-view & {
    @include element-appear-in(0.9s);
  }

  @include tablet {
    font-size: 18px;
  }

  a {
    color: $color-white;
  }
}

p.intro {
  color: $color-white;
  font-size: 22px;
  line-height: 1.2;

  @include tablet {
    font-size: 32px;
  }
}

@mixin staggered-in-view-transition {
  @for $i from 1 through 3 {
    &:nth-child(#{$i}) {
      @include element-appear-resting;
      .in-view & {
        @include element-appear-in(#{$i * 0.2}s);
      }
    }
  }
}

p {
  @include staggered-in-view-transition;
}

// Stealth link

a[target='_blank'] {
  padding: 0;
  background: none;
  text-decoration: none;
}
</style>