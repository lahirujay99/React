import { useEffect, useState } from "react";

export default function App() {
  const [value, setValue] = useState(3);
  const [currentCurrency, setCurrentCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedVal, setConvertedVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleValue(val) {
    console.log(val);
    setValue(val);
  }

  useEffect(
    function () {
      async function convert() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${value}&from=${currentCurrency}&to=${toCurrency}`
        );
        const data = await res.json();
        console.log(data.rates[toCurrency]);
        setConvertedVal(data.rates[toCurrency]);
        setIsLoading(false);
      }
      if (currentCurrency === toCurrency) return setConvertedVal(value); // this line fixed that error occuring when convert same currency

      convert();
    },
    [value, currentCurrency, toCurrency]
  );

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => handleValue(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={currentCurrency}
        onChange={(e) => setCurrentCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {convertedVal} {toCurrency}
      </p>
    </div>
  );
}
