'use client'

import { useState } from "react";

export default function CalculatorPage() {
        const [input, setInput] = useState("");
        const [result, setResult] = useState<string>("");
      
        // Function to handle button click events
        const handleClick = (value: string) => {
            // if(result!.match(/[^0-9]/)) {
            //     return
            // }
          setInput((prevInput) => prevInput + value);
          let tempResult = (input || "")
          if(value.match(/[^0-9]/)) {
            setResult(tempResult)
          } else if(value.match(/[^0-9]/) && tempResult.match(/[^0-9]/)) {
            setResult(eval(input))
            setInput(result + value)
          } else {
            tempResult += value
            setResult(eval(tempResult))
          }
        };
      
        // Function to handle clear button
        const handleClear = () => { 
          setInput("");
          setResult("");
        };
      
        // Function to evaluate the input string
        const handleEvaluate = () => {
          try {
            // Using eval is fine here because we control the input
            setResult(eval(input)); 
          } catch (error) {
            setResult("Error");
          }
        };
    return (
        <main className="calculator flex flex-col gap-3">
        <section className="calculator-display flex">
          <input
            type="text"
            value={input}
            readOnly
            placeholder="Enter your equation"
            className=""
            // onChange={(e) => {
            //     console.log(e.target.value)
            //     setResult(eval(e.target.value))}}
          />
          {result !== null && (
            <div className="result">
              <span>={result}</span>
            </div>
          )}
        </section>
        <div className="calculator-buttons grid grid-cols-4 gap-2">
          {/* Number Buttons */}
          {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "Clear", 0,"=", "/"].map((char) => {
            if(char === "Clear") return(
                <button key={char} onClick={handleClear}>Clear</button>
            )
            if(char === "=") return (
                <button key={char} onClick={handleEvaluate}>=</button>
            )
            return (
            <button className="bg-gray-100 hover:bg-gray-300 active:scale-95" key={char} onClick={() => handleClick(char.toString())}>
              {char}
            </button>
          )})}
  
          {/* Other Buttons */}
        </div>
        </main>
    )
}