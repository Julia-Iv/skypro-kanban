import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuth }) => {
    //если не авторизован, перенаправляем на вход
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  //если пользователь авторизованбрендерим дочерние маршруты
  return <Outlet />;
};
export default ProtectedRoute;
