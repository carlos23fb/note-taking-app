import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false
import mitt from "mitt";
const emitter = mitt();
export default emitter;

new Vue({
  render: h => h(App),
}).$mount('#app')
