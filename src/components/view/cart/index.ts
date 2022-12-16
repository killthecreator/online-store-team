import './cart.css';

export class CartView {
  constructor () {

  }

  public draw = () => {
    const mainDiv = document.querySelector(".main");
    if (mainDiv === null) throw new Error("There is no #app element in the body");
    mainDiv.innerHTML = `

    `;
  }
}
