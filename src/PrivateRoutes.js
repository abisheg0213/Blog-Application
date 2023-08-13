import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "./firebase_config";
import { onAuthStateChanged } from "firebase/auth";
export const PrivateRoutes = () => {
  console.log(auth);
  console.log(auth.currentUser === null);
  let auuser = true;
  return auth.currentUser !== null ? <Outlet /> : <Navigate to="/login" />;
};
