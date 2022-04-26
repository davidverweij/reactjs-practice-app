import React from "react";
import Menu from "./containers/Menu/Menu";
import Dashboard from "./containers/Dashboard/Dashboard";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import Hr from "./ui/Hr/Hr";

const App = () => {
  return (
    <>
      <Header>
        <Menu />
      </Header>
      <Hr />
      <Dashboard />
      <Footer />
    </>
  );
};

export default App;
