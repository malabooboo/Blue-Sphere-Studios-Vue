<template>
  <div class="page-wrapper">
    <section class="bs-grid">
      <h2 class="bs-grid-col-12 bs-grid-sm-md-col-4">Portfolio</h2>
      <router-link :to="'/portfolio/stadia-home-redesign'" exact>Stadia home redesign</router-link>
    </section>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Watch, Vue} from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Portfolio extends Vue {}
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
</style>
