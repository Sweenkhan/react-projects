import React,{ useEffect, useState } from 'react'
import axios from 'axios'



function App() {

    const [photo, setPhoto] = useState("")
    const [name, setName]  = useState("")
    const [email, setEmail] = useState("")

 
  useEffect (() => {
    axios.get("https://randomuser.me/api/")
    .then((response) => {
    
         const res = response.data.results
     
         setPhoto(res[0].picture.large)
         setEmail(res[0].name.first + " " + res[0].name.last)
         setName(res[0].email)
        
    })
  },[])

     


  return (
     <>
        <img src={photo} alt={name}/>
        <h2> {name}</h2>
        <h3> {email}</h3>  
     </>
  )
}

export default App