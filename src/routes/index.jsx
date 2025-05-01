import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import authRoutes from "./authentication/Index";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function MainRoute() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <>
        <Router>
          <Routes>
            {authRoutes.map((item, index) => (
              <Route
                key={index}
                exact
                path={item.path}
                element={<item.component />}
              />
            ))}
          </Routes>
        </Router>
      </>
    </GoogleOAuthProvider>
  );
}
