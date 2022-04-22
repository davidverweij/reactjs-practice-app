import React from "react";

interface HomePageProps {
  message: string;
}

const App = (props: HomePageProps) => {
  return (
    <div>
      <h1>{props.message}</h1>
    </div>
  );
};

export default App;
