import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  scrollBehavior( to, from, savedPosition ) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ selector: to.hash, offset: { y: 50 } });
        }, 300);
      })
    }
    if (savedPosition) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(savedPosition);
        }, 100)
      })
    }
    return {x: 0, y: 0}
  },
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      component: () => import(/* webpackChunkName: "dashboard", webpackPrefetch: true*/ '@/views/Dashboard'),
    },
    {
      path: '/agent',
      component: () => import(/* webpackChunkName: "agent", webpackPrefetch: true*/ '@/views/Agent'),
    },
    {
      path: '/my',
      component: () => import(/* webpackChunkName: "my", webpackPrefetch: true*/ '@/views/My'),
    },
    {
      path: '/help',
      component: () => import(/* webpackChunkName: "help", webpackPrefetch: true*/ '@/views/Help'),
    },
  ]
});

export default router;
