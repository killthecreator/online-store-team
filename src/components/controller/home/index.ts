import { Controller } from '../';
import { HomeView } from '../../view/home';
import { Model } from '../../model';
import { selectorChecker } from '../../../utils/selectorChecker';
import { URL } from '../../../utils/urlInterface';
import { Product } from '../../model/data';

import {
    akg,
    bcrich,
    ephipone,
    fender,
    gibson,
    ibanez,
    jackson,
    neumann,
    rode,
    sennheiser,
    shure,
    schecter,
    mapex,
    pearl,
    ludwig,
    tama,
    dw,
    yamaha,
    roland,
    korg,
    moog,
    novation,
} from '../../../assets/logos/brands/brandLogos.js';
import { locationHandler } from '../../../routing/locationHandler';

export class HomeController extends Controller {
    url: Partial<URL>;
    view: HomeView;
    model: Model;
    constructor(view: HomeView, model: Model) {
        super();
        this.url = {};
        this.view = view;
        this.model = model;
    }

    setupPage(location: string): void {
        this.fillUrl(location);
        this.view.drawMain(this.model.categories, this.model.brands, this.model.activeProducts);
        this.configPage();
    }

    configPage() {
        this.configRanges();
        this.configFilters();
        this.configSearch();
        this.sortByGo();
        this.configView();
        this.addingToCart();
        this.copyLink();
    }

    addLogos() {
        const productBrands: NodeListOf<HTMLDivElement> = document.body.querySelectorAll('.photo-zone__brand');
        productBrands.forEach((div) => {
            switch (div.id) {
                case 'Novation':
                    div.style.backgroundImage = `url(${novation})`;
                    break;
                case 'Moog':
                    div.style.backgroundImage = `url(${moog})`;
                    break;
                case 'Korg':
                    div.style.backgroundImage = `url(${korg})`;
                    break;
                case 'Roland':
                    div.style.backgroundImage = `url(${roland})`;
                    break;
                case 'Yamaha':
                    div.style.backgroundImage = `url(${yamaha})`;
                    break;
                case 'DW':
                    div.style.backgroundImage = `url(${dw})`;
                    break;
                case 'Tama':
                    div.style.backgroundImage = `url(${tama})`;
                    break;
                case 'Ludwig':
                    div.style.backgroundImage = `url(${ludwig})`;
                    break;
                case 'Pearl':
                    div.style.backgroundImage = `url(${pearl})`;
                    break;
                case 'Mapex':
                    div.style.backgroundImage = `url(${mapex})`;
                    break;
                case 'Schecter':
                    div.style.backgroundImage = `url(${schecter})`;
                    break;
                case 'Jackson':
                    div.style.backgroundImage = `url(${jackson})`;
                    break;
                case 'Fender':
                    div.style.backgroundImage = `url(${fender})`;
                    break;
                case 'Gibson':
                    div.style.backgroundImage = `url(${gibson})`;
                    break;
                case 'Ibanez':
                    div.style.backgroundImage = `url(${ibanez})`;
                    break;
                case 'B.C.Rich':
                    div.style.backgroundImage = `url(${bcrich})`;
                    break;
                case 'Epiphone':
                    div.style.backgroundImage = `url(${ephipone})`;
                    break;
                case 'AKG':
                    div.style.backgroundImage = `url(${akg})`;
                    break;
                case 'Shure':
                    div.style.backgroundImage = `url(${shure})`;
                    break;
                case 'Rode':
                    div.style.backgroundImage = `url(${rode})`;
                    break;
                case 'Sennheiser':
                    div.style.backgroundImage = `url(${sennheiser})`;
                    break;
                case 'Neumann':
                    div.style.backgroundImage = `url(${neumann})`;
                    break;
                default:
                    alert('Нет таких значений');
            }
        });
    }

