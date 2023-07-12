<script>
export default {
    name: 'LongerDetails',
    props: {
        product: Object,
    },
};
</script>

<template>
    <div class="row">
        <div class="col-12 my-4">
            <div class="withBotBorder mb-3">
                <div class="title"><b>Chi tiết</b></div>
            </div>
            <div>
                {{ product.details }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.changeProduct {
    border-radius: 50%;
    border: none;
    background-color: #43c7ff;
    color: white;
    width: 30px;
    height: 30px;
    line-height: 0;
    transition: all 0.2s ease;
}
.changeProduct:hover {
    background-color: #fcb700;
    color: black;
}
.imgWrapper {
    height: 100%;
    width: 100%;
}
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
p {
    margin: 0;
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
