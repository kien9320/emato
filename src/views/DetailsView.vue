<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable global-require -->
<script>
import ProductWindow from '@/components/DetailsView/ProductWindow.vue';
import LongerDetails from '@/components/DetailsView/LongerDetails.vue';
import RelatedCarousel from '@/components/DetailsView/RelatedCarousel.vue';
import CategoryDropDown from '@/components/DetailsView/CategoryDropDown.vue';
import StandoutProducts from '@/components/DetailsView/StandoutProducts.vue';

export default {
    name: 'DetailsView',
    data() {
        return {
            order: 1,
        };
    },
    props: {
        id: { type: String, required: true },
    },
    computed: {
        relatedProducts() {
            const relatedProducts =
                this.$store.getters['products/ReturnAllProducts'];

            return relatedProducts.filter(
                (product) => product.id !== this.product.id,
            );
        },
        product() {
            return this.$store.getters['products/ReturnProduct'](
                parseInt(this.id, 10),
            );
        },
    },
    components: {
        ProductWindow,
        LongerDetails,
        RelatedCarousel,
        CategoryDropDown,
        StandoutProducts,
    },
    methods: {
        handleClick() {
            this.isClosed = !this.isClosed;
        },
        addOrder() {
            this.order += 1;
        },
        subOrder() {
            if (this.order === 0) return;
            this.order -= 1;
        },
        placeOrder() {
            this.$store.dispatch('cart/act_addProductToCart', {
                product: this.product,
                quantity: this.order,
            });
        },
    },
};
</script>

<template>
    <div class="container py-5">
        <div class="row">
            <!-- <div class="col-12">
                <button
                    v-for="n in 7"
                    :key="n"
                    @click="changeProduct(n)"
                    class="changeProduct m-1"
                >
                    {{ n }}
                </button>
            </div> -->
            <div class="col-md-12 col-lg-9">
                <ProductWindow
                    :product="product"
                    :order="order"
                    @decrease="subOrder"
                    @increase="addOrder"
                    @placeOrder="placeOrder"
                ></ProductWindow>
                <LongerDetails :product="product"></LongerDetails>
                <RelatedCarousel :items="relatedProducts"></RelatedCarousel>
            </div>
            <div class="col-lg-3 d-lg-block d-none">
                <CategoryDropDown></CategoryDropDown>
                <StandoutProducts :items="relatedProducts"></StandoutProducts>
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
