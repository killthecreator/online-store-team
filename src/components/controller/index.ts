import { Model } from '../model';
import { GlobalView } from '../view';
import { URL } from '../../utils/urlInterface';

export abstract class Controller {
    abstract url: Partial<URL>;
    abstract view: GlobalView;
    abstract model: Model;
    abstract setupPage(location?: string): void;
}
