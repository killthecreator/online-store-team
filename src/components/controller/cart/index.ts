import { Controller } from '../';
import { Model } from '../../model';
import { CartView } from '../../view/cart/index';
import { URL } from '../../../utils/urlInterface';
import { selectorChecker } from '../../../utils/selectorChecker';
import { Product } from '../../model/data';
import { PromoCode } from '../../model/data';
import MasterCard from '../../../assets/logos/cards/MasterCard.png';
import Visa from '../../../assets/logos/cards/Visa.png';
import AmericanExpress from '../../../assets/logos/cards/AmericanExpress.png';

export class CartController extends Controller {
    url: Partial<URL>;
    view: CartView;
    model: Model;
    constructor(view: CartView, model: Model) {
        super();
        this.url = {};
        this.view = view;
        this.model = model;
    }

    setupPage(location: string): void {
        const locationArr = location.split('/');

        const item = localStorage.getItem('cartCadence');
        if (item) {
            this.model.cart = JSON.parse(item) as { product: Product; amount: 1 }[];
        }

        const products = this.model.cart;
        if (!products) throw new Error(`There are no ${locationArr[2]} among our products`);
        this.fillUrl(location);
        this.view.drawMain(products);
        this.configPage();
    }

    configPage() {
        this.turnOffSearch();
        this.productAmount();
        this.areProductsInCart();
        this.pagination();
        this.promoCodding();
        this.modalWindowConfig();
    }

    turnOffSearch() {
        const search: HTMLDivElement | null = document.querySelector('.search-wrapper');
        if (!search) throw new Error('there is no search block');
        search.style.display = 'none';
    }

