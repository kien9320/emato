<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
    name: 'SaleAdverts',
    props: ['adsNumber'],
    data() {
        return {
            settingCarousel: {
                autoplay: true,
                dots: true,
                dotsClass: 'slick-dots custom-dot-class-discount',
                edgeFriction: 0.35,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            },
        };
    },
    computed: {
        offset() {
            if (this.adsNumber === 3) return 0;
            return 3;
        },
        adSizes() {
            if (this.adsNumber === 3) {
                return { 'col-xl-4': true };
            }
            return { 'col-xl-6': true, 'col-lg-6': true };
        },
    },
    components: {
        slick: VueSlickCarousel,
    },
};
</script>

<template>
    <div class="container py-4">
        <div class="row">
            <div class="col-12">
                <slick v-bind="settingCarousel">
                    <div v-for="n in adsNumber" :key="n">
                        <div class="advert">
                            <img
                                :src="
                                    require(`@/assets/adverts${n + offset}.jpg`)
                                "
                                alt="adverts"
                            />
                            <div class="anim hor"></div>
                            <div class="anim ver"></div>
                        </div>
                    </div>
                </slick>
            </div>
        </div>
    </div>
</template>

<style scoped>
.advert img {
    object-fit: contain;
    width: 100%;
    height: 200px;
}
.advert {
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease;
    margin: 0px 5px;
}
.advert:hover .hor {
    transform: scaleX(0);
    background-color: rgba(255, 255, 255, 0.2);
}
.advert:hover .ver {
    transform: scaleY(0);
    background-color: rgba(255, 255, 255, 0.2);
}
.anim {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: all 0.8s ease;
}
</style>
