// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/styles/app.scss'
import vueResource from 'vue-resource'
import vueMultiselect from 'vue-multiselect'
import vueFire from 'vuefire'
import firebase from 'firebase'

Vue.use(vueResource)
Vue.use(vueMultiselect)
Vue.use(vueFire)

Vue.config.productionTip = false

Vue.component('multiselect', vueMultiselect)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  created () {
    console.log(firebase)
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.$router.push('/success')
    //   } else {
    //     this.$router.push('/home')
    //   }
    // })
  },
  template: '<App/>',
  components: { App }
})
