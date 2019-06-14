import React, { Component } from 'react';
import { map } from 'lodash';
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
    const { data } = this.state;
    return (
      <div className="App">
        <List data={data}/>
        <button id="async" onClick={this.asyncFunction}>Async Function</button>
      </div>
    );
  }
}

export const List = (props)=>{
  const { data } = props;
  return map(data, d => <span className="index">{d}</span>)
}

export default AsyncTests;
