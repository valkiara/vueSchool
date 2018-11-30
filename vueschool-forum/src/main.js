// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import AppDate from '@/components/AppDate'
import firebase from 'firebase'

Vue.component('AppDate', AppDate)

Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAQqVIxZgHnf7cR1yvKgbJ9XWvVm5Vgfg4',
  authDomain: 'vue-school-forum-f8a8a.firebaseapp.com',
  databaseURL: 'https://vue-school-forum-f8a8a.firebaseio.com',
  projectId: 'vue-school-forum-f8a8a',
  storageBucket: 'vue-school-forum-f8a8a.appspot.com',
  messagingSenderId: '75117085177'
}

firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
