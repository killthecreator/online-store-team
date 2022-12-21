import './global.css';
import GithubLogo from './../../assets/logos/github.png';
import RsschoolLogo from './../../assets/logos/rs_school_js.svg';
import { Controller } from './../controller';
import { Brand, Category } from '../model/data';
import ShoppingCartImg from '../../assets/logos/shopping-cart.svg';
import SearchIcon from '../../assets/logos/seach-icon.svg';
import Logo from '../../assets/logos/site-logo.jpg';

//TODO Controller.getCartState() сумма цен товаров в корзине

export class GlobalView {
  constructor () {

  }

  /*public drawMain = (categories: Category[], brands: Brand[]): void => {
    this.drawHeader();
    this.drawFooter();
  }*/

  public drawHeader = (): void => {
    const header = document.createElement('header');
    header.classList.add("header");
    //TODO add images links
    //TODO implement search
    header.innerHTML = `
    <div class="logo-wrapper">
      <a href="/home">
        <div class="logo-wrapper__image">
          <img src="${Logo}"/>
        </div>
        <h1 class="logo-wrapper__text">Cadence</h1>
      </a>
    </div>
    <div class="search-wrapper">
      <div class="search-wrapper__image">
        <img src="${SearchIcon}"/>
      </div>
      <input class="search-wrapper__input"/>
    </div>
    <div class="cart-wrapper">
      <div class="cart-wrapper__state">
        Cart total: 0${/*Controller.getCartState()*/0}$
      </div>
      <div class="cart-wrapper__image">
        <a href="/cart">
          <img src="${ShoppingCartImg}"/>
        </a>
      </div>
    </div>`;
    document.body.append(header);
};

  /*public drawMain = (): void => {
    const main = document.createElement('main');
    main.classList.add("main");
    document.body.append(main);
  }*/

  public drawFooter = (): void => {
    const footer = document.createElement('footer');
    footer.classList.add("footer");
    footer.innerHTML = `
    <div class="github">
    <div class="github__1">
      <a href="https://github.com/killthecreator">
        <img class="github__img" src="${GithubLogo}" alt="Github logo"/>
      </a>
    </div>
    <div class="github__2">
      <a href="https://github.com/HelgaAthame">
        <img class="github__img" src="${GithubLogo}" alt="Github logo"/>
      </a>
      </div>
  </div>
  <div class="year">
    2022
  </div>
  <div class="rs-school">
    <a href="https://rs.school/js/">
      <img class="rs-school__img" src="${ RsschoolLogo }" alt="RS School JS Front-end course"/>
    </a>
  </div>`;
    document.body.append(footer);
  };
}
