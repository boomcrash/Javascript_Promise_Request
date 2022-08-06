const promesa = new Promise(function(resolve,reject){
    resolve("hey, tood correcto!");

});

const vacas=15;

const contador=new Promise(function (resolve,reject){
        if(vacas>10){
            resolve(`existen ${vacas}`)
        }else{
            reject(`no existen mas vacas`);
        }
});

contador.then(
    (result)=>{
        console.log(result);
    }
).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("terminado");
})