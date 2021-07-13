import React, { Component } from 'react';
import CompC from './CompC'

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
                <div className="card-header bg-warning text-white">
                 <p className="h3">Component B</p>
                 </div>
                  <div className="card-body">
                      <CompC studentDetails={this.props.studentDetails}/>
                  </div>
              </div>
            </React.Fragment>
        )
    }
}
