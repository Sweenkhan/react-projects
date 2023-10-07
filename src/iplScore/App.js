import  React, {useState, useEffect} from "react" 
import axios from "axios"

function App() {

    const[totalTeam, setTotalTeam] = useState([]) 

    useEffect(() => {

         axios.get("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
         .then((result) => {
             console.log(result.data)
             setTotalTeam(result.data)
         })
    },[])

     
  return (
    <>
    <h1 class="title">IPL Season 2022 Points</h1>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Team</th>
          <th>Matches</th>
          <th>Won</th>
          <th>Lost</th>
          <th>Tied</th>
          <th>NRR</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
      {
        totalTeam.map(item => {
          return   <tr>
                <td>{item.No}</td>
                <td>{item.Team}</td>
                <td>{item.Matches}</td>
                <td>{item.Won}</td>
                <td>{item.Lost}</td>
                <td>{item.Tied}</td>
                <td>{item.NRR}</td>
                <td>{item.Points}</td>
            </tr>
        })
         
    } 
      </tbody>
    </table>
 </>
  )
}

export default App
