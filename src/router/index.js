import Vue from 'vue'
import Router from 'vue-router'
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
          redirect: '/musicstore'
        },
        {
          path: '/recommand',
          component: resolve => require(['../containers/menu/main/recommand/recommand.vue'], resolve)
        },
        {
          path: '/musicstore',
          component: resolve => require(['../containers/menu/main/musicStore/index.vue'], resolve),
          children: [
            {
              path: '/',
              component: resolve => require(['../containers/menu/main/musicStore/musicStore.vue'], resolve)
            },
            {
              path: '/singerList',
              component: resolve => require(['../containers/menu/main/musicStore/singerList/index.vue'], resolve)
            },
            {
              path: '/singerDetail',
              component: resolve => require(['../containers/menu/main/musicStore/singerDetail/index.vue'], resolve)
            },
            {
              path: '/rankList',
              component: resolve => require(['../containers/menu/main/musicStore/rankList/index.vue'], resolve)
            },
            {
              path: '/rankDetail',
              component: resolve => require(['../containers/menu/main/musicStore/rankDetail/index.vue'], resolve)
            },
            {
              path: '/songListDetail'
            }
          ]
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
