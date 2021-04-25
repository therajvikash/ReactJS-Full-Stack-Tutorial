import React, { Component } from 'react'

export default class StateExArray extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees : [
                {
                    id : 101,
                    name : "Aarya",
                    designation: "Sr. SoftWare Engineer",
                    age : 35,
                    isActive: true,
                    Salary: 36000
                },
                {
                    id : 102,
                    name : "Vicky",
                    designation: "SoftWare Engineer",
                    age : 25,
                    isActive: false,
                    Salary: 32000
                },
                {
                    id : 103,
                    name : "Rajan",
                    designation: "Sales Manager",
                    age : 40,
                    isActive: true,
                    Salary: 46000
                },
                {
                    id : 104,
                    name : "Mahesh",
                    designation: "Tech Lead",
                    age : 45,
                    isActive: false,
                    Salary: 56000
                },
                {
                    id : 105,
                    name : "Vikash",
                    designation: "Civil Engineer",
                    age : 35,
                    isActive: true,
                    Salary: 36000
                },
            ] 
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
                            <td>{this.state.employees[0].id}</td>
                            <td>{this.state.employees[0].name}</td>
                            <td>{this.state.employees[0].designation}</td>
                            <td>{this.state.employees[0].age}</td>
                            <td>{JSON.stringify(this.state.employees[0].isActive)}</td>
                            <td>{this.state.employees[0].Salary}</td>
                        </tr>
                        <tr>
                            <td>{this.state.employees[1].id}</td>
                            <td>{this.state.employees[1].name}</td>
                            <td>{this.state.employees[1].designation}</td>
                            <td>{this.state.employees[1].age}</td>
                            <td>{JSON.stringify(this.state.employees[1].isActive)}</td>
                            <td>{this.state.employees[1].Salary}</td>
                        </tr>
                        <tr>
                            <td>{this.state.employees[2].id}</td>
                            <td>{this.state.employees[2].name}</td>
                            <td>{this.state.employees[2].designation}</td>
                            <td>{this.state.employees[2].age}</td>
                            <td>{JSON.stringify(this.state.employees[2].isActive)}</td>
                            <td>{this.state.employees[2].Salary}</td>
                        </tr>
                        <tr>
                            <td>{this.state.employees[3].id}</td>
                            <td>{this.state.employees[3].name}</td>
                            <td>{this.state.employees[3].designation}</td>
                            <td>{this.state.employees[3].age}</td>
                            <td>{JSON.stringify(this.state.employees[3].isActive)}</td>
                            <td>{this.state.employees[3].Salary}</td>
                        </tr>
                        <tr>
                            <td>{this.state.employees[4].id}</td>
                            <td>{this.state.employees[4].name}</td>
                            <td>{this.state.employees[4].designation}</td>
                            <td>{this.state.employees[4].age}</td>
                            <td>{JSON.stringify(this.state.employees[4].isActive)}</td>
                            <td>{this.state.employees[4].Salary}</td>
                        </tr>
                    </tbody>

                </table>
                </div>
            </React.Fragment>
        )
    }
}
