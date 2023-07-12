<template>
    <div class="find-hotel">
        <nav-hotel-finding />
        <b-container class="mt-4">
            <b-row class="mt-4">
                <b-col lg="3" md="12" class="frame-hotel-finding">
                    <!-- <menu-hotel-finding /> -->
                    <filter-hotel-finding />
                </b-col>
                <div
                    class="backdrop"
                    :class="{ activeBackdrop: showFilter }"
                    @click="showFilter = false"
                ></div>
                <div
                    class="toggleFilter d-xl-none"
                    :class="{ filterOn: showFilter }"
                >
                    <div class="forOverflow">
                        <filter-hotel-finding></filter-hotel-finding>
                    </div>
                    <div
                        class="flap"
                        @click="handleClick"
                        @keypress="handleClick"
                    ></div>
                </div>
                <b-col xl="9" lg="12">
                    <hotel-item />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import NavHotelFinding from '@/components/HotelFinding/NavHotelFinding.vue';
import HotelItem from '@/components/HotelFinding/HotelItem.vue';
import FilterHotelFinding from '@/components/HotelFinding/FilterHotelFinding.vue';
export default {
    name: 'Article',
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
    components: {
        NavHotelFinding,
        HotelItem,
        FilterHotelFinding,
    },
};
</script>
<style lang="scss">
.find-hotel {
    font-family: 'Poppins';
    background: #ffff;
    padding-bottom: 5rem;

    .frame-hotel-finding {
        display: block;

        @media (max-width: 1200px) {
            display: none;
        }
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
        border-color: rgba(3, 151, 255, 0.5) rgba(3, 151, 255, 0.5)
            rgba(3, 151, 255, 0.5) transparent;
        transform: translateX(-50%);
        z-index: -1;
    }

    .forOverflow {
        overflow-y: scroll;
        height: 100vh;
    }

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 28px;
        color: #888888;
        margin: 0;
    }
}
</style>
