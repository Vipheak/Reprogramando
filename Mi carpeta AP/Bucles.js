//Ejemplos del while

let numero = 10;

while(numero>20){
  break;
  console.log(numero);
  numero++;
  //if(numero == 10){break;}
}

let numero_1 = 10;

while(numero_1<100){
  console.log(numero);
  if(numero_1 == 10){break;}
  numero_1++;
  //Aqui solo alcanzaria a imprimr el 10 y terminaria sin llegar al "numero_1++"
}

let numero_2 = 10

for(numero_2;numero_2<100;numero_2++){
console.log(numero_2);
}
