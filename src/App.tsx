import React from "react";
import Menu from "./containers/Menu/Menu";
import Dashboard from "./containers/Dashboard/Dashboard";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";

const App = () => {
  return (
    <>
      <Menu />
      <Header />
      <Dashboard />
      <Footer />
      <p>Hello there</p>
    </>
  );
};

export default App;
