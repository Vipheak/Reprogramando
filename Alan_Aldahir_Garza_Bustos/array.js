numbers = [1,3,4,6,7];
cars = ["BMW","Jeep","Ford"];
calificaciones = [1.2,3.2,4.6];
vocales = ["A","E","I"];
asignacion = [true];

console.log(numbers);

for(let i in numbers) {
    console.log(numbers[i]);
}

for(let c in cars ) {
    console.log(cars[c]);
}

for(let f in calificaciones) {
    console.log(calificaciones[f]);
}

arrays = [numbers, cars, calificaciones, vocales, asignacion];
//console.log(arrays);

for(let i in arrays) {
    for (let j in arrays[i]) {
        console.log(arrays[i][j]);
    }
}