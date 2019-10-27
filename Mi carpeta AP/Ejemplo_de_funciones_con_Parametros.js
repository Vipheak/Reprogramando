function areaCuadrado1(lado){return(lado*lado);}
  console.log("\n"+"\n"+"Area :"+areaCuadrado1(5, 5));

function perimetroCuadrado1(lado){return(lado+lado+lado+lado);}
    console.log("Perimetro"+" :"+perimetroCuadrado1(5)+"\n"+"\n");

//-----------------------------------------------------------------------------

function areaCuadrado2(lado2){return(lado2*lado2);}
function perimetroCuadrado2(lado2){return(lado2+lado2+lado2+lado2);}

console.log(
  "Area del Cudrado :"
  +areaCuadrado2(5)+"\n"
  +"Perimetro del Cuadrado :"
  +perimetroCuadrado2(5)
  +"\n"
  +"\n"
);

//----------------------------------------------------------------------------

function areaTrinagulo(base, altura){return(base*altura);}
function parimetroTriangulo(base){return(base*3);}

console.log(
  "Area del trangulo :"
  +areaTrinagulo(5, 10)
  +"\n"
  +"Perimetro del Triangulo :"
  +parimetroTriangulo(5)
  +"\n"
  +"\n"
);

//-----------------------------------------------------------------------------

function sumadearray(array1, array2){
  media1 = 0;
  media2 = 0;
  for(let numeros_1 in array1){media1+numeros_1[0]+numeros_1[1]+numeros_1[2]+numeros_1[3]+numeros_1[4];}
  for(let numeros_2 in array2){media2+numeros_2[0]+numeros_2[1]+numeros_2[2]+numeros_2[3]+numeros_2[4];}
  return(array1+array2);}
console.log(
  sumadearray([1, 1, 1, 1, 1], [1, 1, 1, 1, 1])
);
