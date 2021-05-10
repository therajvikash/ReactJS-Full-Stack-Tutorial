import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleTimeString(),
    };
  }


  // when the components is fully loaded
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
       currentTime: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  // when the components is removed from dom
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <React.Fragment>
        <section className="mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header bg-success text-white text-center">
                    <p className="h3">Dummy Clock</p>
                  </div>
                  <div className="card-body text-center">
                    <p className="h2 font-weight-bold">
                      {this.state.currentTime}
                    </p>
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
