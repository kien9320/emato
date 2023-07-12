<script>
export default {
    name: 'CartView',
    data() {
        return {
            formatter: new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format,
        };
    },
    computed: {
        products() {
            return this.$store.getters['cart/CartProducts'];
        },
        totalPrice() {
            let totalPrice = 0;
            this.products.forEach((item) => {
                totalPrice += item.price * item.quantity;
            });
            return totalPrice;
        },
    },
    methods: {
        increOrder(productId) {
            this.$store.commit('cart/INCREMENT_PRODUCT_IN_CART', {
                id: productId,
                quantity: 1,
            });
        },
        decreOrder(productId) {
            this.$store.commit('cart/DECREMENT_PRODUCT_IN_CART', {
                id: productId,
                quantity: 1,
            });
        },
        removeOrder(productId) {
            this.$store.commit('cart/REMOVE_PRODUCT_FROM_CART', productId);
        },
    },
};
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 withBotBorder">
                <div class="title">
                    <b>Giỏ hàng</b>
                </div>
            </div>
            <div class="col-12">
                <table>
                    <tr>
                        <th class="text-center" style="width: 20%">Hình ảnh</th>
                        <th>Tên</th>
                        <th style="width: 200px">Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Tổng</th>
                    </tr>
                    <tr v-for="product in products" :key="product.id">
                        <td>
                            <div class="imgWrapper">
                                <img :src="product.img" alt="product" />
                            </div>
                        </td>
                        <td>
                            {{ product.name }}
                        </td>
                        <td>
                            <div class="input-group pr-3">
                                <div class="input-group-prepend">
                                    <button
                                        class="input-group-text"
                                        @click="decreOrder(product.id)"
                                    >
                                        -
                                    </button>
                                </div>
                                <input
                                    disabled
                                    class="form-control"
                                    aria-label="quantity"
                                    :value="product.quantity"
                                />
                                <div class="input-group-append">
                                    <button
                                        class="input-group-text"
                                        @click="increOrder(product.id)"
                                    >
                                        +
                                    </button>
                                    <button
                                        class="btn btn-danger"
                                        @click="removeOrder(product.id)"
                                    >
                                        x
                                    </button>
                                </div>
                            </div>
                        </td>
                        <td>
                            {{ formatter(product.price) }}
                        </td>
                        <td>
                            {{ formatter(product.quantity * product.price) }}
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2"></td>
                        <td>Tổng</td>
                        <td></td>
                        <td>
                            {{ formatter(totalPrice) }}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
.withBotBorder {
    border-bottom: 1px solid #ebebeb;
}
.title {
    position: relative;
    font-size: 24px;
}
.title::after {
    position: absolute;
    content: '';
    bottom: -1px;
    left: 0;
    height: 2px;
    width: 50px;
    background: #43c7ff;
}
table {
    width: 100%;
    background-color: white;
}
th {
    min-width: 150px;
}
tr:nth-child(even) {
    background-color: #f9f9f9;
}
.imgWrapper {
    margin: 10px auto;
    width: fit-content;
}
img {
    width: 70px;
    height: 70px;
}
input:disabled {
    background-color: white;
}
</style>
