import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/PageHome'
import ThreadShow from '@/components/pages/PageThreadShow'
import Forum from '@/components/pages/PageForum'
import PageProfile from '@/components/pages/PageProfile'
import NotFound from '@/components/pages/PageNotFound'
import Category from '@/components/pages/PageCategory'
import ThreadCreate from '@/components/pages/PageThreadCreate'
import ThreadEdit from '@/components/pages/PageThreadEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/thread/create/:forumId',
      name: 'ThreadCreate',
      component: ThreadCreate,
      props: true
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
      props: true
    },
    {
      path: '/thread/:id/edit',
      name: 'ThreadEdit',
      component: ThreadEdit,
      props: true
    },
    {
      path: '/forum/:id',
      name: 'Forum',
      component: Forum,
      props: true
    },
    {
      path: '/me',
      name: 'Profile',
      component: PageProfile,
      props: true
    },
    {
      path: '/me/edit',
      name: 'ProfileEdit',
      component: PageProfile,
      props: {edit: true}
    },
    {
      path: '/category/:id',
      name: 'Category',
      component: Category,
      props: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  mode: 'history'
})
