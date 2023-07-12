import axios from 'axios';
import Vue from 'vue';
import VueCookies from 'vue-cookies';
import store from '@/store';

Vue.use(VueCookies);
const token = window.$cookies.get('HGB_user');
if (token != null && token.key != null) {
    axios.defaults.headers.common.Accept = 'application/json';
    axios.defaults.headers.common.Authorization = `Bearer ${token.key}`;
}
const instance = axios.create({
    baseURL: '#',
    ContentType: 'application/json',
    Accept: 'application/json',
    common: ['Access-Control-Allow-Origin', '*'],
});
function checkCodeStatus(code) {
    if (code >= 500) {
        return 500;
    }
    if (code >= 400) {
        return 400;
    }
    return false;
}
instance.interceptors.request.use(
    (config) => {
        const newConfig = config;
        return newConfig;
    },
    (error) => Promise.reject(error),
);
instance.interceptors.response.use(
    (res) => {
        store.commit('outLoad');
        if (res.data.status) {
            if (
                res.data.message &&
                res.data.message.length > 1 &&
                res.data.message != null &&
                res.data.message !== ''
            ) {
                store.commit('core/SUCCESS_MESSAGE', res.data.message, {
                    root: true,
                });
            }
            return res.data.data;
        }

        store.commit('core/ERROR_MESSAGE', res.data.message, { root: true });
        return false;
    },
    (error) => {
        store.commit('outLoad');
        if (error.response) {
            if (error.response.status === 401) {
                store.commit('auth/LOGOUT_SUCCESS');
                // window.location.href = `${window.location.origin}`;
                store.commit('core/ERROR_MESSAGE', 'Session Timeout', {
                    root: true,
                });
                return;
            }
            if (checkCodeStatus(error.response.status) === 500) {
                store.commit('core/ERROR_500', 500, { root: true });
                return;
            }

            if (checkCodeStatus(error.response.status) === 400) {
                store.commit('core/ERROR_MESSAGE', 'Some Thing Went wrong', {
                    root: true,
                });
            }
        }
    },
);

export default instance;
