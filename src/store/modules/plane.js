/* eslint-disable global-require */
const cities = [
    'DAD',
    'SGN',
    'DLI',
    'PQC',
    'CXR',
    'HUI',
    'SIN',
    'PUS',
    'KIX',
    'SYD',
    'FRA',
    'JFK',
];
const places = () => {
    const from = cities[Math.floor(Math.random() * cities.length)];
    const availableDestinations = cities.filter((city) => city !== from);

    const destination =
        availableDestinations[
            Math.floor(Math.random() * availableDestinations.length)
        ];
    return {
        from,
        destination,
    };
};
const airlines = [
    {
        label: 'Vietnam Airlines',
        icon: require('@/assets/Plane/VietnamAirlines.png'),
    },
    {
        label: 'VietJet Air',
        icon: require('@/assets/Plane/VietjetAir.png'),
    },
    {
        label: 'Bamboo Airways',
        icon: require('@/assets/Plane/BambooAirways.png'),
    },
    {
        label: 'Vietravel Airways',
        icon: require('@/assets/Plane/VietravelAirways.png'),
    },
    {
        label: 'Pacific Airlines',
        icon: require('@/assets/Plane/PacificAirlines.png'),
    },
];
const availableTimeHour = [23, 10, 12, 3, 4, 18, 17, 20, 21];
const availableTimeMinute = [20, 40, 30, 15, 45, 50];
const timeFrame = () => {
    const departureTime = new Date();
    const arrivalTime = new Date();
    const randomHour = Math.floor(Math.random() * availableTimeHour.length);
    const randomMinute = Math.floor(Math.random() * availableTimeMinute.length);
    const randomDuration = Math.random() * 5;
    const durationHour = Math.floor(randomDuration);
    const durationMinute = Math.floor((randomDuration - durationHour) * 60);
    departureTime.setHours(
        availableTimeHour[randomHour],
        availableTimeMinute[randomMinute],
    );

    arrivalTime.setTime(
        departureTime.getTime() + randomDuration * 60 * 60 * 1000,
    );

    const fromAndTo = {
        takeoff: `${departureTime.getHours()}:${departureTime.getMinutes()}`,
        duration: `${durationHour}h${durationMinute}m`,
        arrival: `${arrivalTime.getHours()}:${arrivalTime.getMinutes()}`,
    };
    return fromAndTo;
};
function Flight() {
    this.time = timeFrame();
    this.airline = airlines[Math.floor(Math.random() * airlines.length)];
    this.places = places();
    this.carrier = '分からないです	(´-ω-`)';
    this.classes = [
        {
            id: 1,
            acro: 'EE',
        },
        {
            id: 2,
            acro: 'M',
        },
        {
            id: 3,
            acro: 'L',
        },
        {
            id: 4,
            acro: 'CR',
        },
    ];
}

export default {
    namespaced: true,
    state: () => ({
        flights: [],
    }),
    getters: {
        ReturnFlights: (state) => state.flights,
    },
    mutations: {
        INIT_FLIGHTS(state, n) {
            if (state.flights.length) return;
            for (let i = 0; i < n; i += 1) {
                state.flights.push(new Flight());
            }
        },
    },
};
