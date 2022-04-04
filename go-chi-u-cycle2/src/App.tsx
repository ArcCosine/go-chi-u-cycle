import './App.css'
import RotateButton from "./components/RotateButton";
import CycleArea from "./components/CycleArea";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>ごちうサイクル - ご注文はサイクルですか？ -</p>
      </header>
      <RotateButton />
      <CycleArea />
    </div>
  )
}

export default App
