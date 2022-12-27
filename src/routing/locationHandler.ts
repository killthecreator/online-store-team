import {
    app,
    homeController,
    productController,
    cartController,
    pageNotFoundController,
    homeView,
    productView,
    cartView,
    pageNotFoundView,
} from '../';

export const locationHandler = (location: string) => {
    console.log(location);
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
    if (location === '/home') app.controller.url = {};

    app.controller.setupPage(app.location, app.view, app.model);
    app.location = location;
};
