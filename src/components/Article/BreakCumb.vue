<script>
export default {
    data() {
        return {
            searchValue: '',
        };
    },
};
</script>

<template>
    <b-container class="breakcumb-container mt-4">
        <div class="article-detail-header">
            <div class="d-flex flex-wrap frame-breakcumb mt-2 align-items-center">
                <div class="breakcumb-item">
                    <router-link :to="{ name: 'Home' }" class="d-block">
                        Trang chủ
                    </router-link>
                </div>
                <div class="breakcumb-item ml-2">
                    > tin tức
                </div>
            </div>
        </div>
    </b-container>
</template>
<style lang="scss" scoped>
.breakcumb-container {

    .frame-breakcumb {
        margin-bottom: 0;
        padding-top: 35px;
        padding-bottom: 35px;
    }

    .breakcumb-item {
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 140%;
        color: #999;

        line-height: 27px;

        a {
            font-family: 'Work Sans';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 22px;
            color: #43c7ff;
            text-decoration: none;
        }

        &:active {
            color: #43c7ff;
            text-decoration: none;

        }
    }
}
</style>
