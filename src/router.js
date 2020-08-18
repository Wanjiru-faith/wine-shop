import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Preview from '@/components/Preview'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [  
    {   
        path:'/',
        component:HelloWorld,
        name:'HelloWorld'
    },
    {
      path: '/product/:no',
      name: 'Product',
      component: Preview
    }
  ]
})