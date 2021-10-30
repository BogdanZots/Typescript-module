import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Userlist from "./components/UserList";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Userlist />

    </>
  );
};

export default App;
