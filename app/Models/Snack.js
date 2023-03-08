import { appState } from "../AppState.js"

export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }


  get SnackTemple() {
    return `
    <h2 class="col-4 bg-success p-2 rounded text-light">${this.name}</h2>
    `
  } 


  // get CardTemple() {
  //   return `
  //   <div class="col-4">
  //   <div class="card border-0 elevation-5 "><img src="${this.imgUrl}" alt="">
  //     <div class="card-body">
  //       <h3 class="card-title">${this.name}</h3>
  //       <div class="d-flex justify-content-between">
  //         <h3 class="card-text">$${this.price.toFixed(2)}</h3>
  //         <button class="btn btn-success">BUY</button>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  //   `
  // }
}