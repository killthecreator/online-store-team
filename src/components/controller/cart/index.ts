import { Controller } from '../';
import { Model } from '../../model';
import { CartView } from '../../view/cart/index';
export class CartController extends Controller {
    /*model: Model;
  view: CartView;*/
    /*url: string;*/
    constructor(/*model: Model, productView: CartView /*url: string*/) {
        super();
        /* this.url = url;*/
        /*this.model = model;
     this.view = productView;*/
    }

    setupPage(location: string, view: CartView, model: Model): void {
        const locationArr = location.split('/');
        const products = model.cart;
        if (!products) throw new Error(`There is no ${locationArr[2]} among our products`);
        view.drawMain(products);

        this.configPage(model);
    }

    configPage(model: Model) {
        this.turnOffSearch();
        this.productAmount(model);
    }

    turnOffSearch() {
        const search: HTMLDivElement | null = document.querySelector('.search-wrapper');
        if (!search) throw new Error('there is no search block');
        search.style.display = 'none';
    }

    productAmount(model: Model) {
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
            plus.addEventListener('click', () => {
                if (ourProduct.product.amount > 0) {
                    ourProduct.amount += 1;
                    ourProduct.product.amount -= 1;
                    amountDiv.innerHTML = ourProduct.amount.toString();

                    const cartCount = document.querySelector('.cart-wrapper__count');
                    if (!cartCount) throw new Error('There is no cart Count');
                    let num: number = 0;
                    model.cart.forEach((product) => (num += product.amount));
                    cartCount.innerHTML = num.toString();
                }
            });
            minus.addEventListener('click', () => {
                if (ourProduct.amount > 0) {
                    ourProduct.amount -= 1;
                    ourProduct.product.amount += 1;
                    amountDiv.innerHTML = ourProduct.amount.toString();

                    const cartCount = document.querySelector('.cart-wrapper__count');
                    if (!cartCount) throw new Error('There is no cart Count');
                    let num: number = 0;
                    model.cart.forEach((product) => (num += product.amount));
                    cartCount.innerHTML = num.toString();
                }
            });
        });
    }
}
