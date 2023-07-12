<script>
export default {
    name: 'CategoryDrop',
    data() {
        return {
            isClosed: false,
            categories: [
                'Điện thoại',
                'Máy tính bảng',
                'Vỏ, bao & ốp lưng',
                'Pin sạc dự phòng',
                'Thiết bị điện tử',
                'Tivi',
                'Tai nghe',
                'Dụng cụ & thiết bị tiện ích',
                'Máy tính & Laptop',
                'Chuột, bàn phím',
            ],
        };
    },
    methods: {
        handleClick() {
            this.isClosed = !this.isClosed;
        },
    },
};
</script>

<template>
    <div class="categoryWrapper">
        <button @click="handleClick" class="categoryToggle">
            <!-- <i class="fa-regular fa-bars" /> -->
            <div class="withBotBorder">
                <div class="title">
                    <div class="categoryTitle">Danh mục</div>
                </div>
            </div>
        </button>
        <div class="categoryMenu" :class="{ menuClosed: isClosed }">
            <div class="categoryTag" v-for="cat in categories" :key="cat">
                <div class="withBotBorder">{{ cat }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.categoryWrapper {
    margin-bottom: 30px;
}
.categoryMenu {
    overflow: hidden;
    height: 430px;
    transition: all 0.3s linear;
}
.menuClosed {
    height: 0;
    /* transform: translateX(20px); */
}
.categoryTag {
    width: 100%;
    padding: 9px 15px;
    background-color: white;
    /* border-bottom: 1px solid #ebebeb; */
    font-weight: 500;
}
.categoryToggle {
    border: none;
    /* border-bottom: 1px solid #ebebeb; */
    background-color: white;
    text-transform: uppercase;
    height: 61px;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    padding: 0px 10px;
    text-align: left;
}
.categoryTitle {
    font-size: 18px;
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
</style>
