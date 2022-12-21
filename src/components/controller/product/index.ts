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
    console.log('product');
}
}
