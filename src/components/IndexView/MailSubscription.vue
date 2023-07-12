<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<script>
export default {
    name: 'MailSub',
};
</script>

<template>
    <div class="bg-white">
        <div class="container py-4">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="infoWrapper d-sm-flex">
                        <div class="icon mr-2">
                            <img src="@/assets/emailIcon.png" alt="HEL" />
                        </div>
                        <div class="info">
                            <p>Đăng kí nhận thông tin mới nhất</p>
                            <p>
                                Nhận thông tin từ cửa hàng mới nhất và các
                                chương trình khuyến mãi qua mail
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="subscribeForm float-right">
                        <input
                            type="email"
                            placeholder="Nhập địa chỉ email của bạn"
                        />
                        <button class="submitBotan">Đăng kí</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.subscribeForm {
    width: 100%;
    position: relative;
}
input {
    width: 100%;
    height: 50px;
    line-height: 46px;
    padding-left: 20px;
    padding-right: 120px;
    border: 0;
    color: #979ca5;
    background: 0 0;
    border-radius: 30px;
    border: 2px solid #e4e7f0;
    position: relative;
}
.submitBotan {
    position: absolute;
    top: 0;
    right: 0;
    height: 50px;
    line-height: 50px;
    background: #fcb700;
    color: #222;
    text-transform: uppercase;
    padding: 0 25px;
    border-radius: 0 35px 35px 0;
    border: 0;
    text-align: center;
}
</style>
