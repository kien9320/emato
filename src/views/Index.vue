<template>
    <Background>
        <Header></Header>
        <router-view />
        <Footer></Footer>
        <ScrollTop></ScrollTop>
    </Background>
</template>

<script>
import Background from '@/components/layouts/Background.vue';
import Header from '@/components/layouts/Header.vue';
import Footer from '@/components/layouts/Footer.vue';
import ScrollTop from '@/components/layouts/ScrollTop.vue';

export default {
    name: 'IndexWithLayout',
    components: { Background, Footer, ScrollTop, Header },
};
</script>

<style>
.grey-bg {
    background-color: #f5f5f5;
}
</style>
