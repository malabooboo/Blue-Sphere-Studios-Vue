/**
 * Site routing.
 */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      name: 'home',
      component: Home,
    },
    // {
    //   path: '/about',
    //   name: 'about-page',
    //   component: () => import('./views/about-page.vue'),
    //   meta: {
    //     title: 'About me - Blue Sphere Studios / Tim Malabuyo',
    //     description: 'A little bit about Tim Malabuyo, UX Engineer',
    //   },
    // },
    {
      path: '/work/stadia-home-redesign',
      name: 'work-stadia-home-redesign',
      component: () => import('./views/work-stadia-home-redesign.vue'),
      meta: {
        title: 'Stadia web homepage redesign - Blue Sphere Studios / Tim Malabuyo',
        description: 'Details about the Stadia web homepage redesign, part of the portfolio of Tim Malabuyo, UX Engineer',
      },
    },
    {
      path: '/work/stadia-game-menu',
      name: 'work-stadia-game-menu',
      component: () => import('./views/work-stadia-game-menu.vue'),
      meta: {
        title: 'Stadia web game menu - Blue Sphere Studios / Tim Malabuyo',
        description: 'Details about the Stadia game menu and  redesign, part of the portfolio of Tim Malabuyo, UX Engineer',
      },
    },
    {
      path: '/work/stadia-launch',
      name: 'work-stadia-launch',
      component: () => import('./views/work-stadia-launch.vue'),
      meta: {
        title: 'Stadia launch 2019 - Blue Sphere Studios / Tim Malabuyo',
        description: 'Details about the Stadia launch, part of the portfolio of Tim Malabuyo, UX Engineer',
      },
    },
    {
      path: '/work/stadia-gameplay-on-ios',
      name: 'work-stadia-gameplay-ios',
      component: () => import('./views/work-stadia-gameplay-ios.vue'),
      meta: {
        title: 'Stadia gameplay on iOS - Blue Sphere Studios / Tim Malabuyo',
        description: 'Details about the Stadia gameplay on iOS, part of the portfolio of Tim Malabuyo, UX Engineer',
      },
    },
    {
      path: '/work/immersive-stream-for-games',
      name: 'work-stadia-immersive-stream',
      component: () => import('./views/work-stadia-immersive-stream.vue'),
      meta: {
        title: 'Immersive Stream for Games - Blue Sphere Studios / Tim Malabuyo',
        description: 'Details about Immersive Stream for Games, part of the portfolio of Tim Malabuyo, UX Engineer',
      },
    },
    {
      path: '/work/stadia-search',
      name: 'work-stadia-search',
      component: () => import('./views/work-stadia-search.vue'),
      meta: {
        title: 'Stadia Platform Search - Blue Sphere Studios / Tim Malabuyo',
        description: 'Details about Stadia Platform Search, part of the portfolio of Tim Malabuyo, UX Engineer',
      },
    },
    {
      path: '/work/google-earth',
      name: 'work-google-earth',
      component: () => import('./views/work-google-earth.vue'),
      meta: {
        title: 'Google Earth 2017 Launch - Blue Sphere Studios / Tim Malabuyo',
        description: 'Details about Google Earth, part of the portfolio of Tim Malabuyo, UX Engineer',
      },
    },
    {
      path: '/work/qibla-finder',
      name: 'work-qibla-finder',
      component: () => import('./views/work-qibla-finder.vue'),
      meta: {
        title: 'Qibla Finder - Blue Sphere Studios / Tim Malabuyo',
        description: 'Details about Qilba Finder, part of the portfolio of Tim Malabuyo, UX Engineer',
      },
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('./views/resume.vue'),
      meta: {
        title: 'Resume - Blue Sphere Studios / Tim Malabuyo',
        description: 'The resume of Tim Malabuyo, web front end engineer',
      },
    },
    // {
    //   path: '/portfolio',
    //   name: 'portfolio',
    //   component: () => import('./views/portfolio.vue'),
    //   children: [
    //     {
    //       path: 'stadia-home-redesign',
    //       name: 'portfolio-stadia-home-redesign',
    //       component: () => import('./views/portfolio-stadia-home-redesign.vue'),
    //     },
    //   ],
    // },
    // {
    //   path: '/about',
    //   name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {x: 0, y: 0};
    }
  },
});
