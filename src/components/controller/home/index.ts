import { Controller } from '../';
import { HomeView } from '../../view/home';
import { Model } from '../../model';
import { locationHandler } from '../../../routing/locationHandler';
import { selectorChecker } from '../../../utils/selectorChecker';
import { URL } from '../../../utils/urlInterface';
export class HomeController extends Controller {
    url: Partial<URL>;
    constructor() {
        super();
        this.url = {};
    }

    setupPage(location: string, view: HomeView, model: Model): void {
        this.fillUrl(location);
        view.drawHeader();
        view.drawMain(model.categories, model.brands, model.products);
        view.drawFooter();
        this.configPage(model);
    }

    configPage(model: Model) {
        this.rangesHandler(model);
        this.addRouting();
        this.filtersAndCheckboxes();
        this.sortByGo();
        this.searchGo();
        this.addingToCart(model);
        this.changeView();
        this.found();
        this.copyLink();
    }

    addRouting() {
        const main = document.querySelector('.main');
        if (!main) throw new Error('There is no main element');
        const ancors = main.querySelectorAll('.routing');
        ancors.forEach((ancor) =>
            ancor.addEventListener('click', (e) => {
                e.preventDefault();
                if (e.currentTarget === ancor) {
                    window.history.pushState({}, ``, ancor.id);
                    locationHandler(ancor.id);
                }
            })
        );
    }

