import React, { Component, Fragment } from "react";
import img from "../../assets/img/React.png";

class ClassCard extends Component {
  render() {
    return (
      <Fragment>
        <div className="row mt-5 p-4">
          <div className="col-md-4">
            <div className="card m-5">
              <div className="card-header bg-success">
                <h2>Welcome To React Js</h2>
              </div>
              <div className="card-body">
                <img src={img} className="img-fluid text-center" alt="" height="50" width="50" />
                <p>
                  React (also known as React.js or ReactJS) is an open-source,
                  front end, JavaScript library[3] for building user interfaces
                  or UI components. It is maintained by Facebook and a community
                  of individual developers and companies.[4][5][6] React can be
                  used as a base in the development of single-page or mobile
                  applications. However, React is only concerned with state
                  management and rendering that state to the DOM, so creating
                  React applications usually requires the use of additional
                  libraries for routing, as well as certain client-side
                  functionality
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-success btn-sm">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default ClassCard;
