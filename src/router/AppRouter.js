import React from "react";
import { Router } from "@reach/router";
import Home from "../components/Home/Home";

function AppRouter() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}

export default AppRouter;