    productAmount() {
        const productAmounts = document.querySelectorAll('.product');
        productAmounts.forEach((div) => {
            const productName = div.querySelector('.product__name')?.innerHTML;
            const amountDiv = div.querySelector('.product__amount-value');

            const ourProduct = this.model.cart.find((prodObj) => prodObj.product.name === productName);

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
                    //чтобы корзина работала как надо и менялось динамически количество товаров в модели и на странце
                    let tempNum;
                    for (let i = 0; i < this.model.cart.length; i++) {
                      if (this.model.cart[i].product.name === ourProduct.product.name) {
                        tempNum = i;
                      }
                    }
                    if (tempNum === undefined) throw new Error('There is no such product in cart');

                    ourProduct.amount += 1;
                    ourProduct.product.amount -= 1;

                    this.model.cart[tempNum] = ourProduct;

                    amountDiv.innerHTML = ourProduct.amount.toString();

                    let num = 0;
                    this.model.cart.forEach((product) => (num += product.amount));
                    cartCount.innerHTML = num.toString();

                    amountStore.innerHTML = `Stock: ${ourProduct.product.amount.toString()}`;
                    sumPrice.innerHTML = `${(ourProduct.product.price * ourProduct.amount).toString()} $`;

                    cartState.innerHTML = `Cart total: ${this.model.cart
                        .reduce((res, cur) => res + cur.product.price * cur.amount, 0)
                        .toString()} $`;
                }
                //console.log('добавим в localStorage');
                localStorage.setItem('cartCadence', JSON.stringify(this.model.cart));
            });
            minus.addEventListener('click', () => {
                if (ourProduct.amount > 0) {
                    ourProduct.amount -= 1;

                    ourProduct.product.amount += 1;
                    amountDiv.innerHTML = ourProduct.amount.toString();

                    let num = 0;
                    this.model.cart.forEach((product) => (num += product.amount));
                    cartCount.innerHTML = num.toString();

                    amountStore.innerHTML = `Stock: ${ourProduct.product.amount.toString()}`;
                    sumPrice.innerHTML = `${(ourProduct.product.price * ourProduct.amount).toString()} $`;

                    if (ourProduct.amount == 0) {
                        const deleteProd = this.model.cart.find((prodObj) => prodObj.product.name === ourProduct.product.name);
                        if(!deleteProd) throw new Error('there is nothing to delete');
                        this.model.cart.splice(this.model.cart.indexOf( deleteProd) , 1);
                        localStorage.setItem('cartCadence', JSON.stringify(this.model.cart));
                        cartState.innerHTML = `Cart total: ${this.model.cart
                          .reduce((res, cur) => res + cur.product.price * cur.amount, 0)
                          .toString()} $`;
                        this.view.drawMain(this.model.cart);
                        this.configPage();
                    }

                    cartState.innerHTML = `Cart total: ${this.model.cart
                        .reduce((res, cur) => res + cur.product.price * cur.amount, 0)
                        .toString()} $`;
                }
                //console.log('добавим в localStorage');
                localStorage.setItem('cartCadence', JSON.stringify(this.model.cart));
            });
        });
    }

    areProductsInCart() {
        /*const item = localStorage.getItem('cartCadence');
        if (item) {
            this.model.cart = JSON.parse(item) as { product: Product; amount: 1 }[];
        }*/

        console.log(this.model.cart);
        const cartCount = selectorChecker(document, '.cart-wrapper__count');
        const cartState = selectorChecker(document, '.cart-wrapper__state');
        cartCount.innerHTML = this.model.cart.length.toString();
        cartState.innerHTML = `Cart total: ${this.model.cart
            .reduce((res, cur) => res + cur.product.price * cur.amount, 0)
            .toString()} $`;

        const noProducts = selectorChecker(document, '.no-prods-in-cart') as HTMLDivElement;
        const productsHeader = selectorChecker(document, '.products__header') as HTMLDivElement;
        const summary = selectorChecker(document, '.summary') as HTMLDivElement;
        const promoCodeBlock = selectorChecker(document, '.promo-code') as HTMLDivElement;

        noProducts.style.display = this.model.cart.length === 0 ? 'flex' : 'none';

        productsHeader.style.display = this.model.cart.length === 0 ? 'none' : 'flex';
        summary.style.display = this.model.cart.length === 0 ? 'none' : 'flex';
        promoCodeBlock.style.display = this.model.cart.length === 0 ? 'none' : 'flex';
    }

    pagination() {
        const itemInput = selectorChecker(document, '.products__header-items-input') as HTMLInputElement;
        const tempValue = '3';
        itemInput.value = tempValue;

        let pagesAmount = Math.ceil(this.model.cart.length / Number(itemInput.value));

        const pageInput = selectorChecker(document, '.products__header-pages-input') as HTMLInputElement;
        const tempPageNumber = '1';
        pageInput.value = tempPageNumber;

        const decrease = selectorChecker(document, '.products__header-pages-decrease') as HTMLDivElement;

        const increase = selectorChecker(document, '.products__header-pages-increase') as HTMLDivElement;

        const productsDiv: NodeListOf<HTMLDivElement> = document.querySelectorAll('.product');

        if (Number(itemInput.value) > this.model.cart.length) {
            productsDiv.forEach((el) => (el.style.display = 'flex'));
            pageInput.value = tempPageNumber;
        } else {
            pagesAmount = Math.ceil(this.model.cart.length / Number(itemInput.value));
            pageInput.value = tempPageNumber;
            productsDiv.forEach((el, i) => (el.style.display = i < Number(itemInput.value) ? 'flex' : 'none'));
        }

        //query
        if (this.url.pagenumber) itemInput.value = this.url.pagenumber.slice(11);
        if (this.url.pages) pageInput.value = this.url.pages.slice(6);
        //query end

        pageInput.addEventListener('input', () => {
            if (!pageInput.value.match(/^[1-9]$/) && pageInput.value !== '') {
                pageInput.value = tempPageNumber;
            }

            if (Number(pageInput.value) > pagesAmount) {
                pageInput.value = tempPageNumber;
            }
            const from = Number(itemInput.value) * (Number(pageInput.value) - 1);
            const to = from + Number(itemInput.value);

            productsDiv.forEach((el, i) => (el.style.display = i < from ? 'none' : i >= to ? 'none' : 'flex'));

            this.url.pages = `pages=${pageInput.value}`;
            this.url.pagenumber = `pagenumber=${itemInput.value}`;

            Object.keys(this.url).length !== 0
                ? window.history.replaceState({}, '', `/cart/?${Object.values(this.url).join('&')}`)
                : window.history.replaceState({}, '', `/cart`);
            // добавить в урл itemInput.value и pageInput.value
        });

        itemInput.addEventListener('input', () => {
            if (!itemInput.value.match(/^[1-9]$/) && itemInput.value !== '') {
                itemInput.value = tempValue;
            }

            if (Number(itemInput.value) > this.model.cart.length) {
                productsDiv.forEach((el) => (el.style.display = 'flex'));
                pageInput.value = tempPageNumber;
            } else {
                pagesAmount = Math.ceil(this.model.cart.length / Number(itemInput.value));
                pageInput.value = tempPageNumber;
                productsDiv.forEach((el, i) => (el.style.display = i < Number(itemInput.value) ? 'flex' : 'none'));
            }

            this.url.pages = `pages=${pageInput.value}`;
            this.url.pagenumber = `pagenumber=${itemInput.value}`;

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

            const from = Number(itemInput.value) * (Number(pageInput.value) - 1);
            const to = from + Number(itemInput.value);

            productsDiv.forEach((el, i) => (el.style.display = i < from ? 'none' : i >= to ? 'none' : 'flex'));

            this.url.pages = `pages=${pageInput.value}`;
            this.url.pagenumber = `pagenumber=${itemInput.value}`;

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

            const from = Number(itemInput.value) * (Number(pageInput.value) - 1);
            const to = from + Number(itemInput.value);

            productsDiv.forEach((el, i) => (el.style.display = i < from ? 'none' : i >= to ? 'none' : 'flex'));

            this.url.pages = `pages=${pageInput.value}`;
            this.url.pagenumber = `pagenumber=${itemInput.value}`;

            Object.keys(this.url).length !== 0
                ? window.history.replaceState({}, '', `/cart/?${Object.values(this.url).join('&')}`)
                : window.history.replaceState({}, '', `/cart`); // добавить в урл itemInput.value и pageInput.value
        });
    }

    promoCodding() {
        const promoCodeInput = selectorChecker(document, '.summary__promo-code-input') as HTMLInputElement;
        const promoCodeButton = selectorChecker(document, '.summary__confirm-promo-code');
        const promoCodeList = selectorChecker(document, '.promo-code');
        const totalPriceDiv = selectorChecker(document, '.cart-wrapper__state') as HTMLDivElement;
        const promocodedPriceDiv = selectorChecker(document, '.cart-wrapper__poromocoded') as HTMLDivElement;

        if (this.model.appliedPromo.length > 0) {
            promoCodeList.innerHTML = ``;
            this.model.appliedPromo.forEach((div) => {
                promoCodeList.append(div);
            });
        }

        promoCodeButton.addEventListener('click', () => {
            this.model.promoCodes.forEach((promocode) => {
                const appliedPromocodes = promoCodeList.querySelectorAll('.applied-promo');
                if (promocode.id === promoCodeInput.value) {
                    if (appliedPromocodes.length > 0) {
                        for (let i = 0; i < appliedPromocodes.length; i++) {
                            if (appliedPromocodes[i].id === promocode.id) {
                                alert(
                                    'Promo code has already been applied! You cannot apply this promo code more than once'
                                );
                                return;
                            }
                        }
                    }
                    console.log('No applied promocodes');
                    addPromoCodeBlock(promocode);
                    return;
                }
            });
        });

        const addPromoCodeBlock = (promo: PromoCode) => {
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
            this.model.appliedPromo.push(promoDiv);
            const deleteButton = selectorChecker(promoDiv, '.applied-promo__delete-button');
            deleteButton.addEventListener('click', () => {
                promoDiv.remove();
                this.model.appliedPromo.forEach((appliedPromo, i) => {
                    if (appliedPromo === promoDiv) {
                        this.model.appliedPromo.splice(i, 1);
                    }
                });

                if (promoCodeList.innerHTML.match(/</)) {
                    recountPerCent();
                } else {
                    totalPriceDiv.style.textDecoration = 'none';
                    promocodedPriceDiv.innerHTML = ``;
                    promocodedPriceDiv.style.display = 'none';
                }
            });

            recountPerCent();
        };

        const recountPerCent = () => {
            const perCentDivs = promoCodeList.querySelectorAll('.applied-promo__percent');
            const preCentArr = Array.from(perCentDivs).map((el) => Number(el.innerHTML.slice(0, -2)));
            const perSum: number = preCentArr.reduce((s, c) => s + c, 0);

            if (this.model.appliedPromo.length > 0) {
                totalPriceDiv.style.textDecoration = 'line-through';
                promocodedPriceDiv.innerHTML = `${Math.floor(
                    (1 - perSum / 100) * Number(totalPriceDiv.innerHTML.slice(11, -2))
                )} $`;
                promocodedPriceDiv.style.display = 'flex';
            }
        };

        const mo = new MutationObserver(recountPerCent);
        mo.observe(totalPriceDiv, { childList: true });
    }

    fillUrl(location: string) {
        const queriesArr = location.slice(7).split('&');
        queriesArr.forEach((query) => {
            if (query.startsWith('pages=')) {
                this.url.pages = query;
            }
            if (query.startsWith('pagenumber=')) {
                this.url.pagenumber = query;
            }
        });
    }

    openModalWindow() {
        const popup = document.querySelector('.popup');
        if (!popup) {
            const modalWindow = document.createElement('div');
            modalWindow.classList.add('popup');
            modalWindow.innerHTML = this.view.drawModalWindow();
            document.body.append(modalWindow);
            document.body.style.overflow = 'hidden';
            modalWindow.addEventListener('click', (e) => {
                if (e.target === modalWindow) {
                    modalWindow.remove();
                    document.body.style.overflow = 'scroll';
                }
            });
        }

        // --  F O R M    V A L I D A T I O N  -- //
        const form = selectorChecker(document, '.form') as HTMLFormElement;

        //const validateBtn = selectorChecker(form, '.form__send-button') as HTMLButtonElement;

        const name = selectorChecker(form, '.personal-details__name-input') as HTMLInputElement;
        const phone = selectorChecker(form, '.personal-details__phone-input') as HTMLInputElement;
        const address = selectorChecker(form, '.personal-details__address-input') as HTMLInputElement;
        const email = selectorChecker(form, '.personal-details__email-input') as HTMLInputElement;

        const card = selectorChecker(form, '.credit-card-details__card-number-input') as HTMLInputElement;
        const cardLogo = selectorChecker(form, '.credit-card-details__logo') as HTMLDivElement;
        const valid = selectorChecker(form, '.credit-card-details__valid-input') as HTMLInputElement;
        const cvv = selectorChecker(form, '.credit-card-details__cvv-input') as HTMLInputElement;

        //insert proper marks in phone number while input
        phone.addEventListener('input', () => {
            if (phone.value.length > '+375 (29) 111-11-11'.length || phone.value.match(/[a-z]+/i))
                phone.value = phone.value.slice(0, phone.value.length - 1);

            if (phone.value.length === 1 && phone.value.match(/[a-z]+/i)) phone.value = '';

            if (phone.value.match(/^\+[0-9]{3}$/)) {
                phone.value += ' (';
            }
            if (phone.value.match(/^\+[0-9]{3} \([0-9]{2}$/)) {
                phone.value += ') ';
            }
            if (phone.value.match(/^\+[0-9]{3} \([0-9]{2}\) [0-9]{3}$/)) {
                phone.value += '-';
            }
            if (phone.value.match(/^\+[0-9]{3} \([0-9]{2}\) [0-9]{3}-[0-9]{2}$/)) {
                phone.value += '-';
            }
        });

        card.addEventListener('input', () => {
            if (card.value.startsWith('5') || card.value.startsWith('4') || card.value.startsWith('3')) {
                cardLogo.style.width = '30px';
                cardLogo.style.height = '18px';
                cardLogo.style.backgroundSize = '30px';
                cardLogo.style.backgroundRepeat = 'no-repeat';
                cardLogo.style.marginLeft = '10px';
                cardLogo.style.alignSelf = 'center';
                cardLogo.style.backgroundPositionY = 'center';
                cardLogo.style.backgroundImage = card.value.startsWith('5')
                    ? `url('${MasterCard}')`
                    : card.value.startsWith('4')
                    ? `url('${Visa}')`
                    : `url('${AmericanExpress}')`;
            } else {
                cardLogo.style.width = '0px';
                cardLogo.style.marginLeft = '0px';
            }

            if (card.value.length > 19 || card.value.match(/[a-z]+/i))
                card.value = card.value.slice(0, card.value.length - 1);

            if (card.value.length === 1 && card.value.match(/[a-z]+/i)) card.value = '';

            if (
                card.value.match(/^[0-9]{4}$/) ||
                card.value.match(/^[0-9]{4} [0-9]{4}$/) ||
                card.value.match(/^([0-9]{4} ){2}[0-9]{4}$/)
            ) {
                card.value += ' ';
            }
        });

        valid.addEventListener('input', () => {
            if (valid.value.length > 5 || valid.value.match(/[a-z]+/i))
                valid.value = valid.value.slice(0, valid.value.length - 1);

            if (valid.value.length === 1 && valid.value.match(/[a-z]+/i)) valid.value = '';

            if (valid.value.match(/^[0-9]{2}$/)) {
                valid.value += '/';
            }
        });

        cvv.addEventListener('input', () => {
            if (cvv.value.length > 3 || cvv.value.match(/[a-z]+/i))
                cvv.value = cvv.value.slice(0, cvv.value.length - 1);

            if (cvv.value.length === 1 && cvv.value.match(/[a-z]+/i)) valid.value = '';
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            removeValidation();

            // check name
            if (!name.value) {
                createError('Cannot be blank', name);
            } else if (!name.value.match(/^[a-z]{3,} [a-z]{3,}\s*$/i)) {
                createError('Invalid name', name);
            }

            // check phone number
            if (!phone.value) {
                createError('Cannot be blank', phone);
            } else if (!phone.value.match(/^\+[0-9]{3} \([0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}\s*$/)) {
                createError('Invalid phone', phone);
            }

            // check address
            if (!address.value) {
                createError('Cannot be blank', address);
            } else if (!address.value.match(/^([0-9a-z]{5,} ){2}[0-9a-z]{5,}/i)) {
                createError('Invalid address', address);
            }

            // check email
            if (!email.value) {
                createError('Cannot be blank', email);
            } else if (
                !email.value.match(
                    /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/i
                )
            ) {
                createError('Invalid email', email);
            }

            //card number check
            if (!card.value) {
                createError('Cannot be blank', card);
            } else if (!card.value.match(/^([0-9]{4} ){3}[0-9]{4}$/)) {
                createError('Invalid card number', card);
            }

            //valid check
            if (!valid.value) {
                createError('Cannot be blank', valid);
            } else if (!valid.value.match(/^[0-9]{2}\/[0-9]{2}$/) || Number(valid.value.slice(0, 2)) > 12) {
                createError('Invalid date', valid);
            }

            //cvv check
            if (!cvv.value) {
                createError('Cannot be blank', cvv);
            } else if (!cvv.value.match(/^[0-9]{3}$/)) {
                createError('Invalid date', cvv);
            }
        });

        function removeValidation() {
            const errors = form.querySelectorAll('.error');
            errors.forEach((error) => error.remove());
        }

        function createError(message: string, el: HTMLInputElement) {
            const error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'violet';
            error.innerHTML = message;
            if (!el.parentElement) throw new Error('there is no From!');
            el.parentElement.append(error);
        }

        /*function fieldsEmptyCheck() {
        formInputs.forEach(input => {
          if (!input.value) {
            console.log('field is blank', input);
            const error = document.createElement('div')
            error.className='error';
            error.style.color = 'violet';
            error.innerHTML = 'Cannot be blank';
            if(!input.parentElement) throw new Error('there is no From!');
            input.parentElement.insertBefore(error, input);
          }
        })
      }*/
    }

    modalWindowConfig() {
        const buyNowButton = selectorChecker(document, '.summary__buy-now');

        buyNowButton.addEventListener('click', this.openModalWindow.bind(this, this.view));
    }
}
