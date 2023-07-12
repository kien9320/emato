import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import VueToastr from 'vue-toastr';
import App from './App.vue';
import router from './router';
import store from './store';
import './designs/app.scss';
import 'animate.css';

// import fontawesome
import './designs/font-awesome/scss/duotone.scss';
import './designs/font-awesome/scss/fontawesome.scss';
import './designs/font-awesome/scss/solid.scss';
import './designs/font-awesome/scss/regular.scss';

import './designs/font-awesome/js/fontawesome.min';
import './designs/font-awesome/js/solid.min';
import './designs/font-awesome/js/duotone.min';
import './designs/font-awesome/js/regular.min';
import './designs/font-awesome/js/brands.min';
import i18n from './i18n';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueToastr, {
    defaultTimeout: 3000,
    defaultPosition: 'toast-top-right',
    defaultClassNames: ['animate__animated ', 'animate__bounceInRight'],
});
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
}).$mount('#app');
