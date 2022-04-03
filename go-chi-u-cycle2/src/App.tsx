import './App.css'
import RotateButton from "./components/RotateButton";
import Cycle from "./components/Cycle";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>ごちうサイクル - ご注文はサイクルですか？ -</p>
      </header>
      <RotateButton />
      <Cycle />
    </div>
  )
}

export default App
