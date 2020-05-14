<template>
<div class="logo">
  <picture>
    <source srcset="@/assets/images/bss-logo.webp" type="image/webp">
    <source srcset="@/assets/images/bss-logo.png" type="image/png">
    <img src="@/assets/images/bss-logo.png" alt="Blue Sphere Studios logo">
  </picture>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Logo extends Vue {}
</script>

<style scoped lang="scss">
@import '@/shared/scss/vars';
@import '@/shared/scss/mixins';

.logo {
  display: block;
  width: 50px;
  height: 50px;
  margin: 5px;

  @include tablet {
    margin: 0 10px 0 0;
  }
}

img {
  width: 100%;
  display: block;
}
</style>