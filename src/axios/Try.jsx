import React, {useState} from 'react'
import axios from 'axios'
// import "./app.css"


function Try() {

     const [name, setName] = useState("")
     const [email, setEmail] = useState("")
     const [photo, setPhoto] = useState("")
     const [gender, setGender] = useState("")


    function randomUserdata() {

        axios.get("https://randomuser.me/api/")
        .then((response) => { 
             
            const data = response.data.results
            
            setName("Name: " + data[0].name.first + " " + data[0].name.last)
            setEmail("Email: " + data[0].email)
            setPhoto(data[0].picture.large)
            setGender("Gender: " + data[0].gender)
        })

    }


  return (
     <>
        <div id='wrapper'> 
        <button onClick={randomUserdata}>Get Random Data</button>
        <div id='random'>
            <img src={photo} alt={email} style={{borderRadius: "10%"}} />
            <h2>{name}</h2>
            <h3>{email}</h3>
            <p>{gender}</p>
        </div>
        </div>
     </>
  )
}

export default Try