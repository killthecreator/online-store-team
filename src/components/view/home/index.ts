import './home.css';
import { Product, Category, Brand } from '../../model/data';
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

  public drawMain = (categories: Category[], brands: Brand[]): void => {
    const main = document.createElement('main');
    main.classList.add('main');
    main.innerHTML = this.drawFilters(
        categories,
        brands
    ) + this.drawRanges() /*+ this.drawButtons() /*+ this.drawCards()*/;
    document.body.append(main);
};

  public drawFilters = (categories: Category [], brands: Brand[]) => {
    return `
      <section class="filters">
        <form class="category-form">
          <div class="category-form__title">Category filters</div>
          <div class="category-form__content">
            ${categories.reduce(
              (res: string, category: Category) => res + `<div class="category-form__item"><label class="category-form__label"><input class="category-form__checkbox" type="checkbox"/>${category}</label></div>`, ''
            )}
          </div>
        </form>
        <form class="brand-form">
        <div class="brand-form__title">Brand filters</div>
          <div class="brand-form__content">
            ${brands.reduce(
              (res: string, brand: Brand) => res + `<div class="brand-form__item"><label class="brand-form__label"><input class="brand-form__checkbox" type="checkbox"/>${brand}</label></div>`, ''
            )}
          </div>
        </form>
      </section>
    `;
  }

  public drawRanges = () => {
    return `
      <section class="ranges">
        <div class="price-range">
          <div class="price-range__input-wrapper">
            <input type="range" value="3" step="1" class="price-range__input price-range__input-1" min="${0/*HomeController.findMinPrice()*/}" max="${5/*HomeController.findMaxPrice()*/}"/>
            <input type="range" value="7" step="1" class="price-range__input price-range__input-2" min="${0/*HomeController.findMinPrice()*/}" max="${5/*HomeController.findMaxPrice()*/}"/>
          </div>
          <div class="price-range__header">
            <div class="price-range__min">0</div>
            <div class="price-range__title">Price</div>
            <div class="price-range__max">5</div>
          </div>
        </div>
        <div class="stock-range">
          <div class="stock-range__input-wrapper">
            <input type="range" value="3" step="1" class="stock-range__input stock-range__input-1" min="${0/*HomeController.findMinStock()*/}" max="${5/*HomeController.findMaxStock()*/}"/>
            <input type="range" value="7" step="1" class="stock-range__input stock-range__input-2" min="${0/*HomeController.findMinStock()*/}" max="${5/*HomeController.findMaxStock()*/}"/>
          </div>
          <div class="stock-range__header">
            <div class="stock-range__min">0</div>
            <div class="stock-range__title">Stock</div>
            <div class="stock-range__max">5</div>
          </div>
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
          Found: ${/*HomeController.found()*/0}
        </div>
        <div class="view-change">
          <button class="view1"></button>
          <button class="view2"></button>
        </div>
      </section>
    `;
  }

  public drawCards = (cards: Product[]) => {
    return `
      <section class="cards-wrapper">
        ${cards.reduce((res: string, card: Product) => res + `
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
              <div class="name-zone__brand" style="background-image: url(${/*HomeController.brandLogo(card.brand)*/0});">
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
