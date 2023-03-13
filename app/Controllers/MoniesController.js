import { appState } from "../AppState.js";
import { moniesService } from "../Services/MoniesService.js";
import { setHTML, setText } from "../Utils/Writer.js";


function _drawTotal(){
  console.log ('drawing money')
  let template = ''
  setHTML('total', '$' + template)
}

export class MoniesController {
  constructor() {
    // console.log('hello from money')
    appState.on('money', _drawTotal)
  }

  addMoney() {
    console.log('adding money')
    moniesService.addMoney()
    _drawTotal()
  }
}