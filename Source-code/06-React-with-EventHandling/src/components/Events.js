import React, { Component } from 'react'

class Events extends Component {
    constructor(props) {
        super(props)
        this.state ={
            msg:"Welcome To Coder Guys Youtube Channel"
        }
    }
    //Method-1
    // changeState(){
    //     this.setState({
    //         msg:"Welcome To ReactJS"
    //     })
    // }

    //Method-2

    changeState = () => {
        this.setState({
            msg:"Welcome To AngularJS"
         });
    }


    render() {
        return (
            <React.Fragment>
                <section className="mt-4">
                    <div className="container">
                        <div className="card">
                            <p className="h3">{this.state.msg}</p>
                            <div className="card-body">
                                <button
                                //Method-1
                                // onClick={this.changeState.bind(this)}
                                //Method-2
                                onClick={this.changeState}
                                className="btn btn-danger btn-sm">Change state</button>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default Events;