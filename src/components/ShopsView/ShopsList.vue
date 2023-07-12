<!-- eslint-disable import/no-dynamic-require -->
<!-- eslint-disable global-require -->
<script>
export default {
    name: 'ShopsList',
    data() {
        return {
            itemsPerPage: 8,
            currentPage: 1,
            visibleButton: 9,
        };
    },
    computed: {
        maxVisibleButtons() {
            return Math.min(this.totalPages, this.visibleButton);
        },
        items() {
            const nItems = 300;
            const items = [];
            for (let i = 1; i <= nItems; i += 1) {
                items.push({
                    // eslint-disable-next-line prettier/prettier
                    img: require(`@/assets/Shops/shopsItem${i - 15 * (Math.floor((i - 1) / 15))}.jpg`),
                    tit: 'Lost kitten HD',
                    follows: 2177972,
                    shop: 'SHOPEE',
                });
            }

            return items;
        },
        itemsToShow() {
            const startItems = this.itemsPerPage * (this.currentPage - 1);
            const endItems = this.currentPage * this.itemsPerPage;
            return this.items.slice(startItems, endItems);
        },
        // totalPages() {
        //     return Math.ceil(this.items.length / this.itemsPerPage);
        // },
        // startPage() {
        //     if (this.currentPage - 1 - this.maxVisibleButtons / 2 < 0) {
        //         return 1;
        //     }
        //     if (
        //         this.currentPage + this.maxVisibleButtons / 2 >
        //         this.totalPages
        //     ) {
        //         return this.totalPages - this.maxVisibleButtons + 1;
        //     }
        //     return this.currentPage - Math.floor(this.maxVisibleButtons / 2);
        // },
        // pages() {
        //     const range = [];

        //     for (
        //         let i = this.startPage;
        //         i <=
        //         Math.min(
        //             this.startPage + this.maxVisibleButtons - 1,
        //             this.totalPages,
        //         );
        //         i += 1
        //     ) {
        //         range.push({
        //             name: i,
        //             isDisabled: i === this.currentPage,
        //         });
        //     }

        //     return range;
        // },
        // isInFirstPage() {
        //     return this.currentPage === 1;
        // },
        // isInLastPage() {
        //     return this.currentPage === this.totalPages;
        // },
    },
    // methods: {
    //     onClickPrevPage() {
    //         this.currentPage -= 1;
    //     },
    //     onClickPage(page) {
    //         this.currentPage = page;
    //     },
    //     onClickNextPage() {
    //         this.currentPage += 1;
    //     },
    // },
};
</script>

<template>
    <div class="container">
        <div class="row py-4">
            <div
                class="col-lg-3 col-md-4 col-sm-6 col-12 py-2"
                v-for="(item, index) in itemsToShow"
                :key="item.tit + index"
            >
                <div class="shopsWrapper">
                    <div class="imgWrapper">
                        <img :src="item.img" alt="shops" />
                    </div>
                    <div class="textWrapper">
                        <div class="tit">
                            {{ item.tit }}
                        </div>
                        <div class="follows">Theo dõi:{{ item.follows }}</div>
                        <div class="shopsDomain">Nơi bán: {{ item.shop }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <b-pagination
                v-model="currentPage"
                :total-rows="items.length"
                :per-page="itemsPerPage"
                first-number
                last-number
                limit="9"
            ></b-pagination>
            <!-- <ul class="pagination">
                <li class="pagination-item">
                    <button
                        type="button"
                        @click="onClickPrevPage"
                        :disabled="isInFirstPage"
                        :class="{ isDisabled: isInFirstPage }"
                    >
                        Previous
                    </button>
                </li>
                <li
                    v-for="page in pages"
                    :key="page.name"
                    class="pagination-item"
                >
                    <button
                        type="button"
                        :disabled="page.isDisabled"
                        @click="onClickPage(page.name)"
                        :class="{ active: page.isDisabled }"
                    >
                        {{ page.name }}
                    </button>
                </li>
                <li class="pagination-item">
                    <button
                        type="button"
                        @click="onClickNextPage"
                        :disabled="isInLastPage"
                        :class="{ isDisabled: isInLastPage }"
                    >
                        Next
                    </button>
                </li>
            </ul> -->
        </div>
    </div>
</template>

<style scoped lang="scss">
.shopsWrapper {
    background-color: white;

    @media (max-width: 575px) {
        width: 85%;
        margin: 0 auto;
    }
}

.imgWrapper {
    height: 180px;
}

img {
    width: 100%;
    object-fit: fill;
    height: 100%;
}

.textWrapper {
    padding: 15px;
    font-size: 14px;
    color: #6c757d;
}

.tit {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 18px;
    color: black;
    margin-bottom: 10px;

    @media (max-width: 991px) {
        font-size: 16px;
    }
}

div[class^='col'] {
    padding-left: 10px;
    padding-right: 10px;
}

div[class^='row'] {
    margin-right: -10px;
    margin-left: -10px;
}

.pagination {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
}

.pagination-item {
    display: inline-block;
    margin: 0 2px;
}

.pagination-item:hover button {
    background-color: gainsboro;
    transition: all 0.2s ease;
}

.pagination-item button {
    outline: none;
    background-color: white;
    border: 1px solid gainsboro;
    color: #0a58ca;
    height: 40px;
    min-width: 40px;
}

.pagination-item .active {
    background-color: #0a58ca !important;
    color: white;
}

.pagination-item .isDisabled {
    color: #6c757d;
}
</style>
