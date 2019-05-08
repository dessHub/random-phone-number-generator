import Vue from 'vue'
import './plugins/vuetify'
import JsonCSV from 'vue-json-csv'

import App from './App.vue'

Vue.component('downloadCsv', JsonCSV)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
