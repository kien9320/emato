<template>
    <!-- <Background>
        <Header></Header> -->
    <div>
        <MainProductSlider></MainProductSlider>
        <Features></Features>
        <SaleAdverts :adsNumber="3"></SaleAdverts>
        <DiscountSec></DiscountSec>
        <NewHotSec></NewHotSec>
        <!-- <HotSec></HotSec> -->
        <SaleAdverts :adsNumber="2"></SaleAdverts>
        <NewNewSec></NewNewSec>
        <!-- <NewSec></NewSec> -->
        <SaleAdverts :adsNumber="3"></SaleAdverts>
        <NewBlog></NewBlog>
        <!-- <Blog></Blog> -->
        <MailSubscription></MailSubscription>
    </div>
    <!-- <Footer></Footer> -->
    <!-- <ScrollTop></ScrollTop>
    </Background> -->
</template>

<script>
// import FooterVue from '@/components/IndexView/layouts/Footer.vue';
// import HeaderVue from '@/components/IndexView/layouts/Header.vue';
// import Background from '@/components/IndexView/layouts/Background.vue';
// import HotSec from '@/components/IndexView/HotSec.vue';
// import NewSec from '@/components/IndexView/NewSec.vue';
// import ScrollTop from '@/components/IndexView/ScrollTop.vue';
// import Blog from '@/components/IndexView/Blog.vue';
import MainProductSlider from '@/components/IndexView/MainProductSlider.vue';
import SaleAdverts from '@/components/IndexView/SaleAdverts.vue';
import Features from '@/components/IndexView/Features.vue';
import DiscountSec from '@/components/IndexView/DiscountSec.vue';
import MailSubscription from '@/components/IndexView/MailSubscription.vue';
import NewNewSec from '@/components/IndexView/NewNewSec.vue';
import NewHotSec from '@/components/IndexView/NewHotSec.vue';
import NewBlog from '@/components/IndexView/NewBlog.vue';

export default {
    name: 'HomeView',
    components: {
        // Footer: FooterVue,
        // Header: HeaderVue,
        // Background,
        MainProductSlider,
        Features,
        SaleAdverts,
        DiscountSec,
        MailSubscription,
        NewNewSec,
        NewHotSec,
        NewBlog,
    },
};
</script>

<style>
.grey-bg {
    background-color: #f5f5f5;
}
</style>
