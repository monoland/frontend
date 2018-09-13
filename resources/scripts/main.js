import Vue from 'vue';
import Vuetify from 'vuetify';
import { Authent } from './authent';
import * as Components from './components';

import App from './App.vue';
import router from './router';

window._ = require('lodash');

Vue.use(Vuetify);
Vue.use(Authent);
Vue.config.productionTip = false;

Object.keys(Components).forEach((component) => {
    Vue.component(Components[component].name, Components[component]);
});

window.apps = new Vue({
    router,
    data() {
        return {
            message: { show: false, text: null, type: null, time: 3500 }
        };
    },
    render: h => h(App)
}).$mount('#monoland');