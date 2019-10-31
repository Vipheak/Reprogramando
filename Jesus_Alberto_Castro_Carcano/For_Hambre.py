heAlmorzado = False;
heComido = False;
almuerzos = 0;
comidas = 0;
hambre = 3;

for comida in range(hambre):
    almuerzos = comida;
    comidas = comida;
    if almuerzos > 1: heAlmorzado = True;
    if comidas > 1: heComido = True;

print(heAlmorzado, heComido);
