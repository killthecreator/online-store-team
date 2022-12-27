import { Controller } from '../';
import { Model } from '../../model';
import { CartView } from '../../view/cart/index';
import { URL } from '../../../utils/urlInterface';
import { selectorChecker } from '../../../utils/selectorChecker';
import { route } from '../../../routing/routing';
export class CartController extends Controller {
    url: Partial<URL>;
    constructor() {
        super();
        this.url = {};
    }

    setupPage(location: string, view: CartView, model: Model): void {
        const locationArr = location.split('/');
        const products = model.cart;
        if (!products) throw new Error(`There is no ${locationArr[2]} among our products`);
        view.drawMain(products);
        this.configPage(model, view);
    }

    configPage(model: Model, view: CartView) {
        this.turnOffSearch();
        this.productAmount(model, view);
        this.areProductsInCart(model);
    }

    turnOffSearch() {
        const search: HTMLDivElement | null = document.querySelector('.search-wrapper');
        if (!search) throw new Error('there is no search block');
        search.style.display = 'none';
    }

    productAmount(model: Model, view: CartView) {
        const productAmounts = document.querySelectorAll('.product');
        productAmounts.forEach((div) => {
            const productName = div.querySelector('.product__name')?.innerHTML;
            const amountDiv = div.querySelector('.product__amount-value');
            const ourProduct = model.cart.find((prodObj) => prodObj.product.name === productName);
            if (!ourProduct) throw new Error('There is no our Product');
            if (!amountDiv) throw new Error('There is no amount div');
            const plus = div.querySelector('.product__amount-plus');
            const minus = div.querySelector('.product__amount-minus');
            if (!plus) throw new Error('There is no plus button');
            if (!minus) throw new Error('There is no minus button');
            const amountStore = selectorChecker(div, '.product__stock');
            const sumPrice = selectorChecker(div, '.product__price');
            const cartState = selectorChecker(document, '.cart-wrapper__state');
            const cartCount = selectorChecker(document, '.cart-wrapper__count');
            plus.addEventListener('click', () => {
                if (ourProduct.product.amount > 0) {
                    ourProduct.amount += 1;
                    ourProduct.product.amount -= 1;
                    amountDiv.innerHTML = ourProduct.amount.toString();

                    let num = 0;
                    model.cart.forEach((product) => (num += product.amount));
                    cartCount.innerHTML = num.toString();

                    amountStore.innerHTML = `Stock: ${ourProduct.product.amount.toString()}`;
                    sumPrice.innerHTML = `${(ourProduct.product.price * ourProduct.amount).toString()} $`;

                    cartState.innerHTML = `Cart total: ${model.cart
                        .reduce((res, cur) => res + cur.product.price * cur.amount, 0)
                        .toString()} $`;
                }
                //console.log('добавим в localStorage');
                localStorage.setItem('cartCadence', JSON.stringify(model.cart));
            });
            minus.addEventListener('click', () => {
                if (ourProduct.amount > 0) {
                    ourProduct.amount -= 1;

                    ourProduct.product.amount += 1;
                    amountDiv.innerHTML = ourProduct.amount.toString();

                    let num = 0;
                    model.cart.forEach((product) => (num += product.amount));
                    cartCount.innerHTML = num.toString();

                    amountStore.innerHTML = `Stock: ${ourProduct.product.amount.toString()}`;
                    sumPrice.innerHTML = `${(ourProduct.product.price * ourProduct.amount).toString()} $`;
                    //console.log(ourProduct.amount == 0);
                    if (ourProduct.amount == 0) {
                        model.cart.splice(model.cart.indexOf(ourProduct), 1);
                        view.drawMain(model.cart);
                        this.configPage(model, view);
                    }

                    cartState.innerHTML = `Cart total: ${model.cart
                        .reduce((res, cur) => res + cur.product.price * cur.amount, 0)
                        .toString()} $`;
                }
                //console.log('добавим в localStorage');
                localStorage.setItem('cartCadence', JSON.stringify(model.cart));
            });
        });
    }

    areProductsInCart(model: Model) {
        const noProducts = selectorChecker(document, '.no-prods-in-cart') as HTMLDivElement;
        const productsHeader = selectorChecker(document, '.products__header') as HTMLDivElement;
        const summary = selectorChecker(document, '.summary') as HTMLDivElement;

        noProducts.style.display = model.cart.length === 0 ? 'flex' : 'none';

        productsHeader.style.display = model.cart.length === 0 ? 'none' : 'flex';
        summary.style.display = model.cart.length === 0 ? 'none' : 'flex';
    }
}
