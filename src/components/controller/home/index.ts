import { Controller } from '../';
import { App } from '../../../index';
import { HomeView } from '../../view/home';
import { Model } from '../../model';
import { app } from '../../../index';
export class HomeController extends Controller {
    /*url: string;*/
    constructor(/*url: string*/) {
        super();
        /*this.url = url;*/
    }

    setupPage(location: string): void {
        const locationArr = location.split('/');
        /*const app = new App('/home', new Model(), new HomeView()/*, new HomeController());*/
        if (locationArr.length === 1) {
         /* app.view.drawMain(app.model.categories, app.model.brands);*/
        }
    }

    public rangesHandler () {
      const stockRange1 = document.querySelector('.stock-range__input-1') as HTMLInputElement;
      const stockRange2 = document.querySelector('.stock-range__input-2') as HTMLInputElement;
      const stockMin = document.querySelector('.stock-range__min') as HTMLDivElement;
      stockMin.innerHTML = app.model.stockRange[0].toString();
      const stockMax = document.querySelector('.stock-range__max') as HTMLDivElement;
      stockMax.innerHTML = app.model.stockRange[1].toString();

      const priceRange1 = document.querySelector('.price-range__input-1') as HTMLInputElement;
      const priceRange2 = document.querySelector('.price-range__input-2') as HTMLInputElement;
      const priceMin = document.querySelector('.price-range__min') as HTMLDivElement;
      //priceMin.innerHTML = app.model.pricesRange[0].toString();
      const priceMax = document.querySelector('.price-range__max') as HTMLDivElement;
      //priceMax.innerHTML = app.model.pricesRange[1].toString();

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

      function setToggleAccessible(currentTarget: HTMLInputElement) {
        const toSlider = document.querySelector('.stock-range__input-2') as HTMLInputElement;
        if (Number(currentTarget.value) <= 0 ) {
          toSlider.style.zIndex = "2";
        } else {
          toSlider.style.zIndex = "0";
        }
      }

      function controlFromSlider(fromSlider: HTMLInputElement, toSlider: HTMLInputElement, fromInput: HTMLDivElement) {
        const [from, to] = getParsed(fromSlider, toSlider);
        if (from === null || to === null) {
          throw new Error('')
        }
        fillSlider(fromSlider, toSlider, '#eee', '#fbe', toSlider);
        if (from > to) {
          fromSlider.value = to.toString();
          fromInput.textContent = to.toString();
        } else {
          fromInput.textContent = from.toString();
        }
      }

      function controlToSlider(fromSlider: HTMLInputElement, toSlider: HTMLInputElement, toInput: HTMLDivElement) {
        const [from, to] = getParsed(fromSlider, toSlider);
        fillSlider(fromSlider, toSlider, '#eee', '#fbe', toSlider);
        setToggleAccessible(toSlider);
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

      fillSlider(stockRange1, stockRange2, '#eee', '#fbe', stockRange2);
      setToggleAccessible(stockRange2);

      stockRange1.addEventListener("input", () => controlFromSlider(stockRange1, stockRange2, stockMin));
      stockRange2.addEventListener("input", () => controlToSlider(stockRange1, stockRange2, stockMax));

      fillSlider(priceRange1, priceRange2, '#eee', '#fbe', priceRange2);
      setToggleAccessible(priceRange2);

      priceRange1.addEventListener("input", () => controlFromSlider(priceRange1, priceRange2, priceMin));
      priceRange2.addEventListener("input", () => controlToSlider(priceRange1, priceRange2, priceMax));
    }
}
