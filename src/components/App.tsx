import React from "react";

interface AppProps {
  message: string;
}

const App = ({ message }: AppProps): JSX.Element => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default App;
