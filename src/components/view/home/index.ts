import './home.scss';
import { Product, Category, Brand } from '../../model/data';
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
    constructor() {
        super();
    }

    public drawMain = (categories: Category[], brands: Brand[], products: Product[]): void => {
        let main = document.querySelector('.main');
        if (!main) {
            main = document.createElement('main');
            main.classList.add('main');
            document.body.append(main);
        }
        main.innerHTML =
            this.drawFilters(categories, brands) + this.drawRanges() + this.drawButtons() + this.drawCards(products);
    };

    public drawFilters = (categories: Category[], brands: Brand[]) => {
        return `
      <section class="filters">
        <form class="category-form">
          <div class="category-form__title">Category filters</div>
          <div class="category-form__content">
            ${categories.reduce(
                (res: string, category: Category) =>
                    res +
                    `<div class="category-form__item"><input id="${category}" class="category-form__checkbox" type="checkbox"/><label for="${category}" class="category-form__label">${category}</label></div>`,
                ''
            )}
          </div>
        </form>
        <form class="brand-form">
        <div class="brand-form__title">Brand filters</div>
          <div class="brand-form__content">
            ${brands.reduce(
                (res: string, brand: Brand) =>
                    res +
                    `<div class="brand-form__item"><input id="${brand}" class="brand-form__checkbox" type="checkbox"/><label for="${brand}" class="brand-form__label">${brand}</label></div>`,
                ''
            )}
          </div>
        </form>
      </section>
    `;
    };

    public drawRanges = () => {
        return `
      <section class="ranges">
        <div class="price-range">
          <div class="price-range__input-wrapper">
            <input type="range" value="0" step="1" max="50000" class="price-range__input price-range__input-1"/>
            <input type="range" value="20000" step="1"  max="50000" class="price-range__input price-range__input-2"/>
          </div>
          <div class="price-range__header">
            <div class="price-range__min">0</div>
            <div class="price-range__title">Price</div>
            <div class="price-range__max">5</div>
          </div>
        </div>
        <div class="stock-range">
          <div class="stock-range__input-wrapper">
            <input type="range" value="0" step="1" class="stock-range__input stock-range__input-1"/>
            <input type="range" value="1000" step="1" class="stock-range__input stock-range__input-2"/>
          </div>
          <div class="stock-range__header">
            <div class="stock-range__min">0</div>
            <div class="stock-range__title">Stock</div>
            <div class="stock-range__max">5</div>
          </div>
        </div>
      </section>
    `;
    };

    public drawButtons = () => {
        return `
      <section class="buttons">
        <button class="reset-filters button routing" id="/home" =>Reset filters</button>
        <button class="copy-link button">Copy link</button>
        <select class="sort-options">
          <option selected disabled>Sort products</option>
          <option value="priceASC">Sort by price ASC</option>
          <option value="priceDESC">Sort by price DESC</option>
          <option value="nameASC">Sort by name ASC</option>
          <option value="nameDESC">Sort by name DESC</option>
        </select>
        <div class="found">
          Found: 0
        </div>
        <div class="view-change">
          <button class="view1">⊞</button>
          <button class="view2">⊟</button>
        </div>
      </section>
    `;
    };

    public drawCards = (cards: Product[]) => {
        return `
      <section class="cards-wrapper">
        ${cards.reduce(
            (res: string, card: Product) =>
                res +
                `
          <div class="card-wrapper" id="${card.name}">

            <div class="photo-zone" style="background-image: url(${card.photos[0]});">
              <div class="photo-zone__store">
                Stock: ${card.amount}
              </div>
              <div class="photo-zone__empty routing" id='/product/${card.name}'></div>
              <div class="photo-zone__buttons">
                <div class="photo-zone__product">
                  <button class="photo-zone__product-button routing" id='/product/${card.name}'>details</button>
                </div>
                <div class="photo-zone__add-to-cart">
                  <button class="photo-zone__add-to-cart-button" id="${card.name}" ${
                    card.amount === 0 ? 'disabled' : ''
                }>add to cart</button>
                </div>
              </div>
            </div>

            <div class="name-zone">
              <div class="name-zone__brand" id="${card.brand}" style="background-image: url(${
                    /*HomeController.brandLogo(card.brand)*/ 0
                });">
              </div>
              <div class="name-zone__titles">
                <h4 class="name-zone__name routing" id='/product/${card.name}'>${card.name}</h4>
                <p class="name-zone__category">${card.category}</p>
              </div>
              <div class="name-zone__price">
                ${card.price}$
              </div>
            </div>

          </div>

        `,
            ''
        )}

      </section>
      <section class="no-products">No products were found for your request</section>
    `;
    };
}
