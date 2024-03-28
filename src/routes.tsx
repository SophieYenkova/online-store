import { BASKET_ROUTE, SHOP_ROUTE } from "./utils/consts";
import Basket from "./pages/basket";
import Shop from "./pages/shop";

export const publicRoutes = [
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
];
