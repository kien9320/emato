<script>
export default {
    name: 'ArticleDetailPage',
    methods: {
        clickToggle(id) {
            if (id !== this.showDetail) {
                this.showDetail = id;
            } else {
                this.showDetail = '';
            }
        },
    },
    data() {
        return {
            showDetail: '',
            hotel: [
                {
                    id: 1,
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
                {
                    id: 2,
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
                {
                    id: 3,
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
                {
                    id: 4,
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
            ],
        };
    },
};
</script>

<template>
    <b-row>
        <b-col cols="12">
            <div v-for="(item, idx) in hotel" :key="item + idx" class="hotel-item-frame"
                :class="showDetail == item.id ? 'show-detail' : ''">
                <b-col lg="3" md="4" cols="12" class="p-0">
                    <div class="img-frame">
                        <img class="h-100" src="@/assets/Hotel/hotel-view.png" />
                    </div>
                </b-col>
                <b-col lg="9" md="8" cols="12" class="hotel-item-left-frame" :class="idx % 2 != 0 ? '' : 'add-bg'">
                    <div class="location-2">
                        <div>
                            <img src="@/assets/Hotel/location.png" />
                        </div>
                        <div class="location-hotel-resp ml-3">
                            {{  item.location  }}
                        </div>
                    </div>
                    <div class="hotel-item-title">
                        {{  item.title  }}
                    </div>
                    <div class="subTitle-delPrice my-2">
                        <div class="hotel-item-subtitle">
                            {{  item.subTitle  }}
                        </div>
                        <del class="del-price">
                            {{  item.delPrice  }}
                        </del>
                    </div>
                    <div class="hotel-item-type-bg-frame">
                        <div class="d-flex">
                            <div class="hotel-item-type-bg">
                                <div class="hotel-item-type">
                                    {{  item.type  }}
                                </div>
                            </div>
                            <div class="hotel-item-rating ml-3">
                                <img class="ml-2" v-for="(items, idx) in item.rating" :key="items + idx"
                                    src="@/assets/Hotel/star-rating.png" />
                            </div>
                        </div>
                        <div class="hotel-price">
                            {{  item.price  }}
                        </div>
                    </div>
                    <div class="
                                location-choose-btn
                                d-flex
                                justify-content-between
                                align-items-center
                            ">
                        <div class="hotel-item-rating-resp">
                            <img class="ml-sm-2 ml-1" v-for="(items, idx) in item.rating" :key="items + idx"
                                src="@/assets/Hotel/star-rating.png" />
                        </div>
                        <div class="location d-none d-lg-flex align-items-end">
                            <div>
                                <img src="@/assets/Hotel/location.png" />
                            </div>
                            <div class="location-hotel ml-3">
                                {{  item.location  }}
                            </div>
                        </div>
                        <router-link :to="{
                            name: 'DetailHotel',
                            params: {
                                title: item.title,
                            },
                        }">
                            <b-button variant="primary" pill class="choose-btn">
                                Chọn
                            </b-button>
                        </router-link>
                    </div>
                    <div class="line-horizon"></div>
                    <div class="
                                show-detail
                                d-flex
                                justify-content-end
                                mt-3
                                align-items-center
                            ">
                        <div class="show-more-cnt mr-3" v-if="showDetail !== item.id">Chi tiết</div>
                        <div class="show-more-cnt mr-3" v-if="showDetail === item.id">Rút gọn</div>
                        <div v-b-toggle="`q-${item.id}`" class="div-show" @click="clickToggle(item.id)"
                            :id="`q-${item.id}`">
                            <img src="@/assets/Hotel/down-arr.png" v-if="showDetail !== item.id" :id="`q-${item.id}`" />
                            <img src="@/assets/Hotel/up-arr.png" v-if="showDetail === item.id" :id="`q-${item.id}`" />
                        </div>
                    </div>
                </b-col>
                <transition name="roll">
                    <div class="w-100 d-flex flex-row" v-if="showDetail == item.id">
                        <b-collapse class="faqs-des" :id="`q-${item.id}`">
                            <b-col md="9" class="hotel-item-detail-left-frame">
                                <div class="hotel-item-detail-frame-item">
                                    <div class="day-in-hotel-frame">
                                        <div class="day-in-hotel d-flex">
                                            <img src="@/assets/Hotel/moon-icon.png" />
                                            <p class="ml-3">
                                                Đêm 1
                                                <span class="
                                                            hotel-item-subtitle
                                                            ml-2
                                                        ">(July 22, 2022)</span>
                                            </p>
                                        </div>
                                        <p>{{  item.priceOneNight  }} VND</p>
                                    </div>
                                    <div class="line-horizon mt-2 mb-2"></div>
                                    <div class="day-in-hotel-frame">
                                        <div class="day-in-hotel d-flex">
                                            <img src="@/assets/Hotel/tag-icon.png" />
                                            <p class="ml-4">Giá phòng</p>
                                        </div>
                                        <p>{{  item.priceOneNight  }} VND</p>
                                    </div>
                                    <div class="day-in-hotel-frame">
                                        <div class="day-in-hotel d-flex">
                                            <img src="@/assets/Hotel/fee-icon.png" />
                                            <p class="ml-3">
                                                Thuế và phí
                                                <span class="
                                                            hotel-item-subtitle
                                                            ml-2
                                                        ">(8%)</span>
                                            </p>
                                        </div>
                                        <p>
                                            {{
                                             Math.round(
                                                 (item.priceOneNight *
                                                     8) /
                                                 100,
                                             )













                                            }}
                                        </p>
                                    </div>
                                </div>
                            </b-col>
                        </b-collapse>
                    </div>
                </transition>
            </div>
        </b-col>
    </b-row>

</template>

<style lang="scss" scoped>
.roll-enter-active {
    transition: all 0.5s ease;
}


.roll-enter {
    opacity: 0;
    max-height: 0;
    margin: 0;
}

.subTitle-delPrice {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .del-price {
        font-family: 'Inter';
        font-style: normal;

        font-size: 16px;
        line-height: 17px;
        /* identical to box height, or 17px */

        /* Neutral/Dark Gray */
        color: #575773;
    }

    @media (max-width: 375px) {
        display: block;

        // text-align: justify;
        .del-price {
            display: flex;
            justify-content: flex-end;
        }
    }
}

.faqs-des {
    background: #d5e9ff;
    width: 100%;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: flex-end;
    height: 186px;

    img {
        object-fit: scale-down;
    }

    .hotel-item-detail-left-frame {
        position: relative;

        .hotel-item-detail-frame-item {
            width: 90%;
            height: 90%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 1rem;

            .day-in-hotel-frame {
                padding: 0.5rem 0;
                display: flex;
                justify-content: space-between;

                .day-in-hotel {
                    display: flex;
                    align-items: center;

                    img {
                        width: 18px;
                        height: 18px;
                    }
                }

                p {
                    font-family: 'Inter';
                    font-style: normal;

                    font-size: 16px;
                    line-height: 26px;
                    color: #575773;

                    @media (max-width: 768px) {
                        font-size: 14px !important;
                        line-height: 24px !important;
                    }
                }

                .hotel-item-subtitle {
                    font-family: 'Inter SemiBold';
                    font-style: normal;
                    font-size: 16px;
                    line-height: 26px;
                    color: #9494b0;

                    @media (max-width: 768px) {
                        font-size: 14px !important;
                        line-height: 24px !important;
                    }
                }
            }
        }
    }
}

.hotel-item-frame {
    // height: 306px;
    width: 100%;
    margin-top: 1.5rem;
    display: flex;
    flex-wrap: wrap;

    &:nth-child(1) {
        margin: 0;
    }

    @media (max-width: 768px) {
        display: inline-block;
    }

    .line-horizon {
        display: flex;
        justify-content: center;
        left: 50%;
        margin-top: 2rem;
        width: 100%;
        opacity: 1;
        height: 0.5px;
        background-color: #383e49;
    }

    .faqs-des {
        background: #d5e9ff;
        width: 100%;
        margin-bottom: 1.5rem;
        display: flex;
        justify-content: flex-end;
        height: 186px;

        .hotel-item-detail-left-frame {
            position: relative;

            .day-in-hotel-frame {
                padding: 0.5rem 0;
                display: flex;
                justify-content: space-between;

                p {
                    font-family: 'Inter';
                    font-style: normal;

                    font-size: 16px;
                    line-height: 26px;
                    /* or 22px */

                    /* Neutral/Dark Gray */

                    color: #575773;
                }

                .hotel-item-subtitle {
                    font-family: 'Inter SemiBold';
                    font-style: normal;
                    font-size: 16px;
                    line-height: 26px;
                    color: #9494b0;
                }
            }
        }
    }

    &.show-detail {
        margin-bottom: 0;
        // margin-top: 1.5rem;
    }

    .show-more-cnt {
        font-family: 'Inter';
        font-style: normal;

        font-size: 16px;
        line-height: 22px;
        /* or 22px */
        /* Neutral/Dark Gray */

        color: #575773;
    }

    .div-show {
        color: none;
    }

    .hotel-item-left-frame {
        position: relative;

        padding: 2rem 3rem;

        @media (max-width:991px) {
            padding: 2rem 15px
        }

        .location-2 {
            display: none;
            margin-bottom: 0.5rem;

            @media (max-width:991px) {
                display: flex;
                align-items: center;
            }

            .location-hotel-resp {
                font-family: 'Inter';
                font-style: normal;

                font-size: 14px;
                line-height: 26px;
                color: #9494b0;
            }
        }

        &.add-bg {
            background: rgba(37, 162, 251, 0.05);
        }
    }

    .hotel-item-left-frame-item {
        width: 90%;
        height: 90%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .hotel-item-title {
        font-family: 'Inter SemiBold';
        font-style: normal;
        font-size: 18px;
        line-height: 26px;
        color: #575773;
    }

    .img-show-detail {
        transform: rotateX(180deg);
    }

    .hotel-item-subtitle {
        font-family: 'Inter SemiBold';
        font-style: normal;
        font-size: 16px;
        line-height: 26px;
        color: #9494b0;
    }

    .img-frame {
        height: 100%;

        @media (max-width: 768px) {
            height: 300px !important;
        }

        img {
            object-fit: fill;
            width: 100%;
        }
    }

    .hotel-price {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 26px;
        color: #0397ff;
        text-align: end;
        padding: 0.5rem 0;

        @media (max-width:991px) {
            font-size: 16px !important;
        }
    }

    .hotel-item-type-bg-frame {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1rem 0;

        @media (max-width: 991px) {
            display: flex;
            justify-content: space-between;
            margin: 0.5rem 0;
        }

        @media (max-width: 540px) {
            display: block;
            // justify-content: space-between;
            text-align: end;
        }
    }

    .hotel-item-rating-resp {
        display: none;
        height: 15px;

        @media (max-width:991px) {
            display: flex;
        }
    }

    .hotel-item-rating {
        @media (max-width:991px) {
            // margin: 0;
            display: none;
        }
    }

    .hotel-item-type-bg {
        width: 112px;
        height: 31px;
        background: rgba(3, 151, 255, 0.1);
        border-radius: 222px;

        .hotel-item-type {
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
        }
    }

    .location-choose-btn {
        display: block;

        @media (max-width: 768px) {
            display: block;
            // justify-content: space-between;
            text-align: end;
        }
    }

    .location-hotel {
        font-family: 'Inter';
        font-style: normal;

        font-size: 16px;
        line-height: 26px;
        color: #9494b0;
    }

    .choose-btn {
        background: #0397ff;
        width: 135px;
        height: 44px;
        border: none;
        font-family: 'Inter';
        font-style: normal;

        font-size: 16px;
        line-height: 22px;
        /* or 22px */

        display: flex;
        align-items: center;
        justify-content: center;
        color: #F9FAFF;

        &:hover {
            border: none;
            text-decoration: none; 
        }
    }
}

@media (max-width: 768px) {
    .hotel-item-frame {
        .hotel-item-title {
            font-size: 18px;
            line-height: 24px;
        }

        .hotel-item-subtitle {
            font-size: 14px;
            line-height: 24px;
            margin-bottom: 0.5rem;
        }

        .hotel-price {
            font-size: 14px;
            line-height: 15px;
        }

        .hotel-item-type {
            font-size: 14px;
            line-height: 24px;
        }

        del {
            font-size: 12px;
            line-height: 24px;
        }

        .location-choose-btn {
            .location-hotel {
                font-size: 12px;
                line-height: 24px;
            }
        }
    }
}
</style>
