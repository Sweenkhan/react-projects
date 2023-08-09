import React from 'react'

function App() {

    

    // function randomSentence() {

        const inputs = 'abcdefghijklmnopqrstuvwxyz 123456789'  
         
        let setpara = []
        let paratoString = setpara.toString()
         
    
         for(let i = 0; i < 14; i++){
           setpara.push(inputs[Math.floor(Math.random() * inputs.length)])
    
        //  }

   

  return (
    <div>
        {setpara}
    </div>
  )
}

 
// import "./App.css"

 



//   return (
//     <>
//     <div className='wrapper'>
//     <h2>Tic Tac Toe</h2>
//       {/* <h4></h4> */}
//       <div className='options'>
//            <p onClick={(e) => handleDraw(e, 1)}> </p>
//            <p onClick={(e) => handleDraw(e, 2)}> </p>
//            <p onClick={(e) => handleDraw(e, 3)}> </p>
//            <p onClick={(e) => handleDraw(e, 4)}> </p>
//            <p onClick={(e) => handleDraw(e, 5)}> </p>
//            <p onClick={(e) => handleDraw(e, 6)}> </p>
//            <p onClick={(e) => handleDraw(e, 7)}> </p>
//            <p onClick={(e) => handleDraw(e, 8)}> </p>
//            <p onClick={(e) => handleDraw(e, 9)}> </p>
           

//       </div>
//     </div>
       
       
//     </>
     
//   )
// }

export default App