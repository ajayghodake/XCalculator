import { useState } from "react";
import { evaluate } from 'mathjs';
const Calculator = () => {
  const [result, setResult] = useState("");
  const [isEqual, isEqualClicked] = useState(false);
  const [displayResult, setDisplayResult] = useState("");
  const numBtns = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"];

  const handleInput = (e) => {
    if (isEqual) {
      setResult(e.target.name);
      isEqualClicked(false);
    } else {
      setResult(result.concat(e.target.name));
    }
  };

  const handleClear = () => {
    if(result === "Error"){
      setResult("");
      setDisplayResult("");
    } else {
    // setResult(result.slice(0, -1));
    setResult("")
    setDisplayResult("");
    isEqualClicked(false);
    }
  };

  const Calculate = () => {
    isEqualClicked(true);
    try {
      if (result === "0/0") {
        setDisplayResult("NaN");
      }
      else if (result.includes("/0") && result !== "0/0") {
        setResult("Error");
        setDisplayResult("Error");
      } else {
        // setResult(eval(result).toString());
        setDisplayResult(evaluate(result).toString());
      }
    } catch (error) {
      setResult("Error");
      setDisplayResult("Error");
    }
  };




  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "50px",
    padding: "10px",
    border: "1px solid gray",
    borderRadius: "5px",
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>React Calculator</h1>

      <div className="inputBar">
        <form>
          <input
            type="text"
            value={result}
            readOnly
            onChange={handleInput}
            style={{
              width: "220px",
              fontSize: "18px",
              marginBottom: "10px",
              padding: "5px",
            }}
          />
        </form>
      </div>

      {/* this should be only shown when "=" is clicked */}
      <div className="display" style={{ height: "10px", fontSize: "20px", fontWeight: "bolder" }}>
        {isEqual ? displayResult : null}
      </div>

      <div
        className="calBtns"
        style={{
          width: "230px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          rowGap: "10px",
          columnGap: "10px",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "30px",
        }}
      >
        {numBtns.map((num, index) =>
          num === "C" ? (
            <button
              key={index}
              name={num}
              onClick={handleClear}
              style={buttonStyle}
            >
              {num}
            </button>
          ) : num === "=" ? (
            <button
              key={index}
              name={num}
              onClick={Calculate}
              style={buttonStyle}
            >
              {num}
            </button>
          ) : (
            <button
              key={index}
              name={num}
              onClick={handleInput}
              style={buttonStyle}
            >
              {num}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Calculator;
