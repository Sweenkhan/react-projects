import React, { useState } from 'react'

function App() {

    const contries = [
        {name: "India", code: "IN", city: ["new delhi", "mumbai"]},
        {name: "Pakistan", code: "PK", city: ["karachi", "lahore"]},
        {name: "Bangladesh", code: "BG", city: ["daka", "imphal"]}
    ]


    const [selectedValue, setSelectedValue] = useState("") 
 

  return (
    <div className='container'>
        <h2>Choose anyone</h2>
        <select onChange={e => setSelectedValue(e.target.value)}  defaultValue="placeholder" > 
        <option value="placeholder" disabled>Choose contry</option>
        {
            contries.map((contry, index) => {
                return <option key={index}  value={index}>{contry.name}</option>
            })
        }
        </select>
        {/* chosse city */}
            <select>
        {
         selectedValue &&   contries[selectedValue].city.map((citi, index) =>{
             return <option key={index}>{citi}</option>
           })
        }
            </select>
    </div>
  )
}

export default App
