import Vue from 'vue'
import Router from 'vue-router'
import listonbook from '@/components/pages/first/listonbook/listonbook'
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/first'
    },
    {
      path: '/first',
      children: [
        {
          path: '/',
          component: resolve => require(['../containers/menu/main/musicStore/musicStore.vue'], resolve)
        },
        {
          path: '/recommand',
          component: resolve => require(['../containers/menu/main/recommand/recommand.vue'], resolve)
        },
        {
          path: '/musicstore',
          component: resolve => require(['../containers/menu/main/musicStore/musicStore.vue'], resolve)
        },
        {
          path: '/listonbook',
          component: listonbook
        }
      ],
      components: {
        content: resolve => require(['../containers/menu/main/home.vue'], resolve)
      }
    },
    {
      path: '/fourth',
      components: {
        content: resolve => require(['../containers/menu/mine/mine.vue'], resolve)
      }
    }
  ]
})
