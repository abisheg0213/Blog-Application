import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "./firebase_config";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
export const PrivateRoutes = () => {
  const status = useSelector((state) => state.counter);
  return status ? <Outlet /> : <Navigate to="/login" />;
};
