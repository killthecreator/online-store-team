import './product.scss';
import { GlobalView } from '../index';
import { Product } from './../../model/data';
import { ProductController } from './../../controller/product';
import basicImage from '../../../assets/default-product-image.jpg';

//TODO ProductController.brandLogo(product.brand)

export class ProductView extends GlobalView {
    constructor() {
        super();
    }

    public drawMain = (product: Product) => {
        let main = document.querySelector('.main');
        if (!main) {
            main = document.createElement('main');
            main.classList.add('main');
            document.body.append(main);
        }
        main.innerHTML = `
      <section class="bread-crumbs">
        <a class="bread-crumbs__link" href="/home">Main</a>&nbsp;>>&nbsp;<a class="bread-crumbs__link" href="/category">${
            product.category
        }</a>&nbsp;>>&nbsp;<a class="bread-crumbs__link" href="/brand">${
            product.brand
        }</a>&nbsp;>>&nbsp;<a class="bread-crumbs__link" href="/product">${product.name}</a>
      </section>

      <section class="product">
        <div class="product__photos">
          <div class="product__additional-photos">
            ${product.photos.reduce(
                (res, cur) =>
                    res +
                    `
              <div class="product__additional-photo" style="background-image: url(${cur});"></div>
            `,
                ''
            )}
          </div>
          <div class="product__main-photo" style="background-image: url('${product.photos[0] || basicImage}');"></div>
        </div>
        <div class="product__description">
          <div class="product__description-header">
            <div class="product__description-naming">
              <h1 class="product__description-name">${product.name}</h1>
              <p class="product__description-category">${product.category}</p>
            </div>
            <div class="product__description-brand" style="background-image: url(${
                '../' /*ProductController.brandLogo(product.brand)*/
            });"></div>
          </div>
          <div class="product__description-text">${product.description}</div>
          <div class="product__description-info">
            <div class="product__description-amount">Stock: ${product.amount}</div>
            <div class="product__description-price">${product.price} $</div>
          </div>
          <div class="product__description-buttons">
            <button class="product__description-add-to-cart button" id="${product.name}"
            ${product.amount === 0 ? 'disabled' : ''}>Add to cart</button>
            <button class="product__description-buy-now button">Buy now</button>
          </div>
        </div>
      </section>
    `;

        const search = document.querySelector('.search-wrapper') as HTMLDivElement;
        search.style.display = 'none';

        /* Know where to put */
        document.querySelectorAll('.product__additional-photo').forEach((item) =>
            item.addEventListener('click', (e) => {
                const { target } = e;
                const mainPhoto = document.querySelector('.product__main-photo') as HTMLDivElement;
                if (target instanceof HTMLElement) {
                    mainPhoto.style.backgroundImage = target.style.backgroundImage;
                }
            })
        );
    };
}
