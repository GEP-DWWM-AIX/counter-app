import { createStore } from 'vuex'

export default createStore({
    state:{
        counterFromStore: 0
    },
    getters:{
        getCounterFromStore(state){
            return state.counterFromStore
        }
    },
    actions: {
        setCounter(context){
            context.commit('updateCounter')
        }
    },
    mutations:{
        updateCounter(state){
            state.counterFromStore++
        }
    }
})

