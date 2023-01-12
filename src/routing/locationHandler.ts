import {
    homeView,
    productView,
    cartView,
    pageNotFoundView,
    homeController,
    productController,
    cartController,
    pageNotFoundController,
    app,
} from '../';

export const locationHandler = (location: string) => {
    if (location.endsWith('/')) location = location.slice(0, -1);

    let page;
    if (location === '/home' || location.startsWith('/home/?')) {
        page = '/home';
    } else if (location === '/product' || location.startsWith('/product/')) {
        page = '/product';
    } else if (location === '/cart' || location.startsWith('/cart/?')) {
        page = '/cart';
    } else {
        page = '/404';
    }

    switch (page) {
        case '/home':
            app.view = homeView;
            app.controller = homeController;
            app.location = location.replace('/home/?', '');
            break;
        case '/product':
            app.controller = productController;
            app.view = productView;
            app.location = location.replace('/product/', '');
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
    if (location === '/home') app.controller.url = {};
    app.controller.setupPage(app.location);
};
