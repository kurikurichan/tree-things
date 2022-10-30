import React from "react";
import MainNavbar from "./MainNavbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <MainNavbar />
      {children}
    </>
  );
};

export default MainLayout;
