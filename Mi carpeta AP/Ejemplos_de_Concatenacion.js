var base = 10;
var altura = 15;
var area = 0;

area = (base*altura)/2;

console.log
(
  area
);

//tambien se puede hacer asi:
//console.log(area((base*altura)/2));

texto1 = "Ohio";
texto2 = "Sekai";

console.log(texto1+" "+texto2);


var agua = "2 litros";
var limones = "12 limones";
var azucar = "3 cucharadas";
var texto1 = "Ingredientes";
var texto2 = "Limonada lista!";

console.log(
   "Como Preparar una limonada\n"
  +texto1+"\n"
  +limones+" + "+agua+" + "+azucar+"\n"
  +texto2
);


let estudio = true;

if(estudio)
{
  console.log("aprobo");
}
else
{
  console.log("reprobo");
}


let hizoTrabajos = true;

if       (estudio && hizoTrabajos)   {console.log("saco 100");}
else if  (!estudio && hizoTrabajos)  {console.log("saco 50");}
else if  (estudio && !hizoTrabajos)  {console.log("saco 30");}
else if  (!estudio && !hizoTrabajos) {console.log("Directo a terceras");}

//otra forma

if       (estudio && hizoTrabajos)   {console.log("saco 100");}
else if  (!estudio || hizoTrabajos)  {console.log("saco 50");}
else     {console.log("Directo a terceras");}
