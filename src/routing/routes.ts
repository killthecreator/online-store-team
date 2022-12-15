import { NonFoundController } from "./../controller/404";
import { MainController } from "./../controller/home";
import { CartController } from "./../controller/cart";
import { ProductController } from "./../controller/product";
import { Controller } from "./controllers/controllerType.js"
//пути и нейминг потом подкорретируем)

export type Route = {
  path: string,
  controller: Controller,
}

export const routes: Route[] = [
  {
    path: "/404",
    controller: NonFoundController,
  },
  {
    path: "/",
    controller: MainController,
  },
  { path: "/cart",
    controller: CartController,
  },
  { path: "/product",
    controller: ProductController,
  },
]
