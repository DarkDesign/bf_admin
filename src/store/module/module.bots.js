export default {
    namespaced: true,
    state: () => ({
        count: 5,
        data:[
            {
                "id": "137126",
                "action": "create",
                "level": "1",
                "theme": "auto",
                "proxy": "proxyserver.com:10490"
            },
            {
                "id": "137127",
                "action": "update",
                "level": "2",
                "theme": "finance",
                "proxy": "proxyserver.com:10490"
            },
            {
                "id": "137128",
                "action": "bypasses",
                "level": "3",
                "theme": "fun",
                "proxy": "proxyserver.com:10490"
            },
            {
                "id": "137129",
                "action": "update",
                "level": "2",
                "theme": "sport",
                "proxy": "proxyserver.com:10490"
            },
            {
                "id": "137130",
                "action": "create",
                "level": "1",
                "theme": "work",
                "proxy": "proxyserver.com:10490"
            }
        ]
    }),
    mutations: {
        setCount(state, payload){
            state.count = payload
        },
        setData(state, payload){
            state.data = payload
        }
    },
    actions: {},
    getters: {}
}