import { useState } from "react";
import { evaluate } from "mathjs";
import "./BasicCalsi.css";

const BasicCalsi = () => {
  const [result, setResult] = useState("");
  const [inputValue, setInputValue] = useState("");
  const numBtns = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/","AC"];

  const handleInput = (val) => {
    setInputValue((prev) => prev + val);
  };

  const handleClear = (key) => {
    if(key === "AC"){
      setResult(result.slice(0, -1));
    } else {
      setResult("");
      setInputValue("");
    }
    
  };

  const Calculate = () => {
    try {
      const calVal = evaluate(inputValue);
      setResult(calVal.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>

      <div className="inputBar">
        <form>
          <input
            type="text"
            value={inputValue}
            readOnly
            onChange={handleInput}
          />
        </form>
      </div>

      {result && <div className="display">{result}</div>}

      <div className="calBtns">
        {numBtns.map((num, index) =>
          num === "C" || "AC"? (
            <button key={index} name={index} onClick={(e)=>handleClear(e.target.name)}>
              {num}
            </button>
          ) : num === "=" ? (
            <button key={index} onClick={Calculate}>
              {num}
            </button>
          ) : (
            <button key={index} onClick={() => handleInput(num)}>
              {num}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default BasicCalsi;
