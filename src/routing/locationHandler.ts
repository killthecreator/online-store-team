import { HomeController } from '../components/controller/home';
import { ProductController } from '../components/controller/product';
import { CartController } from '../components/controller/cart';
import { PageNotFoundController } from '../components/controller/404';
import { app } from '../index.js';
import { CartView } from '../components/view/cart/';
import { HomeView } from '../components/view/home/';
import { ProductView } from '../components/view/product/';
import { PageNotFoundView } from '../components/view/404/';

import { homeController } from '../index.js';
import { productController } from '../index.js';
import { cartController } from '../index.js';
import { pageNotFoundController } from '../index.js';

import { homeView } from '../index.js';
import { productView } from '../index.js';
import { cartView } from '../index.js';
import { pageNotFoundView } from '../index.js';

export const locationHandler = (location: string) => {

    //location = window.location.pathname;
    const page =
        location === '/'
            ? '/'
            : location.startsWith('/product')
            ? '/product'
            : location.startsWith('/cart')
            ? '/cart'
            : '/404';
    switch (page) {
        case '/':
            app.controller = homeController;
            app.view = homeView;
            break;
        case '/product':
            app.controller = productController;
            app.view = productView;
            break;
        case '/cart':
            app.controller = cartController;
            app.view = cartView;
            break;
        case '/404':
            app.controller = pageNotFoundController;
            app.view = pageNotFoundView;
            break;
    }

    app.controller.setupPage(location, app.view, app.model); //надо насписать метод с общим названием но разным содержанием для каждой страницы
};
