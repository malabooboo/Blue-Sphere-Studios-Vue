<template>
  <footer>
    <div class="site-width">
      <p>Copyright &copy; 2002 - {{currentYear}} Blue Sphere Studios</p>
    </div>
  </footer>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class SiteFooter extends Vue {
  private currentYear: number = 2018;

  private mounted() {
    this.currentYear = new Date().getFullYear();
  }
}
</script>

<style scoped lang="scss">
@import './scss/vars';
@import './scss/mixins';

footer {
  padding: 20px 20px 10px;
  background-color: #223c6e;

  @include tablet {
    padding: 20px 0 10px;
  }

  p {
    color: rgba($color-white, .6);
    font-size: 14px;
    line-height: 1;
  }
}
</style>
