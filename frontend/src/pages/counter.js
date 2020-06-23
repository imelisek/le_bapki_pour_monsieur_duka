import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";



function App() {
  const [counter, setCounter] = useState(0);

  return (
    <MainLayout>
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </MainLayout>
  );
}

export default App;