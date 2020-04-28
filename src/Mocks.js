import React, { Component } from 'react';
import axios from 'axios';

class MockComponent extends Component{
  state = {
    name: '',
    error: false
  }
  componentDidMount(){
    axios({
      url: '/',
      method: 'POST'
    }).then((data)=>{
      console.log('data',data)
      const { name } = data;
      this.setState({
        name
      })
    }).catch(()=>{
      this.setState({
        error: true
      })
    })
  }
  render(){
    const { name, error } = this.state;
    if(error){
      return (
        <div>
          Error fetching data
        </div>
      )
    }
    return (
      <div>
        This is a mock component {name}
      </div>
    )
  }
}

export default MockComponent;