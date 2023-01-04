import { Controller } from '../';
import { ProductView } from '../../view/product/index';
import { Model } from '../../model/index';
import { selectorChecker } from '../../../utils/selectorChecker';
import { locationHandler } from '../../../routing/locationHandler';
import { cartController } from '../../../index';

export class ProductController extends Controller {
    url: Partial<URL>;
    view: ProductView;
    model: Model;
    constructor(view: ProductView, model: Model) {
        super();
        this.url = {};
        this.view = view;
        this.model = model;
    }
    setupPage(location: string): void {
        const productName = location.replaceAll('%20', ' ');
        const product = this.model.products.find((el) => el.name === productName);
        if (!product) throw new Error(`There is no ${productName} among our products`);
        this.view.drawMain(product);
        this.configPage();
    }

    configPage() {
        this.turnOffSearch();
        this.addingToCart();
    }

    turnOffSearch() {
        const search: HTMLDivElement | null = document.querySelector('.search-wrapper');
        if (!search) throw new Error('there is no search block');
        search.style.display = 'none';
    }

    addingToCart() {
        const adding = () => {
            productInCart = this.model.cart.find((product) => product.product.name === addToCartButton.id);
            if (!product) throw new Error('there is no such product');
            if (productInCart) {
                addToCartButton.innerHTML = 'add to cart';
                product.amount += 1;
                this.model.cart.splice(this.model.cart.indexOf(productInCart), 1);
            } else {
                addToCartButton.innerHTML = 'remove';
                this.model.cart.push({ product: product, amount: 1 });
                product.amount -= 1;
            }
            if (!cartCount) throw new Error('There is no cart count');
            cartCount.innerHTML = this.model.cart.length.toString();

            cartState.innerHTML = `Cart total: ${this.model.cart
                .reduce((res, cur) => res + cur.product.price * cur.amount, 0)
                .toString()} $`;

            localStorage.setItem('cartCadence', JSON.stringify(this.model.cart));
        };
        const addToCartButton = selectorChecker(document, '.product__description-add-to-cart');
        const cartCount = selectorChecker(document, '.cart-wrapper__count');
        addToCartButton.addEventListener('click', adding);
        const product = this.model.products.find((product) => product.name === addToCartButton.id);
        let productInCart = this.model.cart.find((product) => product.product.name === addToCartButton.id);

        if (productInCart) {
            addToCartButton.innerHTML = 'remove';
        }

        const buyNow = selectorChecker(document, '.product__description-buy-now');
        buyNow.addEventListener('click', (e) => {
            e.preventDefault();
            productInCart = this.model.cart.find((product) => product.product.name === addToCartButton.id);
            if (!product) throw new Error('there is no such product');
            if (!productInCart) {
                this.model.cart.push({ product: product, amount: 1 });
                product.amount -= 1;
            }
            if (!cartCount) throw new Error('There is no cart count');
            cartCount.innerHTML = this.model.cart.length.toString();

            cartState.innerHTML = `Cart total: ${this.model.cart
                .reduce((res, cur) => res + cur.product.price * cur.amount, 0)
                .toString()} $`;

            localStorage.setItem('cartCadence', JSON.stringify(this.model.cart));

            locationHandler('/cart');
            cartController.openModalWindow();
        });
        //ends buy now

        const cartState = selectorChecker(document, '.cart-wrapper__state');
    }
}
