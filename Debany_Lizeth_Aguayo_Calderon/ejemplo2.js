let agua= 1;
let limones= 8;
let azucar= 3;


console.log(
"PASOS PARA PREPARAR UNA LIMONADA \n"
  +"Ingredientes:\n"
  +"\tagua "+agua+ " litro\n"
  +"\tlimones "+limones+ " piezas\n"
  +"\tazucar "+azucar+ " cucharadas\n\n"
  +"Procedimiento: \n"
  +"\t 1. Poner "+agua+" litro de agua en una jarra\n"
  +"\t 2. Agregar las "+azucar+" cucharadas de azucar al agua\n"
  +"\t 3. Mezclar el agua\n"
  +"\t 4. Exprimir los "+limones+ " limones en el agua\n"
  +"\t 5. Mezclar nuevamente\n"
  +"\t 6. LISTO"
);

let limpioElCuarto= false;
let lavoElCarro= false;

if (limpioElCuarto && lavoElCarro) { console.log ("Tienes permiso para salir") }
else if (limpioElCuarto || lavoElCarro ) { console.log ("Tienes permiso para salir, pero regresa temprano") }
else  { console.log ("No tienes permiso para salir") }
