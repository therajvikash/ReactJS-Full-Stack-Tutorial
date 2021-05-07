import React, { Component } from "react";
import "./Register.css";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        email: "",
        password: "",
        option: "",
        bio: "",
        condition: false,
      },
    };
  }
  // Input Change Event
  updateInput = (event) => {
    if (event.target.type === "checkbox") {
      this.setState({
          user:{
            ...this.state.user,
            [event.target.name]: event.target.checked,
          }
      });
    } else {
      this.setState({
          user : {
            ...this.state.user,
            [event.target.name]: event.target.value,
          }
      });
    }
  };

  // submitRegister form
  submitForm = (event) => {
    event.preventDefault(); // to prevent the page refreshing
    console.log(this.state);
  };

  render() {
    let { username, email, password, bio, option, condition } = this.state.user;
    return (
      <React.Fragment>
        {/* <pre>{JSON.stringify(this.state.user)}</pre> */}
        <section className="mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="card bg-light">
                  <div className="card-header bg bg-info rounded-pill">
                    <p className="h3">Registration</p>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.submitForm}>
                      <div className="form-group">
                        <input
                          name="username"
                          value={username}
                          onChange={this.updateInput}
                          type="text"
                          placeholder="name"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="email"
                          value={email}
                          onChange={this.updateInput}
                          type="email"
                          placeholder="Email"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="password"
                          value={password}
                          onChange={this.updateInput}
                          type="password"
                          placeholder="Password"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <select
                          className="form-control"
                          name="option"
                          value={option}
                          onChange={this.updateInput}
                        >
                          <option value="">Select Your Course</option>
                          <option value="ReactJS">ReactJS</option>
                          <option value="Angular">Angular</option>
                          <option value="VueJS">VueJS</option>
                          <option value="Ionic">Ionic</option>
                          <option value="React Native">React Native</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <textarea
                          name="bio"
                          value={bio}
                          onChange={this.updateInput}
                          className="form-control"
                          rows={4}
                          maxLength="100"
                          placeholder="Tell me About Yourself"
                        ></textarea>
                      </div>
                      <div className="form-check">
                        <input
                          name="condition"
                          value={condition}
                          onChange={this.updateInput}
                          type="checkbox"
                          className="form-check-input"
                        />
                        <label className="form-check-label">
                          Accept Terms And Condition
                        </label>
                      </div>
                      <div className="form-group text-center">
                        <input
                          type="submit"
                          className="btn btn-info btn-sm"
                          value="Register"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
