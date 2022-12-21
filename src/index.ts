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
    controller: HomeController;
    url: string;

    constructor(url: string, controller: HomeController) {
        this.url = url;
        this.controller = controller;
    }
}

export const app = new App('/home', new HomeController(new Model(), new HomeView()));

app.controller.setupPage(app.url);
