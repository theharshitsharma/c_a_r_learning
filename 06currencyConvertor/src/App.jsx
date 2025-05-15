import { useState } from "react";
import reactLogo from "./assets/react.svg"; // Unused import (can be removed if not needed)
import viteLogo from "/vite.svg"; // Unused import (can be removed if not needed)
import InputBox from "./components/InputBox";
import useCurrency from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(""); // Initialize as empty string for controlled input
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrency(from);
  const options = Object.keys(currencyInfo).length > 0 ? Object.keys(currencyInfo) : ["USD", "INR"]; // Fallback options

  const swap = () => {
    // Swap currencies
    setFrom(to);
    setTo(from);
    // Swap amounts (use the converted amount as the new input amount)
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    // Ensure amount is a number and currencyInfo has the target currency
    if (!amount || isNaN(amount) || !currencyInfo[to]) {
      setConvertedAmount("");
      return;
    }
    // Convert amount using the exchange rate
    const rate = currencyInfo[to]; // Rate of 'to' currency relative to 'from'
    setConvertedAmount((amount * rate).toFixed(2)); // Round to 2 decimal places
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/106152/euro-coins-currency-money-106152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(value) => setAmount(value)} // Use 'value' for clarity
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable={true} // Disable amount input for 'To' field
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;