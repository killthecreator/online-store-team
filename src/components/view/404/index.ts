import './404.css';
import { GlobalView } from '../index';

export class NonExistingView extends GlobalView {
  constructor () {
    super();
  }

  public draw = () => {
    const mainDiv = document.querySelector(".main");
    if (mainDiv === null) throw new Error("There is no #main element in the body");
    mainDiv.innerHTML = `
      <div class="404">404</div>
      <div class="message">Page doesn't exist</div>
    `;
  }
}
