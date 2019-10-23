{
  let variable = 10;
  console.log(variable);
}

{
  let variable = 10;
  console.log(variable);
}

//Se ejecutan los dos por que estan declaradas en diferentes bloques

{
  var variable = 10;
}

{
  let variable = 20;
}

console.log(variable);

//Se ejecuta la varaible = 10 por que var es una declaracion de tipo "global"

{
  var variable = 10;
}

let variable = 20;

console.log(varaible);

//No impime nada por que "var variable = 10" esta declarada como global y
//"let variable = 20" no esta encerrado en un bloque por lo cual se toma que
// "variable" ya esta declarada
