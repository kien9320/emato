<script>
import SearchArticle from '@/components/Article/SearchArticle.vue'
import BreakCumbVue from './BreakCumb.vue';
export default {
    name: 'ArticleDetailPage',
    components: {
        SearchArticle,
        BreakCumbVue,
    },
    data() {
        return {
            articles: [
                {
                    id: 1,
                    src: 'article-img.jpg',
                    title: 'How To Summon Your Hero',
                    date: '25-04-2022',
                    category: 'Tin tức mới',
                    des: 'Do you already own a Hero????',
                },
                {
                    id: 2,
                    src: 'article-img.jpg',
                    title: 'How To Summon Your Hero',
                    date: '25-04-2022',
                    category: 'Tin tức mới',
                    des: 'Do you already own a Hero????',
                },
                {
                    id: 3,
                    src: 'article-img.jpg',
                    title: 'How To Summon Your Hero',
                    date: '25-04-2022',
                    category: 'Tin tức mới',
                    des: 'Do you already own a Hero????',
                },
                {
                    id: 4,
                    src: 'article-img.jpg',
                    title: 'How To Summon Your Hero',
                    date: '25-04-2022',
                    category: 'Tin tức mới',
                    des: 'Do you already own a Hero????',
                },
                {
                    id: 5,
                    src: 'article-img.jpg',
                    title: 'How To Summon Your Hero',
                    date: '25-04-2022',
                    category: 'Tin tức mới',
                    des: 'Do you already own a Hero????',
                },
                {
                    id: 6,
                    src: 'article-img.jpg',
                    title: 'How To Summon Your Hero',
                    date: '25-04-2022',
                    category: 'Tin tức mới',
                    des: 'Do you already own a Hero????',
                }
            ],
        };
    },
};
</script>

<template>
    <b-container class="article-item-container">
        <b-row>
            <b-col class="mb-md-4" lg="6" xl="4" cols="12" md="12" sm="12" v-for="(item, idx) in articles" :key="idx">
                <div class="frame-article-item">
                    <router-link :to="{
                        name: 'DetailArticle',
                        params: {
                            title: item.title
                        }
                    }">
                        <div class="img-article-frame">
                            <img class="img-article" :src="require(`@/assets/Article/${item.src}`)">
                        </div>
                    </router-link>
                    <router-link class="article-item-title" :to="{
                        name: 'DetailArticle',
                        params: {
                            title: item.title
                        }
                    }">
                        {{ item.title }}
                    </router-link>
                    <div class="article-date-upload">
                        <p>Ngày đăng <span class="article-date">{{ item.date }}</span></p>
                        <p>Danh mục <span class="ml-2">{{ item.category }}</span></p>
                    </div>
                    <div class="article-item-des-frame">
                        <p>{{ item.des }}</p>
                    </div>
                    <router-link :to="{
                        name: 'DetailArticle',
                        params: {
                            title: item.title
                        }
                    }">
                        <button class="article-btn">
                            Đọc thêm
                        </button>
                    </router-link>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<style lang="scss" scoped>
.article-item-container {
    .article-item-des-frame {
        height: 72px;
        -webkit-line-clamp: 3;
        line-height: 24px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        vertical-align: baseline;
        text-overflow: ellipsis;
    }

    .article-date-upload {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;

        .article-date {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 28px;
            color: #fcb700;
            margin-left: 0.5rem;
        }
    }

    .frame-article-item {
        height: 570px;
        background: #fff;
        padding: 0.75rem;
        position: relative;

        @media (max-width:991px) {
            width: 85%;
            margin: 1rem auto;
        }

        .img-article-frame {
            overflow: hidden;

            .img-article {
                overflow: hidden;
                max-height: 250px;
                width: 100%;
                object-fit: cover;
                margin: 15px auto;


                &:hover {
                    transform: scale(1.2);
                    transition: ease 1s;
                }
            }
        }

        .article-btn {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 12px;
            font-weight: 500;

            background: #f6f6f6;
            border-color: #e6e6e6;
            width: 279px;
            height: 45px;
            line-height: 42px;
            padding: 0 50px;
            border-radius: 30px;
            text-transform: initial;
            z-index: 1;
            text-transform: uppercase;
            border: 2px solid transparent;
            text-align: center;

            @media (max-width: 1400px) {
                width: 90%;
                margin: auto;
            }

            &:hover {
                background: #43c7ff;
                border-color: #43c7ff;
                color: #fff;
                transition: 0.5s;
            }
        }

        .article-item-title {
            font-family: "Open Sans";
            padding-bottom: 6px;
            position: relative;
            font-size: 20px;
            line-height: 28px;
            font-weight: 700;
            color: black;
            height: 60px;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            display: -webkit-box;

            &:hover {
                transition: 0.5s;
                text-decoration: none;
                color: #43c7ff;
            }
        }
    }
}
</style>
