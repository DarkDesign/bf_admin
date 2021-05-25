import {createRouter, createWebHashHistory} from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import { createMetaMenu } from "../function/function";

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            menu: createMetaMenu({
                name: 'Главная',
                title: 'Панель управления',
                icon: 'speedometer2',
                position: 1
            })
        }
    },
    {
        path: '/setting',
        name: 'Setting',
        meta: {
            menu: createMetaMenu({
                name: 'Настройки',
                title: 'Настройки бота',
                icon: 'gear',
                position: 99
            })
        },
        component: () => import(/* webpackChunkName: "setting" */ '../views/Setting.vue'),

    },
    {
        path: '/proxy',
        name: 'Proxy',
        meta: {
            menu: createMetaMenu({
                name: 'Прокси',
                title: 'Управление прокси',
                icon: 'shield',
                position: 4
            }),
        },
        component: () => import(/* webpackChunkName: "proxy" */ '../views/Proxy')
    },
    {
        path: '/profiles',
        name: 'Profile',
        meta: {
            menu: createMetaMenu({
                name: 'Профиля',
                title: 'Управление профилями',
                icon: 'people',
                position: 3
            })
        },
        component: () => import(/* webpackChunkName: "profiles" */ '../views/Profile')
    },
    {
        path: '/bots',
        name: 'Bot',
        meta: {
            menu: createMetaMenu({
                name: 'Боты',
                title: 'Управление ботами',
                icon: 'plug',
                position: 2
            })
        },
        component: () => import(/* webpackChunkName: "bots" */ '../views/Bot'),
        children:[
            {
                path: '',
                name: 'botDashboard',
                meta:{
                    menu: createMetaMenu({
                        type: 'none',
                        parent: 'Bot',
                        title: 'Управление ботами'
                    })
                },
                component: () => import(/* webpackChunkName: "botDashboard" */ '../module/Bot/m-bot-dashboard')
            },
            {
                path: 'action',
                name: 'botChangeAction',
                meta:{
                    menu: createMetaMenu({
                        type: 'side',
                        title: 'Управление действиями',
                        icon: 'bar-chart-steps',
                        position: 1
                    })
                },
                component: () => import(/* webpackChunkName: "botChangeAction" */ '../module/Bot/m-bot-change-action'),
            }
        ]
    },
    {
        path: '/sites',
        name: 'Site',
        meta: {
            menu: createMetaMenu({
                //type: 'side',
                name: 'Сайты',
                title: 'Управление сайтами',
                icon: 'globe2',
                position: 5
            })
        },
        component: () => import(/* webpackChunkName: "sites" */ '../views/Site'),
        children:[
            {
                path: 'add',
                name: 'AddSite',
                meta:{
                    menu: createMetaMenu({
                        type: 'side',
                        name: 'Сайты',
                        title: 'Добавить новый сайт',
                        icon: 'plus',
                        position: 1
                    })
                },
                component: () => import(/* webpackChunkName: "AddSite" */ '../module/Site/m-site-add'),
            }
        ]
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: 'is-active',
    routes: routes
})

export default router
