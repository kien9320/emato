import Vue from 'vue';
import Vuex from 'vuex';
import products from '@/store/modules/products';
import cart from '@/store/modules/cart';
import plane from '@/store/modules/plane';

Vue.use(Vuex);

export default new Vuex.Store({
    state: () => ({
        loadingStatus: false,
        totalSend: 0,
        totalReceive: 0,
        error: '',
        success: '',
        status: 0,
    }),
    getters: {
        LoadingStatus: (state) => state.loadingStatus,
    },
    mutations: {
        onLoad(state) {
            this.commit('StatusLoad', true);
            state.totalSend += 1;
        },
        outLoad(state) {
            state.totalReceive += 1;
            if (state.totalSend <= state.totalReceive) {
                this.commit('StatusLoad', false);
            }
        },
        StatusLoad: (state, data) => {
            if (data) {
                state.loadingStatus = true;
                return;
            }
            state.loadingStatus = false;
            state.totalSend = 0;
            state.totalReceive = 0;
        },
    },
    actions: {},
    modules: {
        products,
        cart,
        plane,
    },
});
