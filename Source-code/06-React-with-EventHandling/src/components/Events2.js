import React, { Component } from 'react'

export default class Events2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            course: "Btech"
        }
    }

    // without parameters
    // changeCourse = () => {
    //     this.setState({
    //         course:"MBA"
    //     })
    // }


    // with parameters

    changeCourse = (value) => {
        this.setState({
            course:value
        });
    }

    render() {
        return (
            <>
               <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <p className="h3 text-center">{this.state.course}</p>
                                <div className="card-body">
                                    <button 
                                    onClick={this.changeCourse.bind(this, "MBA")}
                                    className="btn btn-success btn-sm mx-2">Change MBA</button>
                                     <button 
                                     onClick={this.changeCourse.bind(this, "BCA")}
                                    className="btn btn-success btn-sm mx-2">Change BCA</button>
                                     <button 
                                      onClick={this.changeCourse.bind(this, "BSC With Computer Science")}
                                    className="btn btn-success btn-sm mx-2">Change BSC With Computer Science</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
               </section> 
            </>
        )
    }
}
