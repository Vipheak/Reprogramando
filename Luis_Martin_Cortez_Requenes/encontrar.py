
try:
   f = open("hola_mundo.txt")
except IOError as e:
   print("Uh oh! Esto no existe")
