<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    components: { VueSlickCarousel },
    data() {
        return {
            modalShow: false,
            chooseData: {},
            solutionSetting: {
                "pauseOnFocus": true,
                "autoplay": true,
                "dots": true,
                "infinite": true,
                "initialSlide": 2,
                "speed": 500,
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "swipeToSlide": true,
                "arrows": false,
                "dotsClass": "custom-dot-class-solution",
            },
            modalCarousel: {
                "infinite": true,
                "dotsClass": "custom-dot-class-modal",
                "dots": true,
                "edgeFriction": 0.35,
                "infinite": false,
                "speed": 500,
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "arrows": false,
            },
            anotherRooms: [
                {
                    id: 1,
                    detailImages: [
                        {
                            id: 1,
                            src: 'image 20.png'
                        },
                        {
                            id: 2,
                            src: 'image 20.png'
                        },
                        {
                            id: 3,
                            src: 'image 20.png'
                        },
                        {
                            id: 4,
                            src: 'image 20.png'
                        },
                    ],
                    images: [
                        {
                            id: 1,
                            src: 'image 20.png'
                        },
                        {
                            id: 2,
                            src: 'image 20.png'
                        },
                        {
                            id: 3,
                            src: 'image 20.png'
                        },
                    ],
                    title: 'Premium Twin Panoramic Ocean View',
                    type: 'Phòng ngủ',
                    subtitle: 'Onsen & Water Park Inclusive',
                    delPrice: '1.825.320 VND',
                    price: '988.800 VND',
                    beds: 2,
                    people: 2,
                    save: 30,
                    width: 90.0,
                },
                {
                    id: 2,
                    images: [
                        {
                            id: 1,
                            src: 'image 20.png'
                        },
                        {
                            id: 2,
                            src: 'image 20.png'
                        },
                        {
                            id: 3,
                            src: 'image 20.png'
                        },
                    ],
                    detailImages: [
                        {
                            id: 1,
                            src: 'image 20.png'
                        },
                        {
                            id: 2,
                            src: 'image 20.png'
                        },
                        {
                            id: 3,
                            src: 'image 20.png'
                        },
                        {
                            id: 4,
                            src: 'image 20.png'
                        },
                    ],
                    title: 'Premium Twin Panoramic Ocean View',
                    type: 'Phòng ngủ',
                    subtitle: 'Onsen & Water Park Inclusive',
                    delPrice: '1.825.320 VND',
                    price: '988.800 VND',
                    beds: 2,
                    people: 2,
                    save: 30,
                    width: 90.0,
                }, {
                    id: 3,
                    images: [
                        {
                            id: 1,
                            src: 'image 20.png'
                        },
                        {
                            id: 2,
                            src: 'image 20.png'
                        },
                        {
                            id: 3,
                            src: 'image 20.png'
                        },
                    ],
                    detailImages: [
                        {
                            id: 1,
                            src: 'image 20.png'
                        },
                        {
                            id: 2,
                            src: 'image 20.png'
                        },
                        {
                            id: 3,
                            src: 'image 20.png'
                        },
                        {
                            id: 4,
                            src: 'image 20.png'
                        },
                    ],
                    title: 'Premium Twin Panoramic Ocean View',
                    type: 'Phòng ngủ',
                    subtitle: 'Onsen & Water Park Inclusive',
                    delPrice: '1.825.320 VND',
                    price: '988.800 VND',
                    beds: 2,
                    people: 2,
                    save: 30,
                    width: 90.0,
                },
                {
                    id: 4,
                    detailImages: [
                        {
                            id: 1,
                            src: 'image 20.png'
                        },
                        {
                            id: 2,
                            src: 'image 20.png'
                        },
                        {
                            id: 3,
                            src: 'image 20.png'
                        },
                        {
                            id: 4,
                            src: 'image 20.png'
                        },
                    ],
                    images: [
                        {
                            id: 1,
                            src: 'image 20.png'
                        },
                        {
                            id: 2,
                            src: 'image 20.png'
                        },
                        {
                            id: 3,
                            src: 'image 20.png'
                        },
                    ],
                    title: 'Premium Twin Panoramic Ocean View',
                    type: 'Phòng ngủ',
                    subtitle: 'Onsen & Water Park Inclusive',
                    delPrice: '1.825.320 VND',
                    price: '988.800 VND',
                    beds: 2,
                    people: 2,
                    save: 30,
                    width: 90.0,
                },
            ]
        }
    },
    methods: {
        hideModal() {
            this.$bvModal.hide('modal-scrollable')
        },
        choseData(item) {
            this.chooseData = item;
            this.modalShow = true;
            setTimeout(() => {
                this.$bvModal.show('modal-scrollable')
            }, 100)
        },
        showNext() {
            this.$refs.carousel.next()
        },
        showPrev() {
            this.$refs.carousel.prev()
        },

    }
}
</script>

