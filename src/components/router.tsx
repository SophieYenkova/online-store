import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import Shop from "../pages/shop";
import { useContext } from "react";
import { Context } from "../main";
const Router = () => {
    const {user} = useContext(Context);
    console.log(user);

  const isAuth = true;
  return (
    <Routes>
      {user.isAuth && authRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component/>} exact/>
      ))}
        {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component/>} exact/>
      ))}
      <Route path="*" element={<Shop/>}/>
    </Routes>
  );
};

export default Router;
