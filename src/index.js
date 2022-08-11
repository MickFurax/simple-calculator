import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import { useEffect } from "react";
import Calculation from "./components/Calculation";
import Button from "./components/Button";
import "./index.css";

const App = () => {
  const [inputs, setInputs] = useState([]);

  const parseNumber = (number) => {
    const result = parseFloat(number);
    if (isNaN(result)) {
      return 0;
    } else {
      return result;
    }
  };

  const handlePercent = () => {
    const inputsCopy = [...inputs];
    const lastInputs = inputsCopy.pop();
    if (!isNaN(parseInt(lastInputs))) {
      inputsCopy.push(lastInputs / 100);
      setInputs(inputsCopy);
    }
  };

  const evaluate = useCallback(() => {
    console.log("before evaluate:", inputs);
    const inputsCopy = [...inputs];
    let result = 0;
    while (inputsCopy.includes("x")) {
      let index = inputsCopy.indexOf("x");
      const numberBeforeX = inputsCopy[index - 1];
      const numberAfterX = inputsCopy[index + 1];
      result = parseNumber(numberBeforeX) * parseNumber(numberAfterX);

      inputsCopy.splice(index - 1, 3, result.toString());
    }
    while (inputsCopy.includes("/")) {
      let index = inputsCopy.indexOf("/");
      const numberBeforeDivide = inputsCopy[index - 1];
      const numberAfterDivide = inputsCopy[index + 1];
      result = parseNumber(numberBeforeDivide) / parseNumber(numberAfterDivide);

      inputsCopy.splice(index - 1, 3, result.toString());
    }
    while (inputsCopy.includes("+")) {
      let index = inputsCopy.indexOf("+");
      const numberBeforePlus = inputsCopy[index - 1];
      const numberAfterPlus = inputsCopy[index + 1];
      result = parseNumber(numberBeforePlus) + parseNumber(numberAfterPlus);

      inputsCopy.splice(index - 1, 3, result.toString());
    }
    while (inputsCopy.includes("-")) {
      let index = inputsCopy.indexOf("-");
      const numberBeforeMinus = inputsCopy[index - 1];
      const numberAfterMinus = inputsCopy[index + 1];
      result = parseNumber(numberBeforeMinus) - parseNumber(numberAfterMinus);

      inputsCopy.splice(index - 1, 3, result.toString());
    }

    setInputs(inputsCopy);
    console.log("after evaluate:", inputsCopy);
    console.log("--------------------------------");
  }, [inputs]);

  const handleDelete = useCallback(() => {
    setInputs((oldInputs) => {
      const oldInputsCopy = [...oldInputs];
      oldInputsCopy[oldInputsCopy.length - 1] = oldInputsCopy[oldInputsCopy.length - 1].slice(0, -1)
      if(oldInputsCopy[oldInputsCopy.length - 1].length === 0){
        oldInputsCopy.pop();
      }
      
      return [...oldInputsCopy];
    })
  }, [inputs]);

  const detectKeyDown = useCallback(
    (e) => {
      console.log(e.key);
      if (e.key === "0") {
        handleInput("0", true);
      }
      if (e.key === "1") {
        handleInput("1", true);
      }
      if (e.key === "2") {
        handleInput("2", true);
      }
      if (e.key === "3") {
        handleInput("3", true);
      }
      if (e.key === "4") {
        handleInput("4", true);
      }
      if (e.key === "5") {
        handleInput("5", true);
      }
      if (e.key === "6") {
        handleInput("6", true);
      }
      if (e.key === "7") {
        handleInput("7", true);
      }
      if (e.key === "8") {
        handleInput("8", true);
      }
      if (e.key === "9") {
        handleInput("9", true);
      }
      if (e.key === ".") {
        handleInput(".", true);
      }
      if (e.key === "%") {
        handleInput("%", false);
      }
      if (e.key === "/") {
        handleInput("/", false);
      }
      if (e.key === "x" || e.key === "*") {
        handleInput("x", false);
      }
      if (e.key === "-") {
        handleInput("-", false);
      }
      if (e.key === "+") {
        handleInput("+", false);
      }
      if (e.key === "Enter") {
        evaluate();
      }
      if (e.key === "Backspace") {
        handleDelete();
      }
    },
    [evaluate, handleDelete]
  );

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);

    return () => {
      document.removeEventListener("keydown", detectKeyDown, true);
    };
  }, [detectKeyDown]);

  const handleInput = (arg, isNumber) => {
    setInputs((oldInputs) => {
      const lastInputs = oldInputs[oldInputs.length - 1]; // last element of oldInputs
      if (isNumber === true) {
        // if arg is a number
        if (!isNaN(parseInt(lastInputs))) {
          // if last element of oldInputs is a number
          const last = lastInputs + arg; // append last element of oldInputs and arg
          return [...oldInputs.slice(0, oldInputs.length - 1), last]; // replace last element
        } else {
          // last element of oldInputs is not a number
          return [...oldInputs, arg];
        }
      } else {
        if(!!!!!isNaN(parseInt(lastInputs))) {
          return [...oldInputs, arg];
        } else {
          return oldInputs;
        }
                // arg is not a number
        
      }
    });
  };

  const handleClear = () => {
    setInputs(() => {
      return [];
    });
  };

  return (
    <div className="bg-slate-200 w-full h-full flex justify-center">
      <div className="bg-slate-100 m-auto w-80 rounded">
        <Calculation inputs={inputs} />
        <Button
          onInput={handleInput}
          handleClear={handleClear}
          handleDelete={handleDelete}
          evaluate={evaluate}
          handlePercent={handlePercent}
        />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
