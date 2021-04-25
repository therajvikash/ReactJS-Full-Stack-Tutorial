import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <p className="h3 text-danger">Employees List</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus quibusdam voluptates eveniet iusto asperiores rerum
                consequatur, eaque illo quod ut quos nobis perspiciatis fuga
                eligendi consectetur est veniam, dolores adipisci.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <table className="table table-hover table-danger table-striped">
                <thead className="bg-dark text-white">
                  <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Designation</td>
                    <td>Age</td>
                    <td>IsActive</td>
                    <td>Salary</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.props.employee[0].id}</td>
                    <td>{this.props.employee[0].name}</td>
                    <td>{this.props.employee[0].designation}</td>
                    <td>{this.props.employee[0].age}</td>
                    <td>{JSON.stringify(this.props.employee[0].isActive)}</td>
                    <td>{this.props.employee[0].Salary}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
