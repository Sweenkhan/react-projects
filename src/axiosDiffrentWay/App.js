import React, { useEffect, useState } from "react";
import axios from "axios";



function App() {

    const[data, setData] = useState({})

    const getApiData = async() => {

        try{ 
            const result = await axios.get("https://randomuser.me/api/")
            setData(result.data.results[0])
        } catch(err){
            console.log(err)
        }
    }


    useEffect(() => {
        getApiData()
    }, [])

    console.log(data)

  return (
  <div className="randomCnt" style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: 'column'}}>
  <h2>
  This is the async await way to handle data from an axios
  </h2>
 {(data.name) &&  <div>
    <h3>Name: {data.name.first}</h3>
    <h3>Email: {data.email}</h3>
    <img alt="stranger" src={data.picture.large}/>
  </div> }
   </div>
  
  );
}

export default App;
