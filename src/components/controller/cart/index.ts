import { Controller } from "../";
export class CartController extends Controller {
  url: string;
  constructor(url: string) {
      super();
      this.url = url;
  }

  setupPage(): void {
    console.log('cart');
}
}
