<script>
import SelectBox from '@/components/SelectBox.vue';
import SeatInput from '@/components/PlaneBookingView/SeatInput.vue';

export default {
    name: 'PlaneBooking',
    data() {
        return {
            places: [
                'Hải Phòng',
                'Thanh Hóa',
                'Địa ngục',
                'nhà chị Phương',
                'Đà Lạt',
            ],
            seats: ['Phổ thông', 'Thượng lưu', 'Tổng thống'],
            isRoundTrip: false,
        };
    },
    components: { SelectBox, SeatInput },
};
</script>

<template>
    <div class="background">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="bookingWrapper px-4 px-lg-5">
                        <div class="my-3">
                            <i
                                class="fa-solid fa-circle"
                                style="color: #0397ff"
                            ></i>
                            <span class="mx-4">Một chiều / Khứ hồi</span>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <SelectBox
                                    :options="places"
                                    forLabel="from"
                                    placeHolder="Địa điểm / tên sân bay"
                                >
                                    <p>Điểm đi</p>
                                    <template #icon>
                                        <img
                                            src="@/assets/SVGs/plane_takeOff.svg"
                                            alt="takeoff"
                                        />
                                    </template>
                                </SelectBox>
                            </div>
                            <div class="col-12 col-md-6">
                                <SelectBox
                                    :options="places"
                                    forLabel="to"
                                    placeHolder="Địa điểm / tên sân bay"
                                >
                                    <p>Điểm đến</p>
                                    <template #icon>
                                        <img
                                            src="@/assets/SVGs/plane_landing.svg"
                                            alt="landing"
                                        />
                                    </template>
                                </SelectBox>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-lg-6">
                                <div class="row">
                                    <div class="col-6">
                                        <label
                                            class="plane-forInputBox"
                                            for="departure"
                                        >
                                            <p>Ngày đi</p>
                                            <div class="inputField">
                                                <input
                                                    id="departure"
                                                    type="date"
                                                    class="plane-inputBox date"
                                                />
                                            </div>
                                        </label>
                                    </div>
                                    <div class="col-6">
                                        <label
                                            class="plane-forInputBox"
                                            for="roundTrip"
                                        >
                                            <div
                                                is="p"
                                                class="d-flex align-items-center"
                                            >
                                                <label
                                                    class="switch"
                                                    for="isRoundTrip"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id="isRoundTrip"
                                                        v-model="isRoundTrip"
                                                    />
                                                    <span
                                                        class="roundCheckbox"
                                                    ></span>
                                                </label>
                                                Khứ hồi
                                            </div>
                                            <div class="inputField">
                                                <input
                                                    id="roundTrip"
                                                    type="date"
                                                    class="plane-inputBox date"
                                                    v-bind="{
                                                        disabled: !isRoundTrip,
                                                    }"
                                                />
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6">
                                <div class="row">
                                    <div class="col-4">
                                        <SeatInput forLabel="Người lớn">
                                        </SeatInput>
                                    </div>
                                    <div class="col-4">
                                        <SeatInput forLabel="Trẻ em">
                                        </SeatInput>
                                    </div>
                                    <div class="col-4">
                                        <SeatInput forLabel="Em bé">
                                        </SeatInput>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-6 py-4 py-md-0">
                                <SelectBox
                                    :options="seats"
                                    forLabel="seat"
                                    placeHolder="Hạng ghế"
                                    onlySelect
                                    :default="seats[0]"
                                >
                                    <p>Hạng ghế</p>
                                    <template #icon>
                                        <img
                                            src="@/assets/SVGs/plane_seat.svg"
                                            alt="seat"
                                        />
                                    </template>
                                </SelectBox>
                            </div>
                            <div class="col-12 col-md-6 findFlight">
                                <div class="plane-forInputBox forButton">
                                    <button
                                        class="findFlightButton"
                                        @click="
                                            $router.push({
                                                name: 'PlaneDetails',
                                            })
                                        "
                                    >
                                        Tìm chuyến bay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.background {
    background-image: url(@/assets/planeBookingBG.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: 25%;
    background-position-y: center;
}
.bookingWrapper {
    width: 100%;
    max-width: 1000px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        rgba(57, 65, 80, 0.8);
    color: rgba(236, 236, 246, 1);
    margin: 8% auto;
    font-family: 'Work Sans';
    padding: 50px 0px;
    border-radius: 5px;
}

.forButton {
    width: 100%;
}
.inputField {
    position: relative;
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
.plane-forInputBox {
    width: 100%;
    white-space: nowrap;
    margin-bottom: 20px;
}
.icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20%;
    text-align: center;
    font-size: 20px;
    color: black;
}
.places {
    padding: 0 60px;
}
.date {
    width: 100%;
    flex-direction: row-reverse;
    padding: 0 20px;
}
.date::-webkit-calendar-picker-indicator {
    font-size: 25px;
    background-image: url(@/assets/SVGs/plane_calendar.svg);
}
.switch {
    position: relative;
    display: inline-block;
    width: 17px;
    height: 17px;
    margin: 0;
    margin-right: 20px;
}
.switch input {
    opacity: 0;
    height: 0;
    width: 0;
}
.switch input:checked + .roundCheckbox {
    background-color: #0397ff;
}
.roundCheckbox {
    position: absolute;
    cursor: pointer;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f9faff;
    border: 3px solid #f9faff;
    transition: all 0.2s;
    border-radius: 50%;
}
.date[disabled] {
    color: transparent;
}
.number {
    width: 100%;
    padding-right: 40px;
}
.addSeat {
    position: absolute;
    z-index: 1;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    width: 30px;
}
.findFlight {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
}
.findFlightButton {
    height: 44px;
    width: 70%;
    border-radius: 98px;
    outline: none;
    border: none;
    color: rgba(249, 250, 255, 1);
    background-color: #0397ff;
}
@media only screen and (min-width: 992px) {
    .background {
        background-size: 100% auto;
        background-position-x: 0;
        background-position-y: 0;
    }
}
</style>
