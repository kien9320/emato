<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<script>
import SectionHeader from '../SectionHeader.vue';

export default {
    name: 'CustomerSupport',
    components: { SectionHeader },
};
</script>

<template>
    <div class="background">
        <div class="container py-4">
            <div class="row">
                <div class="col-12 col-xl-4">
                    <SectionHeader>
                        <template #sectionTitle><b>Về Chúng tôi</b></template>
                        <template>
                            <div class="col-12">
                                <div class="shortIntro">
                                    Sàn thương mại điện tử lớn nhất Việt Nam
                                </div>
                                <div class="hotlineWrapper">
                                    <div class="hotlineIcon">
                                        <i class="fa-solid fa-headset"></i>
                                    </div>
                                    <div class="hotlineInfo">
                                        <div>Hotline hỗ trợ 24/7:</div>
                                        <a href="tel:0888744955" class="phoneNumber">
                                            0888744955
                                        </a>
                                    </div>
                                </div>
                                <div class="contactsWrapper">
                                    <div class="address">
                                        Add: Vuon Lai, Tan Phu
                                    </div>
                                    <div class="email">
                                        Email: tmdt.pisolution@gmail.com
                                    </div>
                                    <div class="fax">Fax: 123</div>
                                </div>
                                <div class="socialWrapper">
                                    Mạng xã hội:
                                    <ul>
                                        <li>
                                            <a href="https://twitter.com">
                                                <i class="fa-brands fa-twitter">a</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://instagram.com">
                                                <i class="fa-brands fa-instagram">a</i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://facebook.com">
                                                <i class="fa-brands fa-facebook-f">a</i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </template>
                    </SectionHeader>
                </div>
                <div class="col-12 col-xl-8">
                    <SectionHeader>
                        <template #sectionTitle><b>Liên hệ</b></template>
                        <template>
                            <form class="container">
                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <div class="inputWrapper">
                                            <span>Tên</span>
                                            <input type="text" name="name" aria-label="name" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="inputWrapper">
                                            <span>Email</span>
                                            <input type="email" name="email" aria-label="email" />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="inputWrapper">
                                            <span>Số điện thoại</span>
                                            <input type="tel" name="phone" aria-label="phone" />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="inputWrapper">
                                            <span>
                                                Bạn cần chúng tôi hỗ trợ những
                                                gì?
                                            </span>
                                            <textarea name="message" aria-label="message" />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" class="submitButton">
                                            Gửi ngay
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </template>
                    </SectionHeader>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.background {
    background-color: white;
}

.shortIntro {
    font-size: 14px;
    font-weight: normal;
    color: #666;
    margin: 30px 0;
}

.hotlineWrapper {
    font-size: 14px;
    font-weight: 500;
    display: flex;
    margin-bottom: 20px;
}

.hotlineIcon {
    color: #43c7ff;
    font-size: 35px;
    margin-right: 10px;
}

.phoneNumber {
    font-size: 18px;
    color: black;
}

.contactsWrapper {
    line-height: 30px;
    margin-bottom: 20px;
}

ul {
    display: inline-block;
    list-style-type: none;
}

li {
    display: inline-block;
    border: 2px solid #e6e6e6;
    border-radius: 50%;
    margin-right: 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    transition: all 0.4s ease;
}

li:hover a {
    color: white;
}

li:hover {
    background-color: #43c7ff;
    border-color: #43c7ff;
}

a {
    font-size: 14px;
    line-height: 35px;
    color: #888;
}

.inputWrapper {
    margin-bottom: 20px;
}

span {
    display: inline-block;
    position: relative;
    color: black;
}

span::after {
    content: '*';
    color: #e02b27;
    font-size: 1.2rem;
    margin: 0 0 0 5px;
}

input {
    width: 100%;
    height: 35px;
    line-height: 35px;
    border: 1px solid #e6e6e6;
    outline: none;
    padding: 0 15px;
    font-family: inherit;
    font-size: inherit;
}

textarea {
    height: 150px;
    line-height: 1.5;
    padding: 15px;
    resize: none;
    width: 100%;
    line-height: 35px;
    border: 1px solid #e6e6e6;
    outline: none;
}

.submitButton {
    background-color: #fcb700;
    color: white;
    font-size: 12px;
    font-weight: 500;
    height: 45px;
    padding: 0 50px;
    border-radius: 30px;
    text-align: center;
    text-transform: uppercase;
    border: 2px solid transparent;
}

.submitButton:hover {
    background-color: transparent;
    border-color: #fcb700;
    color: black;
}
</style>
