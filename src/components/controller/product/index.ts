import { Controller } from "../";
import { ProductView } from "../../view/product/index";
import { Model } from "../../model/index";

export class ProductController extends Controller {
  model: Model;
  view: ProductView;
  /*url: string;*/
  constructor(model: Model, productView: ProductView /*url: string*/) {
      super();
     /* this.url = url;*/
     this.model = model;
     this.view = productView;
  }

  setupPage(location: string): void {
    const locationArr = location.split('/');
    const product = this.model.products.find((el) => el.name === locationArr[2]);
    if (!product) throw new Error(`There is no ${locationArr[2]} among our products`);
    this.view.drawProduct(product);
  }
}
