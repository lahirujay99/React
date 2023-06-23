import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  //usege of derived state
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handlerReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} setAmount={setBill} />
      <SelectPercentage service={percentage1} onSelect={setPercentage1}>
        How do you like the service?{" "}
      </SelectPercentage>
      <SelectPercentage service={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?{" "}
      </SelectPercentage>
      {tip > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handlerReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, setAmount }) {
  return (
    <div>
      <label>How much was the Bill? </label>
      <input
        type="text"
        placeholder="Bill Amount"
        value={bill}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, service, onSelect }) {
  return (
    <div>
      {children}
      <select
        value={service}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was Good (10%)</option>
        <option value="20">It was absolutley amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  const total = bill + tip;
  return (
    <h3>
      you pay {total} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
