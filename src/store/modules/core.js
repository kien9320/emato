// const axios = require('@/config/axios').default;

export default {
    namespaced: true,
    state: () => ({
        error: '',
        success: '',
        maintainers: 0,
    }),

    getters: {
        Error: (state) => state.error,
        Success: (state) => state.success,
        Maintainers: (state) => state.maintainers,
    },

    actions: {},
    mutations: {
        SUCCESS_MESSAGE(state, message) {
            state.success = message;
        },
        ERROR_MESSAGE(state, message) {
            state.error = message;
        },
        ERROR_500(state, message) {
            state.status = message;
        },
    },
};
