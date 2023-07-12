<script>
export default {
    name: 'SellingFeatures',
    data() {
        return {
            items: [
                {
                    tit: 'Miễn phí vận chuyển',
                    deets: 'Giao hàng miễn phí cho tất cả các đơn đặt hàng',
                    icon: 'fa-regular fa-rocket-launch',
                },
                {
                    tit: 'Đảm bảo hoàn tiền',
                    deets: 'Đảm bảo hoàn tiền trong 30 ngày',
                    icon: 'fa-regular fa-sync',
                },
                {
                    tit: 'Hỗ trợ trực tuyến 24/7',
                    deets: 'Hỗ trỡ kỹ thuật luôn sẵn sàng',
                    icon: 'fa-regular fa-user-headset',
                },
                {
                    tit: 'Thanh toán an toàn',
                    deets: 'Tất cả các phương thức thanh toán đều được chấp nhận',
                    icon: 'fa-regular fa-thumbs-up',
                },
                {
                    tit: 'Giảm giá thành viên',
                    deets: 'Giảm giá tới 70% trên tổng đơn hàng',
                    icon: 'fa-regular fa-badge-dollar',
                },
            ],
        };
    },
};
</script>

<template>
    <div class="container py-4">
        <div class="row">
            <div
                class="item col-xl col-lg-4 col-sm-6 col-12 my-2"
                v-for="item in items"
                :key="item.tit"
            >
                <div class="itemWrapper d-flex">
                    <div class="iconWrapper">
                        <i :class="item.icon" />
                    </div>
                    <div class="textWrapper">
                        <h6>
                            {{ item.tit }}
                        </h6>
                        <p>
                            {{ item.deets }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.itemWrapper::after {
    position: absolute;
    content: '';
    right: 20px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 1px;
    height: 50%;
    background: #ebebeb;
}
.itemWrapper {
    position: relative;
    background-color: white;
    padding: 20px 25px;
    height: 100%;
}
.iconWrapper {
    font-size: 40px;
    color: #fcb700;
    margin-right: 10px;
}
p {
    margin: 0;
    font-size: 12px;
}
</style>
