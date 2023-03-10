import React from "react";
import { Header } from "components/Header";
import Footer from "components/Footer";
import { Helmet } from "react-helmet";

const Layout = ({ title, children }) => {
  const links = [
    {
      path: "/home",
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
      <main className="max-w-screen-md px-4 mx-auto pt-[78px]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
