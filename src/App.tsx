import React from "react";
import Menu from "./components/Menu/Menu";
import Dashboard from "./containers/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Header from "./containers/Header/Header";
import Hr from "./ui/Hr/Hr";
import ErrorBoundary from "./containers/ErrorBoundary/ErrorBoundary";

const App = () => {
  return (
    <>
      <Header>
        <Menu />
      </Header>
      <Hr />
      <ErrorBoundary>
        <Dashboard />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;
