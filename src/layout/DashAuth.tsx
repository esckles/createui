import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../static/Header";

const DashAuth = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default DashAuth;
