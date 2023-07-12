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
                <div class="breakcumb-item ml-2">
                    <router-link :to="{ name: 'FindHotel' }" class="d-block">
                        <div class="router-icon mr-3">
                            <img src="@/assets/Hotel/Detail/left.png" alt="">
                        </div>
                        Find Hotel
                    </router-link>
                </div>
                <div class="breakcumb-item ml-2">
                    <div class="d-block">
                        > {{ $route.name }}
                    </div>
                </div>
            </div>
        </div>
    </b-container>
</template>

<style lang="scss" scoped>
.breakcumb-container {
    .router-icon {
        width: 35px;
        height: 35px;

        img {
            width: 100%;
            object-fit: scale-down;
        }
    }

    .frame-breakcumb {
        margin-bottom: 0;
        padding-top: 35px;
        padding-bottom: 35px;
    }

    .breakcumb-item {
        font-family: 'Inter';
        font-style: normal;
        font-size: 16px;
        line-height: 140%;
        color: #999;
        line-height: 27px;

        a {
            display: flex !important;
            align-items: center;
            font-family: 'Inter';
            font-style: normal;

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
