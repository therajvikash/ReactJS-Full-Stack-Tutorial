import React, { Component } from "react";
import axios from "axios";

export default class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesList: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://gist.githubusercontent.com/therajvikash/13c0495495a8d22ba47a8cc3cbc8a646/raw/5d3997c3ac864b18b85e36ec97a209a0eeb5a972/Countries"
      )
      .then((response) => {
        this.setState({
          countriesList: response.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <React.Fragment>
        <section className="mt-3">
          <div className="container">
            <p className="h3 text-success">Country List</p>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur perferendis magni officia, enim libero aperiam, dolorem
              cumque ullam reprehenderit quisquam sapiente mollitia qui! Quo
              molestias expedita nam rem nobis ex!
            </p>
          </div>
        </section>
        <section className="container mt-5">
          <div className="row">
            <div className="col">
              <table className="table table-hover table-striped text-center text-white table-light">
                <thead className="bg-danger">
                  <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Capital</td>
                    <td>Region</td>
                    <td>Sub Region</td>
                    <td>Currencies</td>
                    <td>Flag</td>
                  </tr>
                </thead>
                <tbody className="bg-secondary">
                  {this.state.countriesList.length > 0 &&
                    this.state.countriesList.map((country) => {
                      return (
                        <tr key={country.numericCode}>
                          <td>{country.numericCode}</td>
                          <td>{country.name}</td>
                          <td>{country.capital}</td>
                          <td>{country.region}</td>
                          <td>{country.subregion}</td>
                          <td>{country.callingCodes}</td>
                          <td>
                            <img
                              src={country.flag}
                              alt=""
                              width="50"
                              height="50"
                            />
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
