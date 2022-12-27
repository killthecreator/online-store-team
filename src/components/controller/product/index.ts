import { Controller } from '../';
import { ProductView } from '../../view/product/index';
import { Model } from '../../model/index';
import { selectorChecker } from '../../../utils/selectorChecker';

export class ProductController extends Controller {
    url: Partial<URL>;
    constructor() {
        super();
        this.url = {};
    }
    setupPage(location: string, view: ProductView, model: Model): void {
        const parsedLocation = location.replaceAll('%20', ' ');
        const locationArr = parsedLocation.split('/');
        const product = model.products.find((el) => el.name === locationArr[2]);
        if (!product) throw new Error(`There is no ${locationArr[2]} among our products`);
        view.drawMain(product);

        this.configPage(model);
    }

    configPage(model: Model) {
        this.turnOffSearch();
        this.addingToCart(model);
    }

    turnOffSearch() {
        const search: HTMLDivElement | null = document.querySelector('.search-wrapper');
        if (!search) throw new Error('there is no search block');
        search.style.display = 'none';
    }

    addingToCart(model: Model) {
        const addToCartButton = selectorChecker(document, '.product__description-add-to-cart');
        const cartCount = selectorChecker(document, '.cart-wrapper__count');
        addToCartButton.addEventListener('click', adding);
        const product = model.products.find((product) => product.name === addToCartButton.id);
        let productInCart = model.cart.find((product) => product.product.name === addToCartButton.id);

        if (productInCart) {
            addToCartButton.innerHTML = 'remove';
        }

        const cartState = selectorChecker(document, '.cart-wrapper__state');

        function adding() {
            productInCart = model.cart.find((product) => product.product.name === addToCartButton.id);
            if (!product) throw new Error('there is no such product');
            if (productInCart) {
                addToCartButton.innerHTML = 'add to cart';
                product.amount += 1;
                model.cart.splice(model.cart.indexOf(productInCart), 1);
            } else {
                addToCartButton.innerHTML = 'remove';
                model.cart.push({ product: product, amount: 1 });
                product.amount -= 1;
            }
            if (!cartCount) throw new Error('There is no cart count');
            cartCount.innerHTML = model.cart.length.toString();

            cartState.innerHTML = `Cart total: ${model.cart
                .reduce((res, cur) => res + cur.product.price * cur.amount, 0)
                .toString()} $`;

            //console.log('добавим в localStorage');
            localStorage.setItem('cartCadence', JSON.stringify(model.cart));
        }
    }
}
