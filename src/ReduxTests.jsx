import React, { Component } from 'react';
import { connect } from 'react-redux'
import { incrementIndex } from './actions';

export class ReduxTests extends Component{
    constructor(){
        super();
        this.incrementIndex = this.incrementIndex.bind(this);
    }

    incrementIndex(){
        this.props.incrementIndex()
    }

    render(){
        return(
            <div>
                {this.props.index}
                <button onClick={this.incrementIndex}>Increment index redux</button>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        index: state
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        incrementIndex: ()=>dispatch(incrementIndex())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTests);