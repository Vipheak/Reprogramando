// Ejemplos de array                Clasificacion:

let array1 = [7];               // "Array de Numero"
let array2 = ["hello"];         // "Array de String"
let array3 = [true];            // "Array Booleano"
let array4 = [30];              // "Array Flotante"
let array5 = ["*"];             // "Array de Caracter"

console.log( texto1+" = "+array1+"\n"
            +texto2+" = "+array2+"\n"
            +texto3+" = "+array3+"\n"
            +texto4+" = "+array4+"\n"
            +texto5+" = "+array5+"\n"
            +"\n"
            +"\n"
);

//-----------------------------------------------------------------

let numeros = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
//index        0  1  2  3   4   5   6   7   8   9

console.log(numeros[5]+"\n"+"\n");

//-----------------------------------------------------------------

let numeros_1 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
//index          0  1  2   3   4   5   6   7   8   9

for (let variables in numeros){
  console.log(numeros[variables]);
  //Obtiene todo alamecenandolo en el array numeros y los imprime
}
//------------------------------------------------------------------
