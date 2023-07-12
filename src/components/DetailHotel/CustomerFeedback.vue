<script>
export default {
    data() {
        return {
            MoreContent: '',
            users: [
                {
                    id: 1,
                    judges: 2,
                    src: 'user-avatar.png',
                    name: 'Phong PH.',
                    date: '09 JUL 2022',
                    rating: 4.7,
                    type: 'Kỳ nghỉ lễ',
                    commentFull: 'Good services ! Nhan vien chu đáo tận tình Lörem ipsum lagon renera, var, minade. Mang ser miserade migt. O. miktig om omom. Lörem ipsum lagon renera, var, minade. Mang ser miserade migt. Osed pang, por efa miktig om tulig. Trelig berybelt för att asat innan dotenat. Bolundare lavan iserade migt. miktig om omom.Good services ! Nhan vien chu đáo tận tình Lörem ipsum lagon renera, var, minade. Mang ser miserade migt. O. miktig om omom. Lörem ipsum lagon renera, var, minade. Mang ser miserade migt. Osed pang, por efa miktig om tulig. Trelig berybelt för att asat innan dotenat. Bolundare lavan iserade migt. miktig om omom.',
                },
                {
                    id: 2,
                    judges: 2,
                    src: 'user-avatar.png',
                    name: 'Phong PH.',
                    date: '09 JUL 2022',
                    rating: 4.7,
                    type: 'Kỳ nghỉ lễ',
                    commentFull: 'Good services ! Nhan vien chu đáo tận tình Lörem ipsum lagon renera, var, minade. Mang ser miserade migt. O. miktig om omom. Lörem ipsum lagon renera, var, minade. Mang ser miserade migt. Osed pang, por efa miktig om tulig. Trelig berybelt för att asat innan dotenat. Bolundare lavan iserade migt. miktig om omom.',
                },
                {
                    id: 3,
                    judges: 2,
                    src: 'user-avatar.png',
                    name: 'Phong PH.',
                    date: '09 JUL 2022',
                    rating: 4.7,
                    type: 'Kỳ nghỉ lễ',
                    commentFull: 'Good services ! Nhan vien chu đáo tận tình Lörem ipsum lagon renera, var, minade. Mang ser miserade migt. O. miktig om omom. Lörem ipsum lagon renera, var, minade. Mang ser miserade migt. Osed pang, por efa miktig om tulig. Trelig berybelt för att asat innan dotenat. Bolundare lavan iserade migt. miktig om omom.',
                },
                {
                    id: 4,
                    judges: 2,
                    src: 'user-avatar.png',
                    name: 'Phong PH.',
                    date: '09 JUL 2022',
                    rating: 4.7,
                    type: 'Kỳ nghỉ lễ',
                    commentFull: 'Good services ! Nhan vien chu đáo tận tình Lörem ipsum lagon renera, var, minade. Mang ser miserade migt. O. miktig om omom. Lörem ipsum lagon renera, var, minade. Mang ser miserade migt. Osed pang, por efa miktig om tulig. Trelig berybelt för att asat innan dotenat. Bolundare lavan iserade migt. miktig om omom.',
                },
            ],
            feedBack: {
                totalFeedBack: 4.7,
                tuyetVoi: 28,
                ratTot: 15,
                haiLong: 8,
                trungBinh: 3,
                kem: 0,
                sachSe: 5,
                thoaiMai: 4,
                doAn: 3,
                viTri: 4,
                dichVu: 4,
                like: 5,
            }
        }
    }
}
</script>
<template>
    <b-container class="customer-feedback-container">
        <b-row class="py-5">
            <b-col lg="1" class="dash-col">
                <div class="dash-every-item d-flex justify-content-end p-2">
                    <img src="@/assets/Hotel/Detail/Rectangle 61.png" alt="">
                </div>
            </b-col>
            <b-col lg="11" md="12">
                <b-row class="w-100 ml-0">
                    <b-col lg="4">
                        <div class="title-customer-feedback">
                            Hiển thị dựa trên 65 đánh giá
                        </div>
                        <div class="total-feedback-point">
                            {{  feedBack.totalFeedBack  }}/5 <span>
                                <img src="@/assets/Hotel/Detail/blue-star.png" alt="">
                            </span>
                        </div>
                        <div class="total-customer-feedback">
                            đánh giá từ 219 du khách
                        </div>
                    </b-col>
                    <b-col lg="4" class="customer-feedback-progress-col">
                        <div class="customer-feedback-progress">
                            <div class="progress-title-frame">
                                <div class="progress-title">
                                    Tuyệt vời
                                </div>
                            </div>
                            <b-progress :value="feedBack.tuyetVoi" class="mb-3">
                            </b-progress>
                            <div class="progress-value">
                                {{  feedBack.tuyetVoi  }}
                            </div>
                        </div>
                        <div class="customer-feedback-progress">
                            <div class="progress-title-frame">
                                <div class="progress-title">
                                    Rất tốt
                                </div>
                            </div>
                            <b-progress :value="feedBack.ratTot" class="mb-3">
                            </b-progress>
                            <div class="progress-value">
                                {{  feedBack.ratTot  }}
                            </div>
                        </div>
                        <div class="customer-feedback-progress">
                            <div class="progress-title-frame">
                                <div class="progress-title">
                                    Hài lòng
                                </div>
                            </div>
                            <b-progress :value="feedBack.haiLong" class="mb-3">
                            </b-progress>
                            <div class="progress-value">
                                {{  feedBack.haiLong  }}
                            </div>
                        </div>
                        <div class="customer-feedback-progress">
                            <div class="progress-title-frame">
                                <div class="progress-title">
                                    Trung bình
                                </div>
                            </div>
                            <b-progress :value="feedBack.trungBinh" class="mb-3">
                            </b-progress>
                            <div class="progress-value">
                                {{  feedBack.trungBinh  }}
                            </div>
                        </div>
                        <div class="customer-feedback-progress">
                            <div class="progress-title-frame">
                                <div class="progress-title">
                                    Kém
                                </div>
                            </div>
                            <b-progress :value="feedBack.kem" class="mb-3">
                            </b-progress>
                            <div class="progress-value">
                                {{  feedBack.kem  }}
                            </div>
                        </div>
                    </b-col>
                    <b-col lg="4">
                        <div class="customer-feedback-star-frame">
                            <div class="progress-title-frame">
                                <div class="progress-title">
                                    Sạch sẽ
                                </div>
                            </div>
                            <div class="customer-feedback-star ml-2">
                                <img class="star-img" v-for="(itemm, idx) in  feedBack.sachSe" :key="itemm + idx"
                                    src="@/assets/Hotel/Detail/blue-star.png">
                            </div>
                        </div>
                        <div class="customer-feedback-star-frame">
                            <div class="progress-title-frame">
                                <div class="progress-title">
                                    Thoải mái
                                </div>
                            </div>
                            <div class="customer-feedback-star ml-2">
                                <img class="star-img" v-for="(itemm, idx) in  feedBack.thoaiMai" :key="itemm + idx"
                                    src="@/assets/Hotel/Detail/blue-star.png">
                            </div>
                        </div>
                        <div class="customer-feedback-star-frame">
                            <div class="progress-title-frame">
                                <div class="progress-title">
                                    Đồ ăn
                                </div>
                            </div>
                            <div class="customer-feedback-star ml-2">
                                <img class="star-img" v-for="(itemm, idx) in  feedBack.doAn" :key="itemm + idx"
                                    src="@/assets/Hotel/Detail/blue-star.png">
                            </div>
                        </div>
                        <div class="customer-feedback-star-frame">
                            <div class="progress-title-frame">
                                <div class="progress-title">
                                    Vị trí
                                </div>
                            </div>
                            <div class="customer-feedback-star ml-2">
                                <img class="star-img" v-for="(itemm, idx) in  feedBack.viTri" :key="itemm + idx"
                                    src="@/assets/Hotel/Detail/blue-star.png">
                            </div>
                        </div>
                        <div class="customer-feedback-star-frame">
                            <div class="progress-title-frame">
                                <div class="progress-title">
                                    Dịch vụ
                                </div>
                            </div>
                            <div class="customer-feedback-star ml-2">
                                <img class="star-img" v-for="(itemm, idx) in  feedBack.dichVu" :key="itemm + idx"
                                    src="@/assets/Hotel/Detail/blue-star.png">
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row class="cmt-row" v-for="(item, idx) in users" :key="item + idx" :class="idx % 2 != 0 ? '' : 'add-bg'">
            <b-col md="1" class="user-avartar-col">
                <div class="user-avatar-frame">
                    <img :src="require(`@/assets/Hotel/Detail/Another/${item.src}`)">
                </div>
            </b-col>
            <b-col md="11" sm="12">
                <div class="d-flex">
                    <b-col>
                        <div class="user-name-date-resp">
                            <div class="user-avatar-frame-name-resp">
                                <div class="user-avatar-frame-resp">
                                    <img :src="require(`@/assets/Hotel/Detail/Another/${item.src}`)">
                                </div>
                                <div class="user-name-resp">
                                    {{  item.name  }}
                                </div>
                            </div>
                            <div class="user-date-cmt-resp">
                                {{  item.date  }}
                            </div>
                        </div>
                        <div class="user-name-date">
                            <div class="user-name">
                                {{  item.name  }}
                            </div>
                            <div class="user-date-cmt">
                                {{  item.date  }}
                            </div>
                        </div>
                        <b-row class="user-rating-star-type-judges">
                            <b-col class="user-rating-star-type p-0" sm="9" cols="12">
                                <div class="user-rating-star-frame">
                                    <div class="user-rating-star">
                                        {{  item.rating  }}/5
                                    </div>
                                    <div class="customer-feedback-star ml-2">
                                        <img class="star-img" src="@/assets/Hotel/Detail/blue-star.png">
                                    </div>
                                </div>
                                <div class="user-rating-star-frame ml-3">
                                    <div class="user-rating-star">
                                        {{  item.type  }}
                                    </div>
                                </div>
                            </b-col>
                            <b-col class="user-judges" sm="3" cols="12">
                                {{  item.judges  }} đánh giá
                            </b-col>
                        </b-row>
                        <div class="" :class="(MoreContent === item.id) ? 'show-full-cmt' : 'user-cmt'">
                            {{  item.commentFull  }}
                        </div>
                        <div class="show-more-cmt" @click="MoreContent = item.id">
                            <div v-if="MoreContent !== item.id">
                                Xem thêm
                            </div>
                        </div>
                    </b-col>
                </div>
            </b-col>
            <div class="bottom-cmt">
                <div class="line-horizon"></div>
                <div class="like-comment-frame m-0 mr-md-3">
                    <div class="user-judges">Bạn thích đánh giá này?</div>
                    <div class="like-number m-2 mr-md-3">
                        {{  feedBack.like  }}
                    </div>
                    <div class="like-icon-frame">
                        <img src="@/assets/Hotel/Detail/Another/like-icon.png" alt="">
                    </div>
                </div>
            </div>
        </b-row>
    </b-container>
