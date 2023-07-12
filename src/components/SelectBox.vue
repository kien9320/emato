<script>
export default {
    name: 'SelectBox',
    props: {
        stylingProps: {
            type: Object,
            required: false,
            default: () => {},
        },
        noStyle: {
            type: Boolean,
            required: false,
            default: false,
        },
        onlySelect: {
            type: Boolean,
            required: false,
            default: false,
        },
        placeHolder: {
            type: String,
            required: false,
        },
        forLabel: {
            type: String,
            required: true,
        },
        options: {
            type: Array,
            required: true,
        },
        default: {
            type: String,
            required: false,
            default: null,
        },
    },
    data() {
        return {
            // eslint-disable-next-line no-nested-ternary
            selected: this.default ? this.default : '',
            open: false,
        };
    },
    computed: {
        filteredList() {
            if (this.onlySelect) return this.options;
            return this.options.filter((places) =>
                places.toLowerCase().includes(this.selected.toLowerCase()),
            );
        },
        selectArrow() {
            return this.onlySelect ? 'block' : 'none';
        },
    },
    methods: {
        handleClickOutside(e) {
            if (!this.$el.contains(e.target)) {
                this.open = false;
            }
        },
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    unmounted() {
        document.removeEventListener('click', this.handleClickOutside);
    },
};
</script>

<template>
    <label
        class="plane-forInputBox"
        :class="{ 'plane-forInputBox-style': !noStyle }"
        :for="forLabel"
    >
        <slot></slot>
        <div
            class="inputField"
            :class="{ rotated: open }"
            @click="open = !open"
            @keypress="open = true"
        >
            <div class="icon">
                <slot name="icon"></slot>
            </div>
            <input
                class="plane-inputBox"
                :class="{
                    'inputOpen': open,
                    'plane-inputBox-style': !noStyle,
                }"
                v-bind="{ disabled: onlySelect }"
                :id="forLabel"
                type="text"
                :placeholder="placeHolder"
                autocomplete="off"
                v-model="selected"
            />
            <transition name="openOut">
                <div class="items" v-if="open">
                    <div
                        v-for="(option, index) of filteredList"
                        :key="index"
                        class="item"
                        :class="{ chosen: option === selected }"
                        @click="
                            selected = option;
                            open = false;
                        "
                        @keypress="selected = option"
                    >
                        {{ option }}
                    </div>
                </div>
            </transition>
        </div>
    </label>
</template>

<style scoped>
.plane-forInputBox {
    width: 100%;
    white-space: nowrap;
    margin-bottom: 0;
}
.plane-forInputBox-style {
    margin-bottom: 20px;
}
.plane-inputBox {
    position: relative;
    border: none;
    outline: none;
    width: 100%;
    background-color: transparent;
}
.plane-inputBox-style {
    background-color: #ececf6;
    height: 44px;
    border-radius: 98px;
    text-align: center;
    padding: 0 60px;
}
.inputField.rotated::after {
    transform: translateY(-75%) rotate(180deg);
}
.inputField::after {
    content: '';
    display: v-bind(selectArrow);
    right: 25px;
    top: 50%;
    transform: translateY(-25%);
    transition: transform 0.2s ease;
    position: absolute;
    border: 7px solid transparent;
    border-color: #575773 transparent transparent transparent;
    z-index: 1;
}
.inputOpen.plane-inputBox-style {
    border-radius: 18px 18px 0px 0px;
}
.inputField {
    position: relative;
}
.icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    font-size: 20px;
    color: black;
    z-index: 1;
    margin-left: 25px;
}
.inputField .items {
    width: 100%;
    color: #6d6d6d;
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    position: absolute;
    top: 100%;
    z-index: 2;
}
.inputField .items .item {
    padding: 10px 0px;
    padding-left: 30px;
    vertical-align: middle;
    cursor: pointer;
    background-color: #ececf6;
    transition: all 0.2s ease;
}
.inputField .items div:hover {
    background-color: #2ec7ff;
    color: white;
}
.inputField .items div.chosen {
    background-color: #2ec7ff;
    color: white;
}
</style>
