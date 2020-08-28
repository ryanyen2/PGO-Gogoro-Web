import Shop from './components/Shop.vue';
// import Product from './components/Product.vue';
// import ProductDetails from './components/ProductDetails.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import Reservation from './components/reservation/Reservation.vue';
import Carousel from './components/Carousel.vue';
import Logout from './components/auth/logout.vue';
import ForgotPassword from './components/auth/forgotPassword.vue';

export const routes = [
	{path: '/', component: Carousel, name: 'mainpage'},
	// {path: '/product/:id', component: ProductDetails, name: 'product'},
	// {path: '/cart', component: Product, name: 'Product'},
	{
		path: '/logout',
		component: Logout,
		name: 'logout',
		onlyGuest: true
	},
	{
		path: '/forgot-password',
		component: ForgotPassword,
		name: 'forgotPassword',
		onlyGuest: true
	},
	{path: '/login', component: Login, name: 'login', onlyGuest: true },
	{path: '/register', component: Register, name: 'register', onlyGuest: true},
	{path: '/shop', component: Shop, name: 'shop'},
	{path: '/reservation', component: Reservation, name: 'reservationpage'},
	{path: '*', redirect: '/' }
];