import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login.jsx";
import Home from "./components/Home/Home.jsx";

function App() {
  let [check, setCheck] = useState(false);

  console.log(check);
  return (
    <div className="App">
      {check ? <Home /> : <Login setCheck={setCheck} />}
    </div>
  );
}

export default App;
