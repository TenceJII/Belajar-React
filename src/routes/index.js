import React from "react";
import {
  BrowserRouter,
  Routes as ReactRoutes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "pages/home";
import LoginPage from "pages/login";
import SimpleReduxPage from "pages/sample-redux";
import ImagePage from "pages/Image";
import VectorPage from "pages/vector";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sample-redux" element={<SimpleReduxPage />} />
        <Route path="/Image" element={<ImagePage />} />
        <Route path="/vector" element={<VectorPage />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
