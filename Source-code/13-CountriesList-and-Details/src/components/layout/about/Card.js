import React, { Component } from "react";
import card1 from "../../../assets/img/React.png";

export default class Card extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="container-fluid mt-3">
            <div className="row">
              <div className="col-md-3">
                <div className="card">
                  <img
                    src={card1}
                    alt="React image is there"
                    className="img-fluid"
                  />
                  <div className="card-body bg-danger text-white">
                    <h5 className="card-title">ReactJS</h5>
                    <p className="card-text">
                      React is an open-source, front end, JavaScript library for
                      building user interfaces or UI components. It is
                      maintained by Facebook and a community of individual
                      developers and companies. React can be used as a base in
                      the development of single-page or mobile applications
                    </p>
                    <button className="btn btn-sm btn-light">Read More</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <img
                    src={card1}
                    alt="React image is there"
                    className="img-fluid"
                  />
                  <div className="card-body bg-danger text-white">
                    <h5 className="card-title">ReactJS</h5>
                    <p className="card-text">
                      React is an open-source, front end, JavaScript library for
                      building user interfaces or UI components. It is
                      maintained by Facebook and a community of individual
                      developers and companies. React can be used as a base in
                      the development of single-page or mobile applications
                    </p>
                    <button className="btn btn-sm btn-light">Read More</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <img
                    src={card1}
                    alt="React image is there"
                    className="img-fluid"
                  />
                  <div className="card-body bg-danger text-white">
                    <h5 className="card-title">ReactJS</h5>
                    <p className="card-text">
                      React is an open-source, front end, JavaScript library for
                      building user interfaces or UI components. It is
                      maintained by Facebook and a community of individual
                      developers and companies. React can be used as a base in
                      the development of single-page or mobile applications
                    </p>
                    <button className="btn btn-sm btn-light">Read More</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <img
                    src={card1}
                    alt="React image is there"
                    className="img-fluid"
                  />
                  <div className="card-body bg-danger text-white">
                    <h5 className="card-title">ReactJS</h5>
                    <p className="card-text">
                      React is an open-source, front end, JavaScript library for
                      building user interfaces or UI components. It is
                      maintained by Facebook and a community of individual
                      developers and companies. React can be used as a base in
                      the development of single-page or mobile applications
                    </p>
                    <button className="btn btn-sm btn-light">Read More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </React.Fragment>
    );
  }
}
