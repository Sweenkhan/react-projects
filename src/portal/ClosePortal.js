import React from 'react'

function ClosePortal({onClose}) {
  return (
    <div className='closing'> 
     <h2>Click below button and close Portal</h2>
     <button id='open-modal' onClick={onClose}>Close Portal</button>
    </div>
  )
}

export default ClosePortal