heDesayunado = True;
heAlmorzado = False;
heComido = True;

if heDesayunado and heAlmorzado and heComido: print("No tengo hambre");
elif (heDesayunado and heAlmorzado) or (heAlmorzado and heComido): print("Tengo poca hambre");
elif heDesayunado and heComido: print("Tengo mucha hambre");
else: print("Muero de hambre");
