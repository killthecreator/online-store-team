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
    location: string;
    model: Model;
    view: GlobalView;
    controller: Controller;

    constructor(location: string, model: Model, view: GlobalView, controller: Controller) {
        this.location = location;
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
if (window.location.pathname === '/') {
    window.location.href = `${window.location.origin}/home`;
}

const currentPath = window.location.href.replace(`${window.location.origin}/home/?`, '');

export const app = new App(currentPath, model, homeView, homeController);
app.controller.setupPage(app.location, app.view, app.model);

window.addEventListener('DOMContentLoaded', (event) => {
    route(event, window.location.pathname);
});

const ancors = document.querySelectorAll('.routing');
ancors.forEach((ancor) =>
    ancor.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.currentTarget === ancor) {
            window.history.pushState({}, '', ancor.id);
            locationHandler(ancor.id);
        }
    })
);

window.onpopstate = (event) => {
    route(event, window.location.pathname);
};
