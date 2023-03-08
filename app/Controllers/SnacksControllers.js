import { appState } from "../AppState.js";
import { SnackService } from "../Services/SnacksServices.js";
import { setHTML } from "../Utils/Writer.js";

function _drawSnackName() {
  console.log('snackName')
}

// function _drawSnack() {
//   console.log('drawing snack')
//   let snacks = appState.snacks
//   let template = ''
//   snacks.forEach(s => template += s.CardTemple)
//   setHTML('snacks', template)
// }


export class SnacksController {
  constructor() {
    // console.log('hello');
    // _drawSnack()
  }
}
