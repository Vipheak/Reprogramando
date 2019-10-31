heAlmorzado = False;
heComido = False;

comidas = 0;

while not heAlmorzado and not heComido:
          print(
              "\tComer algo\n"
              +"\tDebe comer "+str(comidas)+"comidas"
          );

          if comidas >= 2:
              heAlmorzado = True; heComido = True;
              print("\n Deberia dejar de comer");

          comidas += 1;
