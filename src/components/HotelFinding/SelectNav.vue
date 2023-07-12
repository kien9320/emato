<script>
export default {
    name: 'SelectNav',
    props: {
        onlySelect: {
            type: Boolean,
            required: false,
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
        tabIndex: {
            type: Number,
            required: false,
            default: 0,
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
    <label class="plane-forInputBox" :for="forLabel">
        <div
            class="inputField"
            :class="{ rotated: open }"
            @click="open = !open"
            @keypress="open = true"
        >
            <input
                class="plane-inputBox places"
                :class="{ inputOpen: open }"
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
    /* margin-bottom: 20px; */
}

.plane-inputBox {
    position: relative;
    border: none;
    outline: none;
    background-color: transparent;
    height: 20px;
    width: 100%;
    /* border-radius: 98px; */
    text-align: start;
    color: #575773;
    border-bottom: 2px solid transparent;
    /* text-decoration: underline 3px;
    -webkit-text-decoration-color: #0397ff;
    text-decoration-color: #0397ff; */
}
.plane-inputBox:focus {
    border-color: rgba(3, 151, 255, 1);
}
.plane-inputBox:hover {
    border-color: rgba(3, 151, 255, 1);
}
.inputField.rotated::after {
    transform: translateY(-75%) rotate(180deg);
}
.inputField .items {
    margin-top: 5px;
    width: 250%;
    box-shadow: 1px 2px 3px 1px rgba(199, 198, 214, 0.2);
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
    z-index: 100;
}

.inputOpen {
    /* border-radius: 18px 18px 0px 0px; */
}

.places {
    padding: 0;
}

.inputField {
    position: relative;
}

.inputField .items {
    width: 100%;
    color: #6d6d6d;
    /* border-radius: 0px 0px 6px 6px; */
    overflow: hidden;
    position: absolute;
    top: 100%;
    z-index: 2;
    border-bottom: 1px solid #2ec7ff;
    background-color: #f9faff;
}

.inputField .items div {
    z-index: 10;
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

/* .openOut-enter-active {
                animation: openOut 0.5s ease;
            }
            .openOut-leave-active {
                animation: openOut 0.3s ease reverse;
            } */
/* @keyframes openOut {
                0% {
                    max-height: 0;
                }
                100% {
                    max-height: 500px;
                }
            } */
</style>
