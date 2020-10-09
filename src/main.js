import Vue from 'vue'
import App from './App.vue'
import VueLayers from 'vuelayers';
import Buefy from 'buefy';

Vue.use(Buefy);
Vue.use(VueLayers);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
