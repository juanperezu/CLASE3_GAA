const fs = require('fs');

fs.readFile('./estudiantes.json',(err,data)=>{
 if(err) throw err;
   let  est=JSON.parse(data);
   console.log(est);
   console.log('------------Fin de lectura------');
});
console.log('------------siguiente proceso------');
