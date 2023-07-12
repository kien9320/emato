<!-- eslint-disable global-require -->
<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
    name: 'DiscountSec',
    data() {
        return {
            settingCarousel: {
                autoplay: true,
                dots: true,
                dotsClass: 'slick-dots custom-dot-class-discount',
                edgeFriction: 0.35,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            },
            slickSettings: {
                arrows: false,
                slidesToShow: 2,
                autoplay: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 375,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            },
            formatter: new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format,
        };
    },
    computed: {
        products() {
            return this.$store.getters['products/ReturnAllProducts'];
        },
    },
    methods: {
        clickRight() {
            this.$refs.myCarousel.next();
        },
        clickLeft() {
            this.$refs.myCarousel.prev();
        },
        addProduct(product) {
            this.$store.dispatch('cart/act_addProductToCart', { product });
        },
    },
    components: {
        slick: VueSlickCarousel,
        VueSlickCarousel,
    },
};
</script>

<template>
    <div class="container py-4">
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between withBotBorder">
                    <div class="title"><b>Sản phẩm</b> khuyến mãi</div>
                    <div class="float-right">
                        <button @click="clickLeft">
                            <i class="fa-regular fa-angle-left" />
                        </button>
                        <button @click="clickRight">
                            <i class="fa-regular fa-angle-right" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-12 col-xl-6 mb-4 mb-xl-0 d-none d-xl-block">
                <VueSlickCarousel v-bind="settingCarousel">
                    <div
                        class="discountWrapper bg-white"
                        v-for="n in 4"
                        :key="n"
                    >
                        <div class="row">
                            <div class="col-6">
                                <img
                                    class=""
                                    src="@/assets/product1.jpg"
                                    alt="discount"
                                />
                            </div>
                            <div class="col-6">
                                <div class="px-2">
                                    <div class="info">
                                        <div class="tit py-3">心だ</div>
                                        <div class="rating py-3">
                                            <i
                                                class="fa-regular fa-star"
                                                v-for="n in 5"
                                                :key="n"
                                            />
                                        </div>
                                        <div class="priceWrapper">
                                            <span class="discount price"
                                                >4200</span
                                            >
                                            <span class="original price"
                                                >6969</span
                                            >
                                        </div>
                                    </div>
                                    <div class="position-relative">
                                        <button class="addCart">
                                            Thêm vào giỏ hàng
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </VueSlickCarousel>
            </div>
            <div class="col-12 col-xl-6">
                <div class="">
                    <slick v-bind="slickSettings" ref="myCarousel">
                        <div
                            class="product"
                            v-for="product in products"
                            :key="product.price"
                        >
                            <div class="productWrapper">
                                <div class="carouselImgWrapper">
                                    <div class="addCartSlide">
                                        <button
                                            class="addCart"
                                            @click="addProduct(product)"
                                        >
                                            Thêm vào giỏ hàng
                                        </button>
                                    </div>
                                    <img
                                        class="productImg"
                                        :src="product.img"
                                        alt="product"
                                    />
                                </div>
                                <div class="infoWrapper">
                                    <div class="tit py-3">
                                        <router-link
                                            :to="{
                                                name: 'Details',
                                                params: { id: product.id },
                                            }"
                                        >
                                            {{ product.name }}
                                        </router-link>
                                    </div>
                                    <div class="rating py-2">
                                        <i
                                            class="fa-regular fa-star mx-1"
                                            v-for="n in 5"
                                            :key="n"
                                        />
                                    </div>
                                    <div class="priceWrapper">
                                        <span class="discount price">
                                            {{
                                                formatter(
                                                    (product.price * 80) / 100,
                                                )
                                            }}
                                        </span>
                                        <span class="original price">
                                            {{ formatter(product.price) }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </slick>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.custom-dot-class-discount {
    position: absolute;
    bottom: -40px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;

    li {
        position: relative;
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 0 5px;
        padding: 0;
        cursor: pointer;
        border-radius: 16px;
        background: #d9d9d9;

        &.slick-active {
            background: #575773;
        }

        button {
            display: none;
        }
    }
}
</style>
<style scoped>
a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
}

a:hover {
    color: #2ec7ff;
}

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

button {
    border: none;
    background-color: transparent;
}

img {
    width: 100%;
}

.info {
    font-size: 20px;
    margin-bottom: 20px;
}

.rating {
    color: #fcb700;
}
.price {
    text-align: end;
}
.original {
    font-size: 12px;
}
.discount {
    color: #fcb700;
}

.discountWrapper {
    display: flex;
    height: 100%;
    padding: 10px;
}

.original {
    text-decoration: line-through;
}

.vAlign {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.productWrapper {
    background-color: white;
    padding: 10px;
    margin: 0 5px;
    height: 380px;
}
.infoWrapper .priceWrapper {
    display: flex;
    flex-direction: column-reverse;
}
.carouselImgWrapper {
    overflow: hidden;
    position: relative;
    height: 188px;
}
.carouselImgWrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.carouselImgWrapper:hover .productImg {
    transform: scale(1.5);
}

.carouselImgWrapper:hover .addCartSlide {
    transform: translateY(0);
}

.addCartSlide {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    transform: translateY(-100%);
    transition: all 0.5s ease;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.addCart {
    border-radius: 30px;
    padding: 10px 15px;
    background-color: #fcb700;
    /* margin: 20px 0; */
    color: white;
    font-size: 12px;
    font-weight: 500;
}

.productImg {
    height: 100%;
    max-height: 188px;
    object-fit: scale-down;
    transition: all 0.5s ease;
}

.tit {
    max-height: 65px;
    overflow: hidden;
    font-size: 14px;
}
@media only screen and (min-width: 992px) {
    .tit {
        font-size: 16px;
    }
    .price {
        font-size: 20px;
    }
    .price.original {
        font-size: 14px;
    }
}
@media only screen and (max-width: 375px) {
    .title {
        font-size: 18px;
    }
}
</style>
