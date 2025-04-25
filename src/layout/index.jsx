import React from "react";
import NavTab from "../component/NavTab";

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <NavTab />
    </div>
  );
};

export default Layout;
