import React, { Component } from 'react';
import ChildComp from '../advanced/ChildComp'

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
                <div className="mt-4">
                   <div className="row">
                       <div className="col-md-6">
                           <div className="card bg-success">
                               <div className="card-body">
                                   <h1>Child : {this.state.text}</h1>
                                   <ChildComp sendData={this.state.message}
                pushData = {this.pullData}
                />
                               </div>
                           </div>
                       </div>   
                       </div>             
                </div>
               
            </React.Fragment>
        )
    }
}
