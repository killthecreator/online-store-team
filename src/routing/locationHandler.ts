import { app } from '../index.js';

import { homeController } from '../index.js';
import { productController } from '../index.js';
import { cartController } from '../index.js';
import { pageNotFoundController } from '../index.js';
import { homeView } from '../index.js';
import { productView } from '../index.js';
import { cartView } from '../index.js';
import { pageNotFoundView } from '../index.js';

export const locationHandler = (location: string) => {
    location = window.location.pathname;

    const page = location.startsWith('/home')
        ? '/home'
        : location.startsWith('/product')
        ? '/product'
        : location.startsWith('/cart')
        ? '/cart'
        : '/404';
    switch (page) {
        case '/home':
            app.controller = homeController;
            app.view = homeView;
            app.controller.url = {};
            break;
        case '/product':
            app.controller = productController;
            app.view = productView;
            break;
        case '/cart':
            app.controller = cartController;
            app.view = cartView;
            break;
        default:
            app.controller = pageNotFoundController;
            app.view = pageNotFoundView;
            break;
    }
    app.controller.url = {};
    app.controller.setupPage(location, app.view, app.model);
};
