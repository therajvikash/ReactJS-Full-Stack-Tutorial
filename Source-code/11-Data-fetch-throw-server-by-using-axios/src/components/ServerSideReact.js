import React, { Component } from "react";
import axios from "axios";

export default class ServerSideReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      errorMsg: null,
    };
  }

  componentDidMount() {
    let URL = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(URL)
      .then((response) => {
        this.setState({
          employees: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <section className="mt-3">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="h3 text-warning">Employees List</p>
                <p className="lead">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magni aperiam cumque nihil ipsa corrupti officiis? Provident,
                  molestias a. Velit aut et dolorem blanditiis doloremque,
                  similique eaque ad voluptatem. Fugiat, assumenda.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-3">
          <div className="container">
            <div className="row">
              <div className="col-md-8 justify-content-center">
                <table className="table table-secondary table-hover table-striped table-bordered text-white text-center">
                  <thead className="bg-warning">
                    <tr>
                      <td>SNO</td>
                      <td>Name</td>
                      <td>Eamil</td>
                      <td>City</td>
                      <td>Phone</td>
                      <td>Website</td>
                    </tr>
                  </thead>
                  <tbody>
                        {
                            this.state.employees.length > 0 && this.state.employees.map( employee => {
                                return(
                                    <tr>
                                        <td>{employee.id}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.address.city}</td>
                                        <td>{employee.phone}</td>
                                        <td>{employee.website}</td>
                                    </tr>
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
