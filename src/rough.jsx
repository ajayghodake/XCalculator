import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

function Cal() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState('');

  const handleInput = (val) => {
    setInputValue((prevValue) => prevValue + val);
  }

  const handleClear = () => {
    setInputValue("");
    setResult('');
  }

  const handleSubmit = () => {
    try {
      const res = evaluate(inputValue);
      setResult(res.toString());
    } catch (error) {
      setResult('Error');
    }
  }
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type='text' value={inputValue} readOnly></input>
      {result && <div style={{ margin: '10px', color: 'grey', fontSize: 'larger' }}>{result}</div>}
      <div className='calciButtons'>
        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('+')}>+</button>
        <br/>
        <button onClick={() => handleInput('4')}>4</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('-')}>-</button>
        <br/>
        <button onClick={() => handleInput('1')}>1</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('3')}>3</button>
        <button onClick={() => handleInput('*')}>*</button>
        <br/>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleInput('0')}>0</button>
        <button onClick={handleSubmit}>=</button>
        <button onClick={() => handleInput('/')}>/</button>
      </div>
    </div>
  );
}

export default Cal;