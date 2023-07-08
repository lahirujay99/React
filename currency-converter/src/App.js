import { useEffect, useState } from "react";

export default function App() {
  const [value, setValue] = useState(3);
  const [currency, setCurrentCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedVal, setConvertedVal] = useState(0);

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
        `https://api.frankfurter.app/latest?amount=${value}&from=${currency}&to=${toCurrency}`
      );
      const data = await res.json();
      console.log(data.rates[toCurrency]);
      setConvertedVal(data.rates[toCurrency]);
    }
    convert();
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
      <p>{convertedVal}</p>
    </div>
  );
}
