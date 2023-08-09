import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import ClosePortal from './ClosePortal'


function Portal() {
  
    const [opening, setOpening] = useState(false)
 
    

  return (
    <div className="portal"> 
        <h2>This is portal page</h2>
        <button id='open-modal' onClick={() => setOpening(true)}>Open Modal</button>

       { opening && 
         createPortal(
             <ClosePortal onClose={() => setOpening(false)} /> ,document.body
         )
       }
       
    </div>
  )
}

export default Portal