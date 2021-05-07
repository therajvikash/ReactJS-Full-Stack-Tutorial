import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  Login = () => {
    this.setState({
      isLoggedIn: true,
    });
  };
  Logout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <section className="mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="card bg-light">
                  <div className="card-body">
                    {
                          this.state.isLoggedIn ? <h1>Welcome User</h1>: <h1>Welcome Guset</h1>
                    }
                    {this.state.isLoggedIn ? 
                    <button onClick={this.Logout} className="btn btn-success btn-sm">Logout</button>
                     : 
                     <button onClick={this.Login} className="btn btn-success btn-sm">Login</button>
                    }
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
