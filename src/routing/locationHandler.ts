import { HomeController } from '../components/controller/home';
import { ProductController } from '../components/controller/product';
import { CartController } from '../components/controller/cart';
import { NonFoundController } from '../components/controller/404';
import { app } from '../index.js';

export const locationHandler = async (location: string) => {
  /*let location: string = window.location.pathname;*/
  if (location.length == 0) {
      location = "/";
  }
  const page = location.startsWith('/home') ? '/home' : location.startsWith('/product') ? '/product' : location.startsWith('/cart') ? '/cart' : '/404';
  let controller;
  switch (page) {
    case '/home':
      controller = app.homeController;
      break;
    case '/product':
      controller = app.productController;
      break;
    case '/cart':
      controller = app.cartController;
      break;
    case '/404':
      controller = app.nonFoundController;
      break;
    default:
      alert( "Нет таких значений" );
  }

  if (!controller) {
    throw new Error ('Incorrect route');
  }

  controller.setupPage(location); //надо насписать метод с общим названием но разным содержанием для каждой страницы
};
