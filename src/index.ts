//import { locationHandler } from './routing/locationHandler.js';
import { URL } from './utils/urlInterface.js';
import { locationHandler } from './routing/locationHandler.js';

import { GlobalView } from './components/view/';
import { HomeView } from './components/view/home';
import { ProductView } from './components/view/product/index.js';
import { CartView } from './components/view/cart';
import { PageNotFoundView } from './components/view/404/index.js';

import { Model } from './components/model';

import { Controller } from './components/controller/';
import { HomeController } from './components/controller/home/';
import { ProductController } from './components/controller/product';
import { PageNotFoundController } from './components/controller/404';
import { CartController } from './components/controller/cart';

class App {
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

const model = new Model();

export const homeView = new HomeView();
export const productView = new ProductView();
export const cartView = new CartView();
export const pageNotFoundView = new PageNotFoundView();

export const homeController = new HomeController(homeView, model);
export const productController = new ProductController(productView, model);
export const cartController = new CartController(cartView, model);
export const pageNotFoundController = new PageNotFoundController(pageNotFoundView, model);

if (window.location.pathname === '/' || window.location.pathname === '/home/') {
    window.location.pathname = `/home`;
}

const currentPath = window.location.href.replace(window.location.origin, '');

export const app = new App(currentPath, model, homeView, homeController);
app.view.drawHeader();
app.view.drawFooter();

const ancors = document.querySelectorAll('.routing_type_header');
ancors.forEach((ancor) =>
    ancor.addEventListener('click', (e) => {
        const curTarget = e.currentTarget as HTMLElement;
        window.history.pushState({}, '', curTarget.id);
        locationHandler(e, curTarget.id);
    })
);

window.addEventListener('DOMContentLoaded', (e) => {
    locationHandler(e, currentPath);
});

window.onpopstate = (e) => {
    locationHandler(e, window.location.pathname);
};

export const fillUrl = homeController.fillUrl;
export const url = homeController.url;
