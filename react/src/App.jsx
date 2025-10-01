import React from "react";
//import String from "./components/State/StringState";
//import Object from "./components/State/ObjectState";
import Colculator from "./components/Colculator/Colculator";

// App 컴포넌트는 Header 컴포넌트와 Interpolation 컴포넌트를 포함한다
// App 컴포넌트는 Header 컴포넌트와 Interpolation 컴포넌트가 중첩됐다
export default function App() {
  return (
    <div>
      {/* <Object></Object> */}
      <Colculator></Colculator>
    </div>
  );
}
