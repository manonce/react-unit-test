import React, { Component } from 'react';

class Home extends Component {
  constructor(){
    super()
    this.incrementIndex = this.incrementIndex.bind(this);
    this.asyncFunction = this.asyncFunction.bind(this);
    this.state = {
      index: 0,
      data: []
    }
  }
  incrementIndex(){
    this.setState({
      index: this.state.index+1
    })
  }
  asyncFunction(){
    fetch('http://google.com/somedata.json').then((data)=>{
      this.setState({
        data: data
      })
    }).catch(error=>{
      this.setState({
        data: {name:'123'}
      })
      // console.log('error', error)
      // alert(error);
    })
  }
  render() {
    const { name } = this.props;
    return (
      <div className="App">
        <span id="name">{name}</span>
        <span id="index">{this.state.index}</span>
        <button id="increment" onClick={this.incrementIndex}>Increment index</button>
        <button id="async" onClick={this.asyncFunction}>Async Function</button>
      </div>
    );
  }
}

export default Home;
