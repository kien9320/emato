<!-- eslint-disable global-require -->
<script>
export default {
    name: 'PlaneFilter',
    data() {
        return {
            testResult: [],
            result: [
                {
                    id: 1,
                    des: 'Giá cao nhất',
                },
                {
                    id: 2,
                    des: 'Giá thấp nhất',
                },
                {
                    id: 3,
                    des: 'Điểm đánh giá',
                },
                {
                    id: 4,
                    des: 'Độ phổ biến',
                },
            ],
            resident: [
                {
                    id: 1,
                    des: 'Nhà riêng',
                },
                {
                    id: 2,
                    des: 'Khách sạn',
                },
                {
                    id: 3,
                    des: 'Biệt thự',
                },
                {
                    id: 4,
                    des: 'Nhà nghỉ',
                },
                {
                    id: 5,
                    des: 'Khu nghỉ dưỡng',
                },
                {
                    id: 6,
                    des: 'Căn hộ',
                },
            ],
            showRating: true,
            showResident: true,
            value: '1500000',
            ratingStar: [
                {
                    id: 1,
                    value: 1,
                },
                {
                    id: 2,
                    value: 2,
                },
                {
                    id: 3,
                    value: 3,
                },
                {
                    id: 4,
                    value: 4,
                },
                {
                    id: 5,
                    value: 5,
                },
            ],
            priceRangeEnd: 3000000,
            priceRange: {
                min: 1000000,
                max: 6000000,
            },
            formatter: new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format,
        };
    },
};
</script>

<template>
    <div class="main-menu-hotel-finding">
        <div class="filterHeader withBotBorder padded">
            <p>Bộ lọc</p>
            <p class="icon"><i class="fa-regular fa-arrows-rotate"></i></p>
        </div>
        <div class="priceRange padded">
            <p>Khoảng giá</p>
            <div class="price">0đ - {{ value }}đ</div>
            <label for="priceRange">
                <!-- <b-form-input id="range-2" v-model="value" type="range" min="0" :max="priceRangeEnd" step="50000">
                </b-form-input> -->
                <label class="labelStyle" for="priceRange">
                    <input
                        type="range"
                        class="priceInput"
                        id="range-2"
                        v-model="value"
                        min="0"
                        :max="priceRangeEnd"
                        step="50000"
                    />
                </label>
            </label>
        </div>
        <div class="schedule">
            <div class="withBotBorder padded">
                <p>Sắp xếp kết quả</p>
            </div>
            <div class="padded">
                <b-form-checkbox
                    v-model="testResult"
                    :value="item.des"
                    v-for="(item, idx) in result"
                    :key="idx"
                    >{{ item.des }}</b-form-checkbox
                >
            </div>
        </div>
        <div class="class">
            <div class="withBotBorder padded">
                <p>Hạng sao</p>
                <div class="div-show" @click="showRating = !showRating">
                    <img src="@/assets/Hotel/down-arr.png" v-if="showRating" />
                    <img src="@/assets/Hotel/up-arr.png" v-if="!showRating" />
                </div>
            </div>
            <form class="checkboxes padded" v-if="showRating">
                <div
                    class="schedule"
                    v-for="(item, idx) in ratingStar"
                    :key="item + idx"
                >
                    <b-form-checkbox v-model="testResult" :value="item.value">
                        <div class="rating-star">
                            <img
                                class="ml-2"
                                v-for="(items, idx) in item.value"
                                :key="items + idx"
                                src="@/assets/Hotel/star-rating.png"
                            />
                        </div>
                    </b-form-checkbox>
                </div>
            </form>
        </div>
        <div class="transfer">
            <div class="withBotBorder padded">
                <p>Điểm dừng</p>
                <div class="div-show" @click="showResident = !showResident">
                    <img
                        src="@/assets/Hotel/down-arr.png"
                        v-if="showResident"
                    />
                    <img src="@/assets/Hotel/up-arr.png" v-if="!showResident" />
                </div>
            </div>
            <div class="schedule" v-if="showResident">
                <div class="padded">
                    <b-form-checkbox
                        v-model="testResult"
                        v-for="(item, idx) in resident"
                        :key="idx"
                        :value="item.des"
                    >
                        {{ item.des }}
                    </b-form-checkbox>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.main-menu-hotel-finding {
    p {
        font-family: 'Inter';
        font-style: normal;

        font-size: 16px;
        line-height: 22px;
        /* or 22px */
        color: #575773;

        @media (max-width: 576px) {
            font-size: 14px;
        }
    }

    .custom-control-label {
        font-family: 'Inter';
        font-style: normal;

        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #575773;
        position: unset;
        margin-left: 2rem;
        margin-bottom: 1rem;

        &::before {
            left: 0;
        }

        &::after {
            left: 0;
        }

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }

    .transfer {
        .div-show {
            display: flex;
            align-items: center;
            cursor: pointer !important;
        }
    }

    label {
        font-family: 'Inter';
        font-style: normal;

        font-size: 16px;
        line-height: 22px;
        display: flex;
        align-items: center;
        color: #575773;

        @media (max-width: 768px) {
            font-size: 14px !important;
            line-height: 24px !important;
        }
    }

    .menu-item-title {
        font-family: 'Inter';
        font-style: normal;

        font-size: 16px;
        line-height: 22px;
        color: #575773;
        border-bottom: 1px solid #575773;
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;

        @media (max-width: 768px) {
            font-size: 14px !important;
            line-height: 24px !important;
        }
    }

    .rating-star {
        .custom-control-label {
            position: unset;

            &::before {
                left: 0 !important;
            }
        }
    }

    .price-lowest-to-highest {
        .custom-control-label {
            position: unset;
            margin-left: 2rem !important;

            &::before {
                left: 0 !important;
            }
        }
    }
}
</style>
<style scoped>
.main-menu-hotel-finding {
    padding: 10px 5px;
    background-color: white;
    box-shadow: 0 2px 4px 1px rgba(100, 93, 97, 0.3);

    font-family: Inter;
    color: rgba(87, 87, 115, 1);
}

