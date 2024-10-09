import style from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonName) => {
    if (buttonName === "C") {
      setCalVal("");
      return;
    }
    if (buttonName === "=") {
      try {
        setCalVal(eval(calVal));
      } catch (error) {
        setCalVal("Something went wrong");
      }
      return;
    }
    console.log(buttonName);
    let newValue = calVal + buttonName;
    setCalVal(newValue);
  };

  return (
    <div className={style.calculator}>
      <div id="Calculator">
        <Display displayValue={calVal} />
        <ButtonsContainer buttonHandler={onButtonClick} />
      </div>
    </div>
  );
}

export default App;
