import React, { Component } from 'react';
import ChildComp from '../basic/ChildComp'

export default class ParentComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: 'Hi, I am from parent Comp',
            text : ''
        }
    }

    pullData = (data) => {
        this.setState({
            text:  data
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h3>{this.state.text}</h3>
                </div>
                <ChildComp sendData={this.state.message}
                pushData = {this.pullData}
                />
            </React.Fragment>
        )
    }
}
