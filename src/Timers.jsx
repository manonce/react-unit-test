import React, { Component } from 'react';

class Timers extends Component{
    constructor(){
        super();
        this.state = {
            index: 0
        }
        this.setTimeoutFn = this.setTimeoutFn.bind(this);
        this.setIntervalFn = this.setIntervalFn.bind(this);
    }

    setTimeoutFn(){
        setTimeout(()=>{
            this.setState({
                index: 1
            })
        }, 1000)
    }

    setIntervalFn(){
        setInterval(()=>{
            this.setState({
                index: this.state.index + 1
            })
        }, 1000)
    }

    render(){
        return(
            <div></div>
        )
    }
}

export default Timers;