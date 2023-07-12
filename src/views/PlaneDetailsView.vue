<script>
import PlaneFilter from '@/components/PlaneDetailsView/PlaneFilter.vue';
import PlaneTicket from '@/components/PlaneDetailsView/PlaneTicket.vue';
import PlaneRequisite from '@/components/PlaneDetailsView/PlaneRequisite.vue';

export default {
    name: 'PlaneDetails',
    data() {
        return {
            showFilter: false,
        };
    },
    methods: {
        handleClick() {
            this.showFilter = !this.showFilter;
        },
    },
    computed: {
        flights() {
            return this.$store.getters['plane/ReturnFlights'];
        },
    },
    created() {
        this.$store.commit('plane/INIT_FLIGHTS', 10);
    },
    components: { PlaneFilter, PlaneTicket, PlaneRequisite },
};
</script>

<template>
    <div class="background">
        <PlaneRequisite></PlaneRequisite>
        <div class="container py-3">
            <div class="row">
                <div class="col-3 d-none d-xl-block filter">
                    <PlaneFilter></PlaneFilter>
                </div>
                <div class="col-12 col-xl-9">
                    <div
                        class="planeTicketWrapper"
                        v-for="flight in flights"
                        :key="flight.id"
                    >
                        <PlaneTicket
                            :flight="flight"
                            tabindex="0"
                        ></PlaneTicket>
                    </div>
                </div>
                <div
                    class="backdrop"
                    :class="{ activeBackdrop: showFilter }"
                    @click="showFilter = false"
                    @keypress="console.log('nani?!')"
                ></div>
                <div
                    class="toggleFilter d-xl-none"
                    :class="{ filterOn: showFilter }"
                >
                    <div class="forOverflow">
                        <PlaneFilter></PlaneFilter>
                    </div>
                    <div
                        class="flap"
                        :class="{ activeFlap: showFilter }"
                        @click="handleClick"
                        @keypress="handleClick"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.background {
    background-color: #f9faff;
}
.filter {
    padding-left: 0;
}
.planeTicketWrapper {
    background: #f9faff;
}
.planeTicketWrapper:nth-child(odd) {
    background: rgba(3, 151, 255, 0.05);
}
.toggleFilter {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    transform: translateX(-100%);
    overflow: visible;
    z-index: 100;
    transition: all 0.2s ease;
}
.filterOn {
    transform: translateX(0);
}
.flap {
    position: absolute;
    top: calc(50% - 30px);
    left: 100%;
    width: 20px;
    height: 100px;
    border-width: 10px;
    border-radius: 100px;
    border-style: solid;
    /* border-color: rgba(3, 151, 255, 0.5) rgba(3, 151, 255, 0.5)
        rgba(3, 151, 255, 0.5) transparent; */
    border-color: rgba(0, 51, 88, 0.4) rgba(0, 51, 88, 0.4) rgba(0, 51, 88, 0.4)
        transparent;
    transform: translateX(-50%);
    transition: border-color 0.2s ease;
    z-index: -1;
}
.activeFlap {
    border-color: white white white transparent;
}
.forOverflow {
    overflow-y: scroll;
    height: 100vh;
    box-shadow: 0 2px 4px 1px rgba(100, 93, 97, 0.3);
}
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 51, 88, 0.7);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.2s ease;
}
.activeBackdrop {
    opacity: 1;
    z-index: 1;
}
</style>
<style>
.planeTicketWrapper:nth-child(odd) .moreDetails {
    background-color: #f9faff;
}
.planeTicketWrapper .moreDetails {
    background-color: rgba(3, 151, 255, 0.05);
}
.planeTicketWrapper:nth-child(odd) .moreDetails .left {
    background-color: rgba(3, 151, 255, 0.05);
}
.planeTicketWrapper .moreDetails .left {
    background-color: #f9faff;
}
</style>
