import {createStore} from 'vuex'

import Settings     from "./module/module.app-setting";
import Themes       from "./module/module.themes";
import Logs         from "./module/module.logs";
import Dashboard    from "./module/module.dashboard";
import Bots         from "./module/module.bots";
import Profiles     from "./module/module.profiles";
import Proxy        from "./module/module.proxy";
import Sites        from "./module/module.sites"

export default createStore({
    state: {
        count:{
            Bot: 0
        }
    },
    getters:{},
    mutations: {
        setBots(state, pl){
            state.count.Bot = pl
        }
    },
    actions: {},
    modules: {
        Settings: Settings,
        Dashboard: Dashboard,
        Bots: Bots,
        Proxy: Proxy,
        Profiles: Profiles,
        Themes: Themes,
        Logs: Logs,
        Sites: Sites
    }
})
