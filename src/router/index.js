import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  
  /*
   routes of: 
    # src/pages
    Home, About, Products, Events, Blogs, News, Contact, PrivacyPolicy
    
    */
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/pages/Products.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('@/pages/Events.vue')
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import('@/pages/Blogs.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/pages/News.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/pages/Contact.vue')
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('@/pages/PrivacyPolicy.vue')
  },
   /*
   routes of: 
    # src/pages/products
    -> Individual product pages like: Audaces.vue, eton.vue, realist.vue,etc.
    -> Products sub-categories like:
       products/realist/Ozone.vue etc.
       That contains all the realist product pages.
    */

  // Realist & it's sub-categories
   {
    path: '/products/realist',
    component: () => import('@/pages/products/Realist.vue'),
    name: 'Realist'
   },
   {
    // Realist: Washing
    path: '/products/realist/washing',
    component: () => import('@/pages/products/realist/Washing.vue'),
    name: 'RealistWashing'
   },
   {
    // Realist: Ozone
    path: '/products/realist/ozone',
    component: () => import('@/pages/products/realist/Ozone.vue'),
    name: 'RealistOzone'
   },
   {
    // Realist: Drying
    path: '/products/realist/drying',
    component: () => import('@/pages/products/realist/Drying.vue'),
    name: 'RealistDrying'
   },
   {
    // Realist: Dyeing
    path: '/products/realist/dyeing',
    component: () => import('@/pages/products/realist/Dyeing.vue'),
    name: 'RealistDyeing'
   },
   {
    // Realist: Hydropress
    path: '/products/realist/hydropress',
    component: () => import('@/pages/products/realist/Hydropress.vue'),
    name: 'RealistHydropress'
   },
   {
    // Realist: Centrifuge
    path: '/products/realist/centrifuge',
    component: () => import('@/pages/products/realist/Centrifuge.vue'),
    name: 'RealistCentrifuge'
   },

   // Upcoming product pages and sub-categories goes from here.
   



]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router