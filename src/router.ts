/**
 * Not currently used, but keeping here for reference.
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
    {
      path: '/work/stadia-home-redesign',
      name: 'work-stadia-home-redesign',
      component: () => import('./views/work-stadia-home-redesign.vue'),
      meta: {
        title: 'Stadia web homepage redesign',
        description: 'Details about the Stadia web homepage redesign, part of the portfolio of Tim Malabuyo, UX Engineer',
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
