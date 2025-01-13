import React, { useState } from 'react'
import './styles/sharemarket.css'
const ShareMarketCalculator  = () => {

const [purchasePrice, setPurchasePrice] = useState('');
const [sellingPrice, setSellingPrice] = useState('');
const [result, setResult] = useState(null);
const [error, setError] = useState('');

const calculateProfitLoss = () => {
  setError(''); // Reset error state on each calculation attempt

  // Validate if both fields have values and are positive numbers
  if (!purchasePrice || !sellingPrice) {
    setError('Please fill in both prices.');
    return;
  }
  if (isNaN(purchasePrice) || isNaN(sellingPrice)) {
    setError('Please enter valid numbers.');
    return;
  }

  const purchase = parseFloat(purchasePrice);
  const selling = parseFloat(sellingPrice);

  // Calculate profit/loss
  const profitLoss = selling - purchase;
  const profitPercentage = ((profitLoss / purchase) * 100).toFixed(2);

  // Set result based on whether there's profit or loss
  if (profitLoss > 0) {
    setResult(`Profit: $${profitLoss.toFixed(2)} (${profitPercentage}%)`);
  } else if (profitLoss < 0) {
    setResult(`Loss: $${Math.abs(profitLoss).toFixed(2)} (${Math.abs(profitPercentage)}%)`);
  } else {
    setResult('No Profit or Loss');
  }
};
  return (
    <div className="calculator">
      <h1>Share Market Profit and Loss Calculator</h1>

      <div className="inputs">
        <div>
          <label>Purchase Price ($):</label>
          <input
            type="number"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
            placeholder="Enter purchase price"
          />
        </div>

        <div>
          <label>Selling Price ($):</label>
          <input
            type="number"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
            placeholder="Enter selling price"
          />
        </div>
      </div>

      <button onClick={calculateProfitLoss}>Calculate Profit/Loss</button>

      {error && <p className="error">{error}</p>}
      {result && <p className="result">{result}</p>}
    </div>
  )
}

export default ShareMarketCalculator 
