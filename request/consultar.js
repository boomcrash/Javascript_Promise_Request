import fetch from "node-fetch";
const API="https://api.escuelajs.co/api/v1/";


function fetchData(urlApi){
    return fetch(urlApi);
};

//LLAMADO AL API
// ESTE FRAGMENTO DE CODIGO CONSULTA TODOS LOS PROUDCTOS!
/*
fetchData(`${API}products`)
.then(response => response.json())
.then(products =>{
    console.log(products);
}).then(() => {
    console-log("Tercer LLamado");
}).catch(error => console.log(error));
*/

//MULTIPLES LLAMADOS

fetchData(`${API}products`)
.then(response => response.json())
.then(products => {
    return fetchData(`${API}products/${products[10].id}`)
})
.then(response => response.json())
.then(product => {
    console.log("nombre: "+product.title)
    console.log("descripccion: "+product.description)
    console.log("precio: "+product.price)
    return fetchData(`${API}categories/${product.category.id}`)
})
.then(response => response.json())
.then(category => {
    return console.log("categoria: "+category.name)
}).catch(error => console.log(error));



