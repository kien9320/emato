/* eslint-disable global-require */
export default {
    namespaced: true,
    state: () => ({
        products: [
            {
                id: 1,
                name: 'Alan Aztec - Zeppelin Bass Machine VS Vive La France',
                img: require('@/assets/MockProducts/ViveMachine.jpg'),
                price: 53831,
                inStock: true,
                shop: 'Alan Aztec',
                category: 'HardBass',
                details: `Alan Aztec - Vive La France (feat. Stellys)
                INSTAGRAM : https://www.instagram.com/_stellys/
                YT : https://www.youtube.com/channel/UCsuy...
    
                Alan Aztec - Zeppelin Bass Machine (feat. R5on11c)
                INSTA: https://www.instagram.com/r5on11c/`,
            },
            {
                id: 2,
                name: 'Rockefeller Street / Eurobeat Remix (w/@Keisari)',
                img: require('@/assets/MockProducts/RockefellerBeat.jpg'),
                price: 3913361,
                inStock: true,
                shop: 'Turbo',
                category: 'EuroBeat',
                details: `1 2 7 3, way too much Initial D
                Go check Keisari out. He's severely underrated and makes better Eurobeat than I do: 
                https://www.youtube.com/channel/UCfgV...`,
            },
            {
                id: 3,
                name: 'Ryu ga Gotoku Zero - OST [Side B] - 35 - Friday Night [EXTENDED]',
                img: require('@/assets/MockProducts/FridayNight.jpg'),
                price: 4893376,
                inStock: true,
                shop: 'Yakuza',
                category: 'Disco',
                details: `Friday Night from Yakuza 0. I like this song but it's too short so I extended it.
                Lyrics below. Please enjoy.`,
            },
            {
                id: 4,
                name: 'i got blitzed and sang country road',
                img: require('@/assets/MockProducts/CountryRoad.jpg'),
                price: 7935091,
                inStock: true,
                shop: 'Senzawa',
                category: 'Country',
                details: `shrieking banshee discovers cowboy hat`,
            },
            {
                id: 5,
                name: '踊り子 / Vaundy: MUSIC VIDEO',
                img: require('@/assets/MockProducts/OdorikoVaundy.jpg'),
                price: 37745113,
                inStock: true,
                shop: 'Vaundy',
                category: 'J-pop',
                details: `それは魔法のような一目の恋

                Made in Vaundy_ART Work Studio`,
            },
            {
                id: 6,
                name: 'Parov Stelar - Booty Swing',
                img: require('@/assets/MockProducts/BootySwing.jpg'),
                price: 69866199,
                inStock: true,
                shop: 'Parov Stelar',
                category: 'Swing',
                details: `Believe Music (on behalf of Etage Noir Recordings); LatinAutorPerf, SOCAN RR, ASCAP, and 10 Music Rights Societies`,
            },
            {
                id: 7,
                name: 'WALK THE MOON - Shut Up and Dance (Audio)',
                img: require('@/assets/MockProducts/ShutUpAndDance.jpg'),
                price: 29167821,
                inStock: true,
                shop: 'WALK THE MOON',
                category: 'Dance Pop',
                details: `"Shut Up and Dance" by WALK THE MOON`,
            },
            {
                id: 8,
                name: 'DOOM Eternal - The Only Thing They Fear Is You [New Version with Old Build Up]',
                img: require('@/assets/MockProducts/TheOnlyThingTheyFear.jpg'),
                price: 8492414,
                inStock: true,
                shop: 'DOOM Eternal',
                category: 'Metal',
                details: `I added the build up from the game rip version into the official release.`,
            },
            {
                id: 9,
                name: 'Plastic Love (cyberpunk/synthwave remix)',
                img: require('@/assets/MockProducts/PlasticLoveCyber.jpg'),
                price: 5562632,
                inStock: true,
                shop: 'Astrophysics',
                category: 'CyberPunk/SynthWave',
                details: `The legendary Mariya Takeuchi's Plastic Love
                Artwork based on photo by Alan Levenson (www.alanlevenson.com).`,
            },
            {
                id: 10,
                name: `𝓜𝓲𝓴𝓾'𝓼 𝓡𝓮𝓪𝓵 𝓗𝓮𝓻𝓸`,
                img: require('@/assets/MockProducts/MikuRealHero.jpg'),
                price: 919926,
                inStock: true,
                shop: 'Astrophysics',
                category: 'Synthwave',
                details: `Hatsune Miku called me earlier and said she wanted to pay a tribute to this amazing movie. Drive turned 10 years old in 2021 and we made this little tribute to our favorite human bean. `,
            },
            {
                id: 11,
                name: `Alan Aztec - HARDBASS HISTORY 2 (77K Special)`,
                img: require('@/assets/MockProducts/HardbassHistory.jpg'),
                price: 1516108,
                inStock: true,
                shop: 'Alan Aztec',
                category: 'Hardbass',
                details: `Thank You so much for 77k Subscribers! Please enjoy this mega super mix mash up of my songs this year!`,
            },
            {
                id: 12,
                name: `Free TEMPO - Prelude`,
                img: require('@/assets/MockProducts/FreeTEMPOPrelude.jpg'),
                price: 2060806,
                inStock: true,
                shop: 'Free TEMPO',
                category: 'Electronica House',
                details: `From the album "Oriental Quaint & Imagery"`,
            },
            {
                id: 13,
                name: `Avril Lavigne - Girlfriend (Official Video)`,
                img: require('@/assets/MockProducts/AvrilGirlfriend.jpg'),
                price: 601102754,
                inStock: true,
                shop: 'Avril Lavigne',
                category: 'Pop',
                details: `Avril Lavigne's official music video for 'Girlfriend'.`,
            },
            {
                id: 14,
                name: `Яed cideR - ft.Hatsune Miku`,
                img: require('@/assets/MockProducts/RedCider.jpg'),
                price: 249732,
                inStock: true,
                shop: '23.exe',
                category: 'Electronic',
                details: `4th album "LIME"から`,
            },
        ],
    }),
    getters: {
        ReturnAllProducts: (state) => {
            return state.products;
        },
        ReturnProduct: (state) => (index) => {
            return state.products.find(({ id }) => id === index);
        },
    },
};
