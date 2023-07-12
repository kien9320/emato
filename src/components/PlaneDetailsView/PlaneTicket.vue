<script>
import TicketClasses from './PlaneTicket/TicketClasses.vue';

export default {
    name: 'PlaneTicket',
    data() {
        return {
            formatter: new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format,
            isClasses: false,
            classes: [],
        };
    },
    components: {
        TicketClasses,
    },
    props: {
        flight: Object,
    },
    computed: {},
    methods: {
        handleClick() {
            this.isClasses = !this.isClasses;
            if (this.isClasses) {
                this.classes = this.flight.classes;
            } else {
                this.classes = this.flight.classes.slice(0, 1);
            }
        },
        onDetails(index) {
            const { length } = this.$refs.ticketClass;
            for (let i = 0; i < length; i += 1) {
                if (i !== index)
                    this.$refs.ticketClass[i].$data.isDetails = false;
            }
        },
    },
    mounted() {
        this.classes = this.flight.classes.slice(0, 1);
    },
    updated() {},
};
</script>

<template>
    <div class="container ticket">
        <div class="row py-0 py-md-4">
            <div class="col-12 col-md-4 col-lg-4 pr-xl-0">
                <div class="carrierDetailsWrapper">
                    <img
                        class="airLogo px-1 px-sm-2"
                        :src="flight.airline.icon"
                        alt="airline"
                    />
                    <div class="carrierDetails d-flex d-md-block">
                        <div class="pr-1 mb-0 mb-sm-2">
                            {{ flight.airline.label }}
                        </div>
                        <span class="carrier">{{ flight.carrier }}</span>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-8 col-lg-6">
                <div class="row">
                    <div class="col-auto col-sm-3">
                        <div class="time">{{ flight.time.takeoff }}</div>
                        <div class="pill filled">
                            {{ flight.places.from }}
                        </div>
                    </div>
                    <div class="col col-sm-6 px-0 px-sm-3">
                        <div class="simpleTimeline">
                            <div class="box upper">
                                {{ flight.time.duration }}
                            </div>
                            <div class="box lower">bay thẳng</div>
                            <div class="circle from"></div>
                            <div class="circle to"></div>
                        </div>
                    </div>
                    <div class="col-auto col-sm-3">
                        <div class="time">{{ flight.time.arrival }}</div>
                        <div class="pill filled">
                            {{ flight.places.destination }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-2 d-none d-lg-block">
                <div class="perksWrapper">
                    <div class="perk">Giá rẻ nhất</div>
                </div>
            </div>
        </div>
        <div class="position-relative">
            <transition-group name="list">
                <TicketClasses
                    v-for="(classe, index) in classes"
                    :key="classe.id"
                    ref="ticketClass"
                    :classe="classe"
                    @details="onDetails(index)"
                ></TicketClasses>
            </transition-group>
            <div class="withBotBorder" key="yay"></div>
            <div
                class="classesToggle"
                key="wow"
                @click="handleClick"
                @keypress="handleClick"
            >
                <span v-if="!isClasses" class="mr-4">
                    Xem thêm hạng vé & giá vé
                </span>
                <span v-else class="mr-4">Rút gọn</span>
                <div class="triangle d-block" :class="{ rotated: isClasses }">
                    <i class="fa-solid fa-triangle"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.ticket {
    font-weight: 500;
    font-family: 'Inter';
    color: rgba(87, 87, 115, 1);
    padding: 30px 10px;
}

.airLogo {
    margin-right: 10px;
    width: 44px;
    height: 44px;
    border: 1px solid rgba(219, 219, 231, 1);
    border-radius: 50%;
    object-fit: scale-down;
}

.carrierDetailsWrapper {
    display: flex;
    align-items: center;
}
.carrierDetails {
    font-size: 14px;
}

.carrier {
    color: rgba(148, 148, 176, 1);
}

.time {
    text-align: center;
    margin-bottom: 8px;
}

.simpleTimeline {
    position: relative;
}

.simpleTimeline::after {
    content: '';
    position: absolute;
    height: 1px;
    right: 0;
    left: 0;
    background-color: black;
    top: 50%;
    transform: translateY(-50%);
}

.box {
    padding: 5px 0px;
    text-align: center;
    height: 50%;
}

.from {
    left: -4px;
    transform: translate(-50%, -50%);
}

.to {
    background-color: black;
    right: -4px;
    transform: translate(50%, -50%);
}

.perksWrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
}

.perk {
    border: 1px solid rgba(3, 151, 255, 1);
    color: rgba(3, 151, 255, 1);
    text-align: center;
    max-width: fit-content;
    font-size: 12px;
    padding: 0.3em 1em;
    margin-bottom: 5px;
}

.list-move {
    transition: all 0.3s ease;
}

.list-enter,
.list-leave-to {
    max-height: 0;
    opacity: 0;
}

.list-enter-to,
.list-leave {
    max-height: 100px;
}

.list-leave-active,
.list-enter-active {
    transition: all 0.3s ease;
}

.withBotBorder {
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(87, 87, 115, 1);
}

.classesToggle {
    text-align: end;
    justify-content: flex-end;
    display: flex;
    align-items: center;
    padding-top: 10px;
    cursor: pointer;
}

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

.triangle {
    font-size: 10px;
    display: inline-block;
    transform: rotate(180deg);
    transition: all 0.3s ease;
}

.rotated {
    transform: translateY(20%);
}
@media only screen and (min-width: 576px) {
    .carrierDetails {
        font-size: 16px;
    }
    .ticket {
        padding: 30px 45px;
    }
}
</style>
