import React, { Component } from 'react';
import axios from 'axios';

class AsyncTests extends Component {
  constructor(){
    super()
    this.asyncFunction = this.asyncFunction.bind(this);
    this.axiosFn = this.axiosFn.bind(this);
    this.state = {
      data: []
    }
  }


  axiosFn(){
    axios({
      url: 'http://google.com/somedata.json'
    }).then((response)=>{
      this.setState({
        data: response.data
      })
    }).catch(e=>{
        console.log("error",e)
    })
  }

  asyncFunction(){
    fetch('http://google.com/somedata.json').then((data)=>{
      this.setState({
        data: data
      })
    }).catch(error=>{
      this.setState({
        data: error
      })
    })
  }
  render() {
    return (
      <div className="App">
        <button id="async" onClick={this.asyncFunction}>Async Function</button>
      </div>
    );
  }
}

export default AsyncTests;
