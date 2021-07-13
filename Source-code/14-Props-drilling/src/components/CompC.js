import React, { Component } from 'react';

export default class CompA extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <React.Fragment>
                div className="card">
                <div className="card-header bg-danger text-white">
                 <p className="h3">Component C</p>
                 </div>
                  <div className="card-body">
                      <span>{JSON.stringify(this.props.studentDetails)}</span>
                  </div>
            </React.Fragment>
        )
    }
}
