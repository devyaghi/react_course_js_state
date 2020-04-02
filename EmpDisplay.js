import React from "react";

export default class EmpDisplay extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            name:"Mohammed",
            role:"Manager"

        }

    }

    change=()=>{

        this.setState(
            {
                name:"Ahmed",
                role:"Developer"

            }
        );

    }

    render() {
        return (
            <div>
            <h1>Hello : {this.state.name}</h1>
            <h2>Role : {this.state.role}</h2>
            <button onClick={this.change}>change</button>
            </div>
        )
    }


}