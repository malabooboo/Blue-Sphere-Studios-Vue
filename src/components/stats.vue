<template>
<div class="site-width">
  <div class="content">
    <div class="titles">
      <h2>Skills and Stats</h2>
      <p>Some of the tech I've used recently...</p>
    </div>
    <ul class="tags">
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>AngularJs</li>
      <li>Angular 2+</li>
      <li>TypeScript</li>
      <li>React</li>
      <li>Vue.js</li>
      <li>Django</li>
      <li>Firebase</li>
      <li>Google App Engine</li>
      <li>Git</li>
      <li>Accessibility</li>
      <li>Prototyping</li>
      <li>SASS</li>
      <li>LESS</li>
      <li>Photoshop</li>
      <li>Illustrator</li>
      <li>Web Standards</li>
      <li>Typography</li>
      <li>Photography</li>
      <li>Lightroom</li>
      <li>Google Maps API</li>
      <li>Gulp / Grunt / Webpack</li>
      <li>Node.js</li>
      <li>Three.js</li>
      <li>A-frame</li>
      <li>D3</li>
    </ul>
  </div>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Stats extends Vue {}
</script>

<style scoped lang="scss">
@import '../shared/scss/vars';
@import '../shared/scss/mixins';

.content {
  display: grid;
  grid-template-columns: 32% 32% 32%;
  gap: 10% 2%;
  grid-template-rows: auto;
}

.titles {
  grid-column: 1 / span 3;

  @include element-appear-resting;
  .in-view & {
    @include element-appear-in();
  }

  @include tablet {
    grid-column: 1;
  }

  h2 {
    margin-bottom: 5px;
  }
}

.tags {
  list-style-type: none;
  grid-column: 1 / span 3;

  @include element-appear-resting;
  .in-view & {
    @include element-appear-in(.3s);
  }

  @include tablet {
    grid-column: 2 / span 3;
  }
}

li {
  display: inline-block;
  padding: 3px 8px;
  margin: 3px;
  background: rgba($color-black, .3);
  color: $color-white;
}
</style>