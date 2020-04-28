import React, { Component } from "react";

class SnapShotTests extends Component {
  state = {
    showName: false
  };
  toggleShowName = () => {
    const { showName } = this.state;
    this.setState({
      showName: !showName
    });
  };
  render() {
    const { showName } = this.state;
    return (
      <div className="App">
        {Date.now()}
        
      </div>
    );
  }
}

export default SnapShotTests;
