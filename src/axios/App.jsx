import React, { useState }  from 'react'
import "./app.css"
import axios from "axios"

function App() {

    const [photo, setPhoto] = useState("")
    const [name, setName]  = useState("")
    const [email, setEmail] = useState("")
 
    function getRandomData() {
          
        axios.get('https://randomuser.me/api/')
        .then((response) => {
            console.log(response)

            const result = response.data.results
            setPhoto(result[0].picture.large)
            setEmail(result[0].name.first + " " + result[0].name.last)
            setName(result[0].email)
        })
       
    }

  return (
      <>
        <button onClick={getRandomData}>Get Random User Data</button>
         <div>
            <img src={photo} alt={name} />
            <h3>{name}</h3>
            <h3>{email}</h3>
         </div>
      </>
  )
}

export default App
