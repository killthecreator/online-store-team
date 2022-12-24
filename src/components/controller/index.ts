import { Model } from '../model';
import { GlobalView } from '../view';

export abstract class Controller {
    abstract setupPage(location: string, view: GlobalView, model: Model): void
}
