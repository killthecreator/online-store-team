import './home.css';
import { Data, Category, Brand } from '../../model/data';
import { Model } from './../../model';
import { HomeController } from './../../controller/home';
import { GlobalView } from '../index';
//TODO написать функции которые
//     -  находят и возвращают
//         findMinPrice() -- минимальную цену которая только есть cреди товаров
//         findMaxPrice() -- максимальную цену
//         findMinStock() -- минимальное колічество товаров на складе
//         findMaxStock() -- максимальное количество товаров на складе
//         found()        -- сколько товаров в данный момент отбражается на странице
//         addToCart()    -- добавляет товар в корзину
//         brandLogo(brandName) получает название бренда и возвращает ссылку на его лого

// создать в контроллере лисенеры на клик по кнопкам reset-filters, copy-link, селекту sort-options, кнопки изменения виду view1 и view2

export class HomeView extends GlobalView {
  constructor () {
    super();
  }

 /* public drawFrame = (dataObj: Data[]) => {
    const mainDiv = document.querySelector(".main");
    if (mainDiv === null) throw new Error("There is no #app element in the body");
    mainDiv.append(this.drawFilters(dataObj.data.categories));
    mainDiv.append(this.drawRanges());
    mainDiv.append(this.drawButtons());
    mainDiv.append(this.drawCards(Model.data));

    const search = document.querySelector(".search-wrapper") as HTMLDivElement;
    search.style.display = "initial";

    ЭТО БУДЕТ В КОНТРОЛЛЕРЕ, ИЗ КОНТРОЛЛЕРА БУДУТ ПЕРЕДАВАТЬСЯ НУЖНЫЕ ПАРАМЕТРЫ ИЗ МОДЕЛИ
  }*/

  public drawFilters = (categories: Category [], brands: Brand[]) => {
    return `
      <section class="filters">
        <form class="category-form">
          ${categories.reduce(
            (res: string, category: Category) => res + `<label class="category-form__label"><input class="category-form__checkbox" type="checkbox"/>${category}</label>`, ''
          )}
        </form>
        <form class="brand-form">
          ${brands.reduce(
            (res: string, brand: Brand) => res + `<label class="brand-form__label"><input class="brand-form__checkbox" type="checkbox"/>${brand}</label>`, ''
          )}
        </form>
      </section>
    `;
  }

  public drawRanges = () => {
    return `
      <section class="ranges">
        <div class="price-range">
          <input type="range" class="price-range__input" min="${HomeController.findMinPrice()}" max="${HomeController.findMaxPrice()}"/>
        </div>
        <div class="stock-range">
          <input type="range" class="stock-range__input" min="${HomeController.findMinStock()}" max="${HomeController.findMaxStock()}"/>
        </div>
      </section>
    `;
  }

  public drawButtons = () => {
    return `
      <section class="buttons">
        <button class="reset-filters button"></button>
        <button class="copy-link button"></button>
        <select class="sort-options">
          <option value="priceASC">Sort by price ASC</option>
          <option value="priceDESC">Sort by price DESC</option>
          <option value="nameASC">Sort by name ASC</option>
          <option value="nameDESC">Sort by name DESC</option>
        </select>
        <div class="found">
          Found: ${HomeController.found()}
        </div>
        <div class="view-change">
          <button class="view1"></button>
          <button class="view2"></button>
        </div>
      </section>
    `;
  }

  public drawCards = (cards: Data[]) => {
    return `
      <section class="cards-wrapper">
        ${cards.reduce((res: string, card: Data) => res + `
          <div class="card-wrapper">

            <div class="photo-zone" style="background-image: url(${card.photos[0]});">
              <div class="photo-zone__store">
                Store: ${card.amount}
              </div>
              <div class="photo-zone__buttons">
                <div class="photo-zone__product">
                  <button class="photo-zone__product-button" onclick="document.location='/product'"></button>
                </div>
                <div class="photo-zone__add-to-cart">
                  <button class="photo-zone__add-to-cart-button" onclick="HomeController.addToCart"></button>
                </div>
              </div>
            </div>

            <div class="name-zone">
              <div class="name-zone__brand" style="background-image: url(${HomeController.brandLogo(card.brand)});">
              </div>
              <div class="name-zone__titles">
                <h4 class="name-zone__name">${card.name}</h4>
                <p class="name-zone__category">${card.category}</p>
              </div>
              <div class="name-zone__price">
                ${card.price}$
              </div>
            </div>

          </div>

        `, '')}

      </section>
    `;
  }

}
