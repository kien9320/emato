<template>
    <div class="register-bg">
        <b-container class="register-container">
            <b-row>
                <b-col lg="6" class="brand">
                    <div class="brand-title">
                        <img src="@/assets/Login/login-logo.png">
                        <p>Sàn thương mại điện tử lớn nhất Việt Nam</p>
                    </div>
                </b-col>
                <b-col lg="6" class="form">
                    <div class="register-peace">
                        <form method="post" class="register-form">
                            <b-row>
                                <b-col md="6">
                                    <div class="form-group">
                                        <label for="fName">Họ</label>
                                        <b-form-input type="text" id="fName" class="form-input" v-model="formData.email"
                                            required />
                                    </div>
                                </b-col>
                                <b-col md="6">
                                    <div class="form-group">
                                        <label for="lName">Tên</label>
                                        <b-form-input type="text" id="lName" class="form-input" v-model="formData.lName"
                                            required />
                                    </div>
                                </b-col>
                                <b-col md="6">
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <b-form-input type="text" id="email" class="form-input" v-model="formData.email"
                                            required />
                                    </div>
                                </b-col>
                                <b-col md="6">
                                    <div class="form-group">
                                        <label for="phone">
                                            Số điện thoại</label>
                                        <b-form-input type="tel" id="phone" class="form-input" v-model="formData.phone"
                                            required />
                                    </div>
                                </b-col>

                                <b-col md="6">
                                    <div class="form-group">
                                        <label for="contact_name">Mật khẩu</label>
                                        <b-form-input type="password" id="contact_name" class="form-input"
                                            v-model="formData.password" required />
                                    </div>
                                </b-col>
                                <b-col md="6">
                                    <div class="form-group">
                                        <label for="contact_name">
                                            Nhập lại mật khẩu</label>
                                        <b-form-input v-validate="'required|confirmed:password'"
                                            name="password_confirmation" type="password" class="form-input"
                                            data-vv-as="password" v-model="formData.rePassword" />
                                    </div>
                                </b-col>
                                <b-col md="6">
                                    <div class="form-group">
                                        <label for="address">Địa chỉ</label>
                                        <b-form-input type="text" id="address" class="form-input"
                                            v-model="formData.address" required />
                                    </div>
                                </b-col>
                                <b-col md="6">
                                    <div class="form-group">
                                        <label for="invitationCode">Mã giới thiệu</label>
                                        <b-form-input type="text" id="invitationCode" class="form-input"
                                            v-model="formData.invitationCode" required />
                                    </div>
                                </b-col>
                            </b-row>

                            <div class="CTA">
                                <button class="auth-btn">Đăng ký ngay</button>
                                <router-link :to="{
                                    name: 'home'
                                }" class="cta-link">Tôi đã có tài khoản</router-link>
                            </div>
                        </form>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                email: '',
                password: '',
                rePassword: '',
                fName: '',
                lName: '',
                phone: '',
                invitationCode: '',
                address: ''
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.register-bg {
    background: url('@/assets/Login/login-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    padding-bottom: 100px;
    padding-top: 100px;

    @media (max-width:991px) {
        height: 100%;
    }

    // .register-container {
    //     position: absolute;
    //     top: 50%;
    //     left: 50%;
    //     transform: translate(-50%, -50%);


    // }

    form {
        padding: 50px 0;
    }

    .form {
        position: relative;

        .register-peace {
            background: #fff;
            min-height: 480px;
            margin-top: 30px;
            box-shadow: 3px 3px 10px rgb(0 0 0 / 20%);
            color: #bbbbbb;
            padding: 30px 0 60px;
            transition: all 0.9s cubic-bezier(1, -0.375, 0.285, 0.995);
            position: absolute;
            top: 0;
            left: -30%;
            width: 130%;
            overflow: hidden;

            @media (max-width:991px) {
                margin: 0;
                top: 0;
                left: 0;
                min-height: 680px;
                width: 100% !important;
                transition: all 0.5s
            }

            .register-form {
                padding: 0 15px 20px;
                margin: 0;
                width: 70%;
                position: absolute;
                top: 50%;
                left: 60%;
                transform: translate(-50%, -50%);
                overflow-y: auto;
                overflow-x: hidden;

                @media (max-width:991px) {
                    width: 100% !important;
                    padding: 30px;
                    left: 50%;
                }
            }

            .form-group {
                margin-bottom: 5px;
                position: relative;

                label {
                    font-size: 12px;
                    font-weight: 400;
                    font-family: "Montserrat", sans-serif;
                    transform: translateY(10px);
                    transition: all 0.4s;
                    cursor: text;
                    color: #777;
                    z-index: -1
                }

                input {
                    background: none;
                    outline: none;
                    border: none;
                    display: block;
                    padding: 10px 0 0;
                    width: 100%;
                    border-bottom: 1px solid #eee;
                    color: #444;
                    font-size: 15px;
                    font-family: "Montserrat", sans-serif;
                    z-index: 1;
                }
            }

            .CTA {
                margin-top: 30px;

                button {
                    font-size: 12px;
                    text-transform: uppercase;
                    padding: 5px 30px;
                    background: #43c7ff;
                    color: #fff;
                    display: inline-block;
                    width: auto;
                    border-radius: 30px;
                    margin-right: 20px;
                    border: none;
                    font-weight: 600;
                    font-family: "Montserrat", sans-serif;
                }

                .cta-link {
                    display: inline-block;
                    font-size: 13px;
                    font-weight: 500;
                    font-family: "Montserrat", sans-serif;
                    color: #ff0000;
                    transition: all 0.3s;
                    text-decoration: revert;

                    &:hover {
                        color: #43c7ff;
                    }
                }
            }
        }
    }

    .brand {
        background: url('@/assets/Login/login-logo-bg.jpeg');
        background-size: cover;
        background-position: center center;
        color: #fff;
        min-height: 540px;
        position: relative;
        box-shadow: 3px 3px 10px rgb(0 0 0 / 30%);
        transition: all 0.6s cubic-bezier(1, -0.375, 0.285, 0.995);
        z-index: 1;
        padding: 20px;

        &::before {
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.65);
            z-index: -1;
        }

        @media (max-width:991px) {
            width: 100%;
            min-height: 200px;
        }

        .brand-title {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;

            img {
                width: 180px;
                margin-bottom: 20px;
                object-fit: scale-down;

            }

            p {
                font-size: 15px;
                font-weight: 300;
                text-transform: uppercase;
                letter-spacing: 2px;
                white-space: 4px;
                color: #fff;
                font-family: "Raleway", sans-serif;
            }
        }
    }
}
</style>