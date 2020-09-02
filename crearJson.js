
const fs=require('fs');
var estudiantes=[
    {  "nombre": "Angel",
        "edad": 17,
      "genero": "Masculino",
    "departamento": "Antioquia",
    "colegio": "Gilberto Alzate A."
    },  {
    "nombre": "Angélica",
    "edad": 17,
    "genero": "Femenino",
    "departamento": "Antioquia",
    "colegio": "Gilberto Alzate A."
  },  {
    "nombre": "Anlly Lorena",
    "edad": 17,
    "genero": "Femenino",
    "departamento": "Antioquia",
    "colegio": "Gilberto Alzate A."
  },  {
    "nombre": "Mariana",
    "edad": 17,
    "genero": "Femenino",
    "departamento": "Antioquia",
    "colegio": "Gilberto Alzate A."
  }];
  let data=JSON.stringify(estudiantes,null,2);
  fs.writeFile('estudiantes.json',data,(err)=>{
   if(err)  throw err;
   console.log('Datos estudiantes creado .json');
  });

  fs.readFile('./estudiantes.json',(err,data)=>{
    if(err) throw err;
      let  est=JSON.parse(data);
      console.log(est);
      console.log('------------Fin de lectura------');
   });
   console.log('------------siguiente proceso------');

