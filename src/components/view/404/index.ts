import './404.css';

export class NonExistingView {
  constructor () {

  }

  public draw = () => {
    const mainDiv = document.querySelector(".main");
    if (mainDiv === null) throw new Error("There is no #app element in the body");
    mainDiv.innerHTML = `
      <div class="404">404</div>
      <div class="message">Page doesn't exist</div>
    `;
  }
}
