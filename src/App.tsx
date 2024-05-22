import "./App.css";
import { useState } from "react";
import Result from "./components/Resault/Result";
import Rate from "./components/Rate/Rate";

function App() {
  const [rate, setRate] = useState<number | null>(null);
  const [submit, setSubmit] = useState<boolean>(false);

  return (
    <>
      {submit ? (
        <Result rate={rate} />
      ) : (
        <Rate rate={rate} setRate={setRate} setSubmit={setSubmit} />
      )}
    </>
  );
}

export default App;