    addRouting() {
        const cards = selectorChecker(document, 'main');
        const ancors = cards.querySelectorAll('.routing');
        ancors.forEach((ancor) =>
            ancor.addEventListener('click', (e) => {
                const curTarget = e.currentTarget as HTMLElement;
                if (curTarget.id.startsWith('/product')) window.history.pushState({}, '', curTarget.id);
                locationHandler(e, curTarget.id);
            })
        );
    }

    configSearch() {
        const search = selectorChecker(document, '.search-wrapper') as HTMLDivElement;
        search.style.display = 'flex';
        const input = selectorChecker(document, '.search-wrapper__input') as HTMLInputElement;
        input.addEventListener('input', () => this.doSearch());
    }

    doSearch() {
        const input = selectorChecker(document, '.search-wrapper__input') as HTMLInputElement;
        const productCards: NodeListOf<HTMLDivElement> = document.body.querySelectorAll('.card-wrapper');
        const filter = input.value.toLowerCase();

        filter.length !== 0 ? (this.url.search = `search=${filter}`) : delete this.url.search;

        Object.keys(this.url).length !== 0
            ? window.history.replaceState({}, '', `/home/?${Object.values(this.url).join('&')}`)
            : window.history.replaceState({}, '', `/home`);

        productCards.forEach((card) => {
            const cardTitle = selectorChecker(card, '.name-zone__name');
            const cardCategory = selectorChecker(card, '.name-zone__category');
            const cardPrice = selectorChecker(card, '.name-zone__price');
            const cardStock = selectorChecker(card, '.photo-zone__store');
            if (
                cardTitle.textContent &&
                cardCategory.textContent &&
                cardPrice.textContent &&
                cardStock.textContent &&
                (cardTitle.textContent.toLowerCase().indexOf(filter) !== -1 ||
                    cardCategory.textContent.toLowerCase().indexOf(filter) !== -1 ||
                    cardPrice.textContent.toLowerCase().indexOf(filter) !== -1 ||
                    cardStock.textContent.toLowerCase().replace('Stock ', '').indexOf(filter) !== -1)
            ) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
        this.found();
    }

    configFilters() {
        const brandCheckboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('.brand-form__checkbox');
        const categoryCheckboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('.category-form__checkbox');

        const priceRanges: NodeListOf<HTMLInputElement> = document.querySelectorAll('.price-range__input');
        const stockRanges: NodeListOf<HTMLInputElement> = document.querySelectorAll('.stock-range__input');

        priceRanges.forEach((range) => range.addEventListener('input', () => this.filtration()));
        stockRanges.forEach((range) => range.addEventListener('input', () => this.filtration()));

        brandCheckboxes.forEach((brandcheckbox) => brandcheckbox.addEventListener('click', () => this.filtration()));
        categoryCheckboxes.forEach((categorycheckbox) =>
            categorycheckbox.addEventListener('click', () => this.filtration())
        );

        if (this.url.categories || this.url.brands) {
            if (this.url.categories) {
                categoryCheckboxes.forEach((checkbox) => {
                    if (this.url.categories?.includes(checkbox.id)) {
                        checkbox.checked = true;
                    }
                });
            }
            if (this.url.brands) {
                brandCheckboxes.forEach((checkbox) => {
                    if (this.url.brands?.includes(checkbox.id)) {
                        checkbox.checked = true;
                    }
                });
            }
        }
        this.filtration();
    }

    filtration() {
        const input = selectorChecker(document, '.search-wrapper__input') as HTMLInputElement;

        if (this.url.search) {
            input.value = this.url.search.replace('search=', '');
        }
        if (window.location.pathname === '/home') input.value = '';

        const brandCheckboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('.brand-form__checkbox');
        const categoryCheckboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('.category-form__checkbox');
        const categoryCheckboxesArr = Array.from(categoryCheckboxes);
        const brandCheckboxesArr = Array.from(brandCheckboxes);

        const priceRange1 = document.querySelector('.price-range__min') as HTMLDivElement;
        const priceRange2 = document.querySelector('.price-range__max') as HTMLDivElement;

        const stockRange1 = document.querySelector('.stock-range__min') as HTMLDivElement;
        const stockRange2 = document.querySelector('.stock-range__max') as HTMLDivElement;
        const activeCards = selectorChecker(document, '.cards-wrapper');
        this.model.activeProducts = this.model.products;
        const activeCategories = categoryCheckboxesArr.filter((checkbox) => checkbox.checked).map((item) => item.id);
        const activeBrands = brandCheckboxesArr.filter((checkbox) => checkbox.checked).map((item) => item.id);
        activeCategories.length !== 0
            ? (this.url.categories = `category=${activeCategories.join('↕')}`)
            : delete this.url.categories;
        activeBrands.length !== 0 ? (this.url.brands = `brand=${activeBrands.join('↕')}`) : delete this.url.brands;

        Object.keys(this.url).length !== 0
            ? window.history.replaceState({}, '', `/home/?${Object.values(this.url).join('&')}`)
            : window.history.replaceState({}, '', `/home`);

        this.model.activeProducts = this.model.activeProducts.filter((product) => {
            const categoryCheckbox = categoryCheckboxesArr.find(
                (checkbox) => product.category.indexOf(checkbox.id) !== -1
            ) as HTMLInputElement;

            const brandCheckbox = brandCheckboxesArr.find(
                (checkbox) => product.brand.indexOf(checkbox.id) !== -1
            ) as HTMLInputElement;

            if (
                (categoryCheckbox.checked || categoryCheckboxesArr.every((checkbox) => !checkbox.checked)) &&
                (brandCheckbox.checked || brandCheckboxesArr.every((checkbox) => !checkbox.checked)) &&
                product.amount >= Number(stockRange1.textContent) &&
                product.amount <= Number(stockRange2.textContent) &&
                product.price >= Number(priceRange1.textContent) &&
                product.price <= Number(priceRange2.textContent)
            )
                return true;
            return false;
        });
        activeCards.outerHTML = this.view.drawCards(this.model.activeProducts);

        this.addRouting();
        this.doSearch();
        this.configView();
        this.sortByGo();
        this.addLogos();
        this.found();
    }

    sortByGo() {
        const productCards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card-wrapper');

        const products = Array.from(productCards);

        type tempOb = {
            el: HTMLDivElement;
            price: number;
            name: string;
        };

        const tempArr: tempOb[] = [];

        products.forEach((product) => {
            const priceDiv = selectorChecker(product, '.name-zone__price');
            const priceDivHTML = priceDiv.innerHTML;
            const priceArr = priceDivHTML.match(/\d+/);
            if (!priceArr) throw new Error('there is data in element');
            const price = Number(priceArr[0]);
            tempArr.push({
                el: product,
                price: price,
                name: product.id,
            });
        });

        const cardsWrapper = selectorChecker(document, '.cards-wrapper') as HTMLDivElement;
        const sortOptions = selectorChecker(document, '.sort-options') as HTMLOptionElement;
        const sortProducts = () => {
            switch (sortOptions.value) {
                case 'priceASC':
                    tempArr.sort((a, b) => a.price - b.price);
                    break;
                case 'priceDESC':
                    tempArr.sort((a, b) => b.price - a.price);
                    break;
                case 'nameASC':
                    tempArr.sort((a, b) => {
                        const nameA = a.name.toLowerCase();
                        const nameB = b.name.toLowerCase();
                        if (nameA < nameB) return -1;
                        if (nameA > nameB) return 1;
                        return 0;
                    });
                    break;
                case 'nameDESC':
                    tempArr.sort((a, b) => {
                        const nameA = a.name.toLowerCase();
                        const nameB = b.name.toLowerCase();
                        if (nameA < nameB) return 1;
                        if (nameA > nameB) return -1;
                        return 0;
                    });
                    break;
            }
            cardsWrapper.innerHTML = '';
            tempArr.forEach((el) => cardsWrapper.append(el.el));

            this.url.sort = `sort=${sortOptions.value}`;
            window.history.replaceState({}, '', `/home/?${Object.values(this.url).join('&')}`);
        };
        if (this.url.sort) {
            sortOptions.value = this.url.sort.replace('sort=', '');
            sortProducts();
        }
        sortOptions.addEventListener('change', sortProducts);
    }

    public configRanges() {
        const sliderColor = '#cce';
        const stockRange1 = document.querySelector('.stock-range__input-1') as HTMLInputElement;
        const stockRange2 = document.querySelector('.stock-range__input-2') as HTMLInputElement;

        const stockMin = document.querySelector('.stock-range__min') as HTMLDivElement;
        stockMin.innerHTML = this.model.stockRange[0].toString();
        stockRange1.min = stockRange2.min = this.model.stockRange[0].toString();

        const stockMax = document.querySelector('.stock-range__max') as HTMLDivElement;
        stockMax.innerHTML = this.model.stockRange[1].toString();
        stockRange1.max = stockRange2.max = this.model.stockRange[1].toString();

        const priceRange1 = document.querySelector('.price-range__input-1') as HTMLInputElement;
        const priceRange2 = document.querySelector('.price-range__input-2') as HTMLInputElement;

        const priceMin = document.querySelector('.price-range__min') as HTMLDivElement;
        priceMin.innerHTML = this.model.pricesRange[0].toString();
        priceRange1.min = priceRange2.min = this.model.pricesRange[0].toString();

        const priceMax = document.querySelector('.price-range__max') as HTMLDivElement;
        priceMax.innerHTML = this.model.pricesRange[1].toString();
        priceRange1.max = priceRange2.max = this.model.pricesRange[1].toString();

        const fillSlider = (
            from: HTMLInputElement,
            to: HTMLInputElement,
            sliderColor: string,
            rangeColor: string,
            controlSlider: HTMLInputElement
        ) => {
            const rangeDistance = Number(to.max) - Number(to.min);
            const fromPosition = Number(from.value) - Number(to.min);
            const toPosition = Number(to.value) - Number(to.min);
            controlSlider.style.background = `linear-gradient(
          to right,
          ${sliderColor} 0%,
          ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
          ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
          ${rangeColor} ${(toPosition / rangeDistance) * 100}%,
          ${sliderColor} ${(toPosition / rangeDistance) * 100}%,
          ${sliderColor} 100%)`;
        };

        if (this.url.price) {
            const [from, to] = this.url.price.replace('price=', '').split('%E2%86%95');

            priceRange1.value = from;
            priceMin.textContent = from;
            priceRange2.value = to;
            priceMax.textContent = to;
        }
        if (this.url.stock) {
            const [from, to] = this.url.stock.replace('stock=', '').split('%E2%86%95');

            stockRange1.value = from;
            stockMin.textContent = from;

            stockRange2.value = to;
            stockMax.textContent = to;
        }

        function setToggleAccessible(currentTarget: HTMLInputElement, selector: string) {
            const toSlider = selectorChecker(document, selector) as HTMLInputElement;

            if (parseInt(currentTarget.value) <= parseInt(currentTarget.min)) {
                toSlider.style.zIndex = '3';
            } else {
                toSlider.style.zIndex = '0';
            }
        }

        const controlFromSlider = (
            fromSlider: HTMLInputElement,
            toSlider: HTMLInputElement,
            fromInput: HTMLDivElement,
            e?: Event
        ) => {
            const [from, to] = [parseInt(fromSlider.value), parseInt(toSlider.value)];

            fillSlider(fromSlider, toSlider, '#eee', sliderColor, toSlider);
            if (from > to) {
                fromSlider.value = to.toString();
                fromInput.textContent = to.toString();
            } else {
                fromSlider.value = from.toString();
                fromInput.textContent = from.toString();
            }
            if (e) {
                if (e.target === priceRange1) this.url.price = `price=${[from, to].join('↕')}`;
                if (e.target === stockRange1) this.url.stock = `stock=${[from, to].join('↕')}`;
            }

            Object.keys(this.url).length !== 0
                ? window.history.replaceState({}, '', `/home/?${Object.values(this.url).join('&')}`)
                : window.history.replaceState({}, '', `/home`);
        };

        const controlToSlider = (
            fromSlider: HTMLInputElement,
            toSlider: HTMLInputElement,
            toInput: HTMLDivElement,
            e?: Event
        ) => {
            const [from, to] = [parseInt(fromSlider.value), parseInt(toSlider.value)];

            fillSlider(fromSlider, toSlider, '#eee', sliderColor, toSlider);
            setToggleAccessible(toSlider, `.${toSlider.classList[1]}`);
            if (from <= to) {
                toSlider.value = to.toString();
                toInput.textContent = to.toString();
            } else {
                toSlider.value = from.toString();
                toInput.textContent = from.toString();
            }
            if (e) {
                if (e.target === priceRange2) this.url.price = `price=${[from, to].join('↕')}`;
                if (e.target === stockRange2) this.url.stock = `stock=${[from, to].join('↕')}`;
            }

            Object.keys(this.url).length !== 0
                ? window.history.replaceState({}, '', `/home/?${Object.values(this.url).join('&')}`)
                : window.history.replaceState({}, '', `/home`);
        };

        controlFromSlider(stockRange1, stockRange2, stockMin);
        controlToSlider(priceRange1, priceRange2, priceMax);

        stockRange1.addEventListener('input', (e) => controlFromSlider(stockRange1, stockRange2, stockMin, e));
        stockRange2.addEventListener('input', (e) => controlToSlider(stockRange1, stockRange2, stockMax, e));
        priceRange1.addEventListener('input', (e) => controlFromSlider(priceRange1, priceRange2, priceMin, e));
        priceRange2.addEventListener('input', (e) => controlToSlider(priceRange1, priceRange2, priceMax, e));
    }

    addingToCart() {
        const item = localStorage.getItem('cartCadence');
        if (item) {
            this.model.cart = JSON.parse(item) as { product: Product; amount: number }[];
        }

        const productCards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card-wrapper');

        const cartCount = selectorChecker(document, '.cart-wrapper__count');
        const cartState = selectorChecker(document, '.cart-wrapper__state');
        cartCount.innerHTML = this.model.cart.length.toString();
        cartState.innerHTML = `Cart total: ${this.model.cart
            .reduce((res, cur) => res + cur.product.price * cur.amount, 0)
            .toString()} $`;

        productCards.forEach((card) => {
            const stockDiv = selectorChecker(card, '.photo-zone__store');
            const addToCartButton = selectorChecker(card, '.photo-zone__add-to-cart-button');
            const cartCount = selectorChecker(document, '.cart-wrapper__count');

            let productInCart = this.model.cart.find((product) => product.product.name === addToCartButton.id);

            if (productInCart) {
                addToCartButton.innerHTML = 'remove';
            }

            const cartState = selectorChecker(document, '.cart-wrapper__state');
            const adding = () => {
                const product = this.model.products.find((product) => product.name === addToCartButton.id);
                if (!product) throw new Error('there is no such product');
                productInCart = this.model.cart.find((product) => product.product.name === addToCartButton.id);
                if (productInCart) {
                    addToCartButton.innerHTML = 'add to cart';
                    product.amount += 1;
                    this.model.cart.splice(this.model.cart.indexOf(productInCart), 1);
                } else {
                    addToCartButton.innerHTML = 'remove';
                    this.model.cart.push({ product: product, amount: 1 });
                    product.amount -= 1;
                }

                cartCount.innerHTML = this.model.cart.length.toString();
                stockDiv.innerHTML = `Stock: ${product.amount}`;

                cartState.innerHTML = `Cart total: ${this.model.cart
                    .reduce((res, cur) => res + cur.product.price * cur.amount, 0)
                    .toString()} $`;

                //console.log('добавим в localStorage');
                localStorage.setItem('cartCadence', JSON.stringify(this.model.cart));
            };

            addToCartButton.addEventListener('click', adding);
        });
    }

    configView() {
        const view1 = selectorChecker(document, '.view1') as HTMLButtonElement;
        const view2 = selectorChecker(document, '.view2') as HTMLButtonElement;

        view1.addEventListener('click', (e) => this.changeView(e.target as EventTarget));
        view2.addEventListener('click', (e) => this.changeView(e.target as EventTarget));
        if (this.url.big) {
            if (this.url.big === 'big=true') {
                this.changeView(view2);
            } else if (this.url.big === 'big=false') {
                this.changeView(view1);
            }
        }
    }

    changeView(target: EventTarget) {
        const view1 = selectorChecker(document, '.view1') as HTMLButtonElement;
        const view2 = selectorChecker(document, '.view2') as HTMLButtonElement;

        const cardWrappers = document.querySelectorAll('.card-wrapper');
        const photoZones = document.querySelectorAll('.photo-zone');
        const buttonArr: HTMLButtonElement[] = [];
        photoZones.forEach((photo) => {
            const buttons = photo.querySelectorAll('button');
            buttons.forEach((button) => buttonArr.push(button));
        });
        if (target === view1) {
            view1.classList.add('togleView');
            view2.classList.remove('togleView');
            cardWrappers.forEach((cardWrapper) => cardWrapper.classList.add('toggleCardWrapper'));
            photoZones.forEach((photo) => photo.classList.add('toglePhotoZone'));
            buttonArr.forEach((button) => button.classList.add('togleBtn'));
            this.url.big = `big=false`;
        } else {
            view2.classList.add('togleView');
            view1.classList.remove('togleView');
            cardWrappers.forEach((cardWrapper) => cardWrapper.classList.remove('togleCardWrapper'));
            photoZones.forEach((photo) => photo.classList.remove('toglePhotoZone'));
            buttonArr.forEach((button) => button.classList.remove('togleBtn'));
            this.url.big = `big=true`;
        }

        Object.keys(this.url).length !== 0
            ? window.history.replaceState({}, '', `/home/?${Object.values(this.url).join('&')}`)
            : window.history.replaceState({}, '', `/home`);
    }

    found() {
        /*let cardsWrapper: Element;
        try {*/
          const cardsWrapper = selectorChecker(document, '.cards-wrapper');
       /* } catch {
            cardsWrapper = selectorChecker(document, '.no-products');
        }*/

        const noProducts = selectorChecker(document, '.no-products') as HTMLDivElement;

        const cards: NodeListOf<HTMLDivElement> = cardsWrapper.querySelectorAll('.card-wrapper');
        const activeCards = Array.from(cards).filter((card) => card.style.display === 'flex');
        const foundDiv = selectorChecker(document, '.found');
        foundDiv.innerHTML = `Found: ${activeCards.length}`;

        if (activeCards.length === 0) {
            noProducts.style.display = 'flex';
            //cardsWrapper.innerHTML = `<section class="no-products">No products were found for your request</section>`;
        } else {
          noProducts.style.display = 'none';
        }
    }

    copyLink() {
        selectorChecker(document, '.copy-link').addEventListener('click', (e) => {
            (async () => {
                await navigator.clipboard.writeText(window.location.href);
                const target = e.target as HTMLButtonElement;
                target.textContent = 'Copied!';
                setTimeout(() => {
                    target.textContent = 'Copy link';
                }, 500);
            })().catch(() => '');
        });
    }

    fillUrl(location: string) {
        const queriesArr = location.split('&');
        queriesArr.forEach((query) => {
            if (query.startsWith('category=')) {
                this.url.categories = query;
            }
            if (query.startsWith('brand=')) {
                this.url.brands = query;
            }
            if (query.startsWith('search=')) {
                this.url.search = query;
            }
            if (query.startsWith('price=')) {
                this.url.price = query;
            }
            if (query.startsWith('stock=')) {
                this.url.stock = query;
            }
            if (query.startsWith('big=')) {
                this.url.big = query;
            }
            if (query.startsWith('sort=')) {
                this.url.sort = query;
            }
        });
    }
}
