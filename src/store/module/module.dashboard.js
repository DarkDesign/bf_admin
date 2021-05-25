import Axios from "axios";

export default {
    namespaced: true,
    state: () => ({
        data:{}
    }),
    mutations: {
        setStatusData(state, payload){
            state.data = payload
        }
    },
    actions: {
        getStatus(ctx){
            Axios.get(ctx.rootGetters['botsUrl']).then(response => {
                ctx.commit("setStatusData", response.data.data)
            })
        }
    },
    getters: { }
}