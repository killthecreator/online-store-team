import { HomeController } from '../components/controller/home';
import { ProductController } from '../components/controller/product';
import { CartController } from '../components/controller/cart';
import { NonFoundController } from '../components/controller/404';
import { app } from '../index.js';
import { CartView } from '../components/view/cart/';
import { HomeView } from '../components/view/home/';
import { ProductView } from '../components/view/product/';
import { NonExistingView } from '../components/view/404/';

export const locationHandler = async (location: string) => {
    /*let location: string = window.location.pathname;*/
    if (location.length == 0) {
        location = '/';
    }
    const page = location.startsWith('/home')
        ? '/home'
        : location.startsWith('/product')
        ? '/product'
        : location.startsWith('/cart')
        ? '/cart'
        : '/404';
    switch (page) {
        case '/home':
            app.controller = new HomeController();
            app.view = new HomeView();
            break;
        case '/product':
            app.controller = new ProductController();
            app.view = new ProductView();
            break;
        case '/cart':
            app.controller = new CartController();
            app.view = new CartView();
            break;
        case '/404':
            app.controller = new NonFoundController();
            app.view = new NonExistingView();
            break;
        default:
            alert('Нет таких значений');
    }

    app.controller.setupPage(location, app.view, app.model); //надо насписать метод с общим названием но разным содержанием для каждой страницы
};
