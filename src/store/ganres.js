
const ganres = {

    state:{
        ganres: []
    },
    mutations: {
        setGanreData(state, ganres) {
           
            state.ganres = ganres
            
        }
    },
    actions: {
        setGanreData({commit}, ganres) {
            
            commit('setGanreData', ganres)
        }
    },
    getters: {
        getGanreData(state) {
            
            return state.ganres
        },
    }




}
export default ganres