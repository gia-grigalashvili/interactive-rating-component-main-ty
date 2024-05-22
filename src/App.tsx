import "./App.css";

import { useState } from "react";
import Result from "./components/Result";
import Rate from "./components/Result";

function App() {
  const [rate, setrate] = useState(null);
  const [sumbit, setsumbit] = useState(false);
  return (
    <>
      {sumbit ? (
        <Result rate={rate} />
      ) : (
        <Rate rate={rate} setrate={setrate} setsumbit={setsumbit} />
      )}
    </>
  );
}

export default App;
