import React, { Component } from 'react';

class LifecycleMethods extends Component{
    constructor(){
        this.fetchSomething();
    }
    componentWillMount(){
        this.fetchSomething();
    }

    componentDidMount(){
        this.fetchSomething();
    }

    componentDidUpdate(){
        this.fetchSomething();
    }

    componentWillUnmount(){
        this.fetchSomething();
    }

    componentDidCatch(error){
        this.fetchSomething(error);
    }

    

    fetchSomething = ()=>{
        
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default LifecycleMethods;