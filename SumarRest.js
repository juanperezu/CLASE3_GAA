function suma(...valores){
let s =0;
for(let i=0;i<valores.length;i++){
    s+=valores[i]; 
   // s=s+valores[i];
}// fin para
let  n=0;
let suma2 =0;
while(n<valores.length){
    suma2+=valores[n];
    n++;
}

return s + " =  suma2 : "+suma2;

}// fin suma
console.log(suma("a","b","b","h"));
console.log(suma(1,2));