import React, { FC } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { Header } from "./components/elements/Header";

import { store } from "./init/store";
const App: FC = () => {
  return <Provider store={store}></Provider>;
};

export default App;
