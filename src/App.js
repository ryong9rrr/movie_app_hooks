import React, { useState, useEffect } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 3000);
  }, []);

  return <h1>{isLoading ? "Loading" : "we are ready"}</h1>;
};

export default App;
