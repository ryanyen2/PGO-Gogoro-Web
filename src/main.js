import Vue from 'vue';
import VueRouter from 'vue-router';

import { routes } from './routes';
import store from './stores';
//import { firebaseListener } from './config/firebaseConfig';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// import firebase from 'firebase';
import VueTextareaAutosize from 'vue-textarea-autosize'

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueTextareaAutosize)

import './assets/styles/app.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify';


//firebaseListener(authStatusChange);


const router = new VueRouter({
	mode: 'history',
	routes
});

// router.beforeEach((to, from, next) => {
//     if (to.onlyGuest && store.getters.isLoggedIn) {
//         next('/');
//     } else {
//         next();
//     }
// });

// export const db = firebase.firestore();

new Vue({
    el: '#app',
    router,
    store,
    vuetify,
    render: h => h(App)
})

// function authStatusChange() {
// 	if (store) {
// 		store.commit('AUTH_STATUS_CHANGE');
// 		// if (user) {
// 		// 	store.dispatch('getShoppingCart', {uid: user.uid, currentCart: store.getters.cartItemList});
// 		// }
// 	}

// }