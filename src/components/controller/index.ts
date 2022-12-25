import { Model } from '../model';
import { GlobalView } from '../view';
import { URL } from '../../utils/urlInterface';

export abstract class Controller {
    abstract url: Partial<URL>;
    abstract setupPage(location: string, view: GlobalView, model?: Model): void;
}
