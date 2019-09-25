import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'

//后台首页
import BackIndex from '@/components/backhome/homeIndex.vue'
import Index from '@/components/backhome/index.vue'
// 属性管理
import attribute from '@/components/backhome/backPage/attribute/attribute.vue'
import addAttr from '@/components/backhome/backPage/attribute/addAttr.vue'
import coefficient from '@/components/backhome/backPage/attribute/coefficient.vue'
//分类管理
import categoryList from '@/components/backhome/backPage/category/categoryList.vue'
import classification from '@/components/backhome/backPage/category/classification.vue'
// 客户管理
import customerList from '@/components/backhome/backPage/customer/customerList.vue'
import pointsDetail from '@/components/backhome/backPage/customer/pointsDetail.vue'
//商品管理
import commodity from '@/components/backhome/backPage/commodity/commodity.vue'
import commodityhand from '@/components/backhome/backPage/commodity/commodityhand.vue'
import addsku from '@/components/backhome/backPage/commodity/addSku.vue'
import addSpu from '@/components/backhome/backPage/commodity/addSpu.vue'
import skuDetail from '@/components/backhome/backPage/commodity/skuDetail.vue'
import spuskulist from '@/components/backhome/backPage/commodity/spuskulist.vue'
import setPictures from '@/components/backhome/backPage/commodity/setPictures.vue'

//订单管理
import orderList from '@/components/backhome/backPage/order/orderList.vue'
import orderDetail from '@/components/backhome/backPage/order/orderDetail.vue'

//首页管理
import banner from '@/components/backhome/backPage/homeManagement/banner.vue'
import collections from '@/components/backhome/backPage/homeManagement/collections.vue'
import bestSeller from '@/components/backhome/backPage/homeManagement/bestSeller.vue'
import hotstyle from '@/components/backhome/backPage/homeManagement/hotstyle.vue'
import newArrivals from '@/components/backhome/backPage/homeManagement/newArrivals.vue'

//运营活动
import coupon from '@/components/backhome/backPage/operation/coupon.vue'
import addcoupon from '@/components/backhome/backPage/operation/addcoupon.vue'

Vue.use(Router)
export default new Router({
  routes: [
    //登陆页
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/homeIndex',
      redirect:'/index',
      name: 'BackIndex',
      component: BackIndex,
      children:[
        {
          path: '/index',
          name: 'Index',
          component: Index
        },
        //属性管理
        {
          path: '/addAttr',
          name: 'addAttr',
          component: addAttr
        },
        {
          path: '/attribute',
          name: 'attribute',
          component: attribute
        },
        {
          path: '/coefficient',
          name: 'coefficient',
          component: coefficient
        },
        //分类管理
        {
          path: '/categoryList',
          name: 'categoryList',
          component: categoryList
        },
        //分类对应关系列表
        {
          path: '/classification',
          name: 'classification',
          component: classification
        },
        {
          path: '/customerList',
          name: 'customerList',
          component: customerList
        },
        {
          path: '/pointsDetail',
          name: 'pointsDetail',
          component: pointsDetail
        },
        //待上货商品管理
        {
          path: '/commodity',
          name: 'commodity',
          component: commodity
        },
        {
          path: '/addSku',
          name: 'addsku',
          component: addsku
        },
        {
          path: '/addSpu',
          name: 'addSpu',
          component: addSpu
        },
        {
          path: '/skuDetail',
          name: 'skuDetail',
          component: skuDetail
        },
        {
          path: '/spuskulist',
          name: 'spuskulist',
          component: spuskulist
        },
        //设置图片
        {
          path:'/setPictures',
          name:'setPictures',
          component:setPictures
        },
        //已上货商品管理
        {
          path: '/commodityhand',
          name: 'commodityhand',
          component: commodityhand
        },
        //订单管理模块
        {
          path: '/orderList',
          name: 'orderList',
          component: orderList
        },
        {
          path: '/orderDetail',
          name: 'orderDetail',
          component: orderDetail
        },
        //首页管理
        {
          path: '/banner',
          name: 'banner',
          component: banner
        },
        {
          path: '/collections',
          name: 'collections',
          component: collections
        },
        {
          path: '/bestSeller',
          name: 'bestSeller',
          component: bestSeller
        },
        {
          path: '/hotstyle',
          name: 'hotstyle',
          component: hotstyle
        },
        {
          path: '/newArrivals',
          name: 'newArrivals',
          component: newArrivals
        },
        //运营活动
        {
          path: '/coupon',
          name: 'coupon',
          component: coupon
        },
        {
          path: '/addcoupon',
          name: 'addcoupon',
          component: addcoupon
        }
      ]
    }
  ]
})
