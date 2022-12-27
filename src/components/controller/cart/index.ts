import { Controller } from '../';
import { Model } from '../../model';
import { CartView } from '../../view/cart/index';
import { URL } from '../../../utils/urlInterface';
import { selectorChecker } from '../../../utils/selectorChecker';
import { route } from '../../../routing/routing';
import { PromoCode } from '../../model/data';
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
        this.fillUrl(location);
        view.drawMain(products);
        this.configPage(model, view);
    }

    configPage(model: Model, view: CartView) {
        this.turnOffSearch();
        this.productAmount(model, view);
        this.areProductsInCart(model);
        this.pagination(model);
        this.promoCodding(model);
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
        const promoCodeBlock = selectorChecker(document, '.promo-code') as HTMLDivElement;

        noProducts.style.display = model.cart.length === 0 ? 'flex' : 'none';

        productsHeader.style.display = model.cart.length === 0 ? 'none' : 'flex';
        summary.style.display = model.cart.length === 0 ? 'none' : 'flex';
        promoCodeBlock.style.display = model.cart.length === 0 ? 'none' : 'flex';
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

        if (Number(itemInput.value) > model.cart.length) {
            productsDiv.forEach((el) => (el.style.display = 'flex'));
            pageInput.value = tempPageNumber;
        } else {
            pagesAmount = Math.ceil(model.cart.length / Number(itemInput.value));
            pageInput.value = tempPageNumber;
            productsDiv.forEach((el, i) => (el.style.display = i < Number(itemInput.value) ? 'flex' : 'none'));
        }

        pageInput.addEventListener('input', () => {
            if (!pageInput.value.match(/^[1-9]$/) && pageInput.value !== '') {
                pageInput.value = tempPageNumber;
            }

            if (Number(pageInput.value) > pagesAmount) {
                pageInput.value = tempPageNumber;
            }
            let from = Number(itemInput.value) * (Number(pageInput.value) - 1);
            let to = from + Number(itemInput.value);

            productsDiv.forEach((el, i) => (el.style.display = i < from ? 'none' : i >= to ? 'none' : 'flex'));

            this.url.pages = `pages=${pageInput.value}`;
            this.url.pageNumber = `pageNumber=${itemInput.value}`;

            Object.keys(this.url).length !== 0
                ? window.history.replaceState({}, '', `/cart/?${Object.values(this.url).join('&')}`)
                : window.history.replaceState({}, '', `/cart`);
            // добавить в урл itemInput.value и pageInput.value
        });

        itemInput.addEventListener('input', () => {
            if (!itemInput.value.match(/^[1-9]$/) && itemInput.value !== '') {
                itemInput.value = tempValue;
            }

            if (Number(itemInput.value) > model.cart.length) {
                productsDiv.forEach((el) => (el.style.display = 'flex'));
                pageInput.value = tempPageNumber;
            } else {
                pagesAmount = Math.ceil(model.cart.length / Number(itemInput.value));
                pageInput.value = tempPageNumber;
                productsDiv.forEach((el, i) => (el.style.display = i < Number(itemInput.value) ? 'flex' : 'none'));
            }

            this.url.pages = `pages=${pageInput.value}`;
            this.url.pageNumber = `pageNumber=${itemInput.value}`;

            Object.keys(this.url).length !== 0
                ? window.history.replaceState({}, '', `/cart/?${Object.values(this.url).join('&')}`)
                : window.history.replaceState({}, '', `/cart`); // добавить в урл itemInput.value и pageInput.value
        });

        decrease.addEventListener('click', () => {
            pageInput.value = (Number(pageInput.value) - 1).toString();

            if (!pageInput.value.match(/^[1-9]$/) && pageInput.value !== '') {
                pageInput.value = tempPageNumber;
            }

            if (Number(pageInput.value) > pagesAmount) {
                pageInput.value = tempPageNumber;
            }

            let from = Number(itemInput.value) * (Number(pageInput.value) - 1);
            let to = from + Number(itemInput.value);

            productsDiv.forEach((el, i) => (el.style.display = i < from ? 'none' : i >= to ? 'none' : 'flex'));

            this.url.pages = `pages=${pageInput.value}`;
            this.url.pageNumber = `pageNumber=${itemInput.value}`;

            Object.keys(this.url).length !== 0
                ? window.history.replaceState({}, '', `/cart/?${Object.values(this.url).join('&')}`)
                : window.history.replaceState({}, '', `/cart`); // добавить в урл itemInput.value и pageInput.value
        });
        increase.addEventListener('click', () => {
            pageInput.value = (Number(pageInput.value) + 1).toString();

            if (!pageInput.value.match(/^[1-9]$/) && pageInput.value !== '') {
                pageInput.value = tempPageNumber;
            }

            if (Number(pageInput.value) > pagesAmount) {
                pageInput.value = (Number(pageInput.value) - 1).toString();
            }

            let from = Number(itemInput.value) * (Number(pageInput.value) - 1);
            let to = from + Number(itemInput.value);

            productsDiv.forEach((el, i) => (el.style.display = i < from ? 'none' : i >= to ? 'none' : 'flex'));

            this.url.pages = `pages=${pageInput.value}`;
            this.url.pageNumber = `pageNumber=${itemInput.value}`;

            Object.keys(this.url).length !== 0
                ? window.history.replaceState({}, '', `/cart/?${Object.values(this.url).join('&')}`)
                : window.history.replaceState({}, '', `/cart`); // добавить в урл itemInput.value и pageInput.value
        });
    }

    promoCodding(model: Model) {
        const promoCodeInput = selectorChecker(document, '.summary__promo-code-input') as HTMLInputElement;
        const promoCodeButton = selectorChecker(document, '.summary__confirm-promo-code');
        const promoCodeList = selectorChecker(document, '.promo-code');
        const totalPriceDiv = selectorChecker(document, '.cart-wrapper__state') as HTMLDivElement;
        const promocodedPriceDiv = selectorChecker(document, '.cart-wrapper__poromocoded') as HTMLDivElement;

        if (model.appliedPromo.length > 0) {
            promoCodeList.innerHTML = ``;
            model.appliedPromo.forEach((div) => {
                promoCodeList.append(div);
            });
        }

        promoCodeButton.addEventListener('click', () => {
            model.promoCodes.forEach((promocode, i) => {
                const appliedPromocodes = promoCodeList.querySelectorAll('.applied-promo');
                if (promocode.id === promoCodeInput.value) {
                    if (appliedPromocodes.length > 0) {
                        appliedPromocodes.forEach((div) => {
                            if (div.id === promocode.id) {
                                alert(
                                    'Promo code has already been applied! You cannot apply this promo code more than once'
                                );
                                return;
                            } else {
                                addPromoCodeBlock(promocode);
                                return;
                            }
                        });
                    } else {
                        console.log('No applied promocodes');
                        addPromoCodeBlock(promocode);
                        return;
                    }
                } /*else if (i === model.promoCodes.length - 1) {
              alert('There is no such promocode on our website');
            }*/
            });
        });

        function addPromoCodeBlock(promo: PromoCode) {
            const promoDiv = document.createElement('div');
            promoDiv.classList.add('applied-promo');
            promoDiv.id = promo.id;
            promoDiv.innerHTML = `
          <div class="applied-promo__name">${promo.name}</div>
          <div class="applied-promo__percent">${promo.percent} %</div>
          <div class="applied-promo__delete">
            <button class="applied-promo__delete-button">drop</button>
          </div>
        `;
            promoCodeList.append(promoDiv);
            model.appliedPromo.push(promoDiv);
            const deleteButton = selectorChecker(promoDiv, '.applied-promo__delete-button');
            deleteButton.addEventListener('click', () => {
                promoDiv.remove();

                if (promoCodeList.innerHTML.match(/</)) {
                    recountPerCent();
                } else {
                    totalPriceDiv.style.textDecoration = 'none';
                    promocodedPriceDiv.innerHTML = ``;
                    promocodedPriceDiv.style.display = 'none';
                }
            });

            recountPerCent();
        }

        function recountPerCent() {
            const perCentDivs = promoCodeList.querySelectorAll('.applied-promo__percent');
            const preCentArr = Array.from(perCentDivs).map((el) => Number(el.innerHTML.slice(0, -2)));
            const perSum: number = preCentArr.reduce((s, c) => s + c, 0);

            totalPriceDiv.style.textDecoration = 'line-through';
            promocodedPriceDiv.innerHTML = `${Math.floor(
                (1 - perSum / 100) * Number(totalPriceDiv.innerHTML.slice(11, -2))
            )} $`;
            promocodedPriceDiv.style.display = 'flex';
        }

        const mo = new MutationObserver(recountPerCent);
        mo.observe(totalPriceDiv, { childList: true });
    }

    fillUrl(location: string) {
        const queriesArr = location.split('&');
        queriesArr.forEach((query) => {
            if (query.startsWith('pages=')) {
                this.url.pages = query;
            }
            if (query.startsWith('pageNumber=')) {
                this.url.pageNumber = query;
            }
        });
    }
}
