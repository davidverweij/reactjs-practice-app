import React from "react";
import Menu from "./components/Menu/Menu";
import Dashboard from "./containers/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Header from "./containers/Header/Header";
import ErrorBoundary from "./containers/ErrorBoundary/ErrorBoundary";
import MovieEditor from "./components/MovieEditor/MovieEditor";

const App = (): JSX.Element => {
  return (
    <>
      <MovieEditor />
      <Header>
        <Menu />
      </Header>
      <ErrorBoundary>
        <Dashboard />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;
