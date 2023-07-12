<template>
    <div class="article">
        <break-cumb-vue />
        <b-container>
            <b-row class="main-article-row">
                <b-col lg="3" md="12" cols="12">
                    <search-article />
                </b-col>
                <b-col lg="9" md="12" cols="12">

                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import BreakCumbVue from '@/components/Article/BreakCumb.vue';
import SearchArticle from '@/components/Article/SearchArticle.vue';
export default {
    name: 'Article',
    components: {

        BreakCumbVue,
        SearchArticle,
    },
};
</script>
<style lang="scss">
.article {
    font-family: 'Poppins';
    background: #f5f5f5;

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