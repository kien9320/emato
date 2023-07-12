<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
export default {
    components: { VueSlickCarousel },
    data() {
        return {
            nearBy: [
                {
                    id: 1,
                    src: 'Rectangle 62.png',
                    des: 'Địa điểm phổ biến trong khu vực',
                    km: '',
                },
                {
                    id: 2,
                    src: 'beach-icon.svg',
                    des: 'Pham Van Dong Beach',
                    km: '7.07 km',
                },
                {
                    id: 3,
                    src: 'railway-location.svg',
                    des: 'Da Nang Railway Station',
                    km: '7.07 km',
                },
                {
                    id: 4,
                    src: 'hospital-icon.svg',
                    des: 'Bệnh viện quốc tế Vinmec Đà Nẵng ',
                    km: '7.07 km',
                },
                {
                    id: 5,
                    src: 'plane-icon.svg',
                    des: 'Sân bay quốc tế Đà Nẵng (DAD)',
                    km: '7.07 km',
                },
            ],
            convenience: [
                {
                    id: 1,
                    src: 'wifi-icon.png',
                    des: 'Wifi',
                },
                {
                    id: 2,
                    src: 'car-icon.png',
                    des: 'Xe đưa đón',
                },
                {
                    id: 3,
                    src: 'lift-icon.png',
                    des: 'Thang máy',
                },
                {
                    id: 4,
                    src: 'car-park-icon.png',
                    des: 'Chỗ đậu xe',
                },
                {
                    id: 5,
                    src: 'restaurant-icon.png',
                    des: 'Nhà hàng',
                },
                {
                    id: 6,
                    src: 'car-park-icon.png',
                    des: 'Chỗ đậu xe',
                },
            ],
            item: {
                src: 'hotel-view.png',
                title: 'Khách sạn căn hộ Seashore',
                subTitle: '( Seashore Hotel & Apartment )',
                delPrice: '1.825.320 VND',
                price: '1.821.320 VND',
                type: 'Khách sạn',
                location: 'Mân Thái, Đà Nẵng',
                rating: 5,
                priceOneNight: 871.958,
            },
            listProducts: [
                {
                    src: 'ks-1.png',
                },
                {
                    src: 'ks-2.png',
                },
                {
                    src: 'ks-3.png',
                },
            ],
            solutionSetting: {
                pauseOnFocus: true,
                autoplay: true,
                dots: true,
                infinite: true,
                initialSlide: 2,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                swipeToSlide: true,
                arrows: false,
                dotsClass: 'custom-dot-class-solution',
            },
            productActive: {},
            listProductRight: [],
            indexActive: 0,
        };
    },
    methods: {
        changeImage(product, index) {
            this.onGetListProductRight(index);
            this.productActive = product;
        },
        onGetListProductRight(index) {
            if (index || index === 0) {
                this.listProductRight[index] = this.productActive;
            } else {
                this.listProductRight = this.listProducts;
                this.listProductRight.splice(0, 1);
            }
        },
    },
};
</script>
<template>
    <b-container class="main-detail-hotel">
        <b-row>
            <b-col cols="12">
                <div class="d-flex align-items-center">
                    <div class="hotel-title">
                        {{ item.title }}
                    </div>
                    <div class="subtitle ml-3">
                        {{ item.subTitle }}
                    </div>
                </div>
                <div class="hotel-item-type-bg">
                    <div class="hotel-item-type">
                        {{ item.type }}
                    </div>
                </div>
                <b-row class="location-rating">
                    <b-col class="location d-flex align-items-end" md="8">
                        <div>
                            <img src="@/assets/Hotel/location.png" />
                        </div>
                        <p class="ml-3">
                            {{ item.location }}
                        </p>
                    </b-col>
                    <b-col class="hotel-item-rating" md="4">
                        <div
                            class="stars"
                            v-for="(items, idx) in item.rating"
                            :key="items + idx"
                        >
                            <img
                                class="ml-3"
                                src="@/assets/Hotel/star-rating.png"
                            />
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row class="detail-hotel-row">
            <b-col
                class="detail-hotel-left-pic"
                lg="9"
                data-aos="zoom-in-right"
                data-aos-duration="1000"
            >
                <img
                    src="@/assets/Hotel/Detail/ks-1.png"
                    class="detail-hotel-img"
                />
            </b-col>
            <b-col
                class="detail-hotel-right-pic"
                lg="3"
                data-aos="zoom-in-left"
            >
                <div
                    class="detail-hotel-right-img-frame"
                    v-for="(solutionInfo, id) in listProducts"
                    :key="id"
                >
                    <img
                        :src="
                            require(`@/assets/Hotel/Detail/${solutionInfo.src}`)
                        "
                        class="detail-hotel-right-img"
                    />
                </div>
            </b-col>
        </b-row>
        <div class="row-left-pic-resp d-block d-md-none">
            <VueSlickCarousel
                v-bind="solutionSetting"
                class="detail-hotel-left-pic-resp"
                ref="carousel"
            >
                <div
                    v-for="(solutionInfo, id) in listProducts"
                    :key="id"
                    class="d-flex flex-wrap justify-content-center"
                >
                    <b-col class="detail-hotel-left-img-frame-resp" lg="5">
                        <img
                            :src="
                                require(`@/assets/Hotel/Detail/${solutionInfo.src}`)
                            "
                            class="detail-hotel-img-resp"
                        />
                    </b-col>
                </div>
            </VueSlickCarousel>
        </div>
        <b-row class="mt-4 ml-0 w-100">
            <b-col lg="1" md="0" class="dash-col mt-4">
                <div class="dash-detail-hotel d-flex justify-content-end p-2">
                    <img src="@/assets/Hotel/Detail/Rectangle 61.png" alt="" />
                </div>
            </b-col>
            <b-col lg="11" md="12" class="rating-price-col">
                <b-row>
                    <b-col md="12" lg="9" class="rating-price-frame">
                        <div class="detail-rating">
                            <div class="point-star-rating">
                                <div class="rating-point">
                                    {{ item.rating }}/5
                                </div>
                                <div class="blue-star">
                                    <img
                                        src="@/assets/Hotel/Detail/blue-star.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div class="guest-assess-frame">
                                <P> Xem đánh giá từ 219 du khách </P>
                                <div class="show-guest-assess-frame ml-3">
                                    <img
                                        src="@/assets/Hotel/Detail/show-assess.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="price-frame">
                            <div class="price-des">Giá phòng mỗi đêm từ</div>
                            <div class="main-hotel-price">
                                {{ item.price }} <span> &nbsp;/khách</span>
                            </div>
                        </div>
                    </b-col>
                    <b-col
                        md="12"
                        lg="3"
                        class="d-flex justify-content-end align-items-center"
                    >
                        <b-btn variant="primary" class="book-btn">
                            Đặt ngay
                        </b-btn>
                    </b-col>
                </b-row>
            </b-col>
            <div class="line-horizon"></div>
        </b-row>
        <b-row class="convenience-row ml-0 w-100">
            <b-col
                md="2"
                cols="6"
                class="convenience-frame"
                v-for="(item, idx) in convenience"
                :key="item + idx"
            >
                <div class="convenience-icon">
                    <img :src="require(`@/assets/Hotel/Detail/${item.src}`)" />
                </div>
                <div class="convenience-name">
                    {{ item.des }}
                </div>
            </b-col>
        </b-row>
        <b-row class="mt-5 ml-0 w-100">
            <b-col md="1" class="dash-col">
                <div class="dash-detail-hotel d-flex justify-content-end p-2">
                    <img src="@/assets/Hotel/Detail/Rectangle 61.png" alt="" />
                </div>
                <div
                    class="dash-detail-hotel d-flex justify-content-end p-2 mt-2"
                >
                    <img src="@/assets/Hotel/location-icon.png" alt="" />
                </div>
            </b-col>
            <b-col md="11">
                <b-row class="w-100 ml-0">
                    <b-col lg="9" md="12" class="rating-price-frame">
                        <div class="detail-rating">
                            <div class="location-inf">Thông tin địa điểm</div>
                        </div>
                    </b-col>
                    <b-col lg="9" md="12" class="rating-price-frame mt-3">
                        <div class="detail-rating">
                            <div class="address">
                                15-16 Hoàng Sa, Mân Thái, Sơn Trà, Đà Nẵng, Việt
                                Nam, 550000
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row class="my-4 ml-0 w-100 justify-content-between">
            <b-col
                xl="7"
                lg="12"
                md="12"
                class="main-detail-hotel-map-frame my-3"
            >
                <iframe
                    class="main-detail-hotel-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.33590877593!2d106.66528931531617!3d10.785564161972935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed3d54ef259%3A0xfa9fc62becd07f2e!2zNTM2IMSQLiBDw6FjaCBN4bqhbmcgVGjDoW5nIDgsIFBoxrDhu51uZyAxMSwgUXXhuq1uIDMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1660293215757!5m2!1svi!2s"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </b-col>
            <b-col xl="5" lg="12" md="12" class="my-3">
                <b-row
                    class="near-by-frame"
                    v-for="(item, idx) in nearBy"
                    :key="item + idx"
                >
                    <b-col sm="9" cols="12" class="d-flex">
                        <div class="near-by-icon-frame">
                            <img
                                :src="
                                    require(`@/assets/Hotel/Detail/${item.src}`)
                                "
                            />
                        </div>
                        <P class="ml-3">
                            {{ item.des }}
                        </P>
                    </b-col>
                    <b-col sm="3" cols="12">
                        <div class="near-by-km">
                            {{ item.km }}
                        </div>
                    </b-col>
                </b-row>
                <p style="padding: 0 10px">
                    Khoảng cách thể hiện được tính dựa trên đường thẳng. Khoảng
                    cách di chuyển thực tế có thể thay đổi.
                </p>
            </b-col>
        </b-row>
    </b-container>
