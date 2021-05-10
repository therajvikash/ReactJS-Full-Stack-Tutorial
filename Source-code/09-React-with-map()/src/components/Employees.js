import React, { Component } from "react";
import {employeesStore} from "./data";

export default class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: employeesStore
    };
  }
  render() {
    return (
      <React.Fragment>
        <section className="mt-4">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="h3 text-danger">Employees</p>
                <p className="lead">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores quibusdam accusamus in deserunt facere! Sit,
                  dignissimos, quas iusto adipisci commodi ipsum quod unde
                  cupiditate dolorem hic facere! Praesentium, quae tenetur.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-4">
          <div className="container">
            <div className="row">
              <div className="col">
                <table className="table table-hover table-bordered table-success text-center">
                  <thead className="bg-secondary text-white">
                    <tr>
                      <th>SNO</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>City</th>
                      <th>Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                      {
                         this.state.employees.map((employee) => {
                                return(
                                    <React.Fragment>
                                       <tr>
                                            <td>{employee.id}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.address.city}</td>
                                            <td>{employee.phone}</td>
                                       </tr>
                                    </React.Fragment>
                                )
                         })
                      }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
