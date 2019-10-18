#Funciones

def f(x):
    return 2*x

def suma(a,b):
    return a + b

def sumatoria(numbers):
    adicion = 0

    for dato in numbers:
        adicion += dato

    return adicion

   
def productorio(productos):
    multiplicacion = 1

    for producto in productos:
        multiplicacion *= producto

    return multiplicacion 

numeros = [1, 2, 3, 5, 1]
print(productorio(numeros)) 