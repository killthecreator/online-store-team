import { route } from './routing/routing.js';

const ancors: NodeList = document.querySelectorAll('a.routing');
ancors.forEach((ancor) =>
    ancor.addEventListener('click', (e) => {
        e.preventDefault();
        route(e);
    })
);

import { GlobalView } from './components/view/';
import { HomeView } from './components/view/home';
import { HomeController } from './components/controller/home';
import { Model } from './components/model';

export class App {
    /*contoller: HomeController;*/
    view: HomeView;
    model: Model;
    url: string;

    constructor(url: string, model: Model, view: HomeView/*, controller: HomeController*/) {
        this.url = url;
        this.view = view;
        this.model = model;
        /*this.contoller = controller;*/
    }
}

export const app = new App('/home', new Model(), new HomeView()/*, new HomeController()*/);

app.view.drawHeader();
app.view.drawMain(app.model.categories, app.model.brands);
app.view.drawFooter();
