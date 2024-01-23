import React,{useState} from 'react'
import axios from 'axios'


function App() {
 
    const [file, setFile] = useState();
    
    function handleSubmit(e){
             e.preventDefault()
              
             const formdata = new FormData()
             formdata.append("file", file)

             axios.post("http://localhost:8000/resumeUpload", formdata)
             .then((response) => {
                    console.log(response)
             })
    }

console.log(file)
  return (
    <div>
    <h2>This is multer page. where you can learn how to upload file to server</h2>

    
    <label htmlFor='resume'>upload your CV</label>
        <input id="resume"  type='file' name="uploaded_file" onChange={(e) => {setFile(e.target.files[0])}} />
        <button type='button' onClick={(e) => handleSubmit(e)} >Submit</button>
    
     </div>
  )
}

export default App