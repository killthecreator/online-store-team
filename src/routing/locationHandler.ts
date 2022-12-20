import { routes, Route } from './routes.js';
import { HomeController } from '../components/controller/home';
import { ProductController } from '../components/controller/product';
import { CartController } from '../components/controller/cart';
import { NonFoundController } from '../components/controller/404';

export const locationHandler = async () => {
  let location: string = window.location.pathname;
  if (location.length == 0) {
      location = "/";
  }

  const page = location.startsWith('/home') ? '/home' : location.startsWith('/product') ? '/product' : location.startsWith('/cart') ? '/cart' : '/404';
  let controller;
  switch (page) {
    case '/home':
      controller = new HomeController();
      break;
    case '/product':
      controller = new ProductController();
      break;
    case '/cart':
      controller = new CartController();;
      break;
    case '/404':
      controller = new NonFoundController();
      break;
    default:
      alert( "Нет таких значений" );
  }

  if (!controller) {
    throw new Error ('Incorrect route');
  }

  controller.setupPage(location); //надо насписать метод с общим названием но разным содержанием для каждой страницы
};
