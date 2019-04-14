import React, { Component } from 'react';

class LifecycleMethods extends Component{

    componentWillMount(){
        this.incrementIndex();
    }

    componentDidMount(){
        this.incrementIndex();
    }

    componentDidUpdate(){
        this.incrementIndex();
    }

    componentWillUnmount(){
        this.incrementIndex();
    }

    componentDidCatch(error){
        this.incrementIndex(error);
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