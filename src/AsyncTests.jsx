import React, { Component } from 'react';
import axios from 'axios';

class AsyncTests extends Component {
  constructor(){
    super()
    this.asyncFunction = this.asyncFunction.bind(this);
    this.timeoutFn = this.timeoutFn.bind(this);
    this.intervalFn = this.intervalFn.bind(this);
    this.axiosFn = this.axiosFn.bind(this);
    this.state = {
      data: [],
      index: 0
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

  timeoutFn(){
    setTimeout(()=>{
      this.setState({
        index: 10
      })
    },1000)
  }

  intervalFn(){
    setInterval(()=>{
      this.setState({
        index: this.state.index + 1
      })
    },5000)
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
      // alert(error);
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
