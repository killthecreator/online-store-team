import { Model } from '../model';
import { GlobalView } from '../view';

export abstract class Controller {
    abstract url: Partial<{
        big: string;
        sort: string;
        search: string;
        categories: string;
        brands: string;
        price: string;
        stock: string;
    }>;
    abstract setupPage(location: string, view: GlobalView, model?: Model): void;
}