</template>

<style lang="scss">
.main-detail-hotel {
    .custom-dot-class-solution {
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

    .dash-col {
        display: block;

        @media (max-width: 991px) {
            display: none !important;
        }
    }
}
</style>
<style scoped lang="scss">
.main-detail-hotel {
    margin-top: 3rem;

    .main-detail-hotel-map-frame {
        @media (max-width: 1200px) {
            margin-bottom: 1.5rem;
        }

        .main-detail-hotel-map {
            width: 100%;
            height: 100%;
            border: 0;

            @media (max-width: 1200px) {
                height: 350px;
            }

            @media (max-width: 420px) {
                height: 300px;
            }
        }
    }

    .near-by-frame {
        margin-bottom: 2rem;

        width: 100%;
        margin-left: 0;

        .near-by-icon-frame {
            width: 28px;
            height: 28px;

            img {
                width: 100%;
                object-fit: scale-down;
            }
        }

        .near-by-km {
            font-family: 'Inter';
            font-style: normal;

            font-size: 16px;
            line-height: 22px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            color: #9494b0;

            @media (max-width: 576px) {
                font-size: 14px;
                margin-top: 0.75rem;
                margin-left: 2.75rem;
                justify-content: flex-start;
            }
        }
    }

    p {
        font-family: 'Inter';
        font-style: normal;

        font-size: 16px;
        line-height: 26px;
        color: #9494b0;

        @media (max-width: 991px) {
            font-size: 14px !important;
            line-height: 24px;
        }
    }

    .convenience-row {
        padding: 0 4rem;

        @media (max-width: 991px) {
            padding: 0 10px;
        }
    }

    .convenience-frame {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 0.5rem;

        .convenience-name {
            font-family: 'Inter';
            font-style: normal;

            font-size: 16px;
            line-height: 30px;
            color: #575773;
            margin-top: 0.5rem;

            @media (max-width: 991px) {
                font-size: 14px;
                line-height: 28px;
                text-align: center;
            }
        }
    }

    .line-horizon {
        margin: 3rem 0;
        display: flex;
        justify-content: center;
        left: 50%;
        width: 100%;
        opacity: 1;
        height: 0.5px;
        background-color: #383e49;
    }

    .rating-price-col {
        margin-top: 1.5rem;

        @media (max-width: 991px) {
            width: 100%;
        }
    }

    .rating-price-frame {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 3rem 0 0;

        @media (max-width: 991px) {
            padding: 0 10px;
        }

        @media (max-width: 768px) {
            display: block;
        }

        .price-frame {
            .price-des {
                font-family: 'Inter';
                font-style: normal;
                font-size: 14px;
                line-height: 17px;
                color: #575773;
                text-align: right;
                margin: 0.75rem 0;

                @media (max-width: 768px) {
                    text-align: left;
                }
            }

            .main-hotel-price {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 26px;
                line-height: 35px;
                display: flex;
                align-items: center;
                text-align: right;
                color: #0397ff;

                @media (max-width: 991px) {
                    font-size: 18px;
                    margin-bottom: 0.75rem;
                }

                span {
                    font-family: 'Inter';
                    font-style: normal;

                    font-size: 14px;
                    line-height: 17px;
                    color: #575773;
                }
            }
        }
    }

    .detail-rating {
        .address {
            font-family: 'Inter';
            font-style: normal;

            font-size: 16px;
            line-height: 22px;
            color: #575773;
        }

        .location-inf {
            font-family: 'Inter';
            font-style: normal;

            font-size: 18px;
            line-height: 25px;
            color: #575773;
        }

        .guest-assess-frame {
            display: flex;
        }

        .point-star-rating {
            display: flex;
            margin-bottom: 0.75rem;

            .rating-point {
                font-family: 'Inter';
                font-style: normal;

                font-size: 24px;
                line-height: 28px;
                color: #575773;
            }

            .blue-star {
                margin-left: 1rem;
                width: 18px;
                height: 18px;

                img {
                    width: 100%;
                    object-fit: scale-down;
                }
            }
        }
    }
}

.book-btn {
    border: 1px solid hsl(205, 100%, 51%);
    border-radius: 98px;
    width: 270px;
    height: 50px;
    background: #ffff;

    font-family: 'Inter';
    font-style: normal;

    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0397ff;

    &:hover {
        background-color: #0397ff;
        color: #ffff;
    }

    @media (max-width: 991px) {
        width: 180px;
    }
}

.location-rating {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    width: 100%;
    margin: 0.75rem 0 2rem 0;

    .hotel-item-rating {
        display: flex;
        justify-content: flex-end;

        .stars {
            width: 20px;
            height: 20px;
            margin-left: 1rem;

            img {
                width: 100%;
                object-fit: scale-down;
            }
        }

        @media (max-width: 768px) {
            margin-top: 0.5rem;
        }
    }

    p {
        font-family: 'Inter';
        font-style: normal;

        font-size: 16px;
        line-height: 22px;
        color: #9494b0;

        @media (max-width: 991px) {
            font-size: 14px;
            line-height: 20px;
        }
    }
}

.hotel-item-type-bg {
    width: 100%;
    height: 31px;
    display: flex;
    margin: 0.5rem 0;
    justify-content: flex-end;
    .hotel-item-type {
        background: rgba(3, 151, 255, 0.1);
        border-radius: 222px;

        width: 120px;
        height: 100%;
        font-family: 'Inter';
        font-style: normal;

        font-size: 16px;
        line-height: 26px;
        /* or 22px */

        display: flex;
        align-items: center;
        justify-content: center;
        /* Neutral/Dark Gray */

        color: #575773;

        @media (max-width: 991px) {
            font-size: 14px;
            line-height: 24px;
        }
    }
}

.subtitle {
    font-family: 'Inter';
    font-style: normal;

    font-size: 16px;
    line-height: 22px;
    color: #9494b0;

    @media (max-width: 991px) {
        font-size: 14px;
        line-height: 24px;
    }

    @media (max-width: 420px) {
        margin-bottom: 0.5rem;
    }
}

.hotel-title {
    font-family: 'Inter SemiBold';
    font-style: normal;
    //
    font-size: 28px;
    line-height: 28px;
    color: #575773;

    @media (max-width: 991px) {
        font-size: 24px;
    }

    @media (max-width: 576px) {
        font-size: 22px;
    }
}

.detail-hotel-left-pic {
    display: flex;

    .detail-hotel-img {
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
}

.detail-hotel-right-pic {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    .detail-hotel-right-img-frame {
        width: 100%;
        height: 170px;
        overflow: hidden;
        position: relative;

        &.active {
            opacity: 1;
        }

        .detail-hotel-right-img {
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
        }

        &:nth-child(2) {
            margin: 10px auto;
        }
    }
}

@media (max-width: 992px) {
    .detail-hotel-row {
        display: none;
    }

    .detail-hotel-left-pic-resp {
        display: block !important;
        width: 540px;
        margin: 0 auto !important;

        .row-left-pic-resp {
            height: 100%;
        }

        .detail-hotel-left-img-frame-resp {
            display: flex;
            padding: 1rem;
            width: 400px;
            height: 375px;

            @media (max-width: 420px) {
                height: 325px;
            }
        }

        .detail-hotel-img-resp {
            margin: 0 auto;
            width: 100%;
        }

        .btn-show-more-resp {
            padding: 1.5rem;
            display: flex;
            justify-content: center;
        }

        p {
            text-align: center;
        }
    }
}

@media (max-width: 768px) {
    .detail-hotel-left-pic-resp {
        height: 100%;
        width: 375px !important;
        margin: 0 auto;
    }

    p {
        font-size: 18px !important;
    }

    .btn-show-more-resp {
        padding: 0.75rem;
    }
}

@media (max-width: 420px) {
    .detail-hotel-left-pic-resp {
        height: 100%;
        width: 300px !important;
        margin: 0 auto;

        .btn-show-more-resp {
            padding: 0.5rem;
        }
    }
}

@media (max-width: 365px) {
    .detail-hotel-left-pic-resp {
        width: auto !important;
        margin: 0 auto;

        .btn-show-more-resp {
            padding: 0.5rem;
        }
    }
}
</style>
