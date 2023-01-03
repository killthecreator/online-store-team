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

export const locationHandler = (e: Event, location: string) => {
    e.preventDefault();
    console.log(`сработал locationHandler, location=${location}`);
    let page;
    if (location.startsWith('/home') || location === '' || location === '/') {
      page = '/home'
    } else if (location.startsWith('/product')) {
      page = '/product'
    } else if (location.startsWith('/cart')) {
      page = '/cart'
    } else {
      page = '/404'
    }
    /*const page = (location.startsWith('/home') || location === '' || location === '/')
        ? '/home'
        : location.startsWith('/product')
        ? '/product'
        : location.startsWith('/cart')
        ? '/cart'
        : '/404';*/

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
