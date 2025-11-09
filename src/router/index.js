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
    // Realist: Ozone
    path: '/products/realist/ozone',
    component: () => import('@/pages/products/realist/Ozone.vue'),
    name: 'RealistOzone'
   },
   {
    // Realist: Ozone-RMO
    path: '/products/realist/ozone/rmo',
    component: () => import('@/pages/products/realist/ozone/Rmo.vue'),
    name: 'RealistOzoneRmo'

   },
   {
    // Realist: Ozone-ROG-OZONE
    path: '/products/realist/ozone/rog-ozone',
    component: () => import('@/pages/products/realist/ozone/RogOzone.vue'),
    name: 'RealistOzoneRogOzone'
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