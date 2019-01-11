import React, { Component } from 'react';
import NormalTests from './NormalTests';
import AsyncTests from './AsyncTests';
import ReduxTests from './ReduxTests';
import Timers from './Timers';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NormalTests/>
        <AsyncTests/>
        <ReduxTests/>
        <Timers/>
        <Routes/>
      </div>
    );
  }
}

export default App;
