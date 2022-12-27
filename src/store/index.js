import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import anime from './anime'
import ganres from './ganres'
import slides from './slides'

const store = new Vuex.Store({
     
    modules: {
        anime,
        ganres,
        slides
    }

})
export default store