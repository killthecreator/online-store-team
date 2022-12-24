import { Controller } from '../';
import { HomeView } from '../../view/home';
import { Model } from '../../model';
import { route } from '../../../routing/routing';
import { ProductView } from '../../view/product/index';
import { CartView } from '../../view/cart/index';
import { PageNotFoundView } from '../../view/404/index';
import { locationHandler } from '../../../routing/locationHandler';
import { selectorChecker } from '../../../utils/selectorChecker';
export class HomeController extends Controller {
    constructor() {
        super();
    }

    setupPage(location: string, view: HomeView, model: Model): void {
        //const locationArr = location.split('/');
        /*const app = new App('/home', new Model(), new HomeView()/*, new HomeController());*/
        /*if (locationArr.length === 1) {*/
        //view.drawHeader();
        view.drawMain(model.categories, model.brands, model.products);
        //view.drawFooter();
        //  }
        this.configPage(model);
    }

    configPage(model: Model) {
        this.rangesHandler(model);
        this.addRouting();
        this.turnOnSearch();
        this.filtersAndCheckboxes();
        this.sortByGo();
        this.addingToCart(model);
        this.changeView();
        this.found();
    }

    addRouting() {
        const main = document.querySelector('.main');
        if (!main) throw new Error('There is no main element');
        const ancors = main.querySelectorAll('.routing');
        ancors.forEach((ancor) =>
            ancor.addEventListener('click', (e) => {
                e.preventDefault();
                if (e.target === ancor) {
                    /*window.history.pushState({}, `Title`, ancor.id);*/
                    locationHandler(ancor.id);
                }
            })
        );
    }

    turnOnSearch() {
        const search: HTMLDivElement | null = document.querySelector('.search-wrapper');
        if (!search) throw new Error('there is no search block');
        search.style.display = 'flex';

        this.searchGo();
    }

    searchGo() {
        const productCards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card-wrapper');

        const input: HTMLInputElement | null = document.querySelector('.search-wrapper__input');
        if (!input) throw new Error('There is no search input');
        input.addEventListener('input', () => {
            const filter = input.value.toLowerCase();
            productCards.forEach((card) => {
                if (
                    (card.innerHTML.toLowerCase().indexOf(filter) > -1 && card.style.display !== 'none') ||
                    input.value === ''
                ) {
                    card.style.display = 'flex';
                    this.found();
                } else {
                    card.style.display = 'none';
                    this.found();
                }
            });
        });
    }

