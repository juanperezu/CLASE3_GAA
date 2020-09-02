class Tip{
    
constructor(codi, nom){
this.codigo=codi;// hace referencia a un atributo ó método propio
                  // de la misma clase
this.nombre=nom
}// fin del constructor
crear(){
    console.log(`El tip ${this.nombre} con código ${this.codigo}`);
    return this;
}

buscar(){
    console.log(`El tip ${this.nombre} con código ${this.codigo} encontrado`);
    return this;
}
}// fin de la clase
const objtotip1 = new Tip("001","Liquidos");
// codi = 001 ==> codigo
// nom= "liquidos" ==> nombre
console.log(objtotip1.crear());
console.log(objtotip1.buscar());
const objtotip2 = new Tip("002","Liquidos");

console.log(objtotip2.crear());
console.log(objtotip2.buscar());
