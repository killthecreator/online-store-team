import { GlobalView } from './../components/view';
export class Model {}
export class App {
    view: GlobalView;
    model: Model;
    url: string;
    constructor(url: string, model: Model, view: GlobalView) {
        this.url = url;
        this.view = view;
        this.model = model;
    }
}
