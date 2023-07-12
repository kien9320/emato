<template>
    <div class="convenient-form py-4">
        <b-container>
            <b-row class="px-md-5">
                <b-col md="10" class="convenient-frame">
                    <b-col lg="5" md="12" cols="12">
                        <div class="convenient-des py-4">
                            Tìm kiếm nhanh hơn bằng cách chọn những tiện nghi
                            bạn cần
                        </div>
                    </b-col>
                    <b-col lg="7" md="12" cols="12" class="m-auto">
                        <form class="check-form">
                            <b-form-checkbox>
                                Miễn phí hủy phòng
                            </b-form-checkbox>
                            <b-form-checkbox>
                                Thanh toán khi nhận phòng
                            </b-form-checkbox>
                            <b-form-checkbox>
                                Miễn phí bữa sáng
                            </b-form-checkbox>
                        </form>
                    </b-col>
                </b-col>
                <b-col lg="2" class="m-0 search-nav">
                    <b-button class="btn-search" pill variant="dark">
                        <div class="search-icon">
                            <img src="@/assets/Hotel/search-icon.png" />
                        </div>
                    </b-button>
                </b-col>
                <div class="line-horizon-convenient"></div>
                <div class="result-check p-3">
                    Kết quả cho <span>1 phòng, 2 khách,</span> ở từ 22 Jul 2022
                    trong <span>1 đêm.</span> Có 8 lựa chọn phòng trống.
                </div>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.result-check {
    font-family: 'Inter';
    font-style: normal;

    font-size: 16px;
    line-height: 24px;

    span {
        color: #575773;
    }

    color: #9494b0;
}

.search-nav {
    display: flex;
    justify-content: flex-start;

    @media (max-width: 768px) {
        justify-content: flex-end;
    }
}

.line-horizon-convenient {
    margin: 0.5rem 0;
    display: flex;
    justify-content: center;
    left: 50%;
    width: 100%;
    opacity: 1;
    height: 0.5px;
    background-color: #9494b0;

    @media (max-width: 991px) {
        margin: 1rem 0;
    }
}

.convenient-frame {
    display: flex;

    @media (max-width: 991px) {
        display: block;
    }
}

.check-form {
    padding: 1rem 0;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 991px) {
        // padding: 0 !important;
        // margin-bottom: 2rem;
    }

    .pay-when-hire-room {
        margin-left: 2rem;

        @media (max-width: 1200px) {
            margin: 0 !important;
        }
    }
}

.convenient-form {
    background: #edf5ff;

    .convenient-des {
        font-family: 'Inter';
        font-style: normal;

        font-size: 16px;
        line-height: 24px;
        color: #575773;
    }

    .custom-control {
        margin-bottom: 1rem;

        .custom-control-input {
            left: 20px;
        }

        .custom-control-label {
            position: unset;
            margin-left: 2rem;

            &::before {
                left: 20px;
            }

            &::after {
                left: 20px;
            }
        }

        label {
            font-family: 'Inter';
            font-style: normal;

            font-size: 16px;
            line-height: 22px;
            /* or 22px */

            display: flex;
            align-items: center;

            /* Neutral/Dark Gray */

            color: #575773;
        }
    }
}
</style>