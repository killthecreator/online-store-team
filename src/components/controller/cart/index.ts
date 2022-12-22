import { Controller } from "../";
import { Model } from '../../model';
import { CartView } from "../../view/cart/index";
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
    const products = model.products;
    if (!products) throw new Error(`There is no ${locationArr[2]} among our products`);
    view.drawMain(model.products);
  }

}
