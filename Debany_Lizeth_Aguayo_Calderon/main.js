const libreria = require ("./libreria.js");

console.log (
  "El area de un rectangulo es: "       + libreria.area_rectangulo     (2,3)+"\n"
  +"El perimetro de un rectangulo es: " + libreria.perimetro_rectangulo(2,3)+"\n"
  +"El perimetro de un triangulo es: "  + libreria.perimetro_triangulo (3,5)+"\n"
  +"El promedio de calificaciones es: " + libreria.promedio     (10,10,10,9)
);
