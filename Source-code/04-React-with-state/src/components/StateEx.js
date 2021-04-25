import React, { Component } from 'react'

export default class StateEx extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees : {
                id : 101,
                name : "Aarya",
                designation: "Sr. SoftWare Engineer",
                age : 35,
                isActive: true,
                Salary: 36000
            } 
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                <table className="table table-light table-hover table-striped text-center">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Age</th>
                            <th>IsActive</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.employees.id}</td>
                            <td>{this.state.employees.name}</td>
                            <td>{this.state.employees.designation}</td>
                            <td>{this.state.employees.age}</td>
                            <td>{JSON.stringify(this.state.employees.isActive)}</td>
                            <td>{this.state.employees.Salary}</td>
                        </tr>
                    </tbody>

                </table>
                </div>
            </React.Fragment>
        )
    }
}
