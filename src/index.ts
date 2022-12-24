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

export class App {
    url: string;
    model: Model;
    view: HomeView | ProductView | CartView | PageNotFoundView;
    controller: HomeController | CartController | PageNotFoundController | ProductController;

    constructor(
        url: string,
        model: Model,
        view: HomeView | ProductView | CartView | PageNotFoundView,
        controller: HomeController | CartController | PageNotFoundController | ProductController
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
export const pageNotFoundController = new PageNotFoundController();

export const homeView = new HomeView();
export const productView = new ProductView();
export const cartView = new CartView();
export const pageNotFoundView = new PageNotFoundView();

const model = new Model();

export const app = new App('/home', model, homeView, homeController);
app.controller.setupPage(app.url, app.view, app.model);

const header = document.querySelector('.header');
if (!header) throw new Error('There is no header');
const ancors1 = header.querySelectorAll('.routing');
const footer = document.querySelector('.footer');
if (!footer) throw new Error('There is no footer');
const ancors2 = footer.querySelectorAll('.routing');

ancors1.forEach((ancor) =>
  ancor.addEventListener('click', (e) => {
    e.preventDefault();
      if (e.target === ancor) {
        /*window.history.pushState({}, `Title`, ancor.id);*/
        locationHandler(ancor.id);
      }
  })
);
ancors2.forEach((ancor) =>
    ancor.addEventListener('click', (e) => {
        e.preventDefault();
        if(ancor === e.target) {
          /*window.history.pushState({}, `Title`, ancor.id);*/
          locationHandler(ancor.id);
        }
    })
);

window.onpopstate = (event) => {
  route(event, document.location.pathname);
  //alert(`location: ${document.location}, state: ${JSON.stringify(event.state)}`)
}
