import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AxiosPlugin from 'vue-axios-cors';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(AxiosPlugin)
Vue.use(Vuetify)
Vue.use(VueSweetalert2);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')




 