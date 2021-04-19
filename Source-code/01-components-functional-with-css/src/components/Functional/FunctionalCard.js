import React,{Fragment} from 'react';
import './FunctionalCard.css'

function FunctionalCard() {
    return (
        <Fragment>
            <div className="card">
                <div className="card-haeder">
                    <h3>ReactJS</h3>
                </div>
                <div className="card-body">
                    <p>React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.</p>
                </div>
            </div>
        </Fragment>
    )
}

export default FunctionalCard;
