import { NonFoundController } from "./../components/controller/404";
import { HomeController } from "./../components/controller/home";
import { CartController } from "./../components/controller/cart";
import { ProductController } from "./../components/controller/product";
import { Controller } from "./../components/controller/";
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
    controller: HomeController,
  },
  { path: "/cart",
    controller: CartController,
  },
  { path: "/product",
    controller: ProductController,
  },
]
