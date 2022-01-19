import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = (props: { [x: string]: any; component: any }) => {
  const isAuth = localStorage.getItem("token");
  const { component: Component, ...rest } = props;

  return isAuth ? <Component {...rest} /> : <Navigate to="login" />;
};

export default ProtectedRoutes;
