/**
 * Created by Administrator on 2018/3/29.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/index.vue'
import Test1 from '../view/test1.vue'
import Test2 from '../view/test2.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/test1',
          component: Test1
        },
        {
          path: '/test2',
          name: 'test2',
          component: Test2
        }
      ]
    }
  ]
})
