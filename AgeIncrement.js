import React from "react";

export default class AgeIncrement extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            age:0
        }
    }

    increment=()=>{
        this.setState(
            {
                age:this.state.age+1
            }

        );

    }

    render() {

        return (<div>
            <span>Age : {this.state.age} </span>
            <button onClick={this.increment}>increment</button>
        </div>)
    }


}