</template>

<style lang="scss">
.customer-feedback-container {
    .dash-col {
        display: block;

        @media (max-width:991px) {
            display: none;
        }
    }

    .user-judges {
        font-family: 'Inter';
        font-style: normal;

        font-size: 16px;
        line-height: 155%;
        display: flex;
        align-items: center;
        color: #9494B0;
        justify-content: flex-end;
        padding: 0 24px;

        // margin-right: 0.75rem;
        @media (max-width:768px) and (min-width:576px) {
            padding: 0;
        }

        @media (max-width:576px) {
            font-size: 14px;
            margin: 1rem 0;
            justify-content: flex-start;
            padding: 0 15px;
        }
    }

    .progress {
        width: 170px;
        height: 5px;
        margin-top: 0.5rem;

        @media (max-width:991px) {
            // margin-left: 2rem;
            // margin-right: 2rem;
            width: 250px;
        }

        @media (max-width:420px) {
            margin-left: 1rem;
            margin-right: 1rem;
            width: 170px;
        }
    }

    .progress-title-frame {
        width: 85px !important;

        .progress-title {
            font-family: 'Inter';
            font-style: normal;

            font-size: 16px;
            line-height: 25px;
            color: #575773;
        }
    }
}
</style>
<style lang="scss" scoped>
.customer-feedback-container {
    .bottom-cmt {
        width: 100%;

        .like-icon-frame {
            margin-right: 1.25rem;
            display: flex;
            align-items: center;
        }

        .like-number {
            font-family: 'Inter';
            font-style: normal;

            font-size: 16px;
            line-height: 155%;
            /* or 25px */

            display: flex;
            align-items: center;

            /* Neutral/Dark Gray */

            color: #575773;
        }

        .like-comment-frame {
            display: flex;
            justify-content: flex-end;
        }
    }

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

    .show-more-cmt {
        font-family: 'Inter';
        font-style: normal;

        font-size: 16px;
        line-height: 155%;
        display: flex;
        align-items: center;
        color: #9494B0;
        cursor: pointer;
    }

    .show-full-cmt {
        height: 100%;
        margin-top: 1.5rem;
        font-family: 'Inter';
        font-style: normal;

        font-size: 16px;
        line-height: 25px;
        color: #575773;
    }

    .user-cmt {
        height: 54px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        display: -webkit-box;
        margin-top: 1.5rem;
        font-family: 'Inter';
        font-style: normal;

        font-size: 16px;
        line-height: 25px;
        color: #575773;

        @media (max-width:576px) {
            margin-top: 0.5rem;
        }
    }

    .user-rating-star-type-judges {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-left: 0;


        .user-rating-star-type {
            display: flex;

            .user-rating-star-frame {
                display: flex;
                background: #89c9f7;
                // opacity: 0.2;
                border-radius: 160px;
                width: 120px;
                height: 36px;
                z-index: 1;
                justify-content: center;

                .customer-feedback-star {
                    display: flex;
                    align-items: center;

                    img {
                        width: 100%;
                        object-fit: scale-down;
                    }
                }
            }

            .user-rating-star {
                font-family: 'Inter';
                font-style: normal;

                font-size: 16px;
                line-height: 22px;
                color: #575773;
                z-index: 2;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }

    .cmt-row {
        margin-bottom: 2rem;
        padding: 3rem 1rem;
        width: 100%;
        margin-left: 0;

        &.add-bg {
            background: rgba(37, 162, 251, 0.05);
        }

        @media (max-width:991px) {
            padding: 3rem 10px;
        }
    }

    .user-name-date-resp {
        display: none;

        @media (max-width:768px) {
            display: flex;
            justify-content: space-between;

            .user-avatar-frame-name-resp {
                display: flex;
            }

            .user-name-resp {
                font-family: 'Inter';
                font-style: normal;

                font-size: 20px;
                line-height: 28px;
                color: #575773;
                display: flex;
                align-items: center;
                margin-left: 0.5rem;
            }

            .user-date-cmt-resp {
                font-family: 'Inter';
                font-style: normal;

                font-size: 14px;
                line-height: 22px;
                color: #575773;
                display: flex;
                align-items: center;

                @media (max-width:365px) {
                    justify-content: flex-end;
                    margin-top: 0.5rem;
                }
            }
        }

        @media (max-width:365px) {
            display: block;
        }
    }

    .user-avartar-col {
        @media (max-width:768px) {
            display: none !important;
        }
    }

    .user-name-date {
        // padding: 0 1rem;
        padding-right: 24px;
        display: flex;
        justify-content: space-between;

        @media (max-width:768px) {
            display: none !important;
        }

        .user-name {
            font-family: 'Inter SemiBold';
            font-style: normal;
            font-size: 24px;
            line-height: 28px;
            color: #575773;
        }

        .user-date-cmt {
            font-family: 'Inter';
            font-style: normal;

            font-size: 16px;
            line-height: 22px;
            color: #575773;
        }
    }


    .customer-feedback-star-frame {
        display: flex;
        height: 29px;
        margin-bottom: 1.25rem;
        // padding: 0 1rem;
        // @media (max-width:768px) {
        //     margin-left: 2.5rem;
        // }

        // @media (max-width:530px) {
        //     margin: 0;
        //     padding: 0 15px;
        // }

        .customer-feedback-star {
            display: flex;
            width: 17px;
            height: 16px;

            .star-img {
                width: 100%;
                object-fit: scale-down;
                margin-left: 0.5rem;
            }
        }
    }

    .customer-feedback-progress-col {
        @media (max-width:991px) {
            margin-top: 1.5rem;
        }
    }

    .customer-feedback-progress {
        display: flex;
        justify-content: space-around;
        margin-bottom: 1.25rem;

        @media (max-width:991px) {
            justify-content: space-between;
        }

    }

    .title-customer-feedback {
        font-family: 'Inter';
        font-style: normal;

        font-size: 18px;
        line-height: 25px;
        color: #575773;
        margin-bottom: 1rem;

    }

    .total-feedback-point {
        margin-bottom: 1rem;
        font-family: 'Inter';
        font-style: normal;

        font-size: 32px;
        line-height: 38px;
        color: #575773;
    }

    .total-customer-feedback {
        font-family: 'Inter';
        font-style: normal;

        font-size: 16px;
        line-height: 25px;
        color: #9494B0;
    }
}
</style>