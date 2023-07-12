<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable global-require -->
<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
    name: 'HotProducts',
    data() {
        return {
            slickSettings: {
                arrows: false,
                autoplay: true,
                rows: 2,
                slidesToShow: 3,
                responsive: [
                    {
                        breakpoint: 576,
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
            products: [
                {
                    img: require('@/assets/product2.jpg'),
                    tit: '  Micellar Water 3-in-1 Refreshing Even For Sensitive Skin',
                    price: 3000,
                },
                {
                    img: require('@/assets/product3.jpg'),
                    tit: ' Nước Tẩy Trang LOreal Tươi Mát Cho Da Dầu, ',
                    price: 12356,
                },
                {
                    img: require('@/assets/product4.jpg'),
                    tit: ' Nước Tẩy Trang LOreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml Micellar Water 3-in-1 Refreshing Even For Sensitive Skin',
                    price: 12000,
                },
                {
                    img: require('@/assets/product5.jpg'),
                    tit: ' Nước Tẩy Trang LOreal Tươi Mát ter 3-in-1 Refreshing Even For Sensitive Skin',
                    price: 33000,
                },
                {
                    img: require('@/assets/product6.jpg'),
                    tit: ' Nước Tẩy Trang LOreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml Micellar Water 3-in-1 Refreshing Even For Sensitive Skin',
                    price: 5000,
                },
                {
                    img: require('@/assets/product4.jpg'),
                    tit: ' 3-in-1 Refreshing Even For Sensitive Skin',
                    price: 6000,
                },
                {
                    img: require('@/assets/product2.jpg'),
                    tit: ' Nước Tẩy Trang LOreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml Micellar Water 3-in-1 Refreshing Even For Sensitive Skin',
                    price: 12000,
                },
                {
                    img: require('@/assets/product3.jpg'),
                    tit: ' Nước Tẩy Trang LOreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml Micellar Water 3-in-1 Refreshing Even For Sensitive Skin',
                    price: 4000,
                },
                {
                    img: require('@/assets/product4.jpg'),
                    tit: ' Nước Tẩy Trang LOreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml Micellar Water 3-in-1 Refreshing Even For Sensitive Skin',
                    price: 152000,
                },
                {
                    img: require('@/assets/product5.jpg'),
                    tit: ' Nước Tẩy Trang LOreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml Micellar Water 3-in-1 Refreshing Even For Sensitive Skin',
                    price: 330000,
                },
                {
                    img: require('@/assets/product6.jpg'),
                    tit: ' Nước Tẩy Trang LOreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml Micellar Water 3-in-1 Refreshing Even For Sensitive Skin',
                    price: 25000,
                },
                {
                    img: require('@/assets/product4.jpg'),
                    tit: ' Nước Tẩy Trang LOreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml Micellar Water 3-in-1 Refreshing Even For Sensitive Skin',
                    price: 69000,
                },
                {
                    img: require('@/assets/product2.jpg'),
                    tit: ' Nước Tẩy Trang LOreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml Micellar Water 3-in-1 Refreshing Even For Sensitive Skin',
                    price: 387000,
                },
                {
                    img: require('@/assets/product3.jpg'),
                    tit: ' Nước Tẩy Trang LOreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml Micellar Water 3-in-1 Refreshing Even For Sensitive Skin',
                    price: 1000,
                },
                {
                    img: require('@/assets/product4.jpg'),
                    tit: ' Nước Tẩy Trang LOreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml Micellar Water 3-in-1 Refreshing Even For Sensitive Skin',
                    price: 12300,
                },
                {
                    img: require('@/assets/product5.jpg'),
                    tit: ' Nước Tẩy Trang LOreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml Micellar Water 3-in-1 Refreshing Even For Sensitive Skin',
                    price: 33050,
                },
                {
                    img: require('@/assets/product6.jpg'),
                    tit: ' Nước Tẩy Trang LOreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml Micellar Water 3-in-1 Refreshing Even For Sensitive Skin',
                    price: 5090,
                },
                {
                    img: require('@/assets/product4.jpg'),
                    tit: ' Nước Tẩy Trang LOreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml Micellar Water 3-in-1 Refreshing Even For Sensitive Skin',
                    price: 6120,
                },
            ],
        };
    },
    components: {
        slick: VueSlickCarousel,
    },
    methods: {
        clickRight() {
            this.$refs.myCarousel.next();
        },
        clickLeft() {
            this.$refs.myCarousel.prev();
        },
    },
};
</script>

<template>
    <div class="container py-4">
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between withBotBorder">
                    <div class="title"><b>Sản phẩm</b> bán chạy nhất</div>
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
        <div class="row">
            <div class="col-12">
                <slick v-bind="slickSettings" ref="myCarousel">
                    <div v-for="product in products" :key="product">
                        <div class="productWrapper">
                            <div class="row">
                                <div class="col-4">
                                    <div class="imgWrapper">
                                        <img :src="product.img" alt="product" />
                                    </div>
                                </div>
                                <div class="col-8">
                                    <div class="titWrapper">
                                        <h6>
                                            {{ product.tit }}
                                        </h6>
                                    </div>
                                    <div class="ratingWrapper">
                                        <i
                                            class="fa-regular fa-star"
                                            v-for="n in 5"
                                            :key="n"
                                        />
                                    </div>
                                    <div class="priceWrapper">
                                        <span class="discount price">{{
                                            (product.price * 20) / 100
                                        }}</span>
                                        <!-- <span class="original price">{{
                                            product.price
                                        }}</span> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </slick>
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
button {
    border: none;
    background-color: transparent;
}
img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    max-height: 188px;
}
.productWrapper {
    margin: 10px;
    background-color: white;
}
.imgWrapper {
    margin: 10px;
}
.titWrapper {
    margin: 10px 0;
    overflow: hidden;
    height: 80px;
}
.ratingWrapper {
    color: #fcb700;
}
.priceWrapper {
    margin: 10px 0;
}
.price {
    margin: 0 10px;
}
.discount {
    color: #fcb700;
}
.original {
    text-decoration: line-through;
}
</style>
