<!-- eslint-disable global-require -->
<script>
import VueSlickCarousel from 'vue-slick-carousel';
import SectionHeader from '@/components/SectionHeader.vue';

export default {
    name: 'NewNewSec',
    data() {
        return {
            formatter: new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format,
            slickSettings: {
                arrows: false,
                autoplay: false,
                slidesToShow: 5,
                responsive: [
                    {
                        breakpoint: 400,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                ],
            },
        };
    },
    components: {
        SectionHeader,
        slick: VueSlickCarousel,
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
};
</script>

<template>
    <SectionHeader @click-right="clickRight" @click-left="clickLeft" withArrows>
        <template #sectionTitle> <b>Sản phẩm</b> mới nhất </template>
        <template #carousel>
            <slick v-bind="slickSettings" ref="myCarousel">
                <div
                    class="product"
                    v-for="product in products"
                    :key="product.id"
                >
                    <div class="productWrapper">
                        <div class="imgWrapper">
                            <div class="forOverflow">
                                <img :src="product.img" alt="product" />
                                <div class="addCartSlide">
                                    <button
                                        class="addCart"
                                        @click="addProduct(product)"
                                    >
                                        Thêm vào giỏ hàng
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="px-2">
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
                                    class="fa-regular fa-star ml-1"
                                    v-for="n in 5"
                                    :key="n"
                                />
                            </div>
                            <div class="priceWrapper">
                                <span class="price">{{
                                    formatter((product.price * 80) / 100)
                                }}</span>
                                <!-- <span class="original price">{{
                                            product.price
                                        }}</span> -->
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
    transition: all 0.2s ease;
}
a:hover {
    color: #2ec7ff;
}
.imgWrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 200px;
}

.productWrapper {
    margin: 5px;
    background-color: white;
    height: 350px;
}

.imgWrapper {
    padding: 10px;
    overflow: hidden;
    height: 200px;
}

.productWrapper:hover img {
    transition: 1s;
    transform: scale(1.1);
    /* animation-duration: 0.5s;
    animation-name: productImage;
    animation-timing-function: linear; */
}

.productWrapper:hover .addCartSlide {
    background-color: rgba(0, 0, 0, 0.5);
}

.productWrapper:hover .addCart {
    opacity: 1;
}

.forOverflow {
    position: relative;
    overflow: hidden;
    height: 100%;
}

.addCartSlide {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: all 0.2s ease;

    display: flex;
    justify-content: center;
    align-items: center;
}

.addCart {
    position: relative;
    background-color: #fcb700;
    border: none;
    color: white;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 10px 15px;
    border-radius: 30px;
    opacity: 0;
    transition: all 0.2s ease;
}

.addCart:hover {
    background-color: black;
}

.titWrapper {
    margin: 10px 0;
    overflow: hidden;
    max-height: 60px;
    line-height: 1.2;
    text-align: center;
}

.ratingWrapper {
    color: #fcb700;
    margin-left: -10px;
    text-align: center;
}

.priceWrapper {
    text-align: center;
    margin: 10px 0;
}

.price {
    margin: 0 10px;
    font-weight: 600;
}

.discount {
    color: #fcb700;
}

.original {
    text-decoration: line-through;
}

@keyframes productImage {
    0% {
        transform: scale(1);
    }

    100% {
    }
}
</style>
