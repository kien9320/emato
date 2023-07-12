export default {
    namespaced: true,
    state: () => ({
        items: [],
        checkoutStatus: null,
    }),
    getters: {
        CartProducts: (state, getters, rootState) => {
            return state.items.map(({ id, quantity }) => {
                const product = rootState.products.products.find(
                    (prod) => prod.id === id,
                );
                return {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    img: product.img,
                    quantity,
                };
            });
        },
    },
    actions: {
        act_addProductToCart({ state, commit }, { product, quantity = 1 }) {
            const cartItem = state.items.find((item) => item.id === product.id);
            if (!cartItem) {
                commit('PUSH_PRODUCT_TO_CART', {
                    id: product.id,
                    quantity,
                });
            } else {
                commit('INCREMENT_PRODUCT_IN_CART', {
                    id: product.id,
                    quantity,
                });
            }
        },
    },
    mutations: {
        PUSH_PRODUCT_TO_CART(state, { id, quantity }) {
            state.items.push({
                id,
                quantity,
            });
            // console.log(state.items);
        },
        INCREMENT_PRODUCT_IN_CART(state, { id, quantity }) {
            const cartItem = state.items.find((item) => item.id === id);
            cartItem.quantity += quantity;
        },
        DECREMENT_PRODUCT_IN_CART(state, { id, quantity }) {
            const cartItem = state.items.find((item) => item.id === id);
            if (cartItem.quantity === 1) return;
            cartItem.quantity -= quantity;
        },
        REMOVE_PRODUCT_FROM_CART(state, id) {
            state.items = state.items.filter((item) => !(item.id === id));
        },
    },
};
