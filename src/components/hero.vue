<template>
  <div class="site-width">
    <div class="avatar-frame">
      <img src="../assets/images/tim-material-avatar-2-2x.png" alt="Tim's avatar" class="avatar">
    </div>
    <h1 class="intro">Blue Sphere Studios is the portfolio of front end web developer, <strong>Tim Malabuyo</strong>,
    currently @Google, coding from <span class="strikethrough">London</span> the sunny Bay Area, California.</h1>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({})
export default class Hero extends Vue {}
</script>

<style scoped lang="scss">
@import '../shared/scss/vars';
@import '../shared/scss/mixins';

@mixin avatar-frame($size) {
  height: $size;
  width: $size;
  border-radius: $size;
}

:host {
  display: block;
  position: relative;

  z-index: 2;
}

.avatar-frame {
  @include avatar-frame(80px);
  margin: 0 auto;
  overflow: hidden;
  margin-bottom: 20px;
  background-color: rgba(86, 96, 115, 1);
  transform: scale(1) rotate(0deg);
  transition: background-color 1s, transform 2s;

  &:hover {
    background-color: $color-blue-primary;
    transform: scale(1.1) rotate(6deg);
    transition: background-color 1s, transform .5s;
  }

  @include tablet {
    @include avatar-frame(120px);
  }

  .avatar {
    width: 85%;
    position: relative;
    top: 12px;

    @include tablet {
      top: 20px;
    }
  }
}

h1 {
  margin-bottom: 0;
  color: rgba($color-white, .8);
  font-weight: 300;
  font-size: 24px;

  @include tablet {
    font-size: 32px;
  }

  strong, span {
    white-space: nowrap;
  }
}

.intro {
  max-width: 1000px;
  margin: 0 auto;
}

.strikethrough {
  text-decoration: line-through;
}
</style>