import { appState } from "../AppState.js";


class MoniesService {
  addMoney() {
    appState.money += .25
    console.log(appState.money)
  }
}
export const moniesService = new MoniesService()