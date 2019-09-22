import React from "react";
import "./App.scss";
import AppRouter from "../../router/AppRouter";
import { StylesProvider, ThemeProvider } from "@material-ui/styles";

const App = () => (
  <StylesProvider injectFirst>
    <AppRouter />
  </StylesProvider>
);
export default App;
