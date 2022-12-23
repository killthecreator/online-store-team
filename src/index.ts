import { route } from './routing/routing.js';
import { HomeView } from './components/view/home';
import { ProductView } from './components/view/product/index.js';
import { CartView } from './components/view/cart';
import { HomeController } from './components/controller/home';
import { Model } from './components/model';
import { ProductController } from './components/controller/product/index.js';
import { NonExistingController } from './components/controller/404/index.js';
import { CartController } from './components/controller/cart/index.js';
import { NonExistingView } from './components/view/404/index.js';

export class App {
    url: string;
    model: Model;
    view: HomeView | ProductView | CartView | NonExistingView;
    controller: HomeController | CartController | NonExistingController | ProductController;

    constructor(
        url: string,
        model: Model,
        view: HomeView | ProductView | CartView | NonExistingView,
        controller: HomeController | CartController | NonExistingController | ProductController
    ) {
        this.url = url;
        this.model = model;
        this.view = view;
        this.controller = controller;
    }
}

export const homeController = new HomeController();
export const productController = new ProductController();
export const cartController = new CartController();
export const nonExistingController = new NonExistingController();

export const homeView = new HomeView();
export const productView = new ProductView();
export const cartView = new CartView();
export const nonExistingView = new NonExistingView();

export const app = new App('/home', new Model(), homeView, homeController);
app.controller.setupPage(app.url, app.view, app.model);

const ancors = document.querySelectorAll('.routing');
ancors.forEach((ancor) =>
    ancor.addEventListener('click', (e) => {
        e.preventDefault();
        /* document.location.href = ancor.id; */
        route(e, ancor.id);
    })
);