<template>
    <b-container class="another-rooms-container">
        <b-row class="another-room-row p-0" v-for="(item, idx) in anotherRooms" :key="item + idx">
            <b-col lg="6" md="6" class="another-rooms-pic-glary p-0">
                <div class="rooms-frame w-100 h-10">
                    <div class="main-another-img-frame">
                        <div class="main-another-img">
                            <img src="@/assets/Hotel/Detail/Another/image 20.png" alt="">
                        </div>
                        <button class="show-more-rooms-btn" @click="choseData(item)">
                            Xem chi tiết
                        </button>
                    </div>
                    <b-row md="12" class="d-flex p-0 w-100 ml-0">
                        <b-col md="4" class="another-img-sub" v-for="(item2, idx) in item.images" :key="item + idx">
                            <div class="w-100">
                                <img :src="require(`@/assets/Hotel/Detail/Another/${item2.src}`)" alt="">
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </b-col>
            <b-col class="row-left-pic-resp">
                <VueSlickCarousel v-bind="solutionSetting" class="detail-hotel-left-pic-resp" ref="carousel">
                    <div v-for="(item2, idx) in item.images" :key="item + idx"
                        class="d-flex flex-wrap justify-content-center">
                        <b-col class="detail-hotel-left-img-frame-resp" lg="5">
                            <img :src="require(`@/assets/Hotel/Detail/Another/${item2.src}`)"
                                class="detail-hotel-img-resp">
                            <button v-b-modal.modal-scrollable class="show-more-rooms-btn" @click="choseData(item)">
                                Xem chi tiết
                            </button>
                        </b-col>
                    </div>
                </VueSlickCarousel>
            </b-col>
            <b-col lg="6" md="12" class="right-another-rooms-col" :class="idx % 2 == 0 ? '' : 'add-bg'">
                <div class="right-another-rooms-frame">
                    <div class="title-delPrice-frame">
                        <div class="another-room-title">
                            {{  item.title  }}
                        </div>
                        <del class="delete-price">
                            {{  item.delPrice  }}
                        </del>
                    </div>
                    <div class="subtitle-price-another-rooms">
                        <div class="subtitle-another-rooms">
                            {{  item.subtitle  }}
                        </div>
                        <div class="price-another-rooms">
                            {{  item.price  }}
                        </div>
                    </div>
                    <b-row class="d-flex mt-3 ml-0">
                        <b-col lg="9" md="12" class="detail-another-rooms">
                            <b-col md="6" class="px-0">
                                <div class="another-rooms-info">
                                    <div class="another-rooms-info-icon">
                                        <img src="@/assets/Hotel/Detail/Another/ic_round-bed.svg" alt="">
                                    </div>
                                    <p>
                                        {{  item.beds  }} Giường đơn
                                    </p>
                                </div>

                                <div class="another-rooms-info">
                                    <div class="another-rooms-info-icon">
                                        <img src="@/assets/Hotel/Detail/Another/clarity_ruler-pencil-line.svg" alt="">
                                    </div>
                                    <p>
                                        {{  item.width  }} m2
                                    </p>
                                </div>
                            </b-col>
                            <b-col md="6" class="px-0">
                                <div class="another-rooms-info">
                                    <div class="another-rooms-info-icon">
                                        <img src="@/assets/Hotel/Detail/Another/bi_people-fill.svg" alt="">
                                    </div>
                                    <p>
                                        {{  item.people  }} Khách
                                    </p>
                                </div>
                                <div class="another-rooms-info">
                                    <div class="another-rooms-info-icon">
                                        <img src="@/assets/Hotel/Detail/Another/bxs_discount.svg" alt="">
                                    </div>
                                    <p>
                                        tiết kiếm {{  item.save  }}%
                                    </p>
                                </div>
                            </b-col>
                        </b-col>
                        <b-col lg="3" md="12" class="book-now-col">
                            <b-btn variant="primary" pill class="book-now-btn">
                                Đặt ngay
                            </b-btn>
                        </b-col>
                    </b-row>
                    <div class="line-horizon"></div>
                    <div class="d-flex mt-3">
                        <b-col xl="12" lg="12" md="12" class="detail-another-rooms">
                            <b-col md="4" class="px-0">
                                <div class="another-rooms-info">
                                    <div class="another-rooms-info-icon">
                                        <img src="@/assets/Hotel/Detail/Another/jam_wifi.svg" alt="">
                                    </div>
                                    <p>
                                        Wifi miễn phí
                                    </p>
                                </div>

                                <div class="another-rooms-info">
                                    <div class="another-rooms-info-icon">
                                        <img src="@/assets/Hotel/Detail/Another/ri_restaurant-line.svg" alt="">
                                    </div>
                                    <p>
                                        Miễn phí bữa sáng
                                    </p>
                                </div>
                                <div class="another-rooms-info">
                                    <div class="another-rooms-info-icon">
                                        <img src="@/assets/Hotel/Detail/Another/ep_no-smoking.svg" alt="">
                                    </div>
                                    <p>
                                        Không hút thuốc
                                    </p>
                                </div>
                            </b-col>
                            <b-col md="8" class="ml-4 px-0">
                                <div class="another-rooms-info">
                                    <div class="another-rooms-info-icon">
                                        <img src="@/assets/Hotel/Detail/Another/tabler_receipt-refund.svg" alt="">
                                    </div>
                                    <p>
                                        Không hoàn tiền
                                    </p>
                                </div>
                                <div class="another-rooms-info">
                                    <div class="another-rooms-info-icon">
                                        <img src="@/assets/Hotel/Detail/Another/fluent_calendar-cancel-16-regular.svg"
                                            alt="">
                                    </div>
                                    <p>
                                        Hủy phòng có thu phí
                                    </p>
                                </div>
                                <div class="another-rooms-info">
                                    <div class="another-rooms-info-icon">
                                        <img src="@/assets/Hotel/Detail/Another/ant-design_info-circle-outlined.svg"
                                            alt="">
                                    </div>
                                    <p>
                                        Xem chính sách hủy phòng
                                    </p>
                                </div>
                            </b-col>
                        </b-col>
                    </div>
                    <p style="color:#0397FF;">Thanh toán khi nhận phòng. Đặt <b>KHÔNG</b> cần thanh toán trước!
                        Tiết kiệm cho đến khi nhận phòng! </p>
                </div>
            </b-col>
        </b-row>
        <!-- <div :class="anotherRooms % 2 == 0 ? 'line-horizon w-100' : 'd-none'"></div> -->
        <b-modal id="modal-scrollable" v-if="modalShow">
            <b-container class="modal-container ">
                <b-row class="p-md-4">
                    <b-col lg="6" md="12" class="left-col-modal d-none d-lg-flex flex-column justify-content-between">
                        <div class="modal-title">
                            {{  chooseData.title  }}
                        </div>
                        <div class="modal-subtitle-mg">
                            {{  chooseData.subtitle  }}
                        </div>
                        <div class="main-another-img-frame-modal">
                            <div class="main-another-img-modal">
                                <img src="@/assets/Hotel/Detail/Another/image 20.png" alt="">
                            </div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div class="modal-subtitle">
                                {{  chooseData.type  }}
                            </div>
                            <div class="modal-subtitle">
                                2/7
                            </div>
                        </div>
                        <b-row md="12" class="d-flex w-100 m-0 p-0">
                            <b-col md="3" class="another-img-sub-modal"
                                v-for="(chooseData2, idx) in chooseData.detailImages" :key="chooseData + idx">
                                <div class="w-100">
                                    <img :src="require(`@/assets/Hotel/Detail/Another/${chooseData2.src}`)" alt="">
                                </div>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col lg="6" md="12" class="left-col-modal-resp">
                        <div class="left-col-modal-frame">
                            <div class="d-flex justify-content-between">
                                <div class="modal-title">
                                    {{  chooseData.title  }}
                                </div>
                                <b-btn pill variant="dark" @click="hideModal" aria-label="Close" class="close-btn-resp">
                                    <b-icon icon="x"></b-icon>
                                </b-btn>
                            </div>
                            <div class="modal-subtitle">
                                {{  chooseData.subtitle  }}
                            </div>
                            <div class="d-flex justify-content-between my-2">
                                <div class="modal-subtitle">
                                    {{  chooseData.type  }}
                                </div>
                                <div class="modal-subtitle">
                                    2/7
                                </div>
                            </div>
                        </div>

                        <VueSlickCarousel v-bind="modalCarousel" class="modal-img-resp-carousel" ref="carousel">
                            <div v-for="(chooseData2, idx) in chooseData.detailImages" :key="chooseData + idx">
                                <b-col class="modal-img-frame-resp m-auto">
                                    <img :src="require(`@/assets/Hotel/Detail/Another/${chooseData2.src}`)"
                                        class="modal-img-resp">
                                </b-col>
                            </div>
                        </VueSlickCarousel>
                        <!-- <b-btn variant="light" pill @click="showNext()" class="btn-show-right">
                            <img class="btn-show-icon-1" src="@/assets/Hotel/up-arr.png">
                        </b-btn>
                        <b-btn variant="light" pill @click="showPrev()" class="btn-show-left">
                            <img class="btn-show-icon-2" src="@/assetdetail-another-roomss/Hotel/up-arr.png">
                        </b-btn> -->
                    </b-col>
                    <b-col lg="6" md="12">
                        <b-row>
                            <b-col md="0" lg="1">
                                <div class="modal-dash">
                                    <img src="@/assets/Hotel/Detail/Another/modal-dash.png" alt="">
                                </div>
                            </b-col>
                            <b-col lg="11" md="12">
                                <div class="left-col-modal-frame">
                                    <div class="modal-title">
                                        Thông tin phòng
                                        <b-btn variant="dark" pill @click="hideModal" aria-label="Close"
                                            class="close-btn">
                                            <b-icon icon="x"></b-icon>
                                        </b-btn>
                                    </div>
                                    <div class="another-rooms-info-modal-col">
                                        <div class="another-rooms-info-modal">
                                            <div class="another-rooms-info-icon-modal">
                                                <img src="@/assets/Hotel/Detail/Another/Modal/ic_round-bed.svg" alt="">
                                            </div>
                                            <p>
                                                {{  chooseData.beds  }} Giường đơn
                                            </p>
                                        </div>
                                        <div class="another-rooms-info-modal">
                                            <div class="another-rooms-info-icon-modal">
                                                <img src="@/assets/Hotel/Detail/Another/Modal/bi_people-fill.svg"
                                                    alt="">
                                            </div>
                                            <p>
                                                {{  chooseData.people  }} khách
                                            </p>
                                        </div>
                                    </div>
                                    <div class="another-rooms-info-modal-col">
                                        <div class="another-rooms-info-modal">
                                            <div class="another-rooms-info-icon-modal">
                                                <img src="@/assets/Hotel/Detail/Another/Modal/clarity_ruler-pencil-line.svg"
                                                    alt="">
                                            </div>
                                            <p>
                                                {{  chooseData.width  }} m2
                                            </p>
                                        </div>
                                        <div class="another-rooms-info-modal">
                                            <div class="another-rooms-info-icon-modal">
                                                <img src="@/assets/Hotel/Detail/Another/Modal/bxs_discount.svg" alt="">
                                            </div>
                                            <p>
                                                Tiết kiệm {{  chooseData.save  }}%
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                        <div class="line-horizon-modal"></div>
                        <b-row>
                            <b-col md="0" lg="1" class="modal-frame-content">
                                <div class="modal-dash">
                                    <img src="@/assets/Hotel/Detail/Another/modal-dash.png" alt="">
                                </div>
                            </b-col>
                            <b-col lg="11" md="12" class="modal-frame-content">
                                <div class="left-col-modal-frame">
                                    <div class="modal-title">
                                        Tính năng phòng
                                    </div>
                                    <div class="another-rooms-info-modal-col">
                                        <div class="another-rooms-info-modal">
                                            <div class="another-rooms-info-icon-modal">
                                                <img src="@/assets/Hotel/Detail/Another/Modal/jam_bathtub.svg" alt="">
                                            </div>
                                            <p>
                                                Bồn tắm
                                            </p>
                                        </div>
                                        <div class="another-rooms-info-modal">
                                            <div class="another-rooms-info-icon-modal">
                                                <img src="@/assets/Hotel/Detail/Another/Modal/ic_baseline-balcony.svg"
                                                    alt="">
                                            </div>
                                            <p>
                                                Sân hiên
                                            </p>
                                        </div>
                                    </div>
                                    <div class="another-rooms-info-modal-col">
                                        <div class="another-rooms-info-modal">
                                            <div class="another-rooms-info-icon-modal">
                                                <img src="@/assets/Hotel/Detail/Another/Modal/ic_baseline-balcony.svg"
                                                    alt="">
                                            </div>
                                            <p>
                                                Ban công
                                            </p>
                                        </div>
                                        <div class="another-rooms-info-modal">
                                            <div class="another-rooms-info-icon-modal">
                                                <img src="@/assets/Hotel/Detail/Another/Modal/iconoir_air-conditioner.svg"
                                                    alt="">
                                            </div>
                                            <p>
                                                Máy lạnh
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                        <div class="line-horizon-modal"></div>
                        <b-row>
                            <b-col lg="1" md="0" class="modal-frame-content">
                                <div class="modal-dash">
                                    <img src="@/assets/Hotel/Detail/Another/modal-dash.png" alt="">
                                </div>
                            </b-col>
                            <b-col lg="11" md="12" class="modal-frame-content">
                                <div class="left-col-modal-frame">
                                    <div class="modal-title">
                                        Tiện nghi phòng
                                    </div>
                                    <div class="another-rooms-info-modal-col">
                                        <div class="another-rooms-info-modal">
                                            <p>
                                                + Quầy bar mini
                                            </p>
                                        </div>
                                        <div class="another-rooms-info-modal">
                                            <p>
                                                + Quầy bar mini
                                            </p>
                                        </div>
                                    </div>
                                    <div class="another-rooms-info-modal-col">
                                        <div class="another-rooms-info-modal">
                                            <p>
                                                + Phòng tắm riêng
                                            </p>
                                        </div>
                                        <div class="another-rooms-info-modal">
                                            <p>
                                                + Phòng tắm riêng
                                            </p>
                                        </div>
                                    </div>
                                    <div class="another-rooms-info-modal-col">
                                        <div class="another-rooms-info-modal">
                                            <p>
                                                + Bộ vệ sinh cá nhân
                                            </p>
                                        </div>
                                        <div class="another-rooms-info-modal">
                                            <p>
                                                + Bộ vệ sinh cá nhân
                                            </p>
                                        </div>
                                    </div>
                                    <div class="another-rooms-info-modal-col">
                                        <div class="another-rooms-info-modal">
                                            <p>
                                                + Két an toàn tại phòng
                                            </p>
                                        </div>
                                        <div class="another-rooms-info-modal">
                                            <p>
                                                + Két an toàn tại phòng
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                        <div class="modal-btn-frame">
                            <b-btn pill class="modal-btn">
                                <div class="modal-btn-cnt">
                                    Thêm lựa chọn phòng
                                </div>
                            </b-btn>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </b-modal>
    </b-container>
