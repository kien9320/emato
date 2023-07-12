<script>
export default {
    name: 'TicketClasses',
    data() {
        return {
            isDetails: false,
            isTime: false,
            formatter: new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format,
        };
    },
    props: {
        classe: Object,
    },
    computed: {
        leftMaxWidth() {
            return this.isTime ? 200 : 0;
        },
    },
    methods: {
        handleClick() {
            this.$emit('details', this.handleClick);
            this.isDetails = !this.isDetails;
        },
        openTime() {
            this.isTime = !this.isTime;
        },
    },
};
</script>

<template>
    <div>
        <div class="row py-2">
            <div class="col-12 col-md-6">
                <div class="classSelectWrapper">
                    <div class="pill classAcro">
                        {{ classe.acro }}
                    </div>
                    <div
                        class="classSelect ml-3"
                        @click="handleClick"
                        @keypress="handleClick"
                    >
                        <div>Phổ thông</div>
                        <div class="d-none d-sm-block d-md-none price new">
                            {{ formatter(1812330 * (90 / 100)) }}
                        </div>
                        <div
                            class="pill detailsIcon"
                            :class="{ isDetails: isDetails }"
                        >
                            <span>Chi tiết</span>
                            <i class="fa-regular fa-circle-info"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6 col-lg-4 d-none d-md-block">
                <div class="simpleInfo">
                    <div class="luggageWeight">
                        <div class="luggagePop">
                            <div class="popper">Hành lý lý Hành</div>
                            <div class="pill weight">23 kg</div>
                        </div>
                    </div>
                    <div class="simplePrice">
                        <div class="price replaced">
                            {{ formatter(1812330) }}
                        </div>
                        <div class="price new">
                            {{ formatter(1812330 * (90 / 100)) }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-2 d-none d-lg-block">
                <button class="chooseClass">Chọn</button>
            </div>
            <div class="col-12">
                <transition name="roll">
                    <div class="moreDetails" v-if="isDetails">
                        <div class="row py-2 py-md-3">
                            <div class="col-12 col-md-6 mb-3 pr-sm-0 pr-lg-2">
                                <div class="bullet">
                                    <div class="dot">
                                        <i class="fa-solid fa-circle"></i>
                                    </div>
                                    <b> Thông tin chuyến bay </b>
                                </div>
                                <div
                                    class="timeline my-4"
                                    @click="openTime"
                                    @keypress="openTime"
                                >
                                    <div class="timelineContainer first">
                                        <div class="left">
                                            <div class="mx-1">
                                                <p>23:00</p>
                                                <p>20/09/2022</p>
                                            </div>
                                        </div>
                                        <div class="right">
                                            <p>TP.Hồ Chí Minh (SGN)</p>
                                            <p>Tân Sơn Nhất</p>
                                        </div>
                                    </div>
                                    <div class="timelineContainer">
                                        <div class="left">
                                            <div class="mx-1">
                                                <p>1h25m</p>
                                                <p>bay thẳng</p>
                                            </div>
                                        </div>
                                        <div class="right">
                                            <p>VietJet Air</p>
                                            <p>VJ321/ Airbus A320</p>
                                            Phổ thông
                                            <span class="pill filled ml-2">
                                                EE
                                            </span>
                                        </div>
                                    </div>
                                    <div class="timelineContainer last">
                                        <div class="left">
                                            <div class="mx-1">
                                                <p>00:25</p>
                                                <p>21/09/2022</p>
                                            </div>
                                        </div>
                                        <div class="right">
                                            <p>Đà Nẵng (DAD)</p>
                                            <p>Đà Nẵng</p>
                                        </div>
                                    </div>
                                    <div class="circle blue-from"></div>
                                    <div class="circle blue-to"></div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="bullet">
                                    <div class="dot">
                                        <i class="fa-solid fa-circle"></i>
                                    </div>
                                    <div class="header">Thông tin vé</div>
                                    <div class="priceDetails">
                                        <div>Người lớn:</div>
                                        <div>94.000</div>
                                        <div>VND</div>
                                    </div>
                                    <div class="priceDetails">
                                        <div>Thuế và phí:</div>
                                        <div>563.000</div>
                                        <div>VND</div>
                                    </div>
                                    <div class="priceDetails">
                                        <div>Phí dịch vụ:</div>
                                        <div>365.000</div>
                                        <div>VND</div>
                                    </div>
                                    <div class="priceDetails total">
                                        <div>Tổng tiền:</div>
                                        <div>1.000.000</div>
                                        <div>VND</div>
                                    </div>
                                </div>
                                <div class="bullet">
                                    <div class="dot">
                                        <i class="fa-solid fa-circle"></i>
                                    </div>
                                    <div class="header">Thông tin khác</div>
                                    <div class="otherDetails">
                                        <div class="icon">
                                            <img
                                                src="@/assets/SVGs/fluent_luggage-16-regular.svg"
                                                alt="luggage"
                                            />
                                        </div>
                                        <div>
                                            Hành lý xách tay 7kg. Hành lý ký gửi
                                            0 kiện (0kg/kiện).
                                        </div>
                                    </div>
                                    <div class="otherDetails">
                                        <div class="icon">
                                            <img
                                                src="@/assets/SVGs/carbon_ticket.svg"
                                                alt="ticket"
                                            />
                                        </div>
                                        <div>
                                            Phí đổi vé 378.000VND và chênh lệch
                                            tiền vé (nếu có), thời hạn 3h so với
                                            giờ khởi hành.
                                        </div>
                                    </div>
                                    <div class="otherDetails">
                                        <div class="icon">
                                            <img
                                                src="@/assets/SVGs/carbon_no-ticket.svg"
                                                alt="ticket"
                                            />
                                        </div>
                                        <div style="color: #d72815">
                                            Không hoàn vé
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<style scoped>
.circle {
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 50%;
    top: 50%;
}

.pill {
    border-radius: 222px;
    text-align: center;
    width: fit-content;
    padding: 3px 15px;
    border: 1px solid rgba(3, 151, 255, 1);
    color: rgba(3, 151, 255, 1);
    margin: auto;
    min-width: 65px;
}

.filled {
    background-color: rgba(3, 151, 255, 1);
    color: white;
}
.detailsIcon {
    margin: 0;
    background-color: #f9faff;
    border: none;
    color: #575773;
    transition: all 0.2s ease;
    cursor: pointer;
}
.detailsIcon span {
    margin-right: 10px;
}
.detailsIcon.isDetails {
    background-color: #dbdbe7;
    /* color: #f9faff; */
}

.triangle {
    font-size: 10px;
    display: inline-block;
    transform: rotate(180deg);
    transition: all 0.3s ease;
}

.rotated {
    transform: translateY(20%);
}
.classSelectWrapper {
    display: flex;
    height: 100%;
}
.classAcro {
    font-weight: 700;
}
.classSelect {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.simpleInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}
.luggageWeight {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.luggagePop {
    position: relative;
    cursor: default;
}
.luggagePop .popper {
    position: absolute;
    background-color: white;
    padding: 0 10px;
    border-radius: 6px;
    bottom: 130%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    visibility: hidden;
    box-shadow: 0px 3px 10px 1px rgba(199, 198, 214, 0.2);
}
.popper::after {
    content: '';
    position: absolute;
    border: 5px solid transparent;
    border-color: white transparent transparent transparent;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
}
.luggagePop:hover .popper {
    visibility: visible;
}

.weight {
    border: none;
    background: rgba(3, 151, 255, 0.1);
}
.simplePrice {
    text-align: end;
}
.price {
    font-weight: 600;
}
.replaced {
    text-decoration: line-through;
    font-weight: 500;
    font-size: 12px;
}
.new {
    font-size: 18px;
    color: rgba(3, 151, 255, 1);
}
.chooseClass {
    color: white;
    border-radius: 98px;
    background-color: rgba(3, 151, 255, 1);
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
}
.classesToggle {
    text-align: end;
    justify-content: flex-end;
    display: flex;
    align-items: center;
    padding-top: 10px;
    cursor: pointer;
}
.moreDetails {
    overflow: hidden;
    max-height: 1500px;
    padding: 0px 15px;
    margin-top: 15px;
}
.roll-leave-active,
.roll-enter-active {
    transition: all 0.4s ease;
}
.roll-leave-to,
.roll-enter {
    opacity: 0;
    max-height: 0;
    margin: 0;
}
.bullet {
    position: relative;
    padding-left: 10px;
    margin-top: 30px;
}
.bullet .dot {
    display: none;
    position: absolute;
    color: rgba(3, 151, 255, 1);
    font-size: 12px;
    top: 3px;
    left: 10px;
}
.bullet .header {
    font-weight: 600;
}
.timeline {
    position: relative;
}
.timeline::after {
    content: '';
    position: absolute;
    width: 1px;
    background-color: rgba(3, 151, 255, 1);
    top: 0;
    bottom: 0;
    left: 10px;
    transform: translateX(-50%);
}
.timelineContainer {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-left: 20px;
    overflow: hidden;
    padding-bottom: 10px;
}
.timelineContainer p {
    margin-bottom: 0px;
}
.timelineContainer p:last-of-type {
    color: rgba(148, 148, 176, 1);
    margin-bottom: 0px;
}
.first {
    transform: translateY(-20%);
}
.last {
    transform: translateY(85%);
}

.left {
    text-align: center;
    border-radius: 9px;
    flex-shrink: 0;
    overflow: hidden;
    transition: max-width 0.2s ease;
    max-width: v-bind('`${leftMaxWidth}px`');
}
.right {
    padding-left: 15px;
    flex-shrink: 0;
}
.blue-from {
    left: 10px;
    top: -4px;
    transform: translate(-50%, -50%);
    border-color: rgba(3, 151, 255, 1);
}
.blue-to {
    left: 10px;
    top: 100%;
    transform: translateX(-50%);
    border-color: rgba(3, 151, 255, 1);
    background-color: rgba(3, 151, 255, 1);
}

.header {
    font-weight: 600;
    position: relative;
    margin-bottom: 20px;
}
.header::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: rgba(87, 87, 115, 1);
    right: 0;
    top: 100%;
}
.priceDetails {
    display: flex;
    margin: 8px 0;
}
.priceDetails div:nth-child(2) {
    flex-grow: 1;
    text-align: end;
}
.priceDetails div:nth-child(3) {
    margin: 0 5px;
}
.priceDetails.total {
    font-weight: 600;
}
.otherDetails {
    display: flex;
    padding-right: 5px;
    margin: 20px 0;
}
.otherDetails .icon {
    width: 30px;
    margin-right: 10px;
}

@media only screen and (min-width: 576px) {
    .bullet {
        padding-left: 30px;
    }
    .bullet .dot {
        display: block;
    }

    .timeline::after {
        left: 35%;
    }
    .timelineContainer {
        justify-content: center;
        align-items: flex-start;
        margin-left: 0px;
        margin-bottom: 50px;
    }
    .timelineContainer p {
        margin-bottom: 10px;
    }
    .left {
        width: 35%;
        text-align: end;
        padding-right: 15px;
        display: block;
        background-color: transparent !important;
        max-width: 200px;
    }
    .right {
        width: 65%;
        padding-left: 15px;
        min-width: none;
    }
    .blue-from {
        left: 35%;
        top: -4px;
        transform: translate(-50%, -50%);
    }
    .blue-to {
        left: 35%;
        top: 100%;
        transform: translateX(-50%);
    }

    .header::after {
        width: 50%;
        height: 1px;
        background-color: rgba(87, 87, 115, 1);
        right: 0;
        top: 50%;
    }

    .priceDetails div:nth-child(3) {
        margin: 0 20px;
    }

    .otherDetails {
        padding-right: 25px;
    }
    .otherDetails .icon {
        margin-right: 25px;
    }
}
@media only screen and (max-width: 375px) {
    .priceDetails {
        font-size: 14px;
    }
    .otherDetails {
        font-size: 14px;
    }
}
@media only screen and (min-width: 992px) {
    .bullet {
        padding-left: 60px;
    }
}
</style>
