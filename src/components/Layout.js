import React from "react";
import { Header } from "components/Header";
import Footer from "components/Footer";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const Layout = ({ title, renderHeaderAndFooter, children }) => {
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
      {renderHeaderAndFooter && <Header links={links} />}
      <main className=" ">{children}</main>
      {renderHeaderAndFooter && <Footer />}
    </>
  );
};

Layout.propTypes = {
  renderHeaderAndFooter: PropTypes.bool,
  title: PropTypes.string,
};

Layout.defaultProps = {
  title: "",
  renderHeaderAndFooter: true,
};
export default Layout;
