import React, { Component } from "react";

class Card extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
        <React.Fragment>
            <div className="card mt-4 container">
                <div className="card-header bg-success">
                    <h2>{this.props.course}</h2>
                </div>
                <div className="card-body">
                    <h2>Welcome To My youtube Channel</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta nobis nulla, reiciendis similique aperiam soluta cupiditate obcaecati beatae veniam possimus tempora, quos doloribus vitae in quaerat labore, voluptatibus magnam nostrum ipsam cum deleniti reprehenderit nihil esse quia. Quidem cum in reiciendis mollitia nihil dolor numquam modi suscipit consequatur excepturi fuga at quisquam tempore id labore, recusandae esse provident quia rerum.</p>
                </div>
            </div>
        </React.Fragment>
    )
  }
}
export default Card;
