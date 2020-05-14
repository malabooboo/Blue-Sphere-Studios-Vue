<template>
<header :class="{'header--up': !isScrollDirectionUp}" class="header bs-grid">
  <div class="site-width">
    <div class="logo">
      <Logo />
      <h1>Blue Sphere Studios</h1>
    </div>
    <nav>
      <ul class="global-nav">
        <li :class="{'selected': currentSection.name == 'home'}"  class="nav-item">
          <span><a href="#home" v-smooth-scroll class="gnav-link">Home</a></span>
        </li>
        <li :class="{'selected': currentSection.name == 'work' || currentSection.name == 'past-work' || currentSection.name == 'stats'}" class="nav-item">
          <span><a href="#work" v-smooth-scroll class="gnav-link">Work</a></span>
        </li>
        <li :class="{'selected': currentSection.name == 'about'}" class="nav-item">
          <span><a href="#about" v-smooth-scroll class="gnav-link mobile-hidden">About</a></span>
        </li>
      </ul>
    </nav>
  </div>
</header>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import Logo from '@/shared/logo.vue';
import SectionPositionInfo from '../shared/interfaces';

@Component({
  components: {
    Logo,
  },
})
export default class SiteHeader extends Vue {
  @Prop() private scrollValue?: number;
  @Prop() private currentSection?: SectionPositionInfo;
  private isScrollDirectionUp: boolean = true;

  /*
   * Triggers the nav show/hide
   * Watches the scoll value property, the scrollTop value passed down from the
   * parent component.
   */
  @Watch('scrollValue')
  private onScrollValueChange(value: number, oldValue: number) {
    if (value > oldValue) {
      this.isScrollDirectionUp = false;
    } else {
      this.isScrollDirectionUp = true;
    }
  }
}
</script>

<style scoped lang="scss">
@import '../shared/scss/vars';
@import '../shared/scss/mixins';

$header-height: 70px;

@mixin app-nav-animation {
  transition: transform 0.3s ease-out;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  width: 100%;
  height: $header-height;
  background-color: #223c6e;
  color: $color-white;
  transform: translateY(0);

  @include tablet {
    height: 70px;
  }

  @include app-nav-animation;
}

.header--up {
  transform: translateY(-$header-height);

  @include app-nav-animation;
}

.site-width {
  display: flex;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  h1 {
    margin-bottom: 0;
    padding: 20px 0;
    color: $color-white;
    text-transform: uppercase;
    font-size: 30px;
    font-family: Oswald;
    line-height: 1;
    display: none;

    @include tablet {
      display: inline-block;
    }
  }
}

nav {
  flex-grow: 2;
}

.global-nav {
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  list-style: none;
}

.nav-item {
  text-transform: uppercase;
  font-size: 14px;

  @include tablet {
    font-size: 16px;
  }
  @include desktop {
    font-size: 18px;
  }

  span {
    display: block;
    border-bottom: 1px solid #223c6e;
  }

  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: rgba($color-white, 0.8);
    text-decoration: none;
  }

  a {
    position: relative;
    display: block;
    margin: 5px 5px 5px;
    padding: 5px 10px;
    color: rgba($color-white, 0.6);
    transition: color 0.3s;

    @include tablet {
      padding: 10px 20px;
    }
  }

  a:hover {
    color: rgba($color-white, 1);
    transition: color 0.3s;
  }

  &.selected {
    span {
      border-bottom: 1px solid rgba($color-white, 0.8);
    }

    a,
    a:hover {
      color: rgba($color-white, 1);
      transition: color 0.3s;
    }
  }
}
</style>