import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () =>
            // eslint-disable-next-line import/extensions
            import(/* webpackChunkName: "about" */ '../views/Index.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import('@/views/HomeView.vue'),
            },
            {
                path: '/article',
                name: 'Article',
                component: () => import('@/views/Article.vue'),
            },
            {
                path: '/detail-article/:title',
                name: 'DetailArticle',
                component: () => import('@/views/ArticleDetail.vue'),
            },
            {
                path: '/shop',
                name: 'Shop',
                component: () => import('@/views/ShopsView.vue'),
            },
            {
                path: '/contact',
                name: 'Lien he',
                component: () => import('@/views/LienHeView.vue'),
            },
            {
                path: '/details/:id',
                name: 'Details',
                component: () => import('@/views/DetailsView.vue'),
                props: true,
            },
            {
                path: '/hotel-booking',
                name: 'HotelBooking',
                component: () => import('@/views/HotelBooking.vue'),
            },
            {
                path: '/find-hotel',
                name: 'FindHotel',
                component: () => import('@/views/FindHotel.vue'),
            },
            {
                path: '/detail-hotel/:title',
                name: 'DetailHotel',
                component: () => import('@/views/DetailHotel.vue'),
            },
            {
                path: '/cart',
                name: 'Cart',
                component: () => import('@/views/CartView.vue'),
            },
            {
                path: '/plane-booking',
                name: 'PlaneBooking',
                component: () => import('@/views/PlaneBookingView.vue'),
            },
            {
                path: '/plane-details',
                name: 'PlaneDetails',
                component: () => import('@/views/PlaneDetailsView.vue'),
            },
        ],
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/Register.vue'),
    },
    {
        path: '/vee-validate',
        name: 'VeeValidate',
        component: () => import('@/views/FormVeeValidate.vue'),
    },
    {
        path: '/log-in',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, form, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {
                x: 0,
                y: 0,
                behavior: 'smooth',
            };
        }
    },
});

export default router;
