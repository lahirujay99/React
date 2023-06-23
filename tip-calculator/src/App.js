import "./App.css";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  return (
    <div>
      <BillInput />
      <SelectPercentage>How do you like the service? </SelectPercentage>
      <SelectPercentage>
        How did your friend like the service?{" "}
      </SelectPercentage>
      <Output />
      <Reset />
    </div>
  );
}
function BillInput() {
  return (
    <div>
      <label>How much was the Bill? </label>
      <input type="text" placeholder="bill amount" />
    </div>
  );
}
function SelectPercentage({ children }) {
  return (
    <div>
      {children}
      <select>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was ok (5%)</option>
        <option value={10}>It was Good (10%)</option>
        <option value={20}>It was absolutley amazing (20%)</option>
      </select>
    </div>
  );
}
function Output() {
  return <h3>you pay X ($a + $b tip)</h3>;
}
function Reset() {
  return <button>Reset</button>;
}
