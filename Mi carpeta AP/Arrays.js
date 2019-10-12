//Ejemplos de Arrey

let array1 = [10];
let array2 = ["hola"];
let array3 = [true];
let array4 = [50];
let array5 = ["#"];
let texto1 = "Array de Numero";
let texto2 = "Array de String";
let texto3 = "Array Booleano";
let texto4 = "Array Flotante";
let texto5 = "Array de Caracter";

console.log( texto1+" = "+array1+"\n"
            +texto2+" = "+array2+"\n"
            +texto3+" = "+array3+"\n"
            +texto4+" = "+array4+"\n"
            +texto5+" = "+array5+"\n"
            +"\n"
            +"\n"
);

//----------------------------------------------------------------------------

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//index        0  1  2  3  4  5  6  7  8  9

console.log(numeros[4]+"\n"+"\n");

//----------------------------------------------------------------------------

let numeros_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//index        0  1  2  3  4  5  6  7  8  9

for(let variables in numeros){
  console.log(numeros[variables]);
  //agarra tods lo almacenado en el array numeros y los imprime
}
//-----------------------------------------------------------------------------
