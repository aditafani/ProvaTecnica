import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <p>Inserisci ID utente</p>
        <input type='text' placeholder="Inserire ID"></input>
        <button type="subimt">LOGIN</button>
      </header>
    </div>
  );
}

export default App;