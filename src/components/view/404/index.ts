export class NonExistingView {
  constructor () {

  }

  public draw = () => {
    const mainDiv = document.querySelector(".main");
    if (mainDiv === null) throw new Error("There is no #app element in the body");
    mainDiv.innerHTML = `
   // todo 404 page
    `;
  }
}
