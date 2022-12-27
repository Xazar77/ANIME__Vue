

const anime = {
    state: {
        anime: []
       
    },
    mutations: {
        setAnimeData(state, data) {
           
            state.anime = data
            
        },

    },
    actions: {
        setAnimeData({commit}, data) {
            commit('setAnimeData', data)
        }

    },
    getters: {
        getAnimeCard(state) {

            return state.anime
        },

        getProductSidebarCard(state) {
            return state.anime.sort((a, b) => b.views - a.views).slice(0, 5)
        }
    }
}
export default  anime
//filter(item => item.ganre === ganre)