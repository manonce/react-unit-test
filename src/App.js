import React, { Component } from "react";
import Normal from "./Normal";
import AsyncTests from "./AsyncTests";
import ReduxTests from "./ReduxTests";
import Timers from "./Timers";
import Routes from "./Routes";
import Refs from "./Refs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Normal />
        <AsyncTests />
        <ReduxTests />
        <Timers />
        <Routes />
        <Refs />
      </div>
    );
  }
}

export default App;
