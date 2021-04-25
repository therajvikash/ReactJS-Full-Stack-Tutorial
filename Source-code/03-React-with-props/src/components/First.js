import React, { Component } from 'react'

export default class First extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        <p>{this.props.key1}</p>
                       <p> {this.props.key2}</p>
                        <p>{this.props.key3}</p>
                       <p> {this.props.key4}</p>
                        <p>{this.props.key5}</p>
                        <p>{this.props.key6}</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
