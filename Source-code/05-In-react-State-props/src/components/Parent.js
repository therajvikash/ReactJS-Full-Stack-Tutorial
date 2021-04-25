import React, { Component } from 'react';
import Child from './Child'

export default class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"Vicky",
            age:19,
            course:"Btech",
            year : "2nd",
            products : {prodName:"Samsung TV", prodPrice:55000, isStock : true, mfd:"24-12-2020"},
            employees : [
                {
                    id : 101,
                    name : "Aarya",
                    designation: "Sr. SoftWare Engineer",
                    age : 35,
                    isActive: true,
                    Salary: 36000
                },
                {
                    id : 102,
                    name : "Vicky",
                    designation: "SoftWare Engineer",
                    age : 25,
                    isActive: false,
                    Salary: 32000
                },
                {
                    id : 103,
                    name : "Rajan",
                    designation: "Sales Manager",
                    age : 40,
                    isActive: true,
                    Salary: 46000
                },
                {
                    id : 104,
                    name : "Mahesh",
                    designation: "Tech Lead",
                    age : 45,
                    isActive: false,
                    Salary: 56000
                },
                {
                    id : 105,
                    name : "Vikash",
                    designation: "Civil Engineer",
                    age : 35,
                    isActive: true,
                    Salary: 36000
                },
            ] 
        }
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <Child employee={this.state.employees} obj={this.state.products} name={this.state.name} age={this.state.age} course={this.state.course} year={this.state.year}/>
                </div>
            </React.Fragment>
        )
    }
}
