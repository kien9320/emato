<script>
export default {
    name: 'SectionHeader',
    data() {
        return {};
    },
    methods: {
        clickRight() {
            this.$emit('click-right');
        },
        clickLeft() {
            this.$emit('click-left');
        },
    },
    props: {
        withArrows: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between withBotBorder">
                    <div class="title">
                        <slot name="sectionTitle">
                            <b>Sản phẩm</b> mới nhất
                        </slot>
                    </div>
                    <div class="float-right" v-if="withArrows">
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
                <slot name="carousel"></slot>
            </div>
            <slot></slot>
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
@media only screen and (max-width: 375px) {
    .title {
        font-size: 20px;
    }
}
</style>
