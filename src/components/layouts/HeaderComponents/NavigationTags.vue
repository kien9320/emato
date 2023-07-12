<script>
export default {
    name: 'NavigationTags',
    data() {
        return {
            navigations: [
                {
                    name: 'Trang chủ',
                    link: 'Home',
                    path: '/',
                },
                {
                    name: 'Cửa hàng',
                    link: 'Shop',
                    path: '/shop',
                },
                {
                    name: 'Tin tức',
                    link: 'Article',
                    path: '/article',
                },
                {
                    name: 'Liên hệ',
                    path: '/contact',
                },
            ],
            isBooking: false,
            isHam: false,
        };
    },
    computed: {
        inBooking() {
            return (
                this.$route.name.toLowerCase().includes('plane') ||
                this.$route.name.toLowerCase().includes('hotel')
            );
        },
    },
    methods: {
        bookingClick() {
            this.isBooking = !this.isBooking;
        },
    },
};
</script>

<template>
    <div class="container">
        <div class="row position-relative">
            <div class="col-auto d-none d-md-block">
                <div class="navWrapper">
                    <router-link
                        v-for="nav in navigations"
                        :key="nav.name"
                        class="navTag"
                        :to="{ path: nav.path }"
                        exact
                    >
                        {{ nav.name }}
                    </router-link>
                    <div
                        class="navTag bookingTag"
                        :class="{ bookingActiveRoute: inBooking }"
                    >
                        Booking
                        <div
                            class="bookingWrapper"
                            :class="{ isBooking: isBooking }"
                        >
                            <router-link :to="{ name: 'PlaneBooking' }">
                                <div class="plane booking">
                                    <i class="fa-solid fa-plane"></i>
                                    <span>Vé máy bay</span>
                                </div>
                            </router-link>
                            <router-link :to="{ name: 'HotelBooking' }">
                                <div class="hotel booking">
                                    <i class="fa-solid fa-hotel"></i>
                                    <span>Khách sạn</span>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

            <button
                type="button"
                class="hamToggle d-block d-md-none col-auto"
                @click="isHam = !isHam"
            >
                <i class="fa-solid fa-bars"></i>
            </button>
            <transition name="slide-fade">
                <div class="hamMenu d-block d-md-none" v-if="isHam">
                    <div
                        v-for="nav in navigations"
                        :key="nav.name"
                        @click="isHam = false"
                        @keypress="isHam = false"
                    >
                        <router-link
                            :to="{ path: nav.path }"
                            class="navTag hamTag"
                            exact
                        >
                            {{ nav.name }}
                        </router-link>
                    </div>
                    <div
                        class="navTag bookingHam"
                        :class="{ bookingActiveRoute: inBooking }"
                        @click="bookingClick"
                        @keypress="bookingClick"
                    >
                        Booking
                        <div
                            class="bookingWrapper"
                            :class="{ isBooking: isBooking }"
                        >
                            <div
                                @click="
                                    isHam = false;
                                    isBooking = false;
                                "
                                @keypress="isHam = false"
                            >
                                <router-link :to="{ name: 'PlaneBooking' }">
                                    <div class="plane booking">
                                        <i class="fa-solid fa-plane"></i>
                                        <span>Vé máy bay</span>
                                    </div>
                                </router-link>
                            </div>
                            <div
                                @click="
                                    isHam = false;
                                    isBooking = false;
                                "
                                @keypress="isHam = false"
                            >
                                <router-link :to="{ name: 'HotelBooking' }">
                                    <div class="hotel booking">
                                        <i class="fa-solid fa-hotel"></i>
                                        <span>Khách sạn</span>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<style scoped lang="scss">
a {
    color: inherit;
    text-decoration: none;
    transition: all 0.2s ease;
}
.navTag.router-link-active {
    border-color: #43c7ff;
    color: #43c7ff;
}
.navWrapper {
    display: flex;
    align-items: center;
}
.navTag {
    position: relative;
    font-weight: 500;
    padding: 20px 20px;
    display: flex;
    align-items: center;
    height: 100%;
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    cursor: pointer;
}
.navTag:hover {
    color: #43c7ff;
    border-color: #43c7ff;
}
.bookingTag:hover .bookingWrapper {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) translateX(-50%);
}
.bookingActiveRoute {
    color: #43c7ff;
    border-color: #43c7ff;
}
.bookingWrapper {
    position: absolute;
    width: 170px;
    z-index: 20;
    top: calc(100% + 2px);
    left: 50%;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px) translateX(-50%);
    transition: all 0.5s ease;
    box-shadow: 1px 2px 2px 1px rgba(199, 198, 214, 0.2);
}

.booking {
    padding: 20px 21px;
    height: 62px;
    background-color: white;
    color: #575773;
    text-transform: none;
}
.booking:hover {
    background-image: linear-gradient(
            to right,
            rgba(3, 151, 255, 0.05),
            rgba(3, 151, 255, 0.05)
        ),
        linear-gradient(to right, #f9faff, #f9faff);
}

.booking span {
    margin-left: 10px;
}
.hamToggle {
    font-size: 25px;
    line-height: 0;
    outline: none;
    border: none;
    background-color: transparent;
    margin: 10px 0;
}
.hamMenu {
    position: absolute;
    background-color: white;
    top: 100%;
    z-index: 2;
}
.bookingHam .bookingWrapper {
    top: 0;
    left: 110%;
    transform: translateY(-25%);
    transition: all 0.2s ease;
}
.isBooking {
    opacity: 1;
    visibility: visible;
}
@media only screen and (max-width: 375px) {
    .hamTag {
        font-size: 12px;
    }
}
.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.2s ease;
}
</style>
