
const slides = {

    state: {
        slides: [
            {
                id: 0,
                setBg: {
                    backgroundImage: `url(${require("@/assets/img/hero/hero-1.jpg")})`,
                },
                ganre: "Приключения",
                title: "Fate / Stay Night",
                subtitlte: "После 30 дней путешествия по миру...",
            },
            {
                id: 1,
                setBg: {
                    backgroundImage: `url(${require("@/assets/img/hero/hero-2.jpg")})`,
                },
                ganre: "Сёнен",
                title: "Naruto",
                subtitlte: "В поисках своего пути нинзя...",
            },
            {
                id: 2,
                setBg: {
                    backgroundImage: `url(${require("@/assets/img/hero/hero-3.jpg")})`,
                },
                ganre: "Фентези",
                title: "Sword Art Online",
                subtitlte: "Уровни - это просто цифры. ",
            },
        ],
    },
    getters: {
        getSlides(state) {
            return state.slides
        }
    }


}
export default slides