import { useState } from "react";
import "./style.css";
function App() {
  return (
    <div className="App">
      <Count />
    </div>
  );
}

function Count() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <>
      <div>
        <div>
          <button onClick={() => setStep((c) => c - 1)}>-</button>
          <span> Steps {step} </span>
          <button onClick={() => setStep((c) => c + 1)}>+</button>
        </div>
        <div>
          <button onClick={() => setCount((c) => c - step)}>-</button>
          <span> Count {count} </span>
          <button onClick={() => setCount((c) => c + step)}>+</button>
        </div>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is: "
            : count > 0
            ? `${count} days from today is: `
            : `${Math.abs(count)} days ago was: `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}

export default App;
