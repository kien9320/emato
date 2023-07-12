<script>
import SelectBox from '../SelectBox.vue';

export default {
    name: 'PlaneRequisite',
    components: { SelectBox },
    data() {
        return {
            places: ['Hải Phòng', 'Thanh Hóa', 'Địa ngục', 'nhà chị Phương'],
        };
    },
    mounted() {
        const { stickyEl } = this.$refs;
        const observer = new IntersectionObserver(
            ([e]) =>
                e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
            { threshold: [1] },
        );
        observer.observe(stickyEl);
    },
};
</script>

<template>
    <div class="requirements d-none d-xl-block" ref="stickyEl">
        <div class="container forSticky">
            <div class="row align-items-center">
                <div class="col-9 col-sm">
                    <div class="parameters">
                        <div class="group places">
                            <div class="from">
                                <SelectBox
                                    noStyle
                                    :options="places"
                                    placeHolder="Điểm đi"
                                    forLabel="from"
                                    default="Hải Phòng"
                                >
                                    <p>Từ</p>
                                </SelectBox>
                            </div>
                            <div class="switcheroo">
                                <img
                                    src="@/assets/SVGs/heroicons-outline_switch-horizontal.svg"
                                    alt="toandfrom"
                                />
                            </div>
                            <div class="to">
                                <SelectBox
                                    noStyle
                                    :options="places"
                                    placeHolder="Điểm đến"
                                    forLabel="to"
                                    default="Thanh Hóa"
                                >
                                    <p>Đến</p>
                                </SelectBox>
                            </div>
                        </div>
                        <div class="group time">
                            <div class="leave">
                                <label for="departure" class="label">
                                    <p>Ngày đi</p>
                                    <input
                                        type="date"
                                        id="departure"
                                        class="date"
                                    />
                                </label>
                            </div>
                            <div class="return">
                                <label for="roundTrip" class="label">
                                    <p>Ngày về</p>
                                    <input
                                        type="date"
                                        id="roundTrip"
                                        class="date"
                                    />
                                </label>
                            </div>
                        </div>
                        <div class="group classSeats">
                            <p>Số khách, hạng ghế</p>
                            1 khách, phổ thông
                        </div>
                    </div>
                </div>
                <div class="col-2 col-sm-auto py-2">
                    <button class="searchButton">
                        <img
                            class="magnifyingGlass"
                            src="@/assets/SVGs/akar-icons_search.svg"
                            alt="search"
                        />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.requirements {
    background-repeat: no-repeat;
    /* background-image: linear-gradient(
            to right,
            rgba(3, 151, 255, 0.05),
            rgba(3, 151, 255, 0.05)
        ),
        linear-gradient(to right, #f9faff, #f9faff); */
    background-color: rgba(237, 245, 255, 1);
    color: rgba(87, 87, 115, 1);
    position: sticky;
    top: -1px;
    z-index: 1;
    transition: all 0.1s linear;
}
.forSticky {
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 0px 0px 20px 20px;
    transition: all 0.1s linear;
    background-color: rgba(237, 245, 255, 1);
}
.requirements.isSticky {
    background-color: transparent;
}
.requirements.isSticky .forSticky {
    box-shadow: 0px 4px 10px -2px rgba(199, 198, 214, 0.7);
    padding: 10px 20px;
}
.label {
    margin: 0;
}

.parameters {
    font-weight: 600;
    display: flex;
}
.parameters::-webkit-scrollbar {
    display: none;
}
.parameters p {
    color: rgba(148, 148, 176, 1);
    font-weight: 500;
}
.parameters .group {
    width: auto;
    flex-shrink: 0;
    flex-grow: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.places::after {
    content: '';
    width: 1px;
    background-color: rgba(56, 62, 73, 1);
    height: 80%;
    right: 0;
}
.parameters .switcheroo {
    border: 1px solid;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    margin: 0 20px;
    line-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.switcheroo img {
    width: 25px;
}
.to {
    margin-right: 20px;
}
.date {
    width: 100%;
    position: relative;
    flex-direction: row-reverse;
    padding: 0;
    outline: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;
}
.date:focus,
.date:hover {
    border-color: rgba(3, 151, 255, 1);
}
.date::-webkit-calendar-picker-indicator {
    display: none;
}
.leave {
    margin: 0 20px;
}
.classSeats {
    margin: 0 20px;
    flex-direction: column;
}
.searchButton {
    background-color: rgba(56, 62, 73, 1);
    border-radius: 50%;
    width: 42px;
    height: 42px;
    border: none;
    line-height: 0;
    padding: 0;
}
.magnifyingGlass {
    width: 19px;
    height: 19px;
}
::v-deep .plane-inputBox {
    border-bottom: 2px solid transparent;
}
::v-deep .plane-inputBox:focus {
    border-color: rgba(3, 151, 255, 1);
}
::v-deep .plane-inputBox:hover {
    border-color: rgba(3, 151, 255, 1);
}
::v-deep .inputField .items {
    margin-top: 5px;
    width: 250%;
    box-shadow: 1px 2px 3px 1px rgba(199, 198, 214, 0.2);
}
::v-deep .inputField .items .item {
    background-color: #f9faff;
}
</style>
