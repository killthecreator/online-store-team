import { route } from './routing/routing.js';
import { HomeView } from './components/view/home';
import { ProductView } from './components/view/product/index.js';
import { CartView } from './components/view/cart';
import { HomeController } from './components/controller/home';
import { Model } from './components/model';
import { ProductController } from './components/controller/product/index.js';
import { PageNotFoundController } from './components/controller/404/index.js';
import { CartController } from './components/controller/cart/index.js';
import { PageNotFoundView } from './components/view/404/index.js';
import { locationHandler } from './routing/locationHandler.js';
import { GlobalView } from './components/view/index.js';
import { Controller } from './components/controller/index.js';

export class App {
    url: string;
    model: Model;
    view: GlobalView;
    controller: Controller;

    constructor(url: string, model: Model, view: GlobalView, controller: Controller) {
        this.url = url;
        this.model = model;
        this.view = view;
        this.controller = controller;
    }
}
export const homeController = new HomeController();
export const productController = new ProductController();
export const cartController = new CartController();
export const pageNotFoundController = new PageNotFoundController();

export const homeView = new HomeView();
export const productView = new ProductView();
export const cartView = new CartView();
export const pageNotFoundView = new PageNotFoundView();

const model = new Model();

export const app = new App('/home', model, homeView, homeController);
//app.controller.setupPage(app.url, app.view, app.model);
app.view.drawHeader();
app.controller.setupPage(app.url, app.view, app.model);
app.view.drawFooter();

const ancors = document.querySelectorAll('.routing');

ancors.forEach((ancor) =>
    ancor.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.currentTarget === ancor) {
            window.history.pushState({}, `Title`, ancor.id);
            locationHandler(ancor.id);
        }
    })
);

window.onpopstate = (event) => {
    route(event, document.location.pathname);
    alert(`location: ${document.location}, state: ${JSON.stringify(event.state)}`);
};
