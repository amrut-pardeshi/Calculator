import style from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  return (
    <div className={style.calculator}>
      <div id="Calculator">
        <Display />
        <ButtonsContainer />
      </div>
    </div>
  );
}

export default App;
