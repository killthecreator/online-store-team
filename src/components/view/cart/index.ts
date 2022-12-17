import './cart.css';
import { CartController } from './../../controller/cart';
import { Data } from '../../model/data';

// TODO CartController.productsInCart() returns how many products in cart now
// TODO CartController.productsTotal() return price of all the products in cart
// TODO CartController.howManyInCart(product.name) returns how many is this product in cart

export class CartView {
  constructor () {

  }

  public drawCart = (products: Data[]) => {
    const mainDiv = document.querySelector(".main");
    if (mainDiv === null) throw new Error("There is no #main element in the body");
    mainDiv.innerHTML = `
      <section class="summary">
        <div class="summary__title">Summary: </div>
        <div class="summary__products">Products: ${CartController.productsInCart()}</div>
        <div class="summary__total">Total: ${CartController.productsTotal()}</div>
        <input class="summary__promo-code-input"/>
        <button class="summary__confirm-promo-code">Confirm</button>
        <button class="summary__buy-now">Buy now</button>
      </section>
      <section class="products">
        <div class="products__header">
          <div class="products__header-title">Products in cart</div>
          <div class="products__header-items">
            <div class="products__header-items-title">Items</div>
            <input class="products__header-items-input" value=${CartController.itemsOnPage()}/>
          </div>
          <div class="products__header-pages">
            <div class="products__header-pages-decrease"></div>
            <input class="products__header-pages-input" value="5"/>
            <div class="products__header-pages-increase"></div>
          </div>
        </div>
        <div class="products__list">
          ${products.reduce((res: string, product: Data, i: number) => res + `
            <div class="product ${i}">
              <div class="product__number">${i}</div>
              <div class="product__picture" style="background-image: url(${product.photos[0]});"></div>
              <div class="product__description">
                <div class="product__name">${product.name}</div>
                <div class="product__params">${product.description}</div>
              </div>
              <div class="product__params">
                <div class="product__stock">${product.amount}</div>
                <div class="product__amount">
                  <div class="product__amount-minus"> - </div>
                  <div class="product__amount-value">${CartController.howManyInCart(product.name)}</div>
                  <div class="product__amount-plus"> + </div>
                </div>
                <div class="product__price">${product.price}</div>
              </div>
            </div>
          `, '')}
        </div>
      </section>
    `;
  }
}