p {
    font-family: 'Inter';
    font-style: normal;

    font-size: 16px;
    line-height: 22px;
    /* or 22px */
    color: #575773 !important;
    padding: 1rem 0 !important;
}

@media (max-width: 576px) {
    p {
        font-size: 14px;
    }
}

.padded {
    padding-left: 10px;
    padding-right: 10px;
}

.filterHeader {
    display: flex;
    justify-content: space-between;
}

.withBotBorder {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(87, 87, 115, 1);
    margin-bottom: 10px;
}

.icon {
    color: rgba(3, 151, 255, 1);
}

.price {
    color: rgba(148, 148, 176, 1);
}

.priceInput {
    appearance: none;
    border-radius: 8px;
    height: 6px;
    background-color: rgba(3, 151, 255, 1);
    outline: none;
    opacity: 0.7;
    transition: all 0.2s linear;
    width: 100%;
    cursor: pointer;
    margin-top: 1rem;
}

.priceInput:hover {
    opacity: 1;
}

.priceInput::-webkit-slider-thumb {
    appearance: none;
    width: 17px;
    height: 17px;
    background-color: white;
    border: 6px solid rgba(3, 151, 255, 1);
    border-radius: 7px;
}

.priceInput::-moz-range-thumb {
    appearance: none;
    width: 17px;
    height: 17px;
    background-color: white;
    border: 6px solid rgba(3, 151, 255, 1);
    border-radius: 7px;
}

label {
    width: 100%;
    /* margin-bottom: 20px; */
}

input[type='range'] {
    width: 100%;
}

.whitespace {
    padding: 0px 20px;
    display: inline-block;
    width: 65px;
}
</style>
