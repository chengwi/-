import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias:'/login',
      component: resolve => require(['../components/common/login'],resolve),
    },
    {
      path: '/home',
      component: resolve => require(['../components/common/home'],resolve),
      children:[
        {
          path:'/',
          component:resolve => require(['@/components/page/first'],resolve)
        },
        {
          path:'one',
          component:resolve => require(['@/components/common/header'],resolve)
        },
        {
          path:'myAllworkList',
          component:resolve => require(['@/components/page/two'],resolve)
        },
        {
          path:'unhandler',
          component:resolve => require(['@/components/page/third'],resolve)
        },
        {
          path:'hangding',
          component:resolve => require(['@/components/page/four'],resolve)
        },
        {
          path:'pauseing',
          component:resolve => require(['@/components/page/five'],resolve)
        },
        {
          path:'finished',
          component:resolve => require(['@/components/page/six'],resolve)
        },
        {
          path:'addactive',
          component:resolve => require(['@/components/page/seven'],resolve)
        },
        {
          path:'activesearch',
          component:resolve => require(['@/components/page/eight'],resolve)
        },
        {
          path:'publishnews',
          component:resolve => require(['@/components/page/nine'],resolve)
        },
        {
          path:'countnews',
          component:resolve => require(['@/components/page/ten'],resolve)
        },
        {
          path:'payothers',
          component:resolve => require(['@/components/page/eleven'],resolve)
        },
        {
          path:'paylocaltion',
          component:resolve => require(['@/components/page/twolve'],resolve)
        },
        {
          path:'paycount',
          component:resolve => require(['@/components/page/thirteen'],resolve)
        },
        {
          path:'interdetail',
          component:resolve => require(['@/components/page/fourteen'],resolve)
        },
        {
          path:'interassign',
          component:resolve => require(['@/components/page/fiveteen'],resolve)
        },
        {
          path:'settinginter',
          component:resolve => require(['@/components/page/sixteen'],resolve)
        },
        {
          path:'packagemanger',
          component:resolve => require(['@/components/page/seventeen'],resolve)
        },
        {
          path:'openpackage',
          component:resolve => require(['@/components/page/eighteen'],resolve)
        },
        {
          path:'syssetting',
          component:resolve => require(['@/components/page/nineteen'],resolve)
        },
        {
          path:'usermanner',
          component:resolve => require(['@/components/page/twteenty'],resolve)
        },
        {
          path:'downloaddata',
          component:resolve => require(['@/components/page/tweentyone'],resolve)
        },
        {
          path:'warnword',
          component:resolve => require(['@/components/page/tweentytwo'],resolve)
        }
        ,
        {
          path:'newactive',
          component:resolve => require(['@/components/page/tweentythree'],resolve)
        }
        ,
        {
          path:'packagecheck',
          component:resolve => require(['@/components/page/tweentyfive'],resolve)
        },
        {
          path:'weixin',
          redirect:"weixin/guanzhu",
          component:resolve => require(['@/components/page/tweentyfour'],resolve),
          children:[
            {
             path:"guanzhu",
              component:resolve => require(['@/components/page/tweentyfourone'],resolve)
            },{
              path:"guanjian",
              component:resolve =>require(['@/components/page/tweentyfourtwo'],resolve)
            }
          ]
        }
      ]
    }
  ]
})
