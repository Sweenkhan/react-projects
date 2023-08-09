import React from 'react'

function Content(props) {
  return (
    <div className='content'  style= {{backgroundImage: `url('../images/${props.carImg}')`}} >
        <div className='about-model'> 
            <h1>{props.title}</h1>
            <p>{props.discription}</p>
        </div>
        <div className='buttons'>
            
              <button className='btn-1'>{props.leftBtn}</button>
              {props.rightBtn && <button className='btn-2'>{props.rightBtn}</button>}
           </div>
            
    </div>
  )
}

export default Content