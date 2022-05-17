/*console .log("hola :)");
let salarioHorasOrdinarias=265;
let horasTrabajadas=43;
let salarioHorasExtraordinarias=350
let horasExtraordinarias=0;
let totalExtra=0;
let totalNormal=0;


let numerodeelementos=3;

if (horasTrabajadas > 40) {
    horasExtraordinarias= horasTrabajadas -40;
    totalExtra= horasExtraordinarias * salarioHorasExtraordinarias;
    totalNormal=40*salarioHorasOrdinarias;
}
if (horasTrabajadas<=40){
    totalNormal=horasTrabajadas* salarioHorasOrdinarias;
}
console.log("Las horas extraordinarias fueron " + totalExtra );
console.log("Las horas ordinarias fueron " + totalNormal );


//Segundo
let i=0;
for  (i=660; i>= 360;i-=20){

    console.log(i);
    i=i-20;
}*/
//Matrices
let a =[3, 2, 1, 1, 2, 3, 2, 3, 1];
let b =[1, 1, 2, 2, 1, 1, 1, 2, 1];
//console.log(a.length);
for (i=0; i<a.length;i++){
    suma= a[i]+ b[i];
        Mult= a[i]* b[i];
 console.log(a[i] + '+' + b[i] + '=' + suma);
    console.log(a[i] + 'x' + b[i] + '=' + Mult);
    console.log('------------------------------')
}