import './product.css';
import { GlobalView } from '../index';
import { Product } from './../../model/data';
import { ProductController } from './../../controller/product';

//TODO ProductController.brandLogo(product.brand)

export class ProductView extends GlobalView {
  constructor () {
    super();
  }

  public drawProduct = (product: Product) => {
    const mainDiv = document.querySelector(".main");
    if (mainDiv === null) throw new Error("There is no #main element in the body");
    mainDiv.innerHTML = `
      <section class="bread-crumbs">
        <a class="bread-crumbs__link" href="/home">Main</a> >> <a class="bread-crumbs__link" href="/category">${product.category}</a> >> <a class="bread-crumbs__link" href="/brand">${product.brand}</a> >> <a class="bread-crumbs__link" href="/product">${product.name}</a>
      </section>

      <section class="product">
        <div class="product__photos">
          <div class="product__main-photo" style="background-image: url(${product.photos[0] || '../../../assets/default-product-image.jpg'};"></div>
          <div class="product__additional-photos">
            ${product.photos.reduce((res, cur) => res + `
              <div class="product__additional-photo" style="background-image: url(${cur});"></div>
            `, '')}
          </div>
        </div>
        <div class="product__description">
          <div class="product__description-header">
            <div class="product__description-naming">
              <h1 class="product__description-name">${product.name}</h1>
              <p class="product__description-category">${product.category}</p>
            </div>
            <div class="product__description-brand" style="background-image: url(${ProductController.brandLogo(product.brand)});"></div>
          </div>
          <div class="product__description-text">${product.description}</div>
          <div class="product__description-info">
            <div class="product__description-amount">${product.amount}</div>
            <div class="product__description-price">${product.price}</div>
          </div>
          <div class="product__description-buttons">
            <button class="product__description-add-to-cart button">Add to cart</button>
            <button class="product__description-by-now button">Buy now</button>
          </div>
        </div>
      </section>
    `;

    const search = document.querySelector(".search-wrapper") as HTMLDivElement;
    search.style.display = "none";
  }
}
