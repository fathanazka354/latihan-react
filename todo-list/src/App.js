import logo from "./logo.svg";
import "./App.css";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h2> This is Header ya guys </h2>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Header />
      <h1 className="middle">Hi ini adalah middle </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ad, tenetur!
      </p>
    </div>
  );
}

export default App;
