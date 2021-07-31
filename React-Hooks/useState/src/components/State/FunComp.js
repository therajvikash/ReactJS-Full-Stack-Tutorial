import React, { useState } from 'react'
import react from '../assets/img/React.png'

const FunComp = () => {
  //Declare a new state variable we will call "localState"
  const [localState, setLocalState] = useState({
    title: 'ReactJS',
  })
   const [name, setName] = useState({
      title: 'Vicky',
  })
    
    let ClickHandler = () => {
      setLocalState({
        title: 'Angular',
      });
        setName({
          title: 'Vikash',
        })
    }


  return (
    <React.Fragment>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <img src={react} alt='React' className='img-thumbnail' />
              <div className='card-body'>
                <p className='h3'>{localState.title}</p>
                <p className='h3'>{name.title}</p>
                <p className='lead'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Saepe odit facilis ipsam veritatis, dolores architecto, fugiat
                  excepturi iure quis aut iusto? Maiores, amet consequuntur.
                </p>
                <button className="btn btn-success btn-block" onClick={ClickHandler}>Angular</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FunComp
