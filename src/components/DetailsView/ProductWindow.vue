<script>
export default {
    name: 'ProductDefault',
    data() {
        return {
            mouseX: 0,
            mouseY: 0,
            fromage: new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }),
        };
    },
    props: {
        product: Object,
        order: Number,
    },
    methods: {
        getMouseCoord(e) {
            this.mouseX = (e.offsetX / this.$refs.imgWrapper.offsetWidth) * 100;
            this.mouseY =
                (e.offsetY / this.$refs.imgWrapper.offsetHeight) * 100;
        },
    },
};
</script>

<template>
    <div class="row">
        <div class="col-lg-5 col-12">
            <div class="imgWrapper" ref="imgWrapper" @mousemove="getMouseCoord">
                <img
                    class="productImage"
                    :src="product.img"
                    alt="Product"
                    ref="img"
                />
            </div>
        </div>
        <div class="col-lg-7 col-12">
            <div class="detailsWrapper">
                <h6>{{ product.name }}</h6>
                <div class="ratingWrapper">
                    <i class="fa-regular fa-star" v-for="n in 5" :key="n" />
                </div>
                <div class="priceWrapper">
                    <span class="discount price">
                        {{ fromage.format((product.price * 80) / 100) }}
                    </span>
                    <span class="original price">
                        {{ fromage.format(product.price) }}
                    </span>
                </div>
                <div class="metaWrapper">
                    <p>
                        Trạng thái:
                        <span class="meta">
                            {{ product.inStock ? 'Còn hàng' : 'Hết hàng' }}
                        </span>
                    </p>
                    <p>
                        Shop:
                        <span class="meta">{{ product.shop }}</span>
                    </p>
                    <p>
                        Danh mục:
                        <span class="meta">{{ product.category }}</span>
                    </p>
                </div>
                <div class="details">
                    {{ product.details }}
                </div>
                <div class="orderWrapper">
                    <form>
                        <div class="order">
                            <div class="quantity">
                                <input class="numberSelect" :value="order" />
                                <button
                                    type="button"
                                    class="decrement botan"
                                    @click="$emit('decrease')"
                                >
                                    -
                                </button>
                                <button
                                    type="button"
                                    class="increment botan"
                                    @click="$emit('increase')"
                                >
                                    +
                                </button>
                            </div>
                            <div class="placeOrder">
                                <button
                                    type="button"
                                    class="orderButton"
                                    @click="$emit('placeOrder')"
                                >
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.imgWrapper {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
}
.imgWrapper:hover .productImage {
    transform: v-bind('`translate(-${mouseX}%, -${mouseY}%) scale(2)`');
}
@media only screen and (max-width: 992px) {
    .imgWrapper {
        height: 500px;
    }
}
.productImage {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.detailsWrapper {
    font-size: 14px;
    height: 100%;
}
h6 {
    font-size: 24px;
    font-weight: 500;
}
.priceWrapper {
    font-size: 18px;
    font-weight: 500;
}
.price {
    margin-right: 10px;
}
.discount {
    color: #fcb700;
    font-size: 22px;
}
.original {
    text-decoration: line-through;
}
.metaWrapper {
    margin: 20px 0;
}
.meta {
    color: #fcb700;
    padding-left: 4px;
}
.orderWrapper {
    margin: 20px 0;
}
.order {
    display: flex;
}
.quantity {
    position: relative;
    width: 120px;
    height: 45px;
}
.numberSelect {
    color: black;
    font-size: 14px;
    font-weight: normal;
    border: 1px solid #dcdcdc;

    outline: none;
    background: none;
    display: inline-block;
    height: 45px;
    padding: 0 30px;
    width: 120px;
    text-align: center;
    border-radius: 30px;
}
.decrement {
    left: 7px;
}
.increment {
    right: 7px;
}
.botan {
    padding: 0;
    font-size: 20px;
    color: #222;
    display: inline-block;
    position: absolute;
    top: 50%;
    height: 22px;
    width: 22px;
    background: transparent;
    line-height: 1;
    cursor: pointer;
    text-align: center;
    border-radius: 0;
    transform: translateY(-50%);
    border: none;
}
.orderButton {
    border: none;
    font-size: 12px;
    font-weight: 500;
    background-color: #fcb700;
    height: 45px;
    line-height: 18px;
    padding: 0px 15px;
    color: #ffffff;
    border-radius: 30px;
    z-index: 1;
    text-transform: uppercase;
    margin-left: 20px;
    transition: all 0.3s ease;
}
.orderButton:hover {
    background-color: #222;
}
</style>