    filtersAndCheckboxes() {
        const productCards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card-wrapper');

        const brandCheckboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('.brand-form__checkbox');
        const categoryCheckboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('.category-form__checkbox');

        const priceRanges: NodeListOf<HTMLInputElement> = document.querySelectorAll('.price-range__input');
        const stockRanges: NodeListOf<HTMLInputElement> = document.querySelectorAll('.stock-range__input');

        priceRanges.forEach((range) => range.addEventListener('input', filtration));
        stockRanges.forEach((range) => range.addEventListener('input', filtration));

        brandCheckboxes.forEach((brandcheckbox) => brandcheckbox.addEventListener('click', filtration));
        categoryCheckboxes.forEach((categorycheckbox) => categorycheckbox.addEventListener('click', filtration));

        const that = this;

        function filtration() {
            productCards.forEach((card) => {
                const categoryCheckboxesArr = Array.from(categoryCheckboxes);
                const brandCheckboxesArr = Array.from(brandCheckboxes);
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
                    (categoryCheckbox.checked || categoryCheckboxesArr.every((checkbox) => !checkbox.checked)) &&
                    (brandCheckbox.checked || brandCheckboxesArr.every((checkbox) => !checkbox.checked)) &&
                    stockAmount >= Number(stockRanges[0].value) &&
                    stockAmount <= Number(stockRanges[1].value) &&
                    price >= Number(priceRanges[0].value) &&
                    price <= Number(priceRanges[1].value)
                ) {
                    card.style.display = 'flex';
                    that.found();
                } else {
                    card.style.display = 'none';
                    that.found();
                }
            });
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
            const priceDiv = product.querySelector('.name-zone__price');
            if (!priceDiv) throw new Error('there is no price element');
            const priceDivHTML = priceDiv.innerHTML;
            if (!priceDivHTML) throw new Error('there is data in element');
            const priceArr = priceDivHTML.match(/\d+/);
            if (!priceArr) throw new Error('there is data in element');
            const price = Number(priceArr[0]);
            tempArr.push({
                el: product,
                price: price,
                name: product.id,
            });
        });

        const cardsWrapper: HTMLDivElement | null = document.querySelector('.cards-wrapper');
        if (!cardsWrapper) throw new Error('there is no cards wrapper in DOM');
        const sortOptions: HTMLSelectElement | null = document.querySelector('.sort-options');
        if (!sortOptions) throw new Error('there is no sort select in DOM');
        sortOptions.addEventListener('change', () => {
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
        });
        this.filtersAndCheckboxes();
    }

    public rangesHandler(model: Model) {
        const that = this;

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

        function fillSlider(
            from: HTMLInputElement,
            to: HTMLInputElement,
            sliderColor: string,
            rangeColor: string,
            controlSlider: HTMLInputElement
        ) {
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
        }

        function setToggleAccessible(currentTarget: HTMLInputElement, selector: string) {
            const toSlider = document.querySelector(selector) as HTMLInputElement;
            if (Number(currentTarget.value) <= Number(currentTarget.min)) {
                toSlider.style.zIndex = '3';
            } else {
                toSlider.style.zIndex = '0';
            }
        }

        function controlFromSlider(
            fromSlider: HTMLInputElement,
            toSlider: HTMLInputElement,
            fromInput: HTMLDivElement
        ) {
            const [from, to] = getParsed(fromSlider, toSlider);
            if (from === null || to === null) {
                throw new Error('');
            }
            fillSlider(fromSlider, toSlider, '#eee', sliderColor, toSlider);
            if (from > to) {
                fromSlider.value = to.toString();
                fromInput.textContent = to.toString();
            } else {
                fromInput.textContent = from.toString();
            }
            that.found();
        }

        function controlToSlider(fromSlider: HTMLInputElement, toSlider: HTMLInputElement, toInput: HTMLDivElement) {
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
            that.found();
        }

        function getParsed(currentFrom: HTMLInputElement, currentTo: HTMLInputElement) {
            const from = parseInt(currentFrom.value, 10);
            const to = parseInt(currentTo.value, 10);
            return [from, to];
        }

        fillSlider(stockRange1, stockRange2, '#eee', sliderColor, stockRange2);
        setToggleAccessible(stockRange2, '.stock-range__input-2');

        stockRange1.addEventListener('input', () => controlFromSlider(stockRange1, stockRange2, stockMin));
        stockRange2.addEventListener('input', () => controlToSlider(stockRange1, stockRange2, stockMax));

        fillSlider(priceRange1, priceRange2, '#eee', sliderColor, priceRange2);
        setToggleAccessible(priceRange2, '.price-range__input-2');

        priceRange1.addEventListener('input', () => controlFromSlider(priceRange1, priceRange2, priceMin));
        priceRange2.addEventListener('input', () => controlToSlider(priceRange1, priceRange2, priceMax));
    }

    addingToCart(model: Model) {
        const addToCartButtons = document.querySelectorAll('.photo-zone__add-to-cart-button');
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
                    model.cart.splice(model.cart.indexOf(productInCart), 1);
                } else {
                    button.innerHTML = 'remove';
                    model.cart.push({product: product, amount: 1});
                }
                if (!cartCount) throw new Error('There is no cart count');
                cartCount.innerHTML = model.cart.length.toString();

                console.log(model.cart);
            }
        });
    }

    changeView() {
        const view1: HTMLButtonElement | null = document.querySelector('.view1');
        const view2 = document.querySelector('.view2');
        if (!view1) throw new Error('There is no view1');
        if (!view2) throw new Error('There is no view2');

        const cardWrappers = document.querySelectorAll('.card-wrapper');
        const photoZones = document.querySelectorAll('.photo-zone');
        if (!photoZones) throw new Error('There is no photo zone');
        const buttonArr: HTMLButtonElement[] = [];
        photoZones.forEach((photo) => {
            const buttons = photo.querySelectorAll('button');
            buttons.forEach((button) => buttonArr.push(button));
        });

        view1.addEventListener('click', changeView);
        view2.addEventListener('click', changeView);

        function changeView() {
            if (!view1) throw new Error('There is no view1');
            if (!view2) throw new Error('There is no view2');
            if (!cardWrappers) throw new Error('There is no cardWrapper');
            if (!photoZones) throw new Error('There is nophotoZone');
            view1.classList.toggle('togleView');
            view2.classList.toggle('togleView');
            cardWrappers.forEach((cardWrapper) => cardWrapper.classList.toggle('togleCardWrapper'));
            photoZones.forEach((photo) => photo.classList.toggle('toglePhotoZone'));
            buttonArr.forEach((button) => button.classList.toggle('togleBtn'));
        }
    }

    found() {
        const foundDiv: Element | null = document.querySelector('.found');
        const products: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card-wrapper');
        let displaingProducts: number = 0;
        products.forEach((prod) => {
            if (prod.style.display === '' || prod.style.display === 'flex') {
                displaingProducts += 1;
            }
        });
        if (!foundDiv) throw new Error('No dives found');
        foundDiv.innerHTML = `Found: ${displaingProducts}`;
    }
}
