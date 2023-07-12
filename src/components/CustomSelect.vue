<script>
export default {
    name: 'CustomSelect',
    props: {
        options: {
            type: Array,
            required: true,
        },
        default: {
            type: String,
            required: false,
            default: null,
        },
        tabIndex: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    data() {
        return {
            // eslint-disable-next-line no-nested-ternary
            selected: this.default
                ? this.default
                : this.options.length > 0
                ? this.options[0]
                : null,
            open: false,
        };
    },
    mounted() {
        this.$emit('input', this.selected);
    },
};
</script>

<template>
    <div
        class="customSelect"
        :tabindex="tabIndex"
        @click="open = !open"
        @blur="open = false"
        @keypress="open = !open"
    >
        <div class="selected" :class="{ opened: open }">
            <div class="forOverflow">
                {{ selected }}
            </div>
        </div>
        <transition name="openOut">
            <div class="items" v-if="open">
                <div
                    v-for="(option, index) of options"
                    :key="index"
                    :class="{ chosen: option === selected }"
                    @click="selected = option"
                    @keypress="selected = option"
                >
                    {{ option }}
                </div>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.customSelect {
    position: relative;
    width: 100%;
    text-align: left;
    outline: none;
    height: 100%;
}
.customSelect .selected {
    background-color: transparent;
    border-radius: 6px;
    overflow: hidden;
    border: none;
    color: #6d6d6d;
    padding-left: 5px;
    padding-right: 20px;
    user-select: none;
}
.forOverflow {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.customSelect::after {
    content: '';
    right: 5px;
    top: 50%;
    position: absolute;
    border: 5px solid transparent;
    border-color: black transparent transparent transparent;
}
.customSelect .selected.opened {
    border-radius: 6px 6px 0px 0px;
}
.customSelect .items {
    width: 150%;
    color: #6d6d6d;
    border-radius: 6px;
    overflow: hidden;
    position: absolute;
    border-top: 3px solid #0dcaf0;
    top: 200%;
    background-color: aliceblue;
    z-index: 1;
}
.customSelect .items div {
    padding: 10px 0px;
    padding-left: 5px;
    vertical-align: middle;
    cursor: pointer;
    background-color: white;
    transition: all 0.2s ease;
}
.customSelect .items div:hover {
    background-color: #2ec7ff;
    color: white;
}
.customSelect .items div.chosen {
    background-color: #2ec7ff;
    color: white;
}
.openOut-enter-active {
    animation: openOut 0.5s ease;
}
.openOut-leave-active {
    animation: openOut 0.3s ease reverse;
}
@keyframes openOut {
    0% {
        max-width: 0;
        max-height: 0;
    }
    40% {
        max-width: 150%;
        max-height: 0;
    }
    50% {
        max-width: 150%;
        max-height: 100px;
    }
    100% {
        max-width: 150%;
        max-height: 500px;
    }
}
</style>
