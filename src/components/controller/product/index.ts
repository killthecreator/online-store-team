import { Controller } from '../';
import { ProductView } from '../../view/product/index';
import { Model } from '../../model/index';

export class ProductController extends Controller {
    /*url: string;*/
    constructor(/*url: string*/) {
        super();
        /* this.url = url;*/
    }
    setupPage(location: string, view: ProductView, model: Model): void {
        const locationArr = location.split('/');
        const product = model.products.find((el) => el.name === locationArr[2]);
        if (!product) throw new Error(`There is no ${locationArr[2]} among our products`);
        view.drawMain(product);

        this.configPage();
      }

      configPage() {
        this.turnOffSearch();
      }

      turnOffSearch() {
        const search: HTMLDivElement | null = document.querySelector('.search-wrapper');
        if (!search) throw new Error("there is no search block");
        search.style.display = "none";
      }
}
