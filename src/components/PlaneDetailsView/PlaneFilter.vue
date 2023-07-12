<!-- eslint-disable global-require -->
<script>
export default {
    name: 'PlaneFilter',
    data() {
        return {
            priceRangeEnd: 3000000,
            priceRange: {
                min: 1000000,
                max: 6000000,
                step: 50000,
            },
            formatter: new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format,
            airlines: [
                {
                    icon: require('@/assets/Plane/VietnamAirlines.png'),
                    label: 'Vietnam Airlines',
                },
                {
                    icon: require('@/assets/Plane/VietjetAir.png'),
                    label: 'Vietjet Air',
                },
                {
                    icon: require('@/assets/Plane/BambooAirways.png'),
                    label: 'Bamboo Airways',
                },
                {
                    icon: require('@/assets/Plane/VietravelAirways.png'),
                    label: 'Vietravel Airways',
                },
                {
                    icon: require('@/assets/Plane/PacificAirlines.png'),
                    label: 'Pacific Airlines',
                },
            ],
            times: [
                {
                    min: '00:00',
                    max: '06:00',
                },
                {
                    min: '06:00',
                    max: '12:00',
                },
                {
                    min: '12:00',
                    max: '18:00',
                },
                {
                    min: '18:00',
                    max: '24:00',
                },
            ],
            classes: ['Phổ thông', 'Thương gia', 'Phổ thông đặc biệt'],
        };
    },
    computed: {
        priceInputProgress() {
            return (
                ((this.priceRangeEnd - this.priceRange.min) /
                    (this.priceRange.max - this.priceRange.min)) *
                100
            );
        },
    },
};
</script>

<template>
    <div class="filterWrapper">
        <div class="filterHeader withBotBorder padded">
            <p>Bộ lọc</p>
            <p class="icon" tabindex="0">
                <i class="fa-regular fa-arrows-rotate"></i>
            </p>
        </div>
        <div class="priceRange padded">
            <p>Khoảng giá</p>
            <p class="price">
                {{ formatter(0) }} - {{ formatter(priceRangeEnd) }}
            </p>
            <label class="labelStyle" for="priceRange">
                <input
                    type="range"
                    class="priceInput"
                    id="priceRange"
                    v-bind="priceRange"
                    v-model="priceRangeEnd"
                />
            </label>
        </div>
        <div class="airLines">
            <div class="withBotBorder padded">
                <p>Hãng bay</p>
            </div>
            <form class="checkBoxes padded">
                <div class="chekem" v-for="air in airlines" :key="air.label">
                    <label class="labelStyle" for="air.label">
                        <input type="checkbox" :value="air.label" />
                        <div class="whitespace">
                            <img
                                :src="air.icon"
                                alt="airline"
                                class="airLogo"
                            />
                        </div>
                        <span>
                            {{ air.label }}
                        </span>
                    </label>
                </div>
            </form>
        </div>
        <div class="schedule">
            <div class="withBotBorder padded">
                <p>Thời gian cất cánh</p>
            </div>
            <form class="checkboxes padded">
                <div class="chekem" v-for="(time, index) in times" :key="index">
                    <label class="labelStyle" :for="time.min">
                        <input type="checkbox" :value="time.min" />
                        <div class="whitespace"></div>
                        <span> {{ time.min }} - {{ time.max }} </span>
                    </label>
                </div>
            </form>
        </div>
        <div class="class">
            <div class="withBotBorder padded">
                <p>Hạng vé</p>
            </div>
            <form class="checkboxes padded">
                <div class="chekem" v-for="classi in classes" :key="classi">
                    <label class="labelStyle" :for="classi">
                        <input type="checkbox" :value="classi" />
                        <div class="whitespace"></div>
                        <span>
                            {{ classi }}
                        </span>
                    </label>
                </div>
            </form>
        </div>
        <div class="transfer">
            <div class="withBotBorder padded">
                <p>Điểm dừng</p>
            </div>
            <form class="checkboxes padded">
                <div class="chekem">
                    <label class="labelStyle" for="direct">
                        <input type="checkbox" value="direct" />
                        <div class="whitespace"></div>
                        <span>Bay thẳng</span>
                    </label>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.filterWrapper {
    padding: 10px 5px;
    background-color: white;
    box-shadow: 0px 2px 3px 0px rgba(0, 16, 96, 0.05);
    font-weight: 500;
    font-family: Work sans;
    color: rgba(87, 87, 115, 1);
}
.padded {
    padding-left: 10px;
    padding-right: 10px;
}
.filterHeader {
    display: flex;
    justify-content: space-between;
}
.withBotBorder {
    border-bottom: 1px solid rgba(87, 87, 115, 1);
    margin-bottom: 10px;
}
.icon {
    color: rgba(3, 151, 255, 1);
    cursor: pointer;
    transition: transform 0.2s ease;
}
.icon:hover,
.icon:focus {
    transform: rotate(180deg) scale(1.2);
}
.price {
    color: rgba(148, 148, 176, 1);
}
.labelStyle {
    width: 100%;
    margin-bottom: 20px;
}
.priceInput {
    appearance: none;
    height: 3px;
    background-repeat: no-repeat;
    background-image: linear-gradient(
            to right,
            rgba(3, 151, 255, 1),
            rgba(3, 151, 255, 1)
        ),
        linear-gradient(to right, #c7c6d6, #c7c6d6);
    background-size: v-bind('`${priceInputProgress}%`'), 100%;
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s linear;
    width: 100%;
}
.priceInput:hover,
.priceInput:focus {
    opacity: 1;
}
.priceInput::-webkit-slider-thumb {
    appearance: none;
    width: 17px;
    height: 17px;
    background-color: white;
    border: 6px solid rgba(3, 151, 255, 1);
    border-radius: 7px;
}
.priceInput::-moz-range-thumb {
    appearance: none;
    width: 17px;
    height: 17px;
    background-color: white;
    border: 6px solid rgba(3, 151, 255, 1);
    border-radius: 7px;
}

.whitespace {
    padding: 0px 20px;
    display: inline-block;
    width: 65px;
}
</style>
