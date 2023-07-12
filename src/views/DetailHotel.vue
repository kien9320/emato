<template>
    <div class="detail-hotel">
        <nav-hotel-finding />
        <break-cumb-hotel-vue />
        <b-container class="main-detail-hotel-container">
            <main-detail-hotel />
        </b-container>
        <convenient-vue />
        <AnotherRoom />
        <customer-feedback />
    </div>
</template>

<script>
import NavHotelFinding from '@/components/HotelFinding/NavHotelFinding.vue';
import MainDetailHotel from '@/components/DetailHotel/MainDetailHotel.vue';
import ConvenientVue from '@/components/DetailHotel/Convenient.vue';
import AnotherRoomVue from '@/components/DetailHotel/AnotherRoom.vue'
import AnotherRoom from '@/components/DetailHotel/AnotherRoom.vue';
import CustomerFeedback from '@/components/DetailHotel/CustomerFeedback.vue';
import BreakCumbHotelVue from '@/components/DetailHotel/BreakCumbHotel.vue';
export default {
    name: 'Article',
    components: {
        BreakCumbHotelVue,
        NavHotelFinding,
        MainDetailHotel,
        ConvenientVue,
        AnotherRoomVue,
        AnotherRoom,
        CustomerFeedback,
    },
};
</script>
<style lang="scss">
.detail-hotel {
    font-family: 'Poppins';
    background: #ffff;
    padding-bottom: 2rem;

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 28px;
        color: #888888;
        margin: 0;
    }

    .main-detail-hotel-container {
        margin-top: -3rem;
    }
}
</style>