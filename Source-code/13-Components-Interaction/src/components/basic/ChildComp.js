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
                <div className="card bg-danger">
                    <div className="card-body">
                    <h1>Parent : {this.props.sendData}</h1>
                    </div>
                </div>
                <button className="btn btn-success btn-sm" onClick={this.clickButton}>Send</button>
            </React.Fragment>
        )
    }
}
