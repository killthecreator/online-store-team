import { Model } from '../model';
import { GlobalView } from '../view';
import { URL } from '../../utils/urlInterface';

export abstract class Controller {
    abstract url: Partial<URL>;
    abstract setupPage(view: GlobalView, model?: Model, location?: string): void;
}
