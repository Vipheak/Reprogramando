let respuesta = false;
let procedimiento = true;
let caes_bien = true;

if(respuesta && procedimiento) { console.log("50 pts"); }
else if(respuesta || procedimiento && caes_bien) { console.log("50 pts"); }
else if(respuesta || procedimiento) { console.log("25 pts"); }
else { console.log("0 pts"); }
