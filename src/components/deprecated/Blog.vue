<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable global-require -->
<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
    name: 'BloG',
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
    components: {
        slick: VueSlickCarousel,
    },
    methods: {
        clickRight() {
            this.$refs.myCarousel.next();
        },
        clickLeft() {
            this.$refs.myCarousel.prev();
        },
    },
};
</script>

<template>
    <div class="container py-4">
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between withBotBorder">
                    <div class="title"><b>Sản phẩm</b> mới nhất</div>
                    <div class="float-right">
                        <button @click="clickLeft">
                            <i class="fa-regular fa-angle-left" />
                        </button>
                        <button @click="clickRight">
                            <i class="fa-regular fa-angle-right" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <slick v-bind="slickSettings" ref="myCarousel">
                    <div v-for="item in items" :key="item">
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
            </div>
        </div>
    </div>
</template>

<style scoped>
.withBotBorder {
    border-bottom: 1px solid #ebebeb;
}
.title {
    position: relative;
    font-size: 24px;
}
.title::after {
    position: absolute;
    content: '';
    bottom: -1px;
    left: 0;
    height: 2px;
    width: 50px;
    background: #43c7ff;
}
button {
    border: none;
    background-color: transparent;
}
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
