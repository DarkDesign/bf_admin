export default {
    namespaced: true,
    state: () => ({
        darkMode: LS.darkmode
    }),
    mutations: {
        setDarkMode(state, payload){
            if(payload === undefined) payload = false
            state.darkMode = (payload == true)
            localStorage.setItem('darkmode', payload)
        },
    },
    actions: { },
    getters: {
        getDarkMode(state){
            return state.darkMode
        }
    }
}