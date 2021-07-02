import "./styles/output.css";
import React, { useState, useEffect } from "react";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Succuss from "./components/Succuss.jsx";
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import Add from "./components/Add.jsx";
import Edit from "./components/Edit.jsx";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  const storedStatus = localStorage.getItem("logged");
  let [getSuccuss, setGetSuccuss] = useState("");
  let [autho, setAutho] = useState("");

  return (
    <div className="w-screen flex justify-center items-center">
      <Router>
        <Route exact path="/">
          {storedStatus ? <Home /> : <Login setAutho={setAutho} />}
        </Route>
        <Route path="/signup">
          {getSuccuss === "Created" ? (
            <Succuss />
          ) : (
            <Signup setGetSuccuss={setGetSuccuss} />
          )}
        </Route>
        <Route path="/add">
          {storedStatus ? null : <Redirect to="/" />}
          <Add />
        </Route>
        <Route path="/edit">
          {storedStatus ? null : <Redirect to="/" />}
          <Edit />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Router>
    </div>
  );
}

export default App;
