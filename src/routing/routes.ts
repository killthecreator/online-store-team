import { NonFoundController } from "./controllers/nonFoundController.js";
import { MainController } from "./controllers/mainController.js";
import { CartController } from "./controllers/cartController.js";
import { ProductController } from "./controllers/productController.js";
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
