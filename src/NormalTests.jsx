import React, { Component } from 'react';

class NormalTests extends Component{
    constructor(){
        super();
        this.state = {
            index: 0
        }
        this.incrementIndex = this.incrementIndex.bind(this);
    }

    incrementIndex(){
        this.setState({
            index: this.state.index+1
        })
    }

    render(){
        return(
            <div>
                <span id="index">{this.state.index}</span>
                <button onClick={this.incrementIndex}>Increment Index</button>
            </div>
        )
    }
}

export default NormalTests;