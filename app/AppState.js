import { Snack } from "./Models/Snack.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/Snack').Snack[]} */
  snacks = [
    new Snack({name: '🥦 Broccolini', price: 3.50, imgUrl: 'https://images.unsplash.com/photo-1606503721828-677d46a6814b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJyb2Njb2xpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}),
    new Snack({name: '🥗 Healthy Boy Bowl', price: 9.75, imgUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}),
    new Snack({name: '🍖 Kebabs', price: 10.50, imgUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2ViYWJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60'})

  ]

  /** @type {import('./Models/Snack').Snack|null} */
  activeSnack = null

  money = 0
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
