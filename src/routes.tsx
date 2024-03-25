import { ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE } from "./utils/consts";
import Admin from "./pages/admin";
import Basket from "./pages/basket";
import Shop from "./pages/shop";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
];
