<script>
import SelectNav from '@/components/HotelFinding/SelectNav.vue';
export default {
    components: { SelectNav },
    data() {
        return {
            places: [
                'Hoa Cải đỏ',
                'Thiêng Thầnk',
                'Ác kủy',
                'Địa ngục',
                'nhà em Kiên',
                'Đà Lạt',
            ],
            guestArr: ['1', '2', ' 3', ' 4', '5', '6', '7', '8', '9', '10'],
            guest: '0',
        };
    },
};
</script>

<template>
    <div class="nav-hotel-finding">
        <b-container class="nav-container h-100">
            <b-row class="pt-4 pb-3 h-100">
                <b-col
                    class="m-0 m-lg-auto d-block d-md-flex justify-content-between"
                    md="4"
                    sm="12"
                    cols="12"
                >
                    <div>
                        <div class="nav-title">
                            Thành phố, địa điểm hoặc tên khách sạn
                        </div>
                        <!-- <div class="nav-des mt-2">
                            Đà Nẵng, Việt Nam
                        </div> -->
                        <SelectNav
                            class="nav-des"
                            required
                            id="location"
                            :options="places"
                            forLabel="Test 1"
                            placeHolder=" Đà Nẵng, Việt Nam"
                        >
                        </SelectNav>
                    </div>
                    <div class="line-division"></div>
                    <div class="line-division-resp my-3"></div>
                </b-col>
                <b-col md="8" sm="12" cols="12">
                    <b-row>
                        <b-col
                            lg="3"
                            md="4"
                            cols="12"
                            class="d-flex flex-column"
                        >
                            <div class="nav-title">Ngày đến</div>
                            <div class="nav-des">
                                <input
                                    id="dateCheckOut"
                                    type="date"
                                    class="date"
                                />
                            </div>
                        </b-col>
                        <b-col
                            lg="3"
                            md="4"
                            cols="12"
                            class="d-flex flex-column"
                        >
                            <div class="nav-title">Ngày về</div>
                            <div class="nav-des">
                                <input
                                    id="dateCheckOut"
                                    type="date"
                                    class="date"
                                />
                            </div>
                        </b-col>
                        <b-col
                            lg="3"
                            md="4"
                            cols="12"
                            class="d-flex flex-column"
                        >
                            <div class="nav-title">Số khách</div>
                            <SelectNav
                                class="nav-des"
                                required
                                :options="guestArr"
                                forLabel="Test 1"
                                :placeHolder="this.guest"
                            >
                            </SelectNav>
                        </b-col>
                        <b-col lg="2" cols="12" class="search-nav">
                            <b-button class="btn-search" pill variant="dark">
                                <div class="search-icon">
                                    <img src="@/assets/Hotel/search-icon.png" />
                                </div>
                            </b-button>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style lang="scss">
.search-nav {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 991px) {
        margin-top: 1rem;
        justify-content: flex-end !important;
    }

    .btn-search {
        width: 42px;
        height: 42px;
        position: relative;

        .search-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            // width: 100%;
            object-fit: cover;
        }

        @media (max-width: 991px) {
            width: 120px;
        }
    }
}
</style>
<style lang="scss" scoped>
.nav-hotel-finding {
    background: #edf5ff;
    // height: 100px;
    position: sticky;
    top: 0;
    z-index: 20;

    .nav-container {
        display: block;

        .line-division {
            left: 50%;
            width: 0.5px;
            opacity: 1;
            height: 50px;
            background-color: #383e49;

            @media (max-width: 768px) {
                display: none;
            }
        }

        .line-division-resp {
            display: none;
            left: 50%;
            width: 100%;
            opacity: 1;
            height: 0.5px;
            background-color: #383e49;

            @media (max-width: 767px) {
                display: block;
            }
        }

        .nav-title {
            font-family: 'Inter';
            font-style: normal;

            font-size: 16px;
            line-height: 22px;
            color: #9494b0;

            @media (max-width: 768px) {
                font-size: 14px;
                line-height: 20px;
            }
        }

        .nav-des {
            position: relative;
            border-radius: 98px;
            background-color: transparent;
            height: 44px;
            width: 100%;
            display: flex;
            align-items: center;
            margin-top: 1rem;

            font-family: 'Inter SemiBold';
            font-style: normal;
            font-size: 16px;
            line-height: 22px;
            color: #575773;
            @media (max-width: 768px) {
                font-size: 14px;
                line-height: 20px;
            }

            .date {
                border: none;
                outline: none;
                background-color: transparent;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 22px;
                /* or 22px */

                color: #575773;

                height: 100%;
                width: 100%;
                border-radius: 10px;
                text-align: start;
                cursor: pointer;
            }

            input[type='date']::-webkit-calendar-picker-indicator {
                display: none;
            }
        }

        .nav-hotel-finding-item {
            padding: 1rem 0;

            @media (max-width: 768px) {
                padding: 0.25rem 0;
            }

            .nav-title {
                font-family: 'Inter';
                font-style: normal;

                font-size: 16px;
                line-height: 22px;
                color: #9494b0;

                @media (max-width: 768px) {
                    font-size: 14px;
                    line-height: 20px;
                }
            }
        }
    }
}
</style>
