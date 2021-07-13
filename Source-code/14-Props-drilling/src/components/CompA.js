import React, { Component } from 'react';
import CompB from './CompB'

export default class CompA extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <React.Fragment>
              <div className="card">
              <div className="card-header bg-success text-white">
                 <p className="h3">Component A</p>
                 </div>
                  <div className="card-body">
                      <CompB studentDetails={this.props.studentInfo}/>
                  </div>
              </div>
            </React.Fragment>
        )
    }
}
