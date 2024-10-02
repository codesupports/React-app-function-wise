import { useEffect, useState } from 'react';

function InsertHyephenAfterFourChar() {
  const [inputValue, setInputValue] = useState('');

  const formatCardNumber = (value) => {
    const groups = [];
    for (let i = 0; i < value.length; i += 4) {
      groups.push(value.substring(i, i + 4) + '-');
    }
    return groups.join(''); // Join groups with a space
  };

  const handleChange = (e) => {
    const input = e.target.value.replace(/\D/g, ''); // Remove non-digit characters Like
    const formattedInput = formatCardNumber(input);
    setInputValue(formattedInput.trim().slice(0,-1));
  };

  return (
    <>
    <h3>Insert Hyephen after every 4 charactor enter in input: ⬇️</h3>
      <p>{inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleChange(e)}
        placeholder="Enter numbers"
      />
    </>
  );
}

export default InsertHyephenAfterFourChar;
