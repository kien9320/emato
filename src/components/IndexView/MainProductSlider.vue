<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
    name: 'MainSlider',
    data() {
        return {
            categories: [
                'Điện thoại',
                'Máy tính bảng',
                'Vỏ, bao & ốp lưng',
                'Pin sạc dự phòng',
                'Thiết bị điện tử',
                'Tivi',
                'Tai nghe',
                'Dụng cụ & thiết bị tiện ích',
                'Máy tính & Laptop',
                'Chuột, bàn phím',
            ],
            // slickSettings: {
            //     arrows: false,
            //     dots: true,
            //     autoplay: true,
            // },
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
            isClosed: false,
        };
    },
    components: {
        slick: VueSlickCarousel,
    },
    methods: {
        handleClick() {
            this.isClosed = !this.isClosed;
        },
    },
};
</script>

<template>
    <div class="container py-4">
        <div class="row">
            <div class="col-3 d-none d-xl-block">
                <div class="categoryWrapper">
                    <button @click="handleClick" class="categoryToggle">
                        <i class="fa-regular fa-bars" />
                        Danh mục sản phẩm
                    </button>
                    <div class="categoryMenu" :class="{ menuClosed: isClosed }">
                        <div
                            class="categoryTag"
                            v-for="cat in categories"
                            :key="cat"
                        >
                            {{ cat }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-9 col-12">
                <slick v-bind="settingCarousel" ref="myCarousel">
                    <div v-for="n in 3" :key="n">
                        <img
                            :src="require(`@/assets/slideItem${n}.jpeg`)"
                            alt="bannerSlide"
                        />
                    </div>
                </slick>
            </div>
        </div>
    </div>
</template>

<style scoped>
button {
    border: none;
    border-bottom: 1px solid #ebebeb;
    background-color: white;
    text-transform: uppercase;
    height: 61px;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    line-height: 61px;
    padding: 0px;
    text-align: left;
    padding-left: 10px;
}

.categoryMenu {
    overflow: hidden;
    height: 430px;
    transition: all 0.3s linear;
}

.menuClosed {
    height: 0;
    /* transform: translateX(20px); */
}

.categoryTag {
    width: 100%;
    padding: 9px 15px;
    background-color: white;
    border-bottom: 1px solid #ebebeb;
    font-weight: 500;
}

img {
    object-fit: contain;
    width: 100%;
}
</style>
