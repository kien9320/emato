<!-- eslint-disable global-require -->
<script>
import VueSlickCarousel from 'vue-slick-carousel';
import SectionHeader from '@/components/SectionHeader.vue';

export default {
    name: 'NewBlog',
    data() {
        return {
            slickSettings: {
                arrows: false,
                autoplay: true,
                slidesToShow: 4,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                ],
            },
            items: [
                {
                    img: require(`@/assets/blog1.jpg`),
                    tit: 'How to summon your hero',
                    date: '25-04-2022',
                    desc: 'Người này tự giới thiệu là trợ lý bác sĩ, giải thích với chị Minh rằng hầu như ai cũng bị tổn thương phổi sau khỏi Covid. ',
                },
                {
                    img: require(`@/assets/blog2.png`),
                    tit: '18 triệu chữa longCovid',
                    date: '25-04-2022',
                    desc: 'Người này tự giới thiệu là trợ lý bác sĩ, giải thích với chị Minh rằng hầu như ai cũng bị tổn thương phổi sau khỏi Covid. ',
                },
                {
                    img: require(`@/assets/blog2.png`),
                    tit: 'How to summon your hero',
                    date: '25-04-2022',
                    desc: 'Người này tự giới thiệu là trợ lý bác sĩ, giải thích với chị Minh rằng hầu như ai cũng bị tổn thương phổi sau khỏi Covid. ',
                },
                {
                    img: require(`@/assets/blog2.png`),
                    tit: 'How to summon your hero',
                    date: '25-04-2022',
                    desc: 'Người này tự giới thiệu là trợ lý bác sĩ, giải thích với chị Minh rằng hầu như ai cũng bị tổn thương phổi sau khỏi Covid. ',
                },
                {
                    img: require(`@/assets/blog2.png`),
                    tit: 'How to summon your hero',
                    date: '25-04-2022',
                    desc: 'Người này tự giới thiệu là trợ lý bác sĩ, giải thích với chị Minh rằng hầu như ai cũng bị tổn thương phổi sau khỏi Covid. ',
                },
            ],
        };
    },
    methods: {
        clickRight() {
            this.$refs.myCarousel.next();
        },
        clickLeft() {
            this.$refs.myCarousel.prev();
        },
    },
    components: { SectionHeader, slick: VueSlickCarousel },
};
</script>

<template>
    <SectionHeader withArrows @click-right="clickRight" @click-left="clickLeft">
        <template #sectionTitle><b>Tin tức</b> nổi bật</template>
        <template #carousel>
            <slick v-bind="slickSettings" ref="myCarousel">
                <div v-for="(item, index) in items" :key="index">
                    <div class="blogWrapper">
                        <div>
                            <div class="imgWrapper">
                                <img :src="item.img" alt="item" />
                            </div>
                        </div>
                        <div class="px-2">
                            <div class="titWrapper">
                                {{ item.tit }}
                            </div>
                            <div class="dateWrapper">
                                Ngày đăng: <span>{{ item.date }}</span>
                            </div>
                            <div class="descWrapper">
                                {{ item.desc }}
                            </div>
                        </div>
                    </div>
                </div>
            </slick>
        </template>
    </SectionHeader>
</template>

<style scoped>
img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    max-height: 188px;
}
.blogWrapper {
    margin: 10px;
    background-color: white;
    height: 100%;
}
.imgWrapper {
    margin: 10px;
}
.titWrapper {
    margin: 10px 0;
}
.dateWrapper {
    margin: 10px 0;
}
span {
    color: #fcb700;
}
.descWrapper {
    height: 100px;
    overflow: hidden;
}
</style>
