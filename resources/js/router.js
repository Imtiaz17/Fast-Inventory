import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthService from './services/auth'

/*
 |--------------------------------------------------------------------------
 | Admin Views
 |--------------------------------------------------------------------------|
 */

// Dashboard
import Basic from './views/admin/dashboard/Basic.vue'

// Layouts
import LayoutBasic from './views/layouts/LayoutBasic.vue'
//import LayoutLogin from './views/layouts/LayoutLogin.vue'
import LayoutLogin2 from './views/layouts/LayoutLogin2.vue'
// import LayoutLogin3 from './views/layouts/LayoutLogin3.vue'
import LayoutFront from './views/layouts/LayoutFront.vue'


import categoryAdd from './views/Dashboard/Category/create'
import categoryManage from './views/Dashboard/Category/manage'

import supplierAdd from './views/Dashboard/Supplier/create'
import supplierManage from './views/Dashboard/Supplier/manage'

import customerAdd from './views/Dashboard/Customer/create'
import customerManage from './views/Dashboard/Customer/manage'

import productAdd from './views/Dashboard/Product/create'
import productManage from './views/Dashboard/Product/manage'

import purchaseAdd from './views/Dashboard/Purchase/create'
import purchaseManage from './views/Dashboard/Purchase/manage'

import stockAdd from './views/Dashboard/Stock/create'
import stockManage from './views/Dashboard/Stock/manage'

import sellAdd from './views/Dashboard/Sell/create'
import sellManage from './views/Dashboard/Sell/manage'

import expenseAdd from './views/Dashboard/Expense/create'
import expenseManage from './views/Dashboard/Expense/manage'
import expenseCat from './views/Dashboard/Expense/category'

import staffAdd from './views/Dashboard/Staff/create'
import staffManage from './views/Dashboard/Staff/manage'



// Auth
import Login from './views/auth/Login.vue'
import Register from './views/auth/Register.vue'

import NotFoundPage from './views/errors/404.vue'


/*
 |--------------------------------------------------------------------------
 | Frontend Views
 |--------------------------------------------------------------------------|
 */

import Home from './views/front/Home.vue'

Vue.use(VueRouter)

const routes = [
  /*
  |--------------------------------------------------------------------------
  | Auth & Registration Routes
  |--------------------------------------------------------------------------|
  */
  {
    path: '/',
    component: LayoutLogin2,
    redirect: '/login',
    children: [{
      path: 'login',
      component: Login,
      name: 'login'
    }]
  },

  /*
   |--------------------------------------------------------------------------
   | Admin Backend Routes
   |--------------------------------------------------------------------------|
   */
  {
    path: '/dashboard',
    component: LayoutBasic, // Change the desired Layout here
    children: [
      // Dashboard
      {
        path: '/',
        component: Basic,
        name: 'dashboard'
      },
      // Category
      {
        path: 'category/add',
        component: categoryAdd,
        name: 'categoryAdd'
      },
      {
        path: 'category/manage',
        component: categoryManage,
        name: 'categoryManage'
      },
      // Supplier
      {
        path: 'supplier/add',
        component: supplierAdd,
        name: 'supplierAdd'
      },
      {
        path: 'supplier/manage',
        component: supplierManage,
        name: 'supplierManage'
      },
      // Customer
      {
        path: 'customer/add',
        component: customerAdd,
        name: 'customerAdd'
      },
      {
        path: 'customer/manage',
        component: customerManage,
        name: 'customerManage'
      },
      // Product
      {
        path: 'product/add',
        component: productAdd,
        name: 'productAdd'
      },
      {
        path: 'product/manage',
        component: productManage,
        name: 'productManage'
      },
      // Purchase
      {
        path: 'purchase/add',
        component: purchaseAdd,
        name: 'purchaseAdd'
      },
      {
        path: 'purchase/manage',
        component: purchaseManage,
        name: 'purchaseManage'
      },
      // Sell
      {
        path: 'sell/add',
        component: sellAdd,
        name: 'sellAdd'
      },
      {
        path: 'sell/manage',
        component: sellManage,
        name: 'sellManage'
      },
      // Stock
      {
        path: 'stock/add',
        component: stockAdd,
        name: 'stockAdd'
      },
      {
        path: 'stock/manage',
        component: stockManage,
        name: 'stockManage'
      },
      // Expense
      {
        path: 'expense/add',
        component: expenseAdd,
        name: 'expenseAdd'
      },
      {
        path: 'expense/category',
        component: expenseCat,
        name: 'expenseCat'
      },
      {
        path: 'expense/manage',
        component: expenseManage,
        name: 'expenseManage'
      },
      // Staff
      {
        path: 'staff/add',
        component: staffAdd,
        name: 'staffkAdd'
      },
      {
        path: 'staff/manage',
        component: staffManage,
        name: 'staffManage'
      },

    ]
  },

  //  DEFAULT ROUTE
  { path: '*', component: NotFoundPage }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// router.beforeEach((to, from, next) => {
//   //  If the next route is requires user to be Logged IN
//   if (to.matched.some(m => m.meta.requiresAuth)) {
//     return AuthService.check().then(authenticated => {
//       if (!authenticated) {
//         return next({ path: '/login' })
//       }

//       return next()
//     })
//   }

//   return next()
// })

export default router
