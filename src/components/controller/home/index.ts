import { Controller } from '../';
import { App } from '../../../index';
import { HomeView } from '../../view/home';
import { Model } from '../../model';
import { app } from '../../../index';
export class HomeController extends Controller {
    model: Model;
    view: HomeView;
    /*url: string;*/
    constructor(/*url: string*/model: Model, view: HomeView) {
        super();
        this.model = model
        this.view = view;
        /*this.url = url;*/
    }

    setupPage(location: string): void {
        //const locationArr = location.split('/');
        /*const app = new App('/home', new Model(), new HomeView()/*, new HomeController());*/
        /*if (locationArr.length === 1) {*/
          this.view.drawHeader();
          this.view.drawMain(this.model.categories, this.model.brands, this.model.products);
          this.view.drawFooter();
          this.rangesHandler();
      //  }
    }

    public rangesHandler () {
      const sliderColor = '#cce';
      const stockRange1 = document.querySelector('.stock-range__input-1') as HTMLInputElement;
      const stockRange2 = document.querySelector('.stock-range__input-2') as HTMLInputElement;
      const stockMin = document.querySelector('.stock-range__min') as HTMLDivElement;
      stockMin.innerHTML = this.model.stockRange[0].toString();
      stockRange1.min = this.model.stockRange[0].toString();
      stockRange2.min = this.model.stockRange[0].toString();
      const stockMax = document.querySelector('.stock-range__max') as HTMLDivElement;
      stockMax.innerHTML = this.model.stockRange[1].toString();
      stockRange1.max = this.model.stockRange[1].toString();
      stockRange2.max = this.model.stockRange[1].toString();

      const priceRange1 = document.querySelector('.price-range__input-1') as HTMLInputElement;
      const priceRange2 = document.querySelector('.price-range__input-2') as HTMLInputElement;
      const priceMin = document.querySelector('.price-range__min') as HTMLDivElement;
      priceMin.innerHTML = this.model.pricesRange[0].toString();
      priceRange1.min = this.model.pricesRange[0].toString();
      priceRange2.min = this.model.pricesRange[0].toString();
      const priceMax = document.querySelector('.price-range__max') as HTMLDivElement;
      priceMax.innerHTML = this.model.pricesRange[1].toString();
      priceRange1.max = this.model.pricesRange[1].toString();
      priceRange2.max = this.model.pricesRange[1].toString();

      function fillSlider(from: HTMLInputElement, to: HTMLInputElement, sliderColor: string, rangeColor: string, controlSlider: HTMLInputElement) {
        const rangeDistance = Number(to.max) - Number(to.min);
        const fromPosition = Number(from.value) - Number(to.min);
        const toPosition = Number(to.value) - Number(to.min);
        controlSlider.style.background = `linear-gradient(
          to right,
          ${sliderColor} 0%,
          ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
          ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
          ${rangeColor} ${(toPosition)/(rangeDistance)*100}%,
          ${sliderColor} ${(toPosition)/(rangeDistance)*100}%,
          ${sliderColor} 100%)`;
      }

      function setToggleAccessible(currentTarget: HTMLInputElement, selector: string) {
        const toSlider = document.querySelector(selector) as HTMLInputElement;
        if (Number(currentTarget.value) <= Number(currentTarget.min) ) {
          toSlider.style.zIndex = "3";
        } else {
          toSlider.style.zIndex = "0";
        }
      }

      function controlFromSlider(fromSlider: HTMLInputElement, toSlider: HTMLInputElement, fromInput: HTMLDivElement) {
        const [from, to] = getParsed(fromSlider, toSlider);
        if (from === null || to === null) {
          throw new Error('')
        }
        fillSlider(fromSlider, toSlider, '#eee', sliderColor, toSlider);
        if (from > to) {
          fromSlider.value = to.toString();
          fromInput.textContent = to.toString();
        } else {
          fromInput.textContent = from.toString();
        }
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
      }

      function getParsed(currentFrom: HTMLInputElement, currentTo: HTMLInputElement) {
        const from = parseInt(currentFrom.value, 10);
        const to = parseInt(currentTo.value, 10);
        return [from, to];
      }

      fillSlider(stockRange1, stockRange2, '#eee', sliderColor, stockRange2);
      setToggleAccessible(stockRange2, '.stock-range__input-2');

      stockRange1.addEventListener("input", () => controlFromSlider(stockRange1, stockRange2, stockMin));
      stockRange2.addEventListener("input", () => controlToSlider(stockRange1, stockRange2, stockMax));

      fillSlider(priceRange1, priceRange2, '#eee', sliderColor, priceRange2);
      setToggleAccessible(priceRange2, '.price-range__input-2');

      priceRange1.addEventListener("input", () => controlFromSlider(priceRange1, priceRange2, priceMin));
      priceRange2.addEventListener("input", () => controlToSlider(priceRange1, priceRange2, priceMax));
    }
}
