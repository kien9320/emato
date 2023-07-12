<template>
    <div class="hotel-booking-bg">
        <b-container class="hotel-booking-container">
            <b-row class="h-100">
                <b-col class="clone-col" md="6"></b-col>
                <b-col class="hotel-booking-col-frame" lg="6" md="12">
                    <form method="post" class="form-booking-frame">
                        <div class="last-seen">
                            <b-button
                                variant="primary"
                                pill
                                class="btn btn-outline-primary btn-primary"
                                @click="desShow = !desShow"
                            >
                                <img src="@/assets/Hotel/search.svg" alt="" />
                            </b-button>
                            <label class="ml-4">Khách sạn đã xem gần đây</label>
                        </div>
                        <b-col md="12">
                            <div class="form-group">
                                <!-- <label for="invitationCode">Thành phố, địa điểm hoặc tên khách sạn
                                    <div class="inputField">
                                        <div class="location-form-icon-frame">
                                            <img src="@/assets/Hotel/location.png" alt="">
                                        </div>
                                        <input v-model="formData.location" required id="location" type="text"
                                            placeholder="Thành phố/ khách sạn/ điểm đến" />
                                    </div>
                                </label> -->
                                <SelectBox
                                    required
                                    id="location"
                                    :options="places"
                                    :forLabel="formData.location"
                                    placeHolder="Thành phố/ khách sạn/ điểm đến"
                                >
                                    Thành phố, địa điểm hoặc tên khách sạn
                                    <template #icon>
                                        <img
                                            src="@/assets/Hotel/location.png"
                                            alt=""
                                        />
                                    </template>
                                </SelectBox>
                            </div>
                        </b-col>
                        <div class="check-date">
                            <b-col md="6" sm="12" cols="12">
                                <div class="form-group">
                                    <label for="dateCheckIn"
                                        >Ngày nhận phòng</label
                                    >
                                    <div class="inputField">
                                        <input
                                            v-model="formData.dateCheckIn"
                                            id="dateCheckOut"
                                            type="date"
                                            class="date"
                                        />
                                    </div>
                                </div>
                            </b-col>
                            <b-col md="6" sm="12" cols="12">
                                <div class="form-group">
                                    <label for="dateCheckOut"
                                        >Ngày trả phòng</label
                                    >
                                    <div class="inputField">
                                        <input
                                            v-model="formData.dateCheckOut"
                                            id="dateCheckOut"
                                            type="date"
                                            class="date"
                                        />
                                    </div>
                                </div>
                            </b-col>
                        </div>
                        <b-col class="form-group-rooms-frame">
                            <b-col md="5" sm="12" cols="12" class="form-group">
                                <label for="rooms">Số phòng</label>
                                <b-form-input
                                    placeholder="1 phòng"
                                    id="rooms"
                                    min="1"
                                    type="number"
                                    class="rooms-input"
                                >
                                </b-form-input>
                            </b-col>

                            <b-col
                                md="7"
                                sm="6"
                                cols="12"
                                class="form-group-rooms p-0"
                            >
                                <b-col md="6" cols="12" class="adult-col">
                                    <label for="rooms">Người lớn (12+)</label>
                                    <b-form-input
                                        class="adult-input"
                                        placeholder="1"
                                        min="1"
                                        id="rooms"
                                        type="number"
                                    >
                                    </b-form-input>
                                </b-col>
                                <b-col md="6" cols="12" class="adult-col">
                                    <label for="rooms">Trẻ em (2-11)</label>
                                    <b-form-input
                                        placeholder="1"
                                        id="rooms"
                                        min="1"
                                        type="number"
                                        class="adult-input"
                                    >
                                    </b-form-input>
                                </b-col>
                            </b-col>
                        </b-col>

                        <div class="bottom-form-hotel-booking">
                            <b-col md="5" class="d-flex align-items-center">
                                <b-form-checkbox>Giá thấp nhất</b-form-checkbox>
                            </b-col>
                            <b-col md="7" class="find-hotel-btn-col">
                                <router-link
                                    :to="{
                                        name: 'FindHotel',
                                    }"
                                >
                                    <b-button
                                        class="submit-hotel-booking-form-btn"
                                    >
                                        Tìm khách sạn
                                    </b-button>
                                </router-link>
                            </b-col>
                        </div>
                    </form>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import SelectNav from '@/components/HotelFinding/SelectNav.vue';
