<!-- eslint-disable global-require -->
<script>
import VueSlickCarousel from 'vue-slick-carousel';
import SectionHeader from '@/components/SectionHeader.vue';

export default {
    name: 'HotSec',
    data() {
        return {
            slickSettings: {
                arrows: false,
                autoplay: false,
                rows: 2,
                slidesToShow: 3,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
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
    components: { SectionHeader, slick: VueSlickCarousel },
};
</script>

<template>
    <SectionHeader withArrows @click-right="clickRight" @click-left="clickLeft">
        <template #sectionTitle><b>Sản phẩm</b> bán chạy nhất</template>
        <template #carousel>
            <slick v-bind="slickSettings" ref="myCarousel">
                <div v-for="(product, index) in products" :key="index">
                    <div class="productWrapper">
                        <div class="row h-100">
                            <div class="col-5 pr-0">
                                <div class="imgWrapper">
                                    <img :src="product.img" alt="product" />
                                </div>
                            </div>
                            <div class="col-7">
                                <div class="titWrapper">
                                    <router-link
                                        :to="{
                                            name: 'Details',
                                            params: { id: product.id },
                                        }"
                                    >
                                        {{ product.name }}
                                    </router-link>
                                </div>
                                <div class="ratingWrapper">
                                    <i
                                        class="fa-regular fa-star mx-1"
                                        v-for="n in 5"
                                        :key="n"
                                    />
                                </div>
                                <div class="priceWrapper">
                                    <div class="forOverflow">
                                        <span
                                            class="addCart"
                                            @click="addProduct(product)"
                                            @keypress="addProduct(product)"
                                        >
                                            <i
                                                class="fa-solid fa-cart-plus"
                                            ></i>
                                        </span>
                                        <span class="discount price">{{
                                            formatter(
                                                (product.price * 70) / 100,
                                            )
                                        }}</span>
                                        <!-- <span class="original price">{{
                                                product.price
                                            }}</span> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </slick>
        </template>
    </SectionHeader>
</template>

<style scoped>
a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
}
a:hover {
    color: #2ec7ff;
}
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 188px;
}
.productWrapper {
    margin: 10px;
    background-color: white;
    height: 150px;
}
.productWrapper:hover .forOverflow {
    transform: translateX(0);
}
.productWrapper:hover .addCart {
    transform: translateX(0);
}
.imgWrapper {
    padding: 10px 5px;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.titWrapper {
    margin: 10px 0;
    overflow: hidden;
    max-height: 50px;
}
.ratingWrapper {
    color: #fcb700;
}
.priceWrapper {
    margin: 10px 0;
    position: relative;
    overflow-x: hidden;
}
.price {
    margin-right: 20px;
}
.discount {
    color: #fcb700;
}
.original {
    text-decoration: line-through;
}
.addCart {
    color: #fcb700;
    margin-right: 5px;
    transform: translateX(-18px);
    cursor: pointer;
    transition: all 0.1s ease;
    transition-delay: 0.1s;
}
.forOverflow {
    transform: translateX(-18px);
    transition: margin-left 0.2s ease;
    display: flex;
    transition: transform 0.2s ease;
}
</style>
