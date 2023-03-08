import { appState } from "../AppState.js";


class MoniesService {
  addMoney() {
    appState.money ++
    console.log(appState.money)
  }
}
export const moniesService = new MoniesService()