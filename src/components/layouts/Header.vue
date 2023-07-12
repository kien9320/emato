<script>
import CustomSelect from '../CustomSelect.vue';
import NavigationTags from './HeaderComponents/NavigationTags.vue';

export default {
    name: 'GlobalHeader',
    data() {
        return {
            categories: [
                'Tất cả danh mục',
                'Thời trang Nam',
                'Thời trang Nữ',
                'Phụ kiện',
                'Đồ mẹ và bé',
                'Thực phẩm bổ sung',
            ],
            isCart: false,
            formatter: new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format,
        };
    },
    methods: {
        removeItem(productId) {
            this.$store.commit('cart/REMOVE_PRODUCT_FROM_CART', productId);
        },
        goToCart() {
            this.$router.push({ name: 'Cart' });
            this.isCart = false;
        },
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
    components: { CustomSelect, NavigationTags },
};
</script>
<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col d-none d-md-inline py-2">
                    Email:<b>tmdt.pisolution@gmail.com</b>
                </div>
                <div class="col text-right py-2">
                    <div class="row text-right float-right">
                        <router-link :to="{ name: 'Login' }">
                            <div class="col-auto rightBoxed py-1">
                                Đăng nhập
                            </div>
                        </router-link>
                        <router-link :to="{ name: 'Register' }">
                            <div class="col-auto rightBoxed py-1">Đăng ký</div>
                        </router-link>
                        <div class="col-auto rightBoxed py-1">
                            Kiểm tra đơn hàng
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="withDividor">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-4 col-lg-3 col-md-12 col py-2">
                        <div
                            class="d-flex justify-content-left justify-content-sm-between"
                        >
                            <div class="imgWrapper">
                                <router-link :to="{ name: 'Home' }">
                                    <img
                                        src="@/assets/ematoLogo.png"
                                        alt="emato Logo"
                                    />
                                </router-link>
                            </div>
                            <div class="d-none d-md-flex d-lg-none d-xl-flex">
                                <div class="hotlineIcon">
                                    <i class="fa-solid fa-headset"></i>
                                </div>
                                <div class="hotlineInfo">
                                    <span>Hotline:</span>
                                    <h6>0888744955</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 col-lg-9 col-md-12 col py-2">
                        <div class="searchField float-left d-none d-md-block">
                            <form>
                                <div class="searchBox">
                                    <input
                                        type="text"
                                        aria-label="productSearch"
                                        id="productSearch"
                                        name="query"
                                        placeholder="Nhập tên sản phẩm bạn cần tìm..."
                                    />

                                    <button class="searchButton" type="submit">
                                        <span>Tìm sản phẩm</span>
                                    </button>
                                    <div class="selectCategory">
                                        <CustomSelect
                                            :options="categories"
                                        ></CustomSelect>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div
                            class="cartWrapper float-right d-flex position-relative"
                        >
                            <a
                                class="cartToggle"
                                @click="isCart = !isCart"
                                @keypress="isCart = !isCart"
                            >
                                <div class="iconWrapper">
                                    <i class="fa-regular fa-bag-shopping"></i>
                                </div>
                                <div
                                    v-if="products.length"
                                    class="numberOfItems"
                                >
                                    {{ products.length }}
                                </div>
                            </a>
                            <span class="cartDeets d-none d-sm-block">
                                <span class="cart">Giỏ hàng:</span>
                                <span class="cartPrice">{{
                                    formatter(totalPrice)
                                }}</span>
                            </span>
                            <div
                                class="cartMenu"
                                :class="{ activeCart: isCart }"
                            >
                                <div>
                                    <div class="cartTitle">
                                        <span class="cart">Giỏ hàng</span>
                                        <span>
                                            ({{ products.length }} sản phẩm
                                            trong giỏ hàng)
                                        </span>
                                    </div>
                                    <div class="cartItems">
                                        <div
                                            v-for="product in products"
                                            :key="product.id"
                                            class="cartItem"
                                        >
                                            <div class="cartItemDetails">
                                                <div class="cartImg">
                                                    <img
                                                        :src="product.img"
                                                        alt="cartProduct"
                                                    />
                                                </div>
                                                <div class="cartItemNamePrice">
                                                    <p>{{ product.name }}</p>
                                                    <p class="cartItemPrice">
                                                        {{ product.quantity }} x
                                                        {{
                                                            formatter(
                                                                product.price,
                                                            )
                                                        }}
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <button
                                                    class="removeCartItem"
                                                    @click="
                                                        removeItem(product.id)
                                                    "
                                                >
                                                    <i
                                                        class="fa-regular fa-trash-can"
                                                    ></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="totalWrapper">
                                            <div class="total">Tổng tiền</div>
                                            <div class="totalAmount">
                                                {{ formatter(totalPrice) }}
                                            </div>
                                        </div>
                                        <div class="checkoutWrapper">
                                            <button class="botan checkout">
                                                Đặt hàng
                                            </button>
                                            <button
                                                class="botan showCart"
                                                @click="goToCart"
                                            >
                                                Xem giỏ hàng
                                            </button>
                                        </div>
                                    </div>
                                    <div class="closeMenu">
                                        <button
                                            type="button"
                                            class="closeButton"
                                            @click="isCart = false"
                                        ></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NavigationTags></NavigationTags>
    </header>
</template>

<style lang="scss">
header {
    .show > .btn-secondary.dropdown-toggle {
        background-color: #2ec7ff !important;
    }

    .btn-secondary:focus {
        background-color: #2ec7ff !important;
        border: none;
        box-shadow: none;
    }

    .btn {
        background-color: transparent;
        color: black;
        font-weight: 500;
        font-family: 'Work Sans';
        font-style: normal;
        font-size: 16px;
        line-height: 22px;
        text-transform: uppercase;
        border: none;

        &:hover {
            background-color: #2ec7ff !important;
        }

        &:active {
            background-color: #2ec7ff !important;
            color: #ffffff !important;
        }
    }

    .dropdown-menu.show {
        border: none;

        .dropdown-item:active {
            background-color: transparent;
        }
    }
}
</style>
<style scoped lang="scss">
header {
    background-color: white;
    color: #666;
    font-size: 14px;
}

.withDividor {
    border-bottom: 1px solid rgb(184, 181, 181);
    border-top: 1px solid rgb(184, 181, 181);
    padding: 20px 0;
}

.rightBoxed::after {
    position: absolute;
    content: '';
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 0;
    width: 1px;
    height: 13px;
    background: #ebebeb;
}

.imgWrapper {
    width: 145px;
}

img {
    width: 100%;
}

.hotlineIcon {
    font-size: 35px;
    margin-right: 15px;
}

.searchField {
    width: 70%;
}

form {
    position: relative;
}

.searchBox {
    width: 100%;
    border: 2px solid #2ec7ff;
    border-radius: 30px;
    padding: 0px;
}

.searchBox::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 160px;
    height: 45%;
    width: 1px;
    background: #e1e1e1;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}

input {
    width: 65%;
    height: 50px;
    line-height: 50px;
    background-color: transparent;
    border: none;
    outline: none;
    margin-left: 170px;
    padding-right: 120px;
    font-size: 12px;
}

.searchButton {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    height: 100%;
    color: #fff;
    display: block;
    line-height: 50px;
    padding: 0 15px;
    font-size: 14px;
    font-weight: 400;
    background: #2ec7ff;
    border-radius: 0 30px 30px 0;
    text-transform: capitalize;
}

.selectCategory {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 155px;
    padding-left: 5px;
    height: auto;
    z-index: 2;
}

select {
    border: none;
    width: 90%;
    user-select: none;
    font-size: 14px;
}

.cartWrapper {
    position: relative;
}

.cartToggle {
    position: relative;
    width: 50px;
    height: 50px;
    display: inline-block;
    border: 2px solid #ebebeb;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    margin-right: 25px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.cartToggle:hover {
    background-color: #2ec7ff;
    border-color: #2ec7ff;
}

.cartToggle:hover .iconWrapper {
    color: white;
}

.cartToggle:hover .numberOfItems {
    background-color: #222;
}

.numberOfItems {
    min-width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    position: absolute;
    top: -2px;
    left: 35px;
    color: #ffffff;
    background: #fcb700;
    border-radius: 100%;
    font-size: 10px;
    transition: all 0.2s ease;
}

.iconWrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    color: black;
}

