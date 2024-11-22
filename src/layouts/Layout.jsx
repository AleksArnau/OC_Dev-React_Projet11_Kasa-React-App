import React from "react";
import Header from "./Header/Header";
import "./Layout.scss";
import Footer from "./Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
