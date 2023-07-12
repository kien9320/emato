<script>
export default {
    name: 'StandoutProduct',
    data() {
        return {
            formatter: new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format,
        };
    },
    props: {
        items: Array,
    },
};
</script>

<template>
    <div class="standout">
        <div class="withBotBorder">
            <div class="title">
                <div class="standoutTitle">Sản phẩm nổi bật</div>
            </div>
        </div>
        <div>
            <div v-for="item in items" :key="item.price">
                <div class="row py-2">
                    <div class="col-6">
                        <div class="imgWrapper">
                            <img
                                class="productImage"
                                :src="item.img"
                                alt="product"
                            />
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="itemTitle">
                            {{ item.name }}
                        </div>
                        <div class="ratingWrapper">
                            <i
                                class="fa-regular fa-star"
                                v-for="n in 5"
                                :key="n"
                            />
                        </div>
                        <div class="priceWrapper">
                            {{ formatter(item.price) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.standout {
    padding: 10px 15px;
    background-color: white;
}
.standoutTitle {
    font-size: 18px;
    font-weight: 600;
}
.imgWrapper {
    height: 100%;
    width: 100%;
}
.productImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.ratingWrapper {
    color: #fcb700;
    margin: 5px 0;
}
.withBotBorder {
    border-bottom: 1px solid #dcdcdc;
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
.itemTitle {
    overflow: hidden;
    height: 40px;
    font-size: 14px;
}
</style>
