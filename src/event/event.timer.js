//  Глобальный таймер проекта
const TIME_PER_TICK = {
    tick: 5000,
    newTick: 5000
}
const timerHandlers = new Map()
const $html = document.documentElement

let TIMER = {}
let FOCUS = true

function eventTick(){
    if(timerHandlers.size > 0){
        timerHandlers.forEach(handler => {
            handler.forEach(fn => {
                if(typeof fn === "function") fn(FOCUS)
            })
        })
    }
    updateTimer()
}

function updateTimer(){
    if(TIME_PER_TICK.newTick === TIME_PER_TICK.tick) return

    TIME_PER_TICK.tick = TIME_PER_TICK.newTick
    clearInterval(TIMER)
    TIMER = setInterval(() => {
        eventTick()
    }, TIME_PER_TICK.tick)
}

TIMER = setInterval(() => {
    eventTick()
}, TIME_PER_TICK.tick)



$html.addEventListener('mouseleave', () => { TIME_PER_TICK.newTick = 30000; FOCUS = false })
$html.addEventListener('mouseenter', () => { TIME_PER_TICK.newTick = 5000; FOCUS = true; updateTimer() })

export default {
    subscribeToTimer: (listener, cb) => {
        const subscribers = timerHandlers.get(listener) || []
        if(subscribers.indexOf(cb) === -1){
            timerHandlers.set(listener, [...subscribers, cb])
        }
    },
    unsubscribeFromTimer: (listener, cb) => {
        const subscribers = timerHandlers.get(listener) || []
        if(subscribers.length > 0){
            const newSubscribers = subscribers.filter(item => item !== cb)
            if(newSubscribers.length > 0){
                timerHandlers.set(listener, [...newSubscribers])
            }else{
                timerHandlers.delete(listener)
            }
        }else{
            timerHandlers.delete(listener)
        }
    }
}