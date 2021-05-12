import React, { Component } from "react";
import Card from "./Card";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="mt-3">
          <div className="container">
            <p className="h3 text-danger">About</p>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur perferendis magni officia, enim libero aperiam, dolorem
              cumque ullam reprehenderit quisquam sapiente mollitia qui! Quo
              molestias expedita nam rem nobis ex!
            </p>
          </div>
        </section>
        <Card/>
      </React.Fragment>
    );
  }
}