    searchGo() {
        const search = selectorChecker(document, '.search-wrapper') as HTMLDivElement;
        search.style.display = 'flex';

        const productCards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card-wrapper');
        const input = selectorChecker(document, '.search-wrapper__input') as HTMLInputElement;

        const doSearch = () => {
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
                    /* card.classList.contains('active') && */
                    cardTitle.textContent &&
                    cardCategory.textContent &&
                    cardPrice.textContent &&
                    cardStock.textContent &&
                    (cardTitle.textContent.toLowerCase().indexOf(filter) !== -1 ||
                        cardCategory.textContent.toLowerCase().indexOf(filter) !== -1 ||
                        cardPrice.textContent.toLowerCase().indexOf(filter) !== -1 ||
                        cardStock.textContent.toLowerCase().replace('Stock ', '').indexOf(filter) !== -1)
                ) {
                    /* card.classList.add('active'); */
                    card.style.display = 'flex';
                    this.found();
                } else {
                    /* card.classList.remove('active'); */
                    card.style.display = 'none';
                    this.found();
                }
            });
        };

        window.addEventListener('load', () => {
            if (this.url.search) {
                input.value = this.url.search.replace('search=', '');
                doSearch();
            }
        });

        input.addEventListener('input', doSearch);
    }

    filtersAndCheckboxes() {
        const productCards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card-wrapper');

        const brandCheckboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('.brand-form__checkbox');
        const categoryCheckboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('.category-form__checkbox');
        const categoryCheckboxesArr = Array.from(categoryCheckboxes);
        const brandCheckboxesArr = Array.from(brandCheckboxes);

        const priceRanges: NodeListOf<HTMLInputElement> = document.querySelectorAll('.price-range__input');
        const stockRanges: NodeListOf<HTMLInputElement> = document.querySelectorAll('.stock-range__input');

        const filtration = () => {
            this.searchGo();
            const activeCategories = categoryCheckboxesArr
                .filter((checkbox) => checkbox.checked)
                .map((item) => item.id);
            const activeBrands = brandCheckboxesArr.filter((checkbox) => checkbox.checked).map((item) => item.id);

            activeCategories.length !== 0
                ? (this.url.categories = `category=${activeCategories.join('↕')}`)
                : delete this.url.categories;
            activeBrands.length !== 0 ? (this.url.brands = `brand=${activeBrands.join('↕')}`) : delete this.url.brands;

            Object.keys(this.url).length !== 0
                ? window.history.replaceState({}, '', `/home/?${Object.values(this.url).join('&')}`)
                : window.history.replaceState({}, '', `/home`);

            productCards.forEach((card) => {
                const categoryCheckbox = categoryCheckboxesArr.find(
                    (checkbox) => card.innerHTML.indexOf(checkbox.id) !== -1
                );
                const brandCheckbox = brandCheckboxesArr.find((checkbox) => card.innerHTML.indexOf(checkbox.id) !== -1);

                const stockDiv = selectorChecker(card, '.photo-zone__store');
                const stockDivHTML = stockDiv.innerHTML;
                const stockArr = stockDivHTML.match(/\d+/);
                if (!stockArr) throw new Error('there is data in element');
                const stockAmount = Number(stockArr[0]);

                const priceDiv = selectorChecker(card, '.name-zone__price');
                const priceDivHTML = priceDiv.innerHTML;
                const priceArr = priceDivHTML.match(/\d+/);
                if (!priceArr) throw new Error('there is data in element');
                const price = Number(priceArr[0]);

                if (!categoryCheckbox || !brandCheckbox) throw new Error('Checkboxes were not found');

                if (
                    /* card.classList.contains('active') && */
                    (categoryCheckbox.checked || categoryCheckboxesArr.every((checkbox) => !checkbox.checked)) &&
                    (brandCheckbox.checked || brandCheckboxesArr.every((checkbox) => !checkbox.checked)) &&
                    stockAmount >= Number(stockRanges[0].value) &&
                    stockAmount <= Number(stockRanges[1].value) &&
                    price >= Number(priceRanges[0].value) &&
                    price <= Number(priceRanges[1].value)
                ) {
                    card.style.display = 'flex';
                    /* card.classList.add('active'); */

                    this.found();
                } else {
                    card.style.display = 'none';
                    /* card.classList.remove('active'); */
                    this.found();
                }
            });
        };

        priceRanges.forEach((range) => range.addEventListener('input', filtration));
        stockRanges.forEach((range) => range.addEventListener('input', filtration));

        brandCheckboxes.forEach((brandcheckbox) => brandcheckbox.addEventListener('click', filtration));
        categoryCheckboxes.forEach((categorycheckbox) => categorycheckbox.addEventListener('click', filtration));

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
            filtration();
        }
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
        this.filtersAndCheckboxes();
    }

    public rangesHandler(model: Model) {
        const sliderColor = '#cce';
        const stockRange1 = document.querySelector('.stock-range__input-1') as HTMLInputElement;
        const stockRange2 = document.querySelector('.stock-range__input-2') as HTMLInputElement;
        const stockMin = document.querySelector('.stock-range__min') as HTMLDivElement;
        stockMin.innerHTML = model.stockRange[0].toString();
        stockRange1.min = model.stockRange[0].toString();
        stockRange2.min = model.stockRange[0].toString();
        const stockMax = document.querySelector('.stock-range__max') as HTMLDivElement;
        stockMax.innerHTML = model.stockRange[1].toString();
        stockRange1.max = model.stockRange[1].toString();
        stockRange2.max = model.stockRange[1].toString();

        const priceRange1 = document.querySelector('.price-range__input-1') as HTMLInputElement;
        const priceRange2 = document.querySelector('.price-range__input-2') as HTMLInputElement;
        const priceMin = document.querySelector('.price-range__min') as HTMLDivElement;
        priceMin.innerHTML = model.pricesRange[0].toString();
        priceRange1.min = model.pricesRange[0].toString();
        priceRange2.min = model.pricesRange[0].toString();
        const priceMax = document.querySelector('.price-range__max') as HTMLDivElement;
        priceMax.innerHTML = model.pricesRange[1].toString();
        priceRange1.max = model.pricesRange[1].toString();
        priceRange2.max = model.pricesRange[1].toString();

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

        function setToggleAccessible(currentTarget: HTMLInputElement, selector: string) {
            const toSlider = document.querySelector(selector) as HTMLInputElement;
            if (Number(currentTarget.value) <= Number(currentTarget.min)) {
                toSlider.style.zIndex = '3';
            } else {
                toSlider.style.zIndex = '0';
            }
        }

        const controlFromSlider = (
            fromSlider: HTMLInputElement,
            toSlider: HTMLInputElement,
            fromInput: HTMLDivElement,
            e: Event
        ) => {
            const [from, to] = getParsed(fromSlider, toSlider);

            fillSlider(fromSlider, toSlider, '#eee', sliderColor, toSlider);
            if (from > to) {
                fromSlider.value = to.toString();
                fromInput.textContent = to.toString();
            } else {
                fromInput.textContent = from.toString();
            }
            this.found();

            if (e.target === priceRange1) this.url.price = `price=${[from, to].join('↕')}`;
            if (e.target === stockRange1) this.url.stock = `stock=${[from, to].join('↕')}`;

            Object.keys(this.url).length !== 0
                ? window.history.replaceState({}, '', `/home/?${Object.values(this.url).join('&')}`)
                : window.history.replaceState({}, '', `/home`);
        };

        const controlToSlider = (
            fromSlider: HTMLInputElement,
            toSlider: HTMLInputElement,
            toInput: HTMLDivElement,
            e: Event
        ) => {
            const [from, to] = getParsed(fromSlider, toSlider);

            fillSlider(fromSlider, toSlider, '#eee', sliderColor, toSlider);
            setToggleAccessible(toSlider, `.${toSlider.classList[1]}`);
            if (from <= to) {
                toSlider.value = to.toString();
                toInput.textContent = to.toString();
            } else {
                toInput.textContent = from.toString();
                toSlider.value = from.toString();
            }
            this.found();

            if (e.target === priceRange2) this.url.price = `price=${[from, to].join('↕')}`;
            if (e.target === stockRange2) this.url.stock = `stock=${[from, to].join('↕')}`;

            Object.keys(this.url).length !== 0
                ? window.history.replaceState({}, '', `/home/?${Object.values(this.url).join('&')}`)
                : window.history.replaceState({}, '', `/home`);
        };

        function getParsed(currentFrom: HTMLInputElement, currentTo: HTMLInputElement) {
            const from = parseInt(currentFrom.value, 10);
            const to = parseInt(currentTo.value, 10);
            return [from, to];
        }

        fillSlider(stockRange1, stockRange2, '#eee', sliderColor, stockRange2);
        setToggleAccessible(stockRange2, '.stock-range__input-2');

        stockRange1.addEventListener('input', (e) => controlFromSlider(stockRange1, stockRange2, stockMin, e));
        stockRange2.addEventListener('input', (e) => controlToSlider(stockRange1, stockRange2, stockMax, e));

        fillSlider(priceRange1, priceRange2, '#eee', sliderColor, priceRange2);
        setToggleAccessible(priceRange2, '.price-range__input-2');

        priceRange1.addEventListener('input', (e) => controlFromSlider(priceRange1, priceRange2, priceMin, e));
        priceRange2.addEventListener('input', (e) => controlToSlider(priceRange1, priceRange2, priceMax, e));
    }

    addingToCart(model: Model) {
        const productCards /*: NodeListOf<HTMLDivElement>*/ = document.querySelectorAll('.card-wrapper');
        productCards.forEach((card) => {
            const stockDiv = selectorChecker(card, '.photo-zone__store');
            const addToCartButton = selectorChecker(card, '.photo-zone__add-to-cart-button');
            const cartCount = selectorChecker(document, '.cart-wrapper__count');

            let productInCart = model.cart.find((product) => product.product.name === addToCartButton.id);

            if (productInCart) {
                addToCartButton.innerHTML = 'remove';
            }

            const cartState = selectorChecker(document, '.cart-wrapper__state');

            addToCartButton.addEventListener('click', adding);
            function adding() {
                const product = model.products.find((product) => product.name === addToCartButton.id);
                if (!product) throw new Error('there is no such product');
                productInCart = model.cart.find((product) => product.product.name === addToCartButton.id);
                if (productInCart) {
                    addToCartButton.innerHTML = 'add to cart';
                    product.amount += 1;
                    model.cart.splice(model.cart.indexOf(productInCart), 1);
                } else {
                    addToCartButton.innerHTML = 'remove';
                    model.cart.push({ product: product, amount: 1 });
                    product.amount -= 1;
                }

                cartCount.innerHTML = model.cart.length.toString();
                stockDiv.innerHTML = `Stock: ${product.amount}`;

                cartState.innerHTML = `Cart total: ${model.cart
                    .reduce((res, cur) => res + cur.product.price * cur.amount, 0)
                    .toString()} $`;
            }
        });

        /* const addToCartButtons = document.querySelectorAll('.photo-zone__add-to-cart-button');
        const cartCount = document.querySelector('.cart-wrapper__count');
        addToCartButtons.forEach((button) => {
            button.addEventListener('click', adding);
            function adding() {
                if (!button) throw new Error('there is no addToCartButton');
                const product = model.products.find((product) => product.name === button.id);
                if (!product) throw new Error('there is no such product');
                const productInCart = model.cart.find((product) => product.product.name === button.id);
                if (productInCart) {
                    button.innerHTML = 'add to cart';
                    product.amount += 1;
                    model.cart.splice(model.cart.indexOf(productInCart), 1);
                } else {
                    button.innerHTML = 'remove';
                    model.cart.push({ product: product, amount: 1 });
                    product.amount -= 1;
                }
                if (!cartCount) throw new Error('There is no cart count');
                cartCount.innerHTML = model.cart.length.toString();
            }
        }); */
    }

    changeView() {
        const view1 = selectorChecker(document, '.view1') as HTMLButtonElement;
        const view2 = selectorChecker(document, '.view2') as HTMLButtonElement;

        const cardWrappers = document.querySelectorAll('.card-wrapper');
        const photoZones = document.querySelectorAll('.photo-zone');
        const buttonArr: HTMLButtonElement[] = [];
        photoZones.forEach((photo) => {
            const buttons = photo.querySelectorAll('button');
            buttons.forEach((button) => buttonArr.push(button));
        });

        const changeView = (target: EventTarget) => {
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
        };
        view1.addEventListener('click', (e) => changeView(e.target as EventTarget));
        view2.addEventListener('click', (e) => changeView(e.target as EventTarget));
        if (this.url.big) {
            if (this.url.big === 'big=true') {
                changeView(view2);
            } else if (this.url.big === 'big=false') {
                changeView(view1);
            }
        }
    }

    found() {
        const foundDiv: Element | null = document.querySelector('.found');
        const products: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card-wrapper');
        let displaingProducts = 0;
        products.forEach((prod) => {
            if (prod.style.display === '' || prod.style.display === 'flex') {
                displaingProducts += 1;
            }
        });
        if (!foundDiv) throw new Error('No dives found');
        foundDiv.innerHTML = `Found: ${displaingProducts}`;

        const notFound = selectorChecker(document, '.no-products') as HTMLDivElement;

        if (displaingProducts === 0) notFound.style.display = 'flex';
        if (displaingProducts > 0) notFound.style.display = 'none';
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
