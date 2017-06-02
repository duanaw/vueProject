import Vue from 'vue'
import App from './App'
import router from './router/router';
import VueResource from 'vue-resource'
import Mint from 'mint-ui';
import store from "./store";

Vue.use(Mint);
Vue.use(VueResource)  //挂载在use上面
console.log(VueResource)
/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