</template> 

<style lang="scss">
.another-rooms-container {

    .another-rooms-info {
        p {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 22px;

            display: flex;
            align-items: center;

            color: #575773;

            @media (max-width:991px) {
                font-size: 14px !important;
                // margin: 0 !important;
            }

            @media (max-width:420px) {
                // font-size: 14px !important;
                margin-left: 0.5rem !important;
            }
        }
    }

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
}

.modal-footer {
    display: none;
}

.modal-header {
    display: none;
}

.close-btn-resp {
    display: none !important;

    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    width: 25px;
    height: 25px;

    @media (max-width:991px) {
        display: flex !important;
        align-items: center;
        justify-content: center;
    }
}

#modal-scrollable {
    padding-left: 0 !important;
}

.custom-dot-class-modal {
    position: absolute;
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
            background: black;
        }

        button {
            display: none;
        }
    }
}

.modal-content {
    position: absolute;
    width: 1440px;
    height: 900px;
    left: calc(50% - 1440px/2);
    top: 0px;
    // background: rgba(249, 250, 255, 0.01);
    background-color: rgba(0, 0, 0, 0.57);
    backdrop-filter: blur(14px);
    border-radius: 40px;

    @media (max-width:991px) {
        height: 1250px;
        width: 100%;
        left: 0;
    }



    .left-col-modal-frame {
        .modal-frame-content {
            margin-top: 1.5rem;

            @media (max-width:991px) {
                margin-top: 1rem;
            }
        }

        @media (max-width:991px) {
            padding: 0 15px;
        }

        @media (max-width:476px) {
            margin-bottom: 1.5rem;
        }
    }

    .btn-show-right {
        z-index: 2;
        height: 30px;
        width: 30px;
        background: #ffff;

        opacity: 1;
        position: absolute;
        top: 50%;
        right: 0;
        border: none;
        display: flex;
        align-items: center;

        &:active {
            opacity: 1;
        }
    }

    .btn-show-icon-1 {
        position: absolute;
        right: 0;
        transform: rotate(90deg);
        height: 30px;
        width: 30px;

        object-fit: scale-down;
    }

    .btn-show-icon-2 {
        position: absolute;
        left: 0;
        transform: rotate(-90deg);
        height: 30px;
        width: 30px;
        object-fit: scale-down;
    }


    .btn-show-left {
        z-index: 2;
        height: 30px;
        width: 30px;
        background: #ffff;
        opacity: 1;
        position: absolute;
        top: 50%;
        left: 0;
        border: none;
        display: flex;
        align-items: center;

        &:active {
            opacity: 1;
        }
    }

    .modal-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .modal-dash {
            @media (max-width:991px) {
                display: none;
            }
        }

        .left-col-modal {
            display: block;

            @media (max-width:991px) {
                display: none;
            }
        }

        .left-col-modal-resp {
            display: none;
            margin-bottom: 3rem;

            @media (max-width:991px) {
                display: block;
            }

            .modal-img-frame-resp {
                display: flex;
                width: 430px;
                height: 320px;

                @media (max-width:468px) {
                    width: 400px;
                    height: 240px;
                }

                img {
                    width: 100%;
                    // margin: 0 auto;
                    object-fit: fill;
                }
            }
        }

        .another-rooms-info-modal-col {
            display: flex;
            margin: 2rem 0;
            align-items: center;

            .another-rooms-info-modal {
                display: flex;
                // margin-bottom: 0.5rem;
                width: 100%;

                p {
                    margin-left: 0.5rem;
                }

                @media (max-width:991px) {
                    margin: 0;
                }

                @media (max-width:476px) {
                    p {
                        font-size: 14px !important;
                        margin: 0;
                    }
                }

                .another-rooms-info-icon-modal {
                    width: 22px;
                    height: 22px;
                    display: flex;
                    align-items: center;

                    img {
                        width: 22px;
                        height: 22px;
                        // object-fit: scale-down;
                    }
                }

            }
        }

        .modal-btn-frame {
            display: flex;
            justify-content: flex-end;
            margin-right: 4rem;
            margin-top: 2rem;

            @media (max-width:576px) {
                justify-content: center;
                margin-right: 0;
            }

            .modal-btn {
                width: 240px;
                height: 50px;
                border: 1px solid #F9FAFF;
                background: transparent;

                @media (max-width:991px) {
                    width: 220px;
                }
            }
        }

        .modal-title {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 28px;
            /* or 28px */
            z-index: 2;
            color: #F9FAFF;

            @media (max-width:476px) {
                font-size: 18px;
            }



            .close-btn {
                display: flex;
                align-items: center;
                justify-content: center;
                float: right;
                font-size: 1.5rem;
                font-weight: 700;
                line-height: 1;
                color: #fff;
                width: 25px;
                height: 25px;

                @media (max-width:991px) {
                    display: none;
                }
            }
        }

        .modal-subtitle-mg {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 22px;
            /* or 22px */
            color: #ECECF6;
            display: flex;
            align-items: center;
            margin-top: -2rem;

            @media (max-width:467px) {
                font-size: 14px;
            }

        }

        .modal-subtitle {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 22px;
            /* or 22px */
            color: #ECECF6;
            display: flex;
            align-items: center;

            @media (max-width:467px) {
                font-size: 14px;
            }

        }

        p {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 22px;
            /* or 22px */
            color: #ECECF6;
            display: flex;
            align-items: center;
            margin: 0;
            // margin-left: 0.75rem;
        }

        .another-img-sub-modal {
            height: 115px;
            display: flex;
            // margin-top: 15px;

            padding: 0 5px;

            &:nth-child(1) {
                padding: 0;
                padding-right: 5px;
            }

            &:nth-child(4) {
                padding: 0;
                padding-left: 5px;
            }

            img {
                width: 100%;
                // object-fit: scale-down;
                height: 100%;
            }
        }

        .main-another-img-frame-modal {
            width: 100%;
            padding: 0;
            position: relative;

            .main-another-img-modal {
                height: 510px;

                img {
                    height: 100%;
                    width: 100%;
                    object-fit: fill;
                }
            }
        }
    }
}
</style>
<style lang="scss" scoped>
.line-horizon {
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    left: 50%;
    width: 95%;
    opacity: 1;
    height: 0.5px;
    background-color: #383E49;
}

