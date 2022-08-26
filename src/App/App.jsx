import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import { Provider } from "react-redux";
import { store } from "../Redux/store";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <BrowserRouter>
          <AllRoutes />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
