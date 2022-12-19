import { Model } from '../model'

export abstract class Controller {
    abstract url: string;
    abstract setupPage(): void;

    static getCartState(): number {
      return Model.cartState;
    }
}
