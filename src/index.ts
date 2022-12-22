import { route } from './routing/routing.js';
import { HomeView } from './components/view/home';
import { ProductView } from './components/view/product/index.js';
import { HomeController } from './components/controller/home';
import { Model } from './components/model';
import { ProductController } from './components/controller/product/index.js';
import { NonFoundController } from './components/controller/404/index.js';
import { CartController } from './components/controller/cart/index.js';
import { CartView } from './components/view/cart/index.js';
import { NonExistingView } from './components/view/404/index.js';

export class App {
    url: string;
    model: Model;
    view: HomeView | ProductView | CartView | NonExistingView;
    controller: HomeController | CartController | NonFoundController | ProductController;

    constructor(
        url: string,
        model: Model,
        view: HomeView | ProductView | CartView | NonExistingView,
        controller: HomeController | CartController | NonFoundController | ProductController
    ) {
        this.url = url;
        this.model = model;
        this.view = view;
        this.controller = controller;
    }
}

export const app = new App('/home', new Model(), new HomeView(), new HomeController());
app.controller.setupPage(app.url, app.view, app.model);

const ancors = document.querySelectorAll('.routing');
ancors.forEach((ancor) =>
    ancor.addEventListener('click', (e) => {
        e.preventDefault();
        /*document.location.href = ancor.id;*/
        route(e, ancor.id);
    })
);
