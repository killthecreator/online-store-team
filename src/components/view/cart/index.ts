import './cart.scss';
import { Product } from '../../model/data';
import { GlobalView } from '../index';

// TODO CartController.productsInCart() returns how many products in cart now
// TODO CartController.productsTotal() return price of all the products in cart
// TODO CartController.howManyInCart(product.name) returns how many is this product in cart

export class CartView extends GlobalView {
    constructor() {
        super();
    }

    public drawMain = (products: { product: Product; amount: number }[]) => {
        const mainDiv = document.querySelector('.main');
        if (mainDiv === null) throw new Error('There is no #main element in the body');
        mainDiv.innerHTML = `
      <section class="summary">
        <div class="summary__title">Summary: </div>
        <div class="summary__products">Products: ${5 /*CartController.productsInCart()*/}</div>
        <div class="summary__total">Total: ${6 /*CartController.productsTotal()*/}</div>
        <div class="summary__promo-code">
          <input class="summary__promo-code-input"/>
        </div>
        <button class="summary__confirm-promo-code">Confirm</button>
        <button class="summary__buy-now">Buy now</button>
      </section>
      <section class="products">
        <div class="products__header">
          <div class="products__header-title">Products in cart</div>
          <div class="products__header-items">
            <div class="products__header-items-title">Items</div>
            <input class="products__header-items-input" value="0">
          </div>
          <div class="products__header-pages">
            <div class="products__header-pages-decrease"><</div>
            <input class="products__header-pages-input" />
            <div class="products__header-pages-increase">></div>
          </div>
        </div>
        <div class="products__list">
          ${products.reduce(
              (res: string, product: { product: Product; amount: number }, i: number) =>
                  res +
                  `
            <div class="product ${i}">
              <div class="product__number">${i + 1}</div>
              <div class="product__picture" style="background-image: url(${product.product.photos[0]});"></div>
              <div class="product__description">
                <div class="product__name">${product.product.name}</div>
                <div class="product__desc">${product.product.description}</div>
              </div>
              <div class="product__params">
                <div class="product__stock">Stock: ${product.product.amount}</div>
                <div class="product__amount">
                  <div class="product__amount-minus"> - </div>
                  <div class="product__amount-value">${product.amount}</div>
                  <div class="product__amount-plus"> + </div>
                </div>
                <div class="product__price">${product.product.price} $</div>
              </div>
            </div>
          `,
              ''
          )}
        </div>
      </section>
      <section class="no-prods-in-cart">
        There is no products in cart
      </section>
    `;
    };

    /*drawModalWindow = () => {
        return `
      <div class="popup">
      <form class="form">
        <div class="personal-details">
          <h3 class="personal-details__title">Personal details</h3>
            <label class="personal-details__name-label label">Name<input class="personal-details__name-input input"/></label>
            <label class="personal-details__phone-label label">Phone Number<input class="personal-details__phone-input input"/></label>
            <label class="personal-details__address-label label">Delivery Address<input class="personal-details__address-input input/></label>
            <label class="personal-details__email-label label">Email<input class="personal-details__email-input input"/></label>
          </div>

          <div class="credit-card-details">
          <h3 class="credit-card-details__title">Credit card details</h3>
            <label class="credit-card-details__card-number-label label">Name<input class="credit-card-details__card-number-input input"/></label>
            <label class="credit-card-details__valid-label label">Phone Number<input class="credit-card-details__valid-input input"/></label>
            <label class="credit-card-details__cvv-label label">Delivery Address<input class="credit-card-details__cvv-input input/></label>
          </div>

          <div>
            <button class="form__send">Ok</button>
          </div>
        </form>
      </div>
    `;
    };*/
}
