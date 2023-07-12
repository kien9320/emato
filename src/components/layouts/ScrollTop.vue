<script>
export default {
    name: 'ScrollTop',
    data() {
        return {
            scrollProgress: 0,
            // isActive: false,
        };
    },
    methods: {
        handleClick() {
            window.scrollTo(0, 0);
        },
        handleScroll() {
            this.scrollProgress = window.scrollY;
            // if (this.scrollProgress > 50) {
            //     this.isActive = true;
            // } else {
            //     this.isActive = false;
            // }
        },
    },
    computed: {
        isActive() {
            return this.scrollProgress > 10;
        },
        scrollPercent() {
            return (
                308 -
                (this.scrollProgress /
                    (document.body.scrollHeight - window.innerHeight)) *
                    308
            );
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
};
</script>

<template>
    <button :class="{ activeProgress: isActive }" @click="handleClick">
        <svg width="100%" height="100%" viewBox="-1 -1 102 102">
            <path
                d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                style="
                    transition: stroke-dashoffset 10ms linear 0s;
                    stroke-dasharray: 307.919, 307.919;
                "
                :style="{
                    strokeDashoffset: scrollPercent,
                }"
            ></path>
        </svg>
    </button>
</template>

<style scoped lang="scss">
button {
    background-color: transparent;
    border: none;
    position: fixed;
    right: 40px;
    bottom: 40px;
    height: 60px;
    width: 60px;
    cursor: pointer;
    display: block;
    border-radius: 50px;
    box-shadow: inset 0 0 0 2px rgb(95 58 252 / 20%);
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    transform: translateY(15px);
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    padding: 0;

    @media (max-width: 540px) {
        height: 45px;
        width: 45px;
    }
}

button::after {
    position: absolute;
    content: '\f176';
    font-family: 'Font Awesome 6 Pro';
    text-align: center;
    line-height: 46px;
    font-size: 28px;
    color: rgba(3, 151, 255, 1);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 46px;
    width: 46px;
    cursor: pointer;
    display: block;
    z-index: 1;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;

    @media (max-width: 540px) {
        font-size: 22px;
    }
}

.activeProgress {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

svg {
    vertical-align: middle;
}

path {
    stroke: rgba(3, 151, 255, 1);
    fill: none;
    stroke-width: 4px;
    box-sizing: border-box;
}
</style>
