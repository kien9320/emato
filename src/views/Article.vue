<template>
    <div class="article">
        <break-cumb-vue />
        <b-container>
            <b-row class="main-article-row">
                <b-col lg="3" class="d-none d-lg-block">
                    <search-article />
                </b-col>
                <div class="backdrop" :class="{ activeBackdrop: showFilter }" @click="showFilter = false"
                    @keypress="console.log('nani?!')"></div>
                <div class="toggleFilter d-xl-none" :class="{ filterOn: showFilter }">
                    <div class="forOverflow">
                        <search-article />
                    </div>
                    <div class="flap" @click="handleClick" @keypress="handleClick"></div>
                </div>
                <b-col lg="9" md="12" cols="12">
                    <article-item />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import BreakCumbVue from '@/components/Article/BreakCumb.vue';
import ArticleItem from '@/components/Article/ArticleItem.vue'
import SearchArticle from '@/components/Article/SearchArticle.vue';
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
        ArticleItem,
        BreakCumbVue,
        SearchArticle,
    },
};
</script>
<style lang="scss">
.article {
    font-family: 'Poppins';
    background: #f5f5f5;

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
        z-index: 2;
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
        border-color: rgba(3, 151, 255, 0.5) rgba(3, 151, 255, 0.5) rgba(3, 151, 255, 0.5) transparent;
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