import { Model } from './../../model';

export class GlobalView {
  constructor () {

  }

  public draw = () => {
    const appDiv = document.querySelector("#app");
    if (appDiv === null) throw new Error("There is no #app element in the body");
    //TODO add images links
    //TODO implement search
    appDiv.innerHTML = `
      <header class="header">
        <div class="logo-wrapper>
          <div class="logo-wrapper__image">
            <img src="#"/>
          </div>
          <h1 class="logo-wrapper__text">Cadence</h1>
        </div>
        <div class="search-wrapper>
          <div class="search-wrapper__image">
            <img src="#"/>
          </div>
          <input class="search-wrapper__input"/>
        </div>
        <div class="cart-wrapper>
          <div class="cart-wrapper__state">
            Cart total: ${Model.cartState} $
          </div>
          <div class="cart-wrapper__image">
            <img src="#"/>
          </div>
        </div>
      </header>

      <main class="main">
      </main>

      <footer>
        <div class="github">
          <div class="github__1">
            <a href="https://github.com/killthecreator">
              <img src="./../../assets/logos/github.png"/>
            </a>
          </div>
          <div class="github__2">
            <a href="https://github.com/HelgaAthame">
              <img src="./../../assets/logos/github.png"/>
            </a>
            </div>
        </div>
        <div class="year">
          2022
        </div>
        <div class="rs-school">
          <a href="https://rs.school/js/">
            <img src="./../../assets/logos/rs_school_js.svg"/>
          </a>
        </div>
      </footer>
    `;
  }
}
