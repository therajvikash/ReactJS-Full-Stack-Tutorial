import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="">
          <div className="landingPage">
            <div className="wrapper">
              <div className="d-flex justify-content-center align-items-center flex-column h-100 text-center">
                <h2 className="display-3">Welcome to React Routing</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                  culpa delectus, veniam magni commodi deserunt corporis!
                  Commodi repellat voluptates corrupti totam. Culpa corporis,
                  quis sit beatae enim esse at fuga mollitia. Necessitatibus eos
                  quisquam ipsum architecto officiis adipisci quo dolores?
                </p>
                <button className="btn btn-danger btn-sm">Read More</button>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
