<template>
    <footer class="footBackground">
        <div class="top">
            <div class="container">
                <div class="row py-5">
                    <div class="col-xl-7 col-12">
                        <div class="row">
                            <div class="col-sm-5 col-12">
                                <div>
                                    <div class="imgWrapper">
                                        <img
                                            src="@/assets/ematoLogo.png"
                                            alt="Logo"
                                        />
                                    </div>
                                    <div class="hotlineWrapper">
                                        <div class="hotlineIcon">
                                            <i class="fa-solid fa-headset"></i>
                                        </div>
                                        <div class="hotlineInfo">
                                            <div>Hotline hỗ trợ 24/7:</div>
                                            <div class="phoneNumber">
                                                0888744955
                                            </div>
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
                                </div>
                            </div>
                            <div class="col-sm-3 col-6">
                                <div class="head">Information</div>
                                <div>
                                    <p>Custom Service</p>
                                    <p>F.A.Q.'s</p>
                                    <p>Ordering Tracking</p>
                                    <p>Contacts</p>
                                    <p>Events</p>
                                    <p>Popular</p>
                                </div>
                            </div>
                            <div class="col-sm-4 col-6">
                                <div class="head">Our Services</div>
                                <div>
                                    <p>Sitemap</p>
                                    <p>Privacy Policy</p>
                                    <p>Your Account</p>
                                    <p>Advanced Search</p>
                                    <p>Terms & Condition</p>
                                    <p>Contact Us</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-12">
                        <div class="row pt-3 pt-xl-0">
                            <div class="col-6">
                                <div class="head">My Account</div>
                                <div>
                                    <p>About us</p>
                                    <p>Delivery Information</p>
                                    <p>Privacy Policy</p>
                                    <p>Discount</p>
                                    <p>Custom Service</p>
                                    <p>Terms & Condition</p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="head">Payment & Shipping</div>
                                <div>
                                    <p>Terms Of Use</p>
                                    <p>Payment Methods</p>
                                    <p>Shipping Guide</p>
                                    <p>Locations We Ship to</p>
                                    <p>Estimated Delivery Time</p>
                                    <p>Express</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">Copyright © Emato. All Rights Reserved.</div>
    </footer>
</template>

<script>
export default {
    name: 'GlobalFooter',
};
</script>

<style scoped>
.footBackground {
    background-color: #394150;
    overflow: hidden;
}
.top {
    color: #ddd;
}
.imgWrapper {
    margin-bottom: 40px;
}
img {
    width: 100%;
}
.hotlineWrapper {
    font-size: 14px;
    font-weight: 500;
    display: flex;
    margin-bottom: 20px;
}
.hotlineIcon {
    color: #43c7ff;
    font-size: 55px;
    margin-right: 10px;
}
.phoneNumber {
    font-size: 18px;
    color: #43c7ff;
}
.head {
    margin-bottom: 30px;
    font-weight: 500;
}
.bottom {
    background-color: #27b0e2;
    text-align: center;
    padding: 10px;
    color: white;
}
p {
    margin-bottom: 5px;
    transition: all 0.5s ease-in-out;
    font-size: 14px;
}
p:hover {
    transform: translateX(20px);
    color: #fcb700;
}
</style>