export default {
    components: { SelectNav },
    data() {
        return {
            places: [
                'Hải Phòng',
                'Thanh Hóa',
                'Địa ngục',
                'nhà em Kiên',
                'Đà Lạt',
            ],
            value: '',
            formData: {
                location: '',
                dateCheckIn: '',
                dateCheckOut: '',
                rooms: '',
                adult: '',
                kid: '',
                lowestPrice: '',
            },
        };
    },
};
</script>
<style lang="scss">
.hotel-booking-bg {
    margin-bottom: 2rem;

    .custom-control-label {
        border-radius: 16px;

        &::before {
            border-radius: 16px;
        }

        &::after {
            border-radius: 16px;
            // width: 0;
        }
    }

    input {
        border: none;
        outline: none;
        background-color: #ececf6;
        height: 100%;
        width: 85%;
        border-radius: 98px;
        text-align: center;
        color: #9494b0;
        // margin-top: 1rem;

        &::placeholder {
            font-family: 'Work Sans';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            color: #9494b0;

            @media (max-width: 768px) {
                font-size: 14px;
            }
        }
    }

    .form-group-rooms-frame {
        display: flex;
        padding: 0;
        margin: 1.5rem 0;

        @media (max-width: 768px) {
            display: block;
        }
    }

    .form-group-rooms {
        // margin-top: 1.5rem;
        display: flex;
        position: relative;

        @media (max-width: 576px) {
            display: block;
        }

        .adult-input {
            text-align: center;
            width: 120px;
            height: 44px;
            /* Neutral/White Gray */
            background: #ececf6;
            border-radius: 181px;
            border: none;
            color: #000;

            @media (max-width: 991px) {
                width: 100%;
            }

            &::placeholder {
                font-family: 'Work Sans';
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                text-align: center;
                color: #9494b0;

                @media (max-width: 768px) {
                    font-size: 14px;
                }
            }
        }
    }

    .custom-control-label {
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #dbdbe7;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }

    .check-date {
        display: flex;
        margin: 1.5rem 0;

        @media (max-width: 767px) {
            display: block;
        }
    }

    .b-form-btn-label-control.form-control {
        width: 100%;
        height: 44px;
        /* Neutral/White Gray */

        background: #ececf6;
        border-radius: 52px;

        &::placeholder {
            font-family: 'Work Sans';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            display: flex;
            align-items: center;
            color: #9494b0;

            @media (max-width: 768px) {
                font-size: 14px;
            }
        }

        label {
            font-family: 'Work Sans';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            display: flex;
            align-items: center;
            color: #9494b0;

            @media (max-width: 768px) {
                font-size: 14px;
            }
        }
    }
}
</style>

<style>
::v-deep .plane-inputBox {
    border-bottom: 2px solid transparent;
}
::v-deep .plane-inputBox:focus {
    border-color: rgba(3, 151, 255, 1);
}
::v-deep .inputField .items {
    margin-top: 5px;
    width: 250%;
    box-shadow: 1px 2px 3px 1px rgba(199, 198, 214, 0.2);
}
::v-deep .inputField .items .item {
    background-color: #f9faff;
}
</style>

<style lang="scss" scoped>
.hotel-booking-bg {
    background: url('@/assets/Hotel/booking-hotel-bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    position: relative;

    .clone-col {
        @media (max-width: 1175px) {
            display: none;
        }
    }

    .adult-col {
        padding: 0;

        @media (max-width: 991px) {
            padding: 0 15px;
            margin-bottom: 15px;
        }
    }

    label {
        margin-bottom: 1rem;
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #ececf6;

        @media (max-width: 768px) {
            font-size: 14px;
            margin-bottom: 0.5rem;
        }
    }
    .hotel-booking-container {
        .form-booking-frame {
            margin: 2rem 0;
            position: relative;
            width: 543px;
            padding: 3rem 2rem;
            background: linear-gradient(
                    0deg,
                    rgba(0, 0, 0, 0.2),
                    rgba(0, 0, 0, 0.2)
                ),
                rgba(57, 65, 80, 0.8);
            backdrop-filter: blur(14px);
            /* Note: backdrop-filter has minimal browser support */
            border-radius: 5px;

            @media (max-width: 991px) {
                width: 100%;
            }

            .last-seen {
                display: flex;
                margin-bottom: 1rem;

                .btn {
                    width: 29px;
                    height: 29px;
                    position: relative;

                    img {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }

                p {
                    font-family: 'Work Sans';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                    color: #ececf6;

                    @media (max-width: 768px) {
                        font-size: 14px;
                    }
                }
            }

            .bottom-form-hotel-booking {
                display: flex;
                margin-top: 2.5rem;

                @media (max-width: 420px) {
                    display: block;
                }

                @media (max-width: 767px) {
                    margin-top: 1rem;
                }

                .find-hotel-btn-col {
                    @media (max-width: 420px) {
                        margin-top: 1rem;
                    }

                    a {
                        &:hover {
                            text-decoration: none;
                        }
                    }
                }

                .submit-hotel-booking-form-btn {
                    width: 100%;
                    height: 44px;
                    /* Blue */
                    background: rgba(3, 151, 255, 0.6);
                    border-radius: 107px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    font-family: 'Work Sans';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                    color: #f9faff;

                    &:hover {
                        color: black;
                    }

                    @media (max-width: 768px) {
                        font-size: 14px;
                    }
                }
            }

            .rooms-detail {
                display: flex;
                justify-content: space-around;

                .form-group {
                    padding: 0 15px;
                }
            }

            .form-group {
                // margin-top: 1.5rem;
                // margin-bottom: 5px;
                position: relative;

                label {
                    width: 100%;
                }

                .inputField {
                    position: relative;
                    border-radius: 98px;
                    background-color: #ececf6;
                    height: 44px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    margin-top: 1rem;

                    input[type='date']::-webkit-calendar-picker-indicator {
                        // color: rgba(0, 0, 0, 0);
                        opacity: 1;
                        background: url('@/assets/Hotel/calendar-icon.png')
                            no-repeat;
                        width: 16px;
                        height: 16px;
                        border-width: thin;
                    }

                    .location-form-icon-frame {
                        height: 100%;
                        margin: auto;
                        display: flex;
                        align-items: center;
                    }

                    /* justify-content: center; */
                    .date {
                        border: none;
                        outline: none;
                        background-color: #ececf6;
                        color: #9494b0;
                        height: 100%;
                        width: 90%;
                        border-radius: 98px;
                        text-align: center;
                    }
                }

                svg {
                    position: absolute;
                    top: 3.5rem;
                    left: 1rem;
                }

                .rooms-input {
                    text-align: center;
                    width: 100%;
                    height: 44px;
                    /* Neutral/White Gray */
                    background: #ececf6;
                    border-radius: 1044px;
                    border: none;

                    &::placeholder {
                        font-family: 'Work Sans';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 24px;
                        text-align: center;
                        color: #9494b0;

                        @media (max-width: 768px) {
                            font-size: 14px;
                        }
                    }
                }

                .form-input-location {
                    text-align: center;
                    width: 85%;
                    height: 44px;
                    background: #ececf6;
                    border-radius: 1044px;
                    border: none;

                    &::placeholder {
                        font-family: 'Work Sans';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 24px;
                        text-align: center;
                        color: #9494b0;

                        @media (max-width: 768px) {
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
}
</style>
