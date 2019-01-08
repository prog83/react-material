import "typeface-roboto";
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import AppHeader from "./components/header/";

export default class App extends Component {
  render() {
    return (
      <div id="container">
        <AppHeader />
        <Typography variant="h5" align="center">
          Введення
        </Typography>
      </div>
    );
  }
}
