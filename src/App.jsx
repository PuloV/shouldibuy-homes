import React, { useState } from 'react';
import { ArrowDown, ArrowUp, Home } from "lucide-react";

const categorize = (value, thresholds) => {
  if (value < thresholds[0]) return 'Undervalued';
  if (value < thresholds[1]) return 'Normal';
  if (value < thresholds[2]) return 'Overvalued';
  return 'Bubble';
};

const getColor = (label) => {
  switch (label) {
    case 'Undervalued': return 'text-lime-400';
    case 'Normal': return 'text-green-600';
    case 'Overvalued': return 'text-orange-400';
    case 'Bubble': return 'text-red-500';
    default: return '';
  }
};

const getIcon = (label) => {
  switch (label) {
    case 'Undervalued': return <ArrowDown className="inline ml-1 text-lime-400" />;
    case 'Normal': return <Home className="inline ml-1 text-green-600" />;
    case 'Overvalued': return <ArrowUp className="inline ml-1 text-orange-400" />;
    case 'Bubble': return <ArrowUp className="inline ml-1 text-red-500" />;
    default: return null;
  }
};

const App = () => {
  const [price, setPrice] = useState('');
  const [salary, setSalary] = useState('');
  const [mortgage, setMortgage] = useState('');
  const [rent, setRent] = useState('');
  const [results, setResults] = useState(null);

  const evaluate = () => {
    const priceToRent = +price / (+rent * 12);
    const priceToIncome = +price / (+salary * 12);
    const mortgageToRent = +mortgage / +rent;

    setResults({
      priceToRent: {
        value: priceToRent.toFixed(1),
        label: categorize(priceToRent, [100, 150, 250]),
      },
      priceToIncome: {
        value: priceToIncome.toFixed(1),
        label: categorize(priceToIncome, [1.5, 3.0, 5.0]),
      },
      mortgageToRent: {
        value: mortgageToRent.toFixed(1),
        label: categorize(mortgageToRent, [0.5, 1.0, 1.5]),
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center text-white flex justify-center items-center gap-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="h-10 w-10" alt="React Logo" />
          ShouldIBuy.homes
        </h1>

        <div className="bg-gray-800 rounded-xl p-6 space-y-4 border border-gray-700">
          <div>
            <label className="block text-sm mb-1">Property Price</label>
            <input
              type="number"
              className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-white"
              placeholder="$"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Salary per Month</label>
            <input
              type="number"
              className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-white"
              placeholder="$"
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Mortgage per Month</label>
            <input
              type="number"
              className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-white"
              placeholder="$"
              onChange={(e) => setMortgage(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Rent per Month</label>
            <input
              type="number"
              className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-white"
              placeholder="$"
              onChange={(e) => setRent(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-lime-500 hover:bg-lime-600 text-black font-bold py-2 rounded mt-4"
            onClick={evaluate}
          >
            Evaluate
          </button>
        </div>

        {results && (
          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              {['priceToRent', 'priceToIncome', 'mortgageToRent'].map((key, idx) => (
                <div key={idx} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">{results[key].value}</div>
                  <div className={`text-xl font-semibold ${getColor(results[key].label)}`}>
                    {results[key].label} {getIcon(results[key].label)}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center">
                <div className="text-sm text-gray-400 mb-1">Price / Rent</div>
                <div className={`text-2xl font-semibold ${getColor(results.priceToRent.label)}`}>
                  {results.priceToRent.value} {getIcon(results.priceToRent.label)}
                </div>
                <div className={`text-md ${getColor(results.priceToRent.label)}`}>
                  {results.priceToRent.label}
                </div>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center">
                <div className="text-sm text-gray-400 mb-1">Mortgage / Rent</div>
                <div className={`text-2xl font-semibold ${getColor(results.mortgageToRent.label)}`}>
                  {results.mortgageToRent.value} {getIcon(results.mortgageToRent.label)}
                </div>
                <div className={`text-md ${getColor(results.mortgageToRent.label)}`}>
                  {results.mortgageToRent.label}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
