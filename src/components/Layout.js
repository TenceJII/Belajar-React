import React from "react";
import { Header } from "components/Header";
import Footer from "components/Footer";
import { Helmet } from "react-helmet";

const Layout = ({ title, children }) => {
  const links = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/sample-redux",
      label: "Sample Redux",
    },
    {
      path: "/sample-filter",
      label: "Sample Filter",
    },

  ];







  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header links={links} />
      <main className=" ">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
