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

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/sample-redux" element={<SimpleReduxPage />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
