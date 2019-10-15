estudiantes = ["Luis", "Toño", "Eduardo", "Javier", "Jesus", "Alfredo"];
matriculas = [1805892, 1902345, 2002384, 8748382, 15890434, 5345355];
calificaciones = [75, 80, 78, 70, 79, 55];
pasaron = [True, True, True, True, True, False];
aulas = ['A','B', 'C', 'D', 'A', 'C'];

print(estudiantes, "\n", matriculas, "\n", calificaciones, "\n", pasaron, "\n", aulas, "\n", aulas);

for estudiante   in estudiantes:    print(estudiante);
for matricula    in matriculas:     print(matricula);
for calificacion in calificaciones: print(calificacion);
for paso         in pasaron:        print(pasaron);
for aula         in aulas:          print(aula);
