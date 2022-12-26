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
        this.pagination(model);
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

                    cartState.innerHTML = `Cart total: ${model.cart.reduce((res, cur) => res + cur.product.price * cur.amount, 0).toString()} $`;
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

                    cartState.innerHTML = `Cart total: ${model.cart.reduce((res, cur) => res + cur.product.price * cur.amount, 0).toString()} $`;
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

      noProducts.style.display = model.cart.length === 0 ? 'flex': 'none';

      productsHeader.style.display = model.cart.length === 0 ? 'none': 'flex';
      summary.style.display = model.cart.length === 0 ? 'none': 'flex';
    }

    pagination(model: Model) {
      const itemInput = selectorChecker(document, '.products__header-items-input') as HTMLInputElement;
      const tempValue = '3';
      itemInput.value = tempValue;
      //if (this.url.itemInputValue) itemInput.value = this.url.itemInpulValue;  TODO ПОЛУЧИТЬ ЗНАЧЕНИЯ ИЗ КВЕРИ ЕСЛИ ОНО ТАМ ЕСТЬ
      let pagesAmount = Math.ceil(model.cart.length / Number(itemInput.value));

      const pageInput = selectorChecker(document, '.products__header-pages-input') as HTMLInputElement;
      const tempPageNumber = '1';
      pageInput.value = tempPageNumber;
      //if (this.url.pagesInputValue) itemInput.value = this.url.pagesInputValue;  TODO ПОЛУЧИТЬ ЗНАЧЕНИЯ ИЗ КВЕРИ ЕСЛИ ОНО ТАМ ЕСТЬ

      const decrease = selectorChecker(document, '.products__header-pages-decrease') as HTMLDivElement;

      const increase = selectorChecker(document, '.products__header-pages-increase') as HTMLDivElement;

      const productsDiv: NodeListOf<HTMLDivElement> = document.querySelectorAll('.product');

      pageInput.addEventListener('input',  () => {
        if ((!pageInput.value.match(/^[1-9]$/) && pageInput.value !== '')) {
          pageInput.value = tempPageNumber;
        }

        if (Number(pageInput.value) > pagesAmount) {
          pageInput.value = tempPageNumber;
        }
          let from = Number(itemInput.value) * (Number(pageInput.value) - 1);
          let to = from + Number(itemInput.value);

          productsDiv.forEach((el, i) =>  el.style.display = i < from ? 'none' : i >= to ? 'none' : 'flex');

          // добавить в урл itemInput.value и pageInput.value
        }
      )

      itemInput.addEventListener('input',  () => {
        if (!itemInput.value.match(/^[1-9]$/) && itemInput.value !== '' ) {
          itemInput.value = tempValue;
        }

        if(Number(itemInput.value) > model.cart.length) {
          productsDiv.forEach(el => el.style.display = 'flex');
          pageInput.value = tempPageNumber;
        } else {
          pagesAmount = Math.ceil(model.cart.length / Number(itemInput.value));
          pageInput.value = tempPageNumber;
          productsDiv.forEach((el, i) =>  el.style.display = i < Number(itemInput.value) ? 'flex' : 'none');
        }

           // добавить в урл itemInput.value и pageInput.value

        }
      )

      decrease.addEventListener('click', () => {
        pageInput.value = (Number(pageInput.value) -1).toString();

        if ((!pageInput.value.match(/^[1-9]$/) && pageInput.value !== '')) {
          pageInput.value = tempPageNumber;
        }

        if (Number(pageInput.value) > pagesAmount) {
          pageInput.value = tempPageNumber;
        }

        let from = Number(itemInput.value) * (Number(pageInput.value) - 1);
        let to = from + Number(itemInput.value);

        productsDiv.forEach((el, i) =>  el.style.display = i < from ? 'none' : i >= to ? 'none' : 'flex');

        // добавить в урл itemInput.value и pageInput.value
      });
      increase.addEventListener('click', () => {
        pageInput.value = (Number(pageInput.value) + 1).toString();

        if ((!pageInput.value.match(/^[1-9]$/) && pageInput.value !== '')) {
          pageInput.value = tempPageNumber;
        }

        if (Number(pageInput.value) > pagesAmount) {
          pageInput.value = (Number(pageInput.value) - 1).toString();
        }

        let from = Number(itemInput.value) * (Number(pageInput.value) - 1);
        let to = from + Number(itemInput.value);

        productsDiv.forEach((el, i) =>  el.style.display = i < from ? 'none' : i >= to ? 'none' : 'flex');

        // добавить в урл itemInput.value и pageInput.value
      });
    }
}
