
import fetch from "node-fetch";
const API="https://api.escuelajs.co/api/v1/";

//CREAR PRODUCTO A TRAVES DE POST

function postData(urlApi,data){
    return fetch(urlApi,{
        method:"POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    });
 }

 const data={
    "title": "Jean X",
    "price": 1000,
    "description": "Este objeto tiene 3 rayas y 1 color llamativo",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

postData(`${API}products`,data)
.then(response => response.json())
.then(data => console.log(data))
.catch(error=> console.log(error));