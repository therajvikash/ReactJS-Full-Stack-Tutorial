import React, { Component } from 'react'

export default class UncontrollerComponents extends Component {


    recordInserted = () => {
        document.write("In database Record is inserted")
    }

    render() {
        return (
            <React.Fragment>
                <section className="container mt-3">
                <button
                onClick={this.recordInserted}
                className="btn btn-dark btn-sm">Record Inserted</button>

                </section>
            </React.Fragment>
        )
    }
}
