exports.area_rectangulo = (base, altura) => {
  return base * altura;
}

exports.perimetro_rectangulo = (base, altura) => {
  return (base*2) + (altura*2);
}

exports.perimetro_triangulo = (base, altura) => {
  return base + (altura*2);
}

exports.promedio = (calificacion1, calificacion2, calificacion3, calificacion4) => {
  return (calificacion1 + calificacion2 + calificacion3 + calificacion4)/4;
}
