import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header headline="Vi hjelper deg" />
        </header>
      </div>
    );
  }
}

export default App;
