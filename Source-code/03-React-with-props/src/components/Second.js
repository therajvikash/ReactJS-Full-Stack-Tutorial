import React, { Component } from 'react'
import First from './First'

export default class Second extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <First key1="ReactJS" key2="AngularJS" key3="MongoDB" key4="VueJS" key5="NodeJS" key6={4*3 | 4+6}/>
            </React.Fragment>
        )
    }
}
