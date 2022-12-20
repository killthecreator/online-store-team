import { Controller } from "../";
export class ProductController extends Controller {
  /*url: string;*/
  constructor(/*url: string*/) {
      super();
     /* this.url = url;*/
  }

  setupPage(): void {
    console.log('product');
}
}
