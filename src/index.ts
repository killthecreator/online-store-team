import { route } from './routing/routing.js';
import { HomeView } from './components/view/home';
import { ProductView } from './components/view/product/index.js';
import { HomeController } from './components/controller/home';
import { Model } from './components/model';
import { ProductController } from './components/controller/product/index.js';
import { NonFoundController } from './components/controller/404/index.js';
import { CartController } from './components/controller/cart/index.js';

export class App {
    homeController: HomeController;
    productController: ProductController;
    nonFoundController: NonFoundController;
    cartController: CartController;
    url: string;

    constructor(
        url: string,
        homeController: HomeController,
        productController: ProductController,
        nonFoundController: NonFoundController,
        cartController: CartController
    ) {
        this.url = url;
        this.productController = productController;
        this.cartController = cartController;
        this.nonFoundController = nonFoundController;
        this.homeController = homeController;
    }
}

export const app = new App(
    '',
    new HomeController(new Model(), new HomeView()),
    new ProductController(new Model(), new ProductView()),
    new NonFoundController(),
    new CartController()
);

if (window.location.pathname === '/') {
    app.homeController.setupPage(app.url);
}

const ancors = document.querySelectorAll('.routing');
ancors.forEach((ancor) =>
    ancor.addEventListener('click', (e) => {
        e.preventDefault();
        /*document.location.href = ancor.id;*/
        route(e, ancor.id);
    })
);
