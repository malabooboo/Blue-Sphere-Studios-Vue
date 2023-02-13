<template>
  <div class="page-wrapper">
    <section class="bs-grid">
      <h2 class="primary-heading
                 bs-grid-col-12
                 bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
                 Stadia game menu
      </h2>
      <div class="summary
                  bs-grid-col-12
                  bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        <p>The game menu redesign solved many user experience issues regarding Stadia's main navigation. It consolidated main navigation items under a single entry-point, and would give users a more consistent way to navigate Stadia's menus on all platforms.</p>
        <p>I was the sole engineer driving this feature as a passion project. I created new components and moved existing components into the existing game menu, and worked with design to overhaul the UX to implement the game menu layer concept.</p>
      </div>
    </section>
    <section class="compare bs-grid">
      <div class="game-menu-figures figure-wrapper
                  bs-grid-col-12
                  bs-grid-sm-md-offset-1 bs-grid-sm-md-col-10">
        <figure>
          <picture>
            <source srcset="@/assets/images/portfolio/stadia-game-menu-3-layers.webp, @/assets/images/portfolio/stadia-game-menu-3-layers_2x.webp 2x" type="image/webp">
            <source srcset="@/assets/images/portfolio/stadia-game-menu-3-layers.png, @/assets/images/portfolio/stadia-game-menu-3-layers_2x.png 2x" type="image/png">
            <img src="@/assets/images/portfolio/stadia-game-menu-3-layers_2x.png" alt="A diagram of where the Game menu sits in the Stadia UI">
          </picture>
          <figcaption>A diagram of where the Game menu sits in the Stadia UI</figcaption>
        </figure>
        <figure>
          <picture>
            <source srcset="@/assets/images/portfolio/stadia-game-menu-social.webp, @/assets/images/portfolio/stadia-game-menu-social_2x.webp 2x" type="image/webp">
            <source srcset="@/assets/images/portfolio/stadia-game-menu-social.jpg, @/assets/images/portfolio/stadia-game-menu-social_2x.jpg 2x" type="image/jpg">
            <img src="@/assets/images/portfolio/stadia-game-menu-social_2x.jpg" alt="The Game menu open in-game, showing the social panel">
          </picture>
          <figcaption>The Game menu open while in-game, showing the social panel</figcaption>
        </figure>
      </div>
    </section>
    
    <section class="contributions bs-grid">
      <h2 class="bs-grid-col-12
                 bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        Contributions
      </h2>
      <div class="bs-grid-col-12
                 bs-grid-sm-md-offset-3 bs-grid-sm-md-col-6">
        <figure class="game-menu-demo">
          <img src="@/assets/images/portfolio/stadia-game-menu-demo.gif" alt="An animation showing the Game menu while the user is in-game">
          <figcaption>The Game menu while the user is in game</figcaption>
        </figure>
        <ul>
          <li>Built the game menu layer framework</li>
          <li>Added dpad/keyboard navigation controls to meet accessibility standards and added the ability to navigate panels with the controller shoulder buttons</li>
          <li>Created an Exit Menu panel, and added the new, "Switch screen" button, a new feature that closed the current stream but did not end the game. This allowed players to quickly restart the stream where they left off without having to restart the game.</li>
          <li>Acted as the feature lead for this project, handling everything required for launch, including writing tests and testcases, rollout plans, and various sign-offs</li>
        </ul>
        <p>The new game menu navigation entered internal testing in Q3, and was slated to launch at the start of Q4. It made it to the final week of testing and was about to launch to production at the time of the Stadia turndown.</p>
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
export default class WorkStadiaGameMenu extends Vue {}
</script>

<style scoped lang="scss">
@import '../shared/scss/vars';
@import '../shared/scss/mixins';
@import '../shared/scss/grid';
@import '../shared/scss/work';

.game-menu-figures {
  display: flex;
  gap: 20px;

  .figure-before,
  .figure-after {
    width: 100%;
  }

  @include bp-sm {
    display: flex;

    .figure-before {
      width: 40%;
    }

    .figure-after {
      width: 60%;
    }
  }
}

.game-menu-demo {
  float: right;
  width: 50%;
  max-width: 300px;
  padding-left: 40px;
}
</style>
