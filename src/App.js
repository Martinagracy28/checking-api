import './App.css';


import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';



function App() {


 const postValues =async()=>{
  const requestOptions = {
    Method:'POST',
    Request_Method:'POST',
    body: JSON.stringify({ 
       
            client_id:"cEZoGE19mLmQdIPPjXtj2osurm8NRLHK",
            client_secret:"VNe8u0lpgcCvE9NsE7Khcft7gA22RMvW",
            grant_type:"client_credentials",
            scope:"email"		 
    })
};
const response = await axios.post('https://api.elementpad.io/elementsapi/oauth2/token', requestOptions);
const data = await response.json();  
console.log("dataresponse",data) ;  
 }

 

 const getvalues = async()=>{
   
  let s = await fetch("https://api.elementpad.io/elementsapi/v1/users",{headers:{
    'Authorization':"Sxt3UZAkKJd33WRdg4Xa1EfCHYMs3suW"
}})
  console.log("get",s)
  
    
 }





  return (
    <div className="App">
                   
                    <button onClick={()=>postValues()}>
                       POST
                    </button>
<br></br>
                    <button onClick={()=>getvalues()}>
                       GET
                    </button>







                    
    </div>
  );
}

export default App;