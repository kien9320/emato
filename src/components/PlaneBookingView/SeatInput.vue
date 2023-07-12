<script>
export default {
    name: 'SeatInput',
    data() {
        return {
            nSeat: 1,
        };
    },
    props: {
        forLabel: {
            type: String,
            required: true,
        },
    },
    methods: {
        handleClick() {
            this.nSeat = parseInt(this.nSeat, 10) + 1;
            this.$emit('addSeat', this.nSeat);
        },
    },
};
</script>

<template>
    <label class="plane-forInputBox" for="adult">
        <p class="d-none d-md-block">{{ forLabel }}</p>
        <p class="d-md-none">{{ forLabel }}</p>
        <div class="inputField">
            <input
                id="adult"
                type="number"
                min="0"
                v-model="nSeat"
                class="plane-inputBox number"
            />
        </div>
    </label>
</template>

<style scoped>
.inputField {
    position: relative;
}
.plane-forInputBox {
    width: 100%;
    white-space: nowrap;
    margin-bottom: 20px;
}
.plane-inputBox {
    border: none;
    outline: none;
    background-color: #ececf6;
    height: 44px;
    width: 100%;
    border-radius: 98px;
    text-align: center;
}
.number {
    width: 100%;
    padding-right: 20px;
}
.addSeat {
    position: absolute;
    z-index: 0;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    width: 25px;
    cursor: pointer;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    opacity: 1;
}

/* Firefox */
input[type='number'] {
    -moz-appearance: textfield;
}
</style>
