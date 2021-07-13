import './App.css';
import React, { Component } from 'react';
import CompA from './components/CompA';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            student : {
              name: 'vicky',
              course: 'B-Tech',
              subject: 'ReactJS',
              courseDuration: '2019-2023'
            }
        }
    }
    render() {
        return (
                <div className="App">
        <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
            <a href="/" className='navbar-brand'>React with Props Drilling</a>
        </nav>
        <section className="mt-4">
            <div className="container">
            <div className="row">
              <div className="col-md-6">
               <div className="card">
                 <div className="card-header bg-dark text-white">
                 <p className="h3">App Component</p>
                 </div>
                 <div className="card-body">
                   <CompA studentInfo={this.state.student}/>
                 </div>
               </div>
              </div>
            </div>
            </div>
        </section>
    </div>
        )
    }
}
export default App;
