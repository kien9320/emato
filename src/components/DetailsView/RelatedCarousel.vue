<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
    name: 'RelatedCarousel',
    data() {
        return {
            slickSettings: {
                slidesToShow: 4,
                arrows: false,
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
                        breakpoint: 576,
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
    components: {
        slick: VueSlickCarousel,
    },
    props: {
        items: Array,
    },
    methods: {
        handleClick() {},
    },
};
</script>

<template>
    <div class="row">
        <div class="col-12">
            <div class="withBotBorder">
                <div class="title"><b>Sản phẩm</b> liên quan</div>
            </div>
            <slick v-bind="slickSettings">
                <div v-for="item in items" :key="item.price">
                    <div class="item">
                        <div class="carouselImgWrapper">
                            <div class="addCartSlide">
                                <button class="addCart">
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                            <img
                                class="productImage"
                                :src="item.img"
                                alt="product"
                            />
                        </div>
                        <div class="itemTitle">
                            <router-link
                                class="link"
                                :to="{
                                    name: 'Details',
                                    params: { id: item.id },
                                }"
                            >
                                {{ item.name }}
                            </router-link>
                        </div>
                        <div class="ratingWrapper">
                            <i
                                class="fa-regular fa-star"
                                v-for="n in 5"
                                :key="n"
                            />
                        </div>
                        <div class="priceWrapper">
                            {{ formatter(item.price) }}
                        </div>
                    </div>
                </div>
            </slick>
        </div>
    </div>
</template>

<style scoped>
.link {
    color: inherit;
    text-decoration: none;
    transition: all 0.2s ease;
}
.link:hover {
    color: #2ec7ff;
}
.productImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.item {
    background-color: white;
    padding: 5px 10px;
    margin: 0px 5px;
    text-align: center;
    transition: background-color 1s ease;
}
.item:hover {
    background-color: rgba(253, 252, 241, 0.25);
}
.item:hover .addCartSlide {
    transform: translateY(0);
}
.carouselImgWrapper {
    height: 190px;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
}
.addCartSlide {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    transform: translateY(-100%);
    transition: all 0.3s ease;
    z-index: 1;
}
.addCart {
    border: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 30px;
    padding: 10px 15px;
    width: 80%;
    background-color: #fcb700;
    /* margin: 20px 0; */
    color: white;
    font-size: 12px;
    transition: all 0.3s ease;
}
.addCart:hover {
    background-color: #222;
}
.ratingWrapper {
    color: #fcb700;
    margin: 5px 0;
}
.withBotBorder {
    border-bottom: 1px solid #dcdcdc;
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
.itemTitle {
    overflow: hidden;
    height: 40px;
    font-size: 14px;
}
</style>