.line-horizon-modal {
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    left: 50%;
    width: 95%;
    opacity: 1;
    height: 0.5px;
    background-color: #ffff;

    @media (max-width:991px) {
        margin: 0.5rem auto;
    }
}

.another-room-row {
    width: 100%;
    margin: 2rem auto;

    .row-left-pic-resp {
        display: none;
    }

    .add-bg {
        background: rgba(37, 162, 251, 0.05);
    }

    @media (max-width:992px) {
        .another-rooms-pic-glary {
            display: none;
        }

        .row-left-pic-resp {
            display: block;
        }

        .detail-hotel-left-pic-resp {
            width: 540px;
            margin: 0 auto !important;

            .row-left-pic-resp {
                height: 100%;
            }

            .detail-hotel-left-img-frame-resp {
                position: relative;
                display: flex;
                padding: 1.5rem;
                width: 450px;
                height: 400px;
                padding: 0;

                @media (max-width:768px) {
                    height: 375px !important;
                }

                @media (max-width:420px) {
                    height: 325px !important;
                }

                .show-more-rooms-btn {
                    position: absolute;
                    bottom: 35px;
                    right: 35px;
                    width: 129px;
                    height: 34px;
                    background: rgba(87, 87, 115, 0.1);
                    border: 1px solid #F9FAFF;
                    border-radius: 8px;

                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #F9FAFF;
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
            width: 375px !important;
            margin: 0 auto;
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

    .book-now-col {
        display: flex;
        justify-content: flex-end;
        padding-left: 0;
        align-items: center;

        .book-now-btn {
            border: 1px solid #0397FF;
            border-radius: 98px;
            background: #ffff;
            width: 125px;
            height: 44px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 22px;

            display: flex;
            align-items: center;
            justify-content: center;
            color: #0397FF;

            &:hover {
                background-color: #0397FF;
                color: #ffff;
                border: 1px solid #0397FF;
            }
        }

    }

    .right-another-rooms-col {
        padding: 1.25rem;

        @media (max-width:991px) {
            margin-top: 4rem;
            padding: 1.25rem 10px;

        }

        .right-another-rooms-frame {
            p {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 22px;
                color: #575773;
                margin-left: 1.25rem;
            }

            .detail-another-rooms {
                display: flex;
                justify-content: space-between;

                .another-rooms-info {
                    display: flex;
                    // margin-bottom: 0.5rem;
                    align-items: center;
                    margin: 1rem 0;

                    .another-rooms-info-icon {
                        width: 20px;
                        height: 20px;

                        img {
                            width: 20px;
                            height: 20px;
                            object-fit: scale-down;
                        }
                    }

                }
            }

            .title-delPrice-frame {
                display: flex;
                align-items: center;
                justify-content: space-between;

                @media (max-width:1400px) {
                    display: block;
                }

                .another-room-title {
                    padding: 0 15px;
                    font-family: 'Inter SemiBold';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 28px;
                    color: #575773;
                }

                .delete-price {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 17px;
                    color: #575773;
                    display: flex;
                    justify-content: flex-end;

                    @media (max-width:1400px) {
                        margin: 0.75rem 0;
                    }
                }
            }


            .subtitle-price-another-rooms {
                display: flex;
                justify-content: space-between;
                margin: 0.5rem 0;

                @media (max-width:386px) {
                    display: block;
                }

                .subtitle-another-rooms {
                    padding: 0 15px;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 22px;
                    color: #9494B0;

                    @media (max-width:991px) {
                        font-size: 14px;
                        // margin-bottom: 0.75rem;
                    }
                }

                .price-another-rooms {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 28px;
                    text-align: right;
                    color: #0397FF;

                    @media (max-width:991px) {
                        font-size: 16px;
                        margin-bottom: 0.75rem;
                        line-height: 26px;
                    }
                }
            }
        }
    }

    .main-another-img-frame {
        width: 100%;
        padding: 0;
        position: relative;

        .main-another-img {
            height: 100%;

            img {
                width: 100%;
                object-fit: cover;
                height: 100% !important;
            }
        }

        @media (max-width:1400px) {
            height: 428.5px;
        }

        @media (max-width:1200px) {
            height: 455.5px;

            img {
                width: 100%;
                object-fit: fill !important;

            }

        }

        .show-more-rooms-btn {
            position: absolute;
            bottom: 25px;
            right: 25px;
            width: 129px;
            height: 34px;
            background: rgba(87, 87, 115, 0.1);
            border: 1px solid #F9FAFF;
            border-radius: 8px;

            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #F9FAFF;
        }
    }

    .another-img-sub {
        height: 99px;
        display: flex;
        margin-top: 15px;
        padding: 0;
        // padding: 0;

        &:nth-child(1) {
            padding: 0;
            padding-right: 5px;
        }

        &:nth-child(3) {
            padding: 0;
            padding-left: 5px;
        }

        img {
            width: 100%;
            // object-fit: scale-down;
            height: 100%;
        }
    }
}
</style>