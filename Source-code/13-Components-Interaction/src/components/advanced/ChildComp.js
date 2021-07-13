import React, { Component } from 'react'

export default class ChildComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: 'Hi, I am from ChildComp'
        }
    }

    clickButton = () => {
        this.props.pushData(this.state.data);
    }

    render() {
        return (
            <React.Fragment>
                <h1>{this.props.sendData}</h1>
                <button onClick={this.clickButton}>Send</button>
            </React.Fragment>
        )
    }
}
