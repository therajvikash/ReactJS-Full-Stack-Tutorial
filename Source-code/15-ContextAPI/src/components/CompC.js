import React, { Component } from 'react';
import StudentContext from './StudentCoontextApi';

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
                <div className="card-header bg-danger text-white">
                 <p className="h3">Component C</p>
                 </div>
                  <div className="card-body">
                     <StudentContext.Consumer>
                         {
                             
                            (studentInfo) => (
                               <ul className="list-group">
                                   <li className="list-group-item">Name : {studentInfo.name}</li>
                                   <li className="list-group-item">Course : {studentInfo.course}</li>
                                   <li className="list-group-item">Subject : {studentInfo.subject}</li>
                                   <li className="list-group-item">Course Duiration : {studentInfo.courseDuration}</li>
                               </ul>
                            )
                    
                         }
                     </StudentContext.Consumer>
                  </div>
                  </div>
            </React.Fragment>
        )
    }
}
