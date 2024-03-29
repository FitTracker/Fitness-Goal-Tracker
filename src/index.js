import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { BrowserRouter } from "react-router-dom";
import store from "./ducks/store/configureStore";
import { Provider } from "react-redux";

import App from "./components/App/App.js";

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "rgba(3, 155, 229, 0.76)",
    primary2Color: "#ffcdd2",
    accent1Color: "#00bcd4",
    primary3Color: "#f3e5f5"
  }
});
ReactDOM.render(
  <div className="container">
    <Provider store={store}>
      <BrowserRouter>
        <MuiThemeProvider muiTheme={muiTheme}>
          <App />
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  </div>,
  document.getElementById("root")
);
