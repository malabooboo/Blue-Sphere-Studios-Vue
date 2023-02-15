<template>
  <footer>
    <div class="site-width bs-grid">
      <p class="bs-grid-col-12">Copyright &copy; 2002 - {{currentYear}} Blue Sphere Studios</p>
    </div>
  </footer>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class SiteFooter extends Vue {
  currentYear = 2018;

  private mounted() {
    this.currentYear = new Date().getFullYear();
  }
}
</script>

<style scoped lang="scss">
@import './scss/vars';
@import './scss/grid';

footer{
  background-color: #223c6e;
}

.site-width.bs-grid {
  padding-bottom: 20px;
  padding-top: 20px;
}

p {
  color: rgba($color-white, .6);
  font-size: 14px;
  line-height: 1;
  margin: 0;
}
</style>
