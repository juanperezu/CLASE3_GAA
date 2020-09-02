/*
Evaluar la siguiente expresión algebraica
2z +(-6y) + 24j
*/
 function Eval(z,y,j){
let r=0;
r= 2*z +(-6*y)+ 24*j;
return r;
}// fin Eval
console.log(Eval(1,2,3));
console.log();
console.log(Eval(4,5,6));
console.log();
console.log(Eval(7,8,9));
exports.Eval=Eval;

