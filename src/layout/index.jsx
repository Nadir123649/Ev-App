import React from "react";
import NavTab from "../component/NavTab";

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <NavTab />
    </>
  );
};

export default Layout;
