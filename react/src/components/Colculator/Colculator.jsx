import React from "react";

// components/Counter/Counter.jsx
import { useState } from "react";

// components/Calculator/Calculator.jsx
export default function Calculator() {
  const [stringState, setStringState] = useState({ result: 0, x: 0, y: 0 });
  let inputX = 0;
  let inputY = 0;
  let inputAdd = 0;
  const calculatorSubmit = (event) => {
    event.preventDefault();
    const element = event["target"]["value"];
    const elementName = event["target"]["name"];

    console.log(element);
    console.log(elementName);
    if (elementName === "x") {
      inputX = element;
      console.log(`x 입력 값: ${inputX}`);
    }
    if (elementName === "y") {
      inputY = element;
      console.log(`y 입력 값: ${inputY}`);
    }
  };
  function add() {
    console.log("x + y");
    // 상태 업데이트 로직
    console.log("더하기");
    inputAdd = inputX + inputY;
    // 상태 업데이트 로직
    let addUpdate = { ...stringState, result: inputAdd, x: inputX, y: inputY };
    setStringState(addUpdate);
  }

  function subtract() {
    console.log("x - y");
    // 상태 업데이트 로직
  }

  function multiply() {
    console.log("x * y");
    // 상태 업데이트 로직
  }

  function divide() {
    console.log("x / y");
    // 상태 업데이트 로직
  }

  function handleChange(event) {}

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">
        결과 값 : {stringState.result}
      </h2>
      <div>
        <input
          type="number"
          name="x"
          className="w-full p-2 mb-3 border"
          placeholder="x"
          onChange={(event) => calculatorSubmit(event)}
        />
        <input
          type="number"
          name="y"
          className="w-full p-2 mb-3 border"
          placeholder="y"
          onChange={(event) => calculatorSubmit(event)}
        />
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => {
            add();
          }}
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
        >
          더하기 +
        </button>
        <button className="bg-blue-500 text-white px-6 py-2 cursor-pointer">
          빼기 -
        </button>
        <button className="bg-blue-500 text-white px-6 py-2 cursor-pointer">
          곱하기 *
        </button>
        <button className="bg-blue-500 text-white px-6 py-2 cursor-pointer">
          나누기 /
        </button>
      </div>
    </div>
  );
}