.cartPrice {
    display: block;
}

.closeMenu {
    position: absolute;
    top: 15px;
    right: 15px;
}

.closeButton {
    background-color: transparent;
    color: #222;
    font-size: 16px;
    border: none;
    outline: none;
    padding: 0;
}

.closeButton::after {
    content: '\f00d';
    font-family: 'Font Awesome 6 pro';
}

.cartTitle {
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 20px;
}

.cartItems {
    border-bottom: 1px solid #ebebeb;
    padding: 20px 0px;
}

.cartMenu {
    position: absolute;
    width: 80vw;
    max-width: 350px;
    min-width: 280px;
    max-height: 70vh;
    overflow-y: auto;
    background-color: white;
    top: 120%;
    right: 0;
    visibility: hidden;
    opacity: 0;
    border-top: 2px solid #43c7ff;
    box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
    padding: 35px 15px;
    padding-top: 27px;
    transform: translateY(20px);
    transition: all 0.3s ease;
    z-index: 100;
}

.activeCart {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
}

.cart {
    font-size: 18px;
    font-weight: 500;
}

.totalWrapper {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    padding: 20px 0;
}

.totalAmount {
    color: #fcb700;
}

.botan {
    display: block;
    font-size: 12px;
    font-weight: 500;
    background-color: transparent;
    height: 45px;
    line-height: 42px;
    padding: 0 50px;
    color: black;
    border-radius: 30px;
    text-transform: initial;
    z-index: 1;
    text-transform: uppercase;
    border: 2px solid transparent;
    text-align: center;
    margin: 10px 0;
    width: 100%;
    transition: all 0.5s ease;
}

.checkout {
    background-color: #fcb700;
    border-color: #fcb700;
    color: white;
}

.checkout:hover {
    background-color: transparent;
    color: black;
}

.showCart {
    border-color: #43c7ff;
}

.showCart:hover {
    background-color: #43c7ff;
    color: white;
}

a {
    color: black;
    text-decoration: none;
    transition: all 0.2s ease;
}
.cartItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0;
}

.cartImg {
    width: 70px;
    height: 70px;
    margin-right: 10px;
    flex-shrink: 0;
}

.cartItemDetails {
    display: flex;
    width: 100%;
}

.cartItemNamePrice {
    font-size: 14px;
    font-weight: 500;
    width: 100%;
}

.cartItemPrice {
    color: #fcb700;
}

.removeCartItem {
    background-color: transparent;
    outline: none;
    border: none;
}
</style>
