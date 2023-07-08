import { useEffect, useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [currency, setCurrentCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  function handleValue(val) {
    console.log(val);
    setValue(val);
  }

  function handleCurrentCurrency(val) {
    console.log(val);
    setCurrentCurrency(val);
  }

  function handleToCurrency(val) {
    console.log(val);
    setToCurrency(val);
  }

  useEffect(function () {
    async function convert() {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
      );
    }
  }, []);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => handleValue(Number(e.target.value))}
      />
      <select
        value={currency}
        onChange={(e) => handleCurrentCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => handleToCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
    </div>
  );
}